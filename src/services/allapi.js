import { commonAPI } from "./Commonapi"
import { serverUrl } from "./serverUrl"

export const uploadVideo=async(reqBody)=>{
    //make POST http request "http://localhost:4000/videos"to add videos to the json-server return response to the add component
    return await commonAPI("POST",`${serverUrl}/videos`,reqBody)
 }
 //get all videos from json
 export const getAllVideo = async()=>{
    //make GET http request to "http://localhost:4000/videos"to get all videos from json-server return response to the view component
    return await commonAPI("GET",`${serverUrl}/videos`,"")
 }
  //get a video 
  export const getAVideo = async(id)=>{
    //make GET http request to "http://localhost:4000/videos"to get all videos from json-server return response to the view component
    return await commonAPI("GET",`${serverUrl}/videos/${id}`,"")

 }
  //delete a video 
  export const deleteAVideo = async(id)=>{
    //make GET http request to "http://localhost:4000/videos"to get all videos from json-server return response to the view component
    return await commonAPI("DELETE",`${serverUrl}/videos/${id}`,{})
 }
 //store watching history to jsonserver
 export const addToHistory=async(videoDetails)=>{
   //make a post http request to "http://localhost:400/history" to store videos to the json-server return response to the view
return await commonAPI("POST",`${serverUrl}/history`,videoDetails) 

}
export const getAllHistory=async()=>{
   //make a post http request to "http://localhost:400/history" to store videos to the json-server return response to the view
return await commonAPI("GET",`${serverUrl}/history`,"") 

}

//add to category
export const addToCategory=async(reqBody)=>{
   //make a post http request to "http://localhost:400/categories" to store categories to the json-server return response to the category
return await commonAPI("POST",`${serverUrl}/categories`,reqBody) 

}
export const getAllCategory=async()=>{
   //make a GET http request to "http://localhost:400/categories" to GET categories FROM the json-server return response to the category
return await commonAPI("GET",`${serverUrl}/categories`,'') 

}
export const deleteCategory=async(id)=>{
   //make a DELETE http request to "http://localhost:400/categories" to GET categories FROM the json-server return response to the category
return await commonAPI("DELETE",`${serverUrl}/categories/${id}`,{}) 

}
export const updateCategory=async(id,body)=>{
   //make an UPDATE BY POST http request to "http://localhost:400/categories" to GET categories FROM the json-server return response to the category
return await commonAPI("PUT",`${serverUrl}/categories/${id}`,body) 

}
//delete history
export const deleteHistory=async(id)=>{
   //make a post http request to "http://localhost:400/history" to store videos to the json-server return response to the view
return await commonAPI("DELETE",`${serverUrl}/history/${id}`,{}) 

}