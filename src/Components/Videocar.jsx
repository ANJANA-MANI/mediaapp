import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';

import Modal from 'react-bootstrap/Modal';
import { addToHistory, deleteAVideo } from '../services/allapi';
function Videocar({displayData,setDeletevideostatus,insideCateogry})
 {
  console.log('insidecat',insideCateogry);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = async () =>
   {setShow(true);
   
 
  const {caption,embedLink}=displayData;
 
let today=new Date();
let timestamp=(new Intl.DateTimeFormat('en-US',{year:"numeric",month:"2-digit",hour:'2-digit',second:"2-digit"}).format(today))
let videoDetails={
  caption,embedLink,timestamp
}
 const result= await addToHistory(videoDetails)
console.log('rsult',result);
console.log(videoDetails);
}
const removevideo=async(id)=>{
  const response=await deleteAVideo(id);
  setDeletevideostatus(true);
}
const dragStarted=(e,id)=>{
  console.log('drag starded...card id'+id);
  e.dataTransfer.setData('videoId',id)
  console.log(e);
}
  return (
    <>
    <Card className='m-1'draggable onDragStart={(e)=>dragStarted(e,displayData?.id)}>
      <Card.Img  style={{height:"150px",width:"200px"}} onClick={handleShow} src={displayData?.url} />
      <Card.Body>
        <Card.Title className='d-flex justify-content-between align-items-center' >
<h6 style={{color:"purple"}}>{displayData?.caption}</h6>
{insideCateogry?"":<button style={{border:"none",width:"fit-content"}} onClick={()=>removevideo(displayData?.id)} ><i className="fa-solid fa-trash" style={{color: "#74C0FC"}}></i></button>}
            </Card.Title>
        
        
      </Card.Body>
    </Card>
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{displayData?.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe width="100%" height="315" src={`${displayData?.embedLink}?autoplay=1`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Videocar