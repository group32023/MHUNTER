/* eslint-disable react/jsx-no-undef */
import React,{useState, useEffect,useRef,Lable} from 'react';
import SignatureCanvas from 'react-signature-canvas';
import { Link,useNavigate,useParams } from 'react-router-dom';
import SideMenuBarArtist from '../components/common/SideMenuBar/SideMenuBarArtist'
import '../assets/css/bandAgreement.css'
// import { MDBBtn } from 'mdb-react-ui-kit';
import profileImage from '../assets/images/profilePhoto.jpeg';
import CurrencyInput from 'react-currency-input-field';
import crowd from '../assets/images/people.png';
import duration from '../assets/images/hourglass.png';
import eventtype from '../assets/images/eventtype.png';
import notification from '../assets/images/notification.png'
import home from '../assets/images/home-button.png'
import logout from '../assets/images/logout.png'
import kpop from '../assets/images/kpop.png'



import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPhone,faLocationDot,faList,faCalendarDays} from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFontAwesome,faFacebook,faGooglePlusG,faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { Label } from '@mui/icons-material';




export default function BandAgreem() {
  const { id } = useParams();
  const [event, setEvent] = useState([]);
  const [expand,setExpandedSideBar] = useState(true)
  const [rule1, setRule1]=useState("null")
  const [rule2, setRule2]=useState("null")
  const [rule3, setRule3]=useState("null")
  const [rule4, setRule4]=useState("null")
  const [additionalRules, setAdditionalRules]=useState("")
  const [sign,setSign]= useState()
  const [url,setUrl] = useState()





  const addAgreement=(e)=>{
    e.preventDefault();
    const agreement = {rule1,rule2,rule3,rule4,additionalRules,url}
    console.log(agreement.rule1)


    if(rule1==="null" && rule2==="null" && rule3==="null" && rule4==="null" && additionalRules===""){
          console.log("cannot submit")
    }

 else{
      fetch("http://localhost:8080/bandAgreement/add",{
          method:"POST",
          headers:{"Content-Type" : "application/json"},
          body:JSON.stringify(agreement)
        }).then(()=>{
    
            alert("Confirm Request!");
           
          
           
            
          })
          
  }
  

 
     
      }
  

   

const clear=()=>{
  sign.clear();
}

const Generate=()=>{
  setUrl(sign.getTrimmedCanvas().toDataURL('image/png'))
}




const handleCheckboxChangeRule1=()=>{
  setRule1("Advanced1");

}

const handleCheckboxChangeRule2=()=>{
  setRule2("Advanced2");


}

const handleCheckboxChangeRule3=()=>{
  setRule3("Advanced3");

  
}

const handleCheckboxChangeRule4=()=>{
  setRule4("Advanced4");

  
}

// const handleCheckboxChangeRule5=()=>{
  
// }

// const handleCheckboxChangeRule6=()=>{
  
// }


let navigate = useNavigate();
const loadPreview=(id)=>{
  navigate(`/band/agreementPreview`);

}




  return ( 
    
    <div >
       <SideMenuBarArtist>
        <div>
            <p className='headerDashboard'>Pending Requests</p>
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


          <div className='containerForElements'>
          <div id="left">
      
                  <h1>Agreement</h1>

                  <div><p className='bandNameLable'>Band Name : </p> <p className='bandName'>FlashBack</p></div>

                  <div><p className='bandAddressLable'>Address : </p> <p className='bandAddress'>Colombo 05</p></div>

                  <div><p className='bandEmailLable'>E-mail : </p> <p className='bandEmail'>flashback@gmail.com</p></div>

                  <h5>Rules</h5>
                  <p className='commandRules'>* Select Rules, want to add into agreement.</p>
                  <form onSubmit={addAgreement}>
                        <div className='rulesForAgreement'>

                      
                            
                        <input type="checkbox" id="advanced1" name="advanced" onChange={handleCheckboxChangeRule1}/> <label className='rule1'>Others Can not sing</label>
                        <input type="checkbox" id="advanced2" name="advanced" onChange={handleCheckboxChangeRule2}/><label className='rule2'>Others Can not sing</label>
                        <input type="checkbox" id="advanced3" name="advanced" onChange={handleCheckboxChangeRule3}/> <label className='rule3'>Others Can not sing</label>
                        <input type="checkbox" id="advanced4" name="advanced" onChange={handleCheckboxChangeRule4}/> <label className='rule4'>Others Can not sing</label>
                        {/* <input type="checkbox" id="advanced5" name="advanced" onChange={handleCheckboxChangeRule5}/> <label className='rule5'>Others Can not sing</label>
                        <input type="checkbox" id="advanced6" name="advanced" onChange={handleCheckboxChangeRule6}/> <label className='rule6'>Others Can not sing</label> */}
                        <lable className="otherRules">Addition Rules : </lable><input type='text' id="advanced7" name="advanced" value={additionalRules} onChange={(e)=>setAdditionalRules(e.target.value)}></input>

                        </div>
                  


                          <label className='signatureLable'>Signature : </label>
              
                          <div className='canvasforSignature' style={{border:"2px solid #ffffff", background:"#D9D9D9", position:"absolute", top:"500px",left:"200px",width:300, height:150}}>
                            <SignatureCanvas canvasProps={{width:300, height:150, className:'sigCanvas'}}
                            ref={data=>setSign(data)}/>
                       
                         
                          
                            <button className='clearBtn' onClick={clear}>Clear</button>
                            {/* <button className='saveBtn' onClick={Generate}>Save</button> */}
                          </div>

                          <button type='submit' className='submitAgreement' onClick={Generate}>Submit</button>
                          <button type='button' className='previewAgreement' onClick={loadPreview} >Preview</button>


                       </form>

                       {/* <img src={url} /> */}
          </div>

          
         
        </div>
          
          
    
        </SideMenuBarArtist>
        
    </div>
  )
}


