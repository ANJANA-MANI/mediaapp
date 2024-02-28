import React, { useState } from 'react'
import Addvideo from '../Components/Addvideo'
import Videocar from '../Components/Videocar'
import { Link } from 'react-router-dom'
import View from '../Components/View'
import Category from '../Components/Category'

function Home() {
  //Lifting state up

  const[uploadVideoServerResponse,setuploadVideoServerResponse]=useState({})


  return (
    
    <>

    <div className="container mt-5 mb-5 d-flex justify-content-between align-items-center">
      <div className="add-videos">
        <Addvideo setuploadVideoServerResponse={setuploadVideoServerResponse}/>
      </div>
      <Link to={"/watchhistory"} style={{ textDecoration: "none",}}>
        
        <h3>watch history</h3></Link>


    </div>

<div className="container-fluid w-100 m-1 d-flex justify-content-between align-items-center">
<div className='all-videos col-lg-9'>
  <h3>All-Videos</h3>
  <View uploadVideoServerResponse={uploadVideoServerResponse}/>
</div>
<div className="category col-lg-3 ">
  <Category/>
</div>
</div>
    </>
  )
}

export default Home