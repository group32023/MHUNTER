import React, { useEffect, useState } from 'react'
import '../assets/css/postedFeed.css'
import influencer from  '../assets/images/influencer.png'
import eventPost from  '../assets/images/eventPost.jpg'
import deleteBtn from  '../assets/images/recycle-bin.png'
import { Button } from 'react-bootstrap'
import CircularProgress from '@mui/material/CircularProgress';
import empty from '../assets/images/empty(1).png'

export default function PreviousFeed() {
  const [post,setData] = useState([])
  const imageExtention = ["jpg","png","jpeg"]
  const videoExtention = ["mp4","mkv"]
  const audioExtenstion = ["mp3","pcm","wav"]
  const BASE_URL = "http://localhost:8080";

  const loadData = ()=>{
    const mmId = localStorage.getItem('mmid');
    if(mmId){
      fetch(`http://localhost:8080/postData/postDetails/${mmId}`)
      .then((res)=>res.json())
      .then((result)=>{ 
          const newPost = result.map(item=>(
            <div className='postDiv'>
              <p className='postCaption'>{item.caption}</p>
              {   
                  ( imageExtention.includes(item.fileType)) 
                  ? <img className='imagePost' src={`${BASE_URL}/postData/uploads/image/${item.fileName}`} alt="post media" />
                  : ( videoExtention.includes(item.fileType)) 
                  ? <video className='imagePost' controls width="320" height="240"><source src={`${BASE_URL}/postData/uploads/video/${item.fileName}`} type={`video/${item.fileType}`} /></video>
                  : <audio className='imagePost' controls><source src={`${BASE_URL}/postData/uploads/audio/${item.fileName}`} type={`audio/${item.fileType}`} /></audio>
              }
              <p className='postDescripiton'>{item.description}</p>
              <p className='postDate'>{item.date}</p>
              <Button className='postDeleteBtn' onClick={()=>deletePost(item.postID)}><img src={deleteBtn} className='deleteLable' onClick={()=>deletePost(item.postID)}></img></Button>
          </div>
          ))
          setData(newPost)
      })
    }
    
  }
  console.log(post)

  useEffect(()=>{
    loadData()
  },[])

  const deletePost =(pid)=>{
    console.log("awa")
    fetch(`http://localhost:8080/post/delete/${pid}`,{
      method:"DELETE"
    }).then(alert("Post Deleted!"))
    
  }

 
  
  return (
    <div>
        <p className='postedFeedHead'>Posted Feed</p>
        {(post.length<=0)?<><img src={empty} className='emptyPreviousFeedImg'></img><span className='emptyContentPreviousFeed'>it's empty in here.</span></>:post}

    </div>
  )
}
