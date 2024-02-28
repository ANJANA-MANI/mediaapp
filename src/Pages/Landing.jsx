import React from 'react'
import { Row,Col } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Navigate, useNavigate } from 'react-router-dom';
function Landing() {
  const navigateByUrl=useNavigate()
  return (
  <>
  <Row className='mt-5 align-items-center justify-content-between w-100'>
    <Col></Col>

    <Col lg={5}>
      <h1 style={{textAlign:"justify"}}><span className="text-warning">Meadia Player</span></h1>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, minima soluta error alias libero adipisci illo suscipit assumenda consequatur reprehenderit atque vel voluptatibus, consequuntur labore aut molestias sapiente beatae cum?
Repudiandae assumenda molestias quo corrupti nobis. Hic rerum iusto molestias veritatis nostrum fuga quos? Repellendus possimus qui amet tempora eum, nemo voluptatum aliquam neque expedita itaque nam ex sint soluta!</p>
    <button className='mt-4 btn btn-warning'onClick={()=>navigateByUrl('/home')}>Get started</button>
    </Col>
    <Col lg={5}>
      <img src="https://www.bhmpics.com/downloads/cinematic-gif-wallpapers/1.handysafegiantschnauzer-size_restricted.gif" alt="movie" style={{objectFit:"cover"}}/>
    
    </Col>
    <Col></Col>
    

  </Row>
  <div className=' container mb-5 mt-5  d-flex align-items-center justify-content-ccenter flex-column'>
<h3>Features</h3>
<div className="cards mb-5 mt-5 d-flex align-item-center justify-content-between w-100">
<Card style={{ width: '22rem' }}className="p-5 ">
      <Card.Img style={{width:"250px",height:"300px"}} variant="top" src="https://www.designcontest.com/blog/wp-content/uploads/2015/12/AnimatedMoviePosters06.gif"/>
      <Card.Body>
        <Card.Title>Managing Videos</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="secondary">View</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '22rem' }}className="p-5">
      <Card.Img  style={{width:"250px",height:"300px"}} variant="top" src="https://www.designcontest.com/blog/wp-content/uploads/2015/12/AnimatedMoviePosters001.gif"/>
      <Card.Body>
        <Card.Title>Managing Videos</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="secondary">View</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '22rem' }}className="p-5 ">
      <Card.Img  style={{width:"250px",height:"300px"}}variant="top" src="https://www.designcontest.com/blog/wp-content/uploads/2015/12/AnimatedMoviePosters04.gif"/>
      <Card.Body>
        <Card.Title>Managing Videos</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="secondary">View</Button>
      </Card.Body>
    </Card>
</div>
  </div>
  <div className="container rounded-1 p-5 border-secondary b-5 mt-5 d-flex align-items-center justify-content-between w-100">
<div className="content">
  <h3 className='mb-5'>Simple,Powerful & Fast </h3>
  <h6 className='mb-5'style={{textAlign:"justify"}}>
    <span className='fs-5 fw-bolder text-warning'>Play Everything:</span>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat quam nisi nihil obcaecati odit velit quasi harum, saepe ipsum libero. Officiis nobis nam voluptatum obcaecati saepe dignissimos aspernatur optio corrupti.
    Labore accusamus laudantium ullam culpa obcaecati, maxime quisquam dolores maiores! Laudantium, dolorem non excepturi qui officiis alias at dignissimos nam repudiandae, eligendi voluptate facilis aliquid accusamus soluta commodi odio. Odit!
  </h6>
  <h6 className='mb-5'style={{textAlign:"justify"}}>
    <span className='fs-5 fw-bolder text-warning'>Categorize Video:</span>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat quam nisi nihil obcaecati odit velit quasi harum, saepe ipsum libero. Officiis nobis nam voluptatum obcaecati saepe dignissimos aspernatur optio corrupti.
    Labore accusamus laudantium ullam culpa obcaecati, maxime quisquam dolores maiores! Laudantium, dolorem non excepturi qui officiis alias at dignissimos nam repudiandae, eligendi voluptate facilis aliquid accusamus soluta commodi odio. Odit!
  </h6>
  <h6 className='mb-5 'style={{textAlign:"justify"}}>
    <span className='fs-5 fw-bolder text-warning '>Manage History:</span>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat quam nisi nihil obcaecati odit velit quasi harum, saepe ipsum libero. Officiis nobis nam voluptatum obcaecati saepe dignissimos aspernatur optio corrupti.
    Labore accusamus laudantium ullam culpa obcaecati, maxime quisquam dolores maiores! Laudantium, dolorem non excepturi qui officiis alias at dignissimos nam repudiandae, eligendi voluptate facilis aliquid accusamus soluta commodi odio. Odit!
  </h6>
</div>
<div className="video col-lg-5 m-4">

<iframe width="560" height="315" src="https://www.youtube.com/embed/DQMAsxedwio?si=y-e8liGvkGVadcaw&autoplay=1&mute=1"  frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

</div>
  </div>
  </>

  )
}

export default Landing