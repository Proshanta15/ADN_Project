import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <>
    <div className="footer">
        <div className="container">
            <div className="row">
                <div className="col-lg-7 col-12">
                    <div className="row">
                        <div className="col-lg-3 col-12">
                        <div className="footer_logo">
                            <h6>&#123;Finsweet</h6>
                        </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-4">
                        <div className="footer_item">
                            <div className="footer_title">
                                <h6>Our team</h6>
                            </div>
                            <div className="footer_link">
                                <ul>
                                    <li><NavLink to="#">About us</NavLink></li>
                                    <li><NavLink to="#">Team</NavLink></li>
                                    <li><NavLink to="#">What we do</NavLink></li>
                                    <li><NavLink to="#">Contact</NavLink></li>
                                </ul>
                            </div>
                        </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-4">
                        <div className="footer_item">
                            <div className="footer_title">
                                <h6>More</h6>
                            </div>
                            <div className="footer_link">
                                <ul>
                                    <li><NavLink to="#">Projects</NavLink></li>
                                    <li><NavLink to="#">Events</NavLink></li>
                                    <li><NavLink to="#">Donate</NavLink></li>
                                    <li><NavLink to="#">Blog</NavLink></li>
                                </ul>
                            </div>
                        </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-4 ">
                        <div className="footer_item">
                            <div className="footer_title">
                                <h6>Connect </h6>
                            </div>
                            <div className="footer_link">
                                <ul>
                                    <li><NavLink to="#">Facebook</NavLink></li>
                                    <li><NavLink to="#">Instagram</NavLink></li>
                                    <li><NavLink to="#">Twitter</NavLink></li>
                                    <li><NavLink to="#">Linkdin </NavLink></li>
                                </ul>
                            </div>
                        </div>
                        </div>
                    </div>
                    
                </div>
                <div className="col-lg-5 col-12">
                    <div className="footer_subs">
                        <h2>Subscribe to get latest updates</h2>
                        <div className="footer_input">
                            <input type="text" placeholder='Your email'/>
                            <button className='subs_btn'>Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div></>
  )
}

export default Footer