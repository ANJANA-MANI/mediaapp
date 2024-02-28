import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form'
import { uploadVideo } from '../services/allapi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Addvideo({setuploadVideoServerResponse}) {

  const [video,setVideo]=useState({
    id:"",
    caption:"",
    url:"",
    embedLink:""
  })

 
const getEmbedLink= (e)=>{
  console.log("iiiiiii");
const {value}=e.target
if(value)
{
  console.log("Inside if");
const link=`https://www.youtube.com/embed/${value.slice(-11)}`
setVideo({...video,embedLink:link})
}
else
{
  console.log("Inside Else");
  setVideo({...video,embedLink:""})
}
}

const handleUpload = async()=>{

  const {id,caption,url,embedLink}=video
if(!id||!caption||!url||!embedLink)
{
  toast.warning("please fill the details")

}
else{
  const response=await uploadVideo(video);
  console.log(response);

  if(response.status>=200 && response.status<300)
  {
   
    //set server response
    setuploadVideoServerResponse(response.data)
   
   //setVideo({id:"",caption:"",url:"",embedLink:""})
    handleClose();
    //alert(`${response.data.caption} video uploaded`)
   toast.success(`${response.data.caption} video uploaded`);
   

  }
  else{
    console.log(response);
    toast.error('something went Wrong');
  }
}

}
console.log(video);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
    <div className="d-flex w-100">
    <h5>Upload Videos</h5>
      <button style={{border:"none",backgroundColor:"white"}} onClick={handleShow}><i className="fa-solid fa-upload" style={{color: "#74C0FC",fontSize:"20px"}}></i></button>
    </div>

    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Fill the following Fields</p>
          <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
      <Form.Control type="text" placeholder="Enter Video ID" onChange={(e)=>setVideo({...video,id:e.target.value})}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Control type="text" placeholder="Enter Video title" onChange={(e)=>setVideo({...video,caption:e.target.value})}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
      <Form.Control type="text" placeholder="Enter Video Image URL"onChange={(e)=>setVideo({...video,url:e.target.value})} />
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
      <Form.Control type="text" placeholder="Enter Video LINK" onChange={getEmbedLink} />
      </Form.Group>
    </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleUpload}>
            Upload
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
   

    </>

  )
}

export default Addvideo