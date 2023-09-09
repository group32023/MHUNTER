import React from 'react'
import { useState,useEffect,useRef } from 'react'
import notification from '../assets/images/notification.png'
import home from '../assets/images/home-button.png'
import logout from '../assets/images/logout.png'
import photo from '../assets/images/photo-camera-interface-symbol-for-button.png'
import film from '../assets/images/film.png'
import folder from '../assets/images/folder.png'
import SideMenuBarArtist from '../components/common/SideMenuBar/SideMenuBarArtist'
import "../assets/css/myFeed.css"
import PreviousFeed from '../components/PreviousFeed'
import { Link, useNavigate } from 'react-router-dom'

export default function MyFeed() {
    const [expand,setExpandedSideBar] = useState(true)

    const [caption,setCaption] = useState('')
    const [description,setDescription] = useState('')
  

    const [fileName, setFileName] = useState("No file chosen");
    const [file,setFile] = useState(null)
    const fileInput = useRef(null);

    // errors
    const [errorCaption,setErrorCaption] = useState('')
    const [errorDes,setErrorDes] = useState('')
    const [errorFile,setErrorFile] = useState('')

    

  
    const handleButtonClick = () => {
      // trigger the click event of the hidden file input
      fileInput.current.click();
      
    };
  
    const handleFileChange = (e) => {
      // Set the name of the file to the state
      setFileName(e.target.files[0].name);
      setFile(e.target.files[0])
      
      if(e.target.files[0].size >= 1048576){
        setErrorFile("File is too large!!")
      }
      
    };

    const uploadPost = (e)=>{
      e.preventDefault()
      // validation
      if(caption.length > 50){
        setErrorCaption("Caption cannot exceed 50 characters!!")
      }
      else if(description.length > 200){
        setErrorDes("Description cannot exceed 200 characters!!")
      }

      if(errorCaption.length === 0 && errorDes.length ===0 && errorFile.length === 0){
        var mmid = 758463
        const post = {caption,description,mmid}

        // fetch("http://localhost:8080/post/add",{
        //   method:"POST",
        //   headers:{"Content-Type":"application/json"},
        //   body:JSON.stringify(post)

        // }).then(
        //   alert("Post Added!!")
        // )

        
        const formData = new FormData();
        formData.append("file",file)
        formData.append("caption", caption);
        formData.append("description", description);
        formData.append("mmid", mmid.toString());
        try{
          fetch("http://localhost:8080/postData/uploads",{
            method:"POST",
            body:formData
          }).then(alert("Post Created!!"))
        }
        catch(error){
          setErrorFile("File cannot Upload!!")
        }


      }
      }
      

  return (
    <div className='myFeedContainer'>
        <div className='mainArtistDashboard'>
            <SideMenuBarArtist></SideMenuBarArtist>
        </div>
        <div className='mainEventContainer'>
        <p className='headerDashboard'>My Feed</p>
            <div className={expand ? 'notificationBg':'notificationBg-ex'}>
              <img src={notification} className='notificationIcon' alt='notification'></img>
            </div>
            <div className={expand ? 'homeBg':'homeBg-ex'}>
              <Link to={'/'}>
                <img src={home} alt='homebtn' className='homeIcon'></img>
              </Link>
            </div>
            <div className={expand ? 'logoutBg':'logoutBg-ex'}>
              <img src={logout} alt='logout'className='logout'></img>
              <p className='logoutbtn'>Logout</p>
            </div>
            </div>

        <div className='post'>
           <p className='postTopic'>New Post</p>
    <form>

        <div className="form-group">
          <label for="exampleFormControlInput1" className='caption'>Caption</label>
          <input type="" className=" captionInput" id="exampleFormControlInput1" placeholder="Caption" value={caption} onChange={(e)=>setCaption(e.target.value)} maxLength={50}/>
          <span className='captionError'>{errorCaption}</span>
          
        </div>
      
        <div className="form-group">
        <input
              type="file"
              ref={fileInput}
              style={{ display: "none" }}
              onChange={handleFileChange}
            />
            <button type="button" onClick={handleButtonClick} className='photoImage'>
            <img src={photo} className='photoImg'></img>
            <img src={film} className='videoImg'></img>
            <img src={folder} className='anyFileImg'></img>
            </button>
            <span className='fileError'>{errorFile}</span>
        </div>
        
        <div className="form-group">
          <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" className='preview' value={description} onChange={(e)=>setDescription(e.target.value)} maxLength={200}></textarea>
          <span className='desError'>{errorDes}</span>
        </div>

        <button type="submit" className="btn btn-primary mb-2 postBtn" onClick={uploadPost} >Post</button>

</form>
        </div>

        <div className='previousFeed'>
            <PreviousFeed></PreviousFeed>
        </div>

    </div>
  )
}
 