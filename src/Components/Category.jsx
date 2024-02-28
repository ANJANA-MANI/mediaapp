import React, { useEffect, useState } from 'react'
import { Button, Col, Form, Modal, Row } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import { addToCategory, deleteCategory, getAVideo, getAllCategory, updateCategory } from '../services/allapi';
import Videocar from './Videocar';


function Category() {
const[categoryName,setcategoryName]=useState();
const[allCategory,setallCategory]=useState([]);

 const removecategory=async(id)=>{
  console.log('delete');
  await deleteCategory(id);
  getCategories();
 }


 const getCategories=async()=>{
  const {data}=await getAllCategory()
  console.log(data);
  setallCategory(data)
console.log(allCategory);
 }

 useEffect(()=>{
getCategories();
 },[allCategory])
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
 console.log('CN',categoryName);
 const handleAddCategory=async ()=>{
if(categoryName)
{
  let body={
    categoryName,allVideos:[]
  }
//make api call
const response=await addToCategory(body)
console.log(response);
if(response.status>=200 && response.status<300)
{
  handleClose();
  setcategoryName('');
}
else{
  toast.error('something went wrong')
}
}
else{
  toast.warning('Enter Category');
}
 }
const videoDrop= async (e,categoryId)=>{
  console.log('video drop inside category:'+categoryId );
  const videoId=e.dataTransfer.getData("videoId");
  console.log("video card ID",videoId);
 const {data}=await getAVideo(videoId)
 console.log('MOVIE',data);
 //GET CATEGORY DETAILS
 const selectedCategory=allCategory?.find(i=>i.id===categoryId)
 console.log('selected category',selectedCategory);
 if (!selectedCategory.allVideos) {
  selectedCategory.allVideos = [];
}
selectedCategory.allVideos.push(data);
console.log(selectedCategory);
await updateCategory(categoryId,selectedCategory)
getCategories();
}
const dragOver=(e)=>{
  console.log("video drag over category");
  e.preventDefault();
 
}
  return (
    <div className="d-grid ms-3">

      <button className='btn w-100' onClick={handleShow}>Add to Category</button>
    {
      allCategory?allCategory?.map(i=>

        <div className='mt-5 mb-3 border rounded p-3'dropable  onDragOver={(e)=>dragOver(e)} onDrop={(e)=>videoDrop(e,i?.id)}>
          <div className='d-flex justify-content-between align-items-center'>
            <h6>{i.categoryName}</h6>
            <button style={{border:"none"}} onClick={()=>{removecategory(i?.id)}} ><i className="fa-solid fa-trash" style={{color: "#74C0FC"}}></i></button>
          </div>
          <Row>
          {
  i.allVideos?.map(j => (
    <Col sm={12}>
      <Videocar displayData={j} insideCateogry={true}/>
    </Col>
  ))
}</Row>
        </div>
      
      ):<p>Nothing to display</p>
    }
    
    <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
    <Modal.Title>Category</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <p></p>
      <Form>
 
 

  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
  <Form.Label>Enter Category</Form.Label>
  <Form.Control onChange={ (e)=>
    setcategoryName(e.target.value) } type="text" placeholder="Category.." />
  </Form.Group>
</Form>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>
        close
      </Button>
      <Button variant="primary" onClick={handleAddCategory}>
        add
      </Button>
    </Modal.Footer>
  </Modal>
  <ToastContainer/>
    </div>
    
  )
}

export default Category
