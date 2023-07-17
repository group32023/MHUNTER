import React from 'react'
import '../../assets/css/footer.css'
import logo from '../../assets/images/logo.png'
import { faTwitter,faFacebook,faGooglePlusG,faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPhone,faEnvelope,faPaperPlane} from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
    var url = window.location.href
    var location = url.split('/')[3]
    return (
        <>
            <div className="Footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-lg-5 col-12 ft-1">
                            <img src={logo} className='logoInFooter' alt='logo'></img>
                            <p className='introductionFooter'>Introducing a Next-Level Music Event Management Experience.</p>
                            <div className="footer-icons">
                                <FontAwesomeIcon icon={faFacebook} className='facebookIcon'/>
                                <FontAwesomeIcon icon={faTwitter} className='twitterIcon' />
                                <FontAwesomeIcon icon={faGooglePlusG} className='googlePlusIcon'/>
                                <FontAwesomeIcon icon={faLinkedinIn} className='linkedInIcon' />
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 col-12 ft-2">
                            <h5>Quick Links</h5>
                            <ul>
                                <li className="nav-item">
                                    <a href="/" className={`${(location.length===0) ? 'active':''}`}>HOME</a>
                                </li>
                                <li className="nav-item">
                                    <a className={`${(location==='event') ? 'active':''}`} href="/event">EVENTS</a>
                                </li>
                                <li className="nav-item">
                                    <a className={`${(location==='band') ? 'active':''}`} href="/band">BANDS</a>
                                </li>
                                <li className="nav-item">
                                    <a className={`${(location==='artist') ? 'active':''}`} href="/artist">ARTISTS</a>
                                </li>
                                <li className="nav-item">
                                    <a className={`${(location==='about') ? 'active':''}`} href="/aboutUs">ABOUT US</a>
                                </li>
                                <li className="nav-item">
                                    <a className={`${(location==='contact') ? 'active':''}`} href="/">CONTACT</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-6 col-lg-4 col-12 ft-3">
                            <h5>Contacts</h5>
                            <p><FontAwesomeIcon icon={faPhone} className='contactsIcon' /> +94 773374306</p>
                            <p><FontAwesomeIcon icon={faEnvelope} className='contactsIcon' /> mhunter@gmail.com</p>
                            <p><FontAwesomeIcon icon={faPaperPlane} className='contactsIcon' /> Colombo 7, Sri Lanka.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='Last-footer'>
                <p>Copyright © 2023 MHunter. Design & developed by Group-03</p>
            </div>
        </>
    )
}

export default Footer