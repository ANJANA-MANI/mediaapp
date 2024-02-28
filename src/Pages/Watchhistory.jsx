import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { deleteHistory, getAllHistory } from '../services/allapi'

function Watchhistory() {
  const[history,sethistory]=useState([])
  const handleHistory=async()=>{
    const {data}=await getAllHistory();
    console.log(data);
    sethistory(data)
  }
  useEffect(()=>{
    handleHistory();
  },[])
  console.log('history',history);

  const handledelete=async(id)=>{
 const response=await deleteHistory(id);
console.log(response);
handleHistory();
  }
  return (
    <>
    <div className="container mt-5 mb-5 d-flex justify-content-between"><h3>Watchhistory</h3>
    <Link to={'/home'} style={{textDecoration:'none',fontSize:"20px",color:"purple"}}>
    <i class="fa-solid fa-backward"></i> Back to Home
    </Link>
    
    </div>
    <table className='table mt-5 mb-5 container text-center'>
      <thead className='text-center'>
        <th>#</th>
        <th>Name</th>
        <th>Url</th>
        <th>Time stamp</th>
      </thead>
      <tbody>
      { history?.length>0 && history.map((i)=>
     
<tr key={i.id}>
<td>{i.id}</td>
  <td>{i.caption}</td>
  <td><a href={i.embedLink} target='_blank'>{i.embedLink}</a></td>
  <td>{i.timestamp}</td>
  <td><button className='btn bg-info' onClick={()=>{handledelete(i?.id)}}><i className="fa-solid fa-trash text-light"></i></button></td>
</tr>
 

      )}
</tbody>
    </table>:
    {history.length === 0 ? (
  <div>
    <h3 className='text-center'>Nothing to display</h3>
    <img style={{ width: "100%", height: "450px" }} src="https://www.rollingstone.com/wp-content/uploads/2022/09/The-50-Greatest-TV-Shows_Collage_Final.gif" alt="Nothing to display" />
  </div>
) : null}
    </>
    

    
  )
}

export default Watchhistory