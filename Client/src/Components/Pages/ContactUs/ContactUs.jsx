import React from 'react'
import './ContactUs.css'
import Navbar from '../../Navbar';
import Footer from '../../Footer';

function ContactUs() {
    return (
        <>
            <div className="head-contact-us" style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.57), rgba(0, 0, 0, 0.44)),url('images/callingCenter.jpg')" }}>
                <Navbar />
                <h1>Contact us</h1>
            </div>

            <div className="contact-us">
                <div className="contact-us-row">
                    <div className="contact-us-row-left">
                        <div className="contact-us-row-left-img">
                            <img src="images/service cenerter_colombo.jpg" alt=''></img>
                        </div>

                        <div className="NameTag">
                            <p>COLOMBO</p>
                        </div>
                    </div>
                    <div className="contact-us-row-right">
                        <div>
                            <i className="fa fa-home"></i>
                            <span>
                                <h3>No 475, One Galle Face</h3>
                                <p>Union Place, Colombo 02.</p>
                            </span>
                        </div>

                        <div>
                            <i className="fa fa-phone"></i>
                            <span>
                                <h3>+94 11 278 159 4</h3>
                                <p>Monday to sturday, 10 AM to 6PM</p>
                            </span>
                        </div>

                        <div>
                            <i className="fa fa-envelope-o"></i>
                            <span>
                                <h3>info.colombo@slmotors.com</h3>
                                <p>Email us your query.</p>
                            </span>
                        </div>
                    </div>
                </div>


                <div className="contact-us-row contact-us-row2">

                    <div className="contact-us-row-left">
                        <div className="contact-us-row-left-img" alt=''>
                            <img src="images/service cenerter_kandy.jpg" alt=''></img>
                        </div>

                        <div className="NameTag">
                            <p>KANDY</p>
                        </div>
                    </div>

                    <div className="contact-us-row-right">
                        <div>
                            <i className="fa fa-home"></i>
                            <span>
                                <h3>No 4/123, Rajasinghe Mawatha</h3>
                                <p>Yatinuwara, Kandy.</p>
                            </span>
                        </div>

                        <div>
                            <i className="fa fa-phone"></i>
                            <span>
                                <h3>+94  021-2270060</h3>
                                <p>Monday to sturday, 10 AM to 6PM</p>
                            </span>
                        </div>

                        <div>
                            <i className="fa fa-envelope-o"></i>
                            <span>
                                <h3>info.kandy@slmotors.com</h3>
                                <p>Email us your query.</p>
                            </span>
                        </div>
                    </div>
                </div>

                <div className="contact-us-row">

                    <div className="contact-us-row-left">
                        <div className="contact-us-row-left-img">
                            <img src="images/service cenerter_galle.jpg" alt=''></img>
                        </div>

                        <div className="NameTag">
                            <p>GALLE</p>
                        </div>
                    </div>

                    <div className="contact-us-row-right">
                        <div>
                            <i className="fa fa-home"></i>
                            <span>
                                <h3>No 4/75, Light house St,</h3>
                                <p>Galle Port, Galle.</p>
                            </span>
                        </div>

                        <div>
                            <i className="fa fa-phone"></i>
                            <span>
                                <h3>+94 44 278 938 4</h3>
                                <p>Monday to sturday, 10 AM to 6PM</p>
                            </span>
                        </div>

                        <div>
                            <i className="fa fa-envelope-o"></i>
                            <span>
                                <h3>info.galle@slmotors.com</h3>
                                <p>Email us your query.</p>
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default ContactUs
