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
import Button from 'react-bootstrap/Button';




import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPhone,faLocationDot,faList,faCalendarDays} from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFontAwesome,faFacebook,faGooglePlusG,faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { Label } from '@mui/icons-material';




export default function BandAgreemnt() {
  const { id, mid, id1 } = useParams();
  const [event, setEvent] = useState([]);
  const [expand,setExpandedSideBar] = useState(true)
  const [rule1, setRule1]=useState("null")
  const [rule2, setRule2]=useState("null")
  const [rule3, setRule3]=useState("null")
  const [rule4, setRule4]=useState("null")
  const [additionalRules, setAdditionalRules]=useState("")
  const [sign,setSign]= useState()
  const [url,setUrl] = useState(null)
  const [isParagraphVisible,setIsParagraphVisible]=useState(false)
  const [eventId, setEventId]=useState(parseInt(id))
  const [mmid, setMmid]=useState(parseInt(mid))
  const [checkValidity,setCheckValidity]=useState(false)




  const [showModal1, setShowModal1] = useState(false);

  const handleShowModal1 = () => {
    if((rule1==="null" && rule2==="null" && rule3==="null" && rule4==="null" && additionalRules==="" )|| url==="null"){
    }else{
      setShowModal1(true);

    }

  };

  const handleCloseModal1 = () => {
   
    setShowModal1(false);
  };
  const handleCloseModalSaveAgreement1 = () => {
   
    setShowModal1(false);
    loadInvoice(id,mmid,id1)
    
  };
  const handleCloseModalSaveAgreementError = () => {
   
    setCheckValidity(false);
  };
 
const addAgreement=(e)=>{   
  e.preventDefault(); 
    const  agreement = {rule1,rule2,rule3,rule4,additionalRules,url,eventId,mmid}
    if((rule1==="null" && rule2==="null" && rule3==="null" && rule4==="null" && additionalRules==="" )|| url==="null"){
                           setCheckValidity(true);
    }

 else{
      fetch("http://localhost:8080/bandAgreement/add",{
          method:"POST",
          headers:{"Content-Type" : "application/json"},
          body:JSON.stringify(agreement)
        }).then(()=>{
    
         
           
          
           
            
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
const loadPreview=(id,mmid)=>{

  if(url===undefined){
    console.log("hi, error of url");
    setIsParagraphVisible(true)
  }

  else{
    setIsParagraphVisible(false)
    navigate(`/band/agreementPreview/${id}/${mmid}`,{state:{r1:rule1,r2:rule2,r3:rule3,r4:rule4,aR:additionalRules,u:url}});

  }
  
 
}

const loadInvoice=(id,mmid)=>{
  navigate(`/band/invoice/${id}/${mmid}/${id1}`);
}



  return ( 
    
    <div >
       <SideMenuBarArtist>
        <div className='mainC'>
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

                  <div className='bandDetailsDiv'>
                  <h5 className='h5forbandDetails'>Band Details</h5>
                  <div><p className='bandNameLable'>Band Name : </p> <p className='bandName'>FlashBack</p></div>

                  <div><p className='bandAddressLable'>Address : </p> <p className='bandAddress'>Colombo 05</p></div>

                  <div><p className='bandEmailLable'>E-mail : </p> <p className='bandEmail'>flashback@gmail.com</p></div>
                  </div>
                  

                  <h5 className='h5forRules'>Rules</h5>

                  <p className='commandRules'>* Select Rules, want to add into agreement.</p>
                  <form onSubmit={addAgreement}>
                        <div className='rulesForAgreement'>

                      
                            
                        <input type="checkbox" id="advanced1" name="advanced" onChange={handleCheckboxChangeRule1}/> <label className='rule1'>Others Can not sing</label>
                        <input type="checkbox" id="advanced2" name="advanced" onChange={handleCheckboxChangeRule2}/><label className='rule2'>Others Can not sing</label>
                        <input type="checkbox" id="advanced3" name="advanced" onChange={handleCheckboxChangeRule3}/> <label className='rule3'>Others Can not sing</label>
                        <input type="checkbox" id="advanced4" name="advanced" onChange={handleCheckboxChangeRule4}/> <label className='rule4'>Others Can not sing</label>
                        {/* <input type="checkbox" id="advanced5" name="advanced" onChange={handleCheckboxChangeRule5}/> <label className='rule5'>Others Can not sing</label>
                        <input type="checkbox" id="advanced6" name="advanced" onChange={handleCheckboxChangeRule6}/> <label className='rule6'>Others Can not sing</label> */}
                        <lable className="otherRules">Additional Rules : </lable><input type='text' id="advanced7" name="advanced" value={additionalRules} onChange={(e)=>setAdditionalRules(e.target.value)}></input>

                        </div>
                  


                          <h5 className='signatureLable'>Signature </h5>
              
                          <div className='canvasforSignature' style={{border:"2px solid #ffffff",position:"absolute", width:300, height:150}}>
                            <SignatureCanvas canvasProps={{width:300, height:150, className:'sigCanvas'}}
                            ref={data=> setSign(data)} required />
                       
                         
                             <button  type='button' onClick={Generate} className='setUrl'>Set</button>                       
                            <button  type='button' className='clearBtn' onClick={clear}>Clear</button>
                            {/* <button className='saveBtn' onClick={Generate}>Save</button> */}
                          </div>



                          <button type='submit' className='submitAgreement' onClick={handleShowModal1} >Submit</button>
                          <button type='submit' className='skipAgreement' onClick={()=>loadInvoice(id,mmid,id1)}>Skip</button>
                          <button type='button' className='previewAgreement1' onClick={()=>loadPreview(id,mmid)} >Preview</button>
                          <button className='backInvoice1'>Back</button> 


                       </form>

                       {/* <img src={url} /> */}
          </div>

          
          {isParagraphVisible && <p className="wariningforurl">Insert Your Signature. After inserting, press Set Button.</p>}

        </div>

        {showModal1 && (
                                    <div className="complaint-add-success-popup blur-background" style={{ fontFamily: 'MyCustomFont1' }}>

                                        <div className="complaint-add-success-popup-content">
                                           
                                            <p className="complaint-add-success-para_for_request_acception">Do You Want to Generate Agreement?</p>
                                            <Button className='RequestacceptBtn' onClick={handleCloseModalSaveAgreement1}>
                                        Yes
                                    </Button>
                                            <Button className='RequestCloseBtn' onClick={handleCloseModal1}>
                                        No
                                    </Button>
                                        </div>


                                    </div>
                                )}
          

                                {checkValidity && (
                                    <div className="complaint-add-success-popup blur-background" style={{ fontFamily: 'MyCustomFont1' }}>

                                        <div className="complaint-add-success-popup-content">
                                           
                                            <p className="complaint-add-success-para_for_request_acception">Check Signature and Rules.If you don't define them please define.</p>
                                            <Button className='errordisplay' variant='secondary' onClick={handleCloseModalSaveAgreementError}>
                                                           OK </Button>
                                           
                                        </div>


                                    </div>
                                )}
          
    
        </SideMenuBarArtist>
        
    </div>
  )
}


