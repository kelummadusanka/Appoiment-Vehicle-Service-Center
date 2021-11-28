import React from 'react'
import './OurService.css';
import Navbar from '../../Navbar';
import Footer from '../../Footer';

function OurService() {
    return (
        <>
        <div className="head_contact_us" style ={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.57), rgba(0, 0, 0, 0.44)),url('images/service.jpg')" }}>
			    <Navbar />
                <h1>Our Services</h1>
		    </div>
            <section className="Inspection_Checks">
                <h1>Inspection & Checks</h1>
                <div className="Inspection">
                    <div className="Inspection-row">
                        <div className="Inspection-col">
                            <div className="Inspection-col-fig">
                                <img src="images/car-service.png" alt=''></img>
                            </div>
                            <div className="Inspection-dscp">
                                <h3>Car Servicing</h3>
                                <p>We can provide professional servicing and maintenance work with no loss of manufacturer warranty coverage.</p>

                                <h4>Read more</h4>
                            </div>
                        </div>


                        <div className="Inspection-col">
                            <div className="Inspection-col-fig"><img src="images/multi-point-car-check.png" alt=''></img>
                            </div>
                            <div className="Inspection-dscp">
                                <h3>Multi-Point Check</h3>
                                <p>Rather than sending your car for a basic service, ask SLmotors Car Service for a thorough multi-point check</p>

                                <h4>Read more</h4>
                            </div>
                        </div>
                    </div>

                    <div className="Inspection-row">
                        <div className="Inspection-col">
                            <div className="Inspection-col-fig">
                                <img src="images/spring-car-check.png" alt=''></img>
                            </div>
                            <div className="Inspection-dscp">
                                <h3>Spring Car Check</h3>
                                <p>SLmotors Car Service recommends giving your vehicle a thorough check-up at the changing of the seasons.</p>

                                <h4>Read more</h4>
                            </div>
                        </div>


                        <div className="Inspection-col">
                            <div className="Inspection-col-fig"><img src="images/winter-car-check.png" alt=''></img>
                            </div>
                            <div className="Inspection-dscp">
                                <h3>Winter Car Check</h3>
                                <p>Before the weather turns cold, our winter check can be relied upon to ensure safe driving in ice and snow.</p>

                                <h4>Read more</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="EngineService">

                <h1>Engine Service</h1>

                <div className="EngineService_Container top-container">
                    <div className="binder">
                        <div className="rectangle rectangle-left">
                            <div className="circle circle-left"></div>
                        </div>

                    </div>

                    <div className="ES-col-fig">
                        <img src="images/engine-service.png" alt=''></img>
                    </div>

                    <div className="ES-dscp">
                        <h3>Engine and Car Diagnostic Check</h3>
                        <p>A computerised car diagnostic check from SLmotors Car Service will give you a true picture of how your vehicle is running.</p>

                        <h4>Read more</h4>

                    </div>
                </div>

                <div className="con">
                    <div className="EngineService_Container bottom-container">

                        <div className="binder binder-right">
                            <div className="rectangle rectangle-right">
                                <div className="circle circle-right"></div>
                            </div>

                        </div>

                        {/* <div className="ES-col-fig">
                            <img src="images/inspenction_check2.png"></img>
                        </div> */}

                        <div className="ES-dscp">
                            <h3>Oil & Filter Change</h3>

                            <p>An oil and filter change might seem like a routine service, but requesting it from SLmotors Car Service has some major advantage.</p>

                            <h4>Read more</h4>
                        </div>

                        <div className="ES-col-fig">
                            <img src="images/oil-filter-service.png" alt=''></img>
                        </div>


                    </div>

                </div>

            </section>

            <section className="ProfessionalElectronicSystemService">

                <h1>Professional electronic system service</h1>

                <div className="ElectronicService">
                    <div className="ElectronicService-row">

                        <div className="ElectronicService-col BSrowLeft">
                            <div className="BS-col-fig"><img src="images/Battery-check.png" alt=''></img>
                            </div>

                            <div className="ElectronicService-dscp">
                                <h3>Battery check</h3>
                                <p>Is your car battery ready for action and properly equipped for the winter? The specialists at SLmotors Car Service workshops will be pleased to check, service and if necessary,</p>

                                <h4>Read more</h4>
                            </div>
                        </div>


                        <div className="ElectronicService-col BSrowRight">
                            <div className="BS-col-fig"><img src="images/electronic-diagonstic.png" alt=''></img>
                            </div>

                            <div className="ElectronicService-dscp">
                                <h3>Electronic Diagnosis</h3>
                                <p>In the event of an electronic failure or if a warning light comes on, you can rely on our experts to locate the problem. With the aid of the latest diagnostic equipment.</p>

                                <h4>Read more</h4>
                            </div>
                        </div>
                    </div>
                    <div className="ElectronicService-row">
                        <div className="ElectronicService-col BSrowbottom">
                            <div className="BS-col-fig">
                                <img src="images/batery-guarantee.png" alt=''></img>
                            </div>
                            <div className="ElectronicService-dscp">
                                <h3>Battery Guarantee</h3>
                                <p>Modern vehicles are equipped with more and more component running on electrical energy. Equipped with modern technology and  featuring a  corrosion -proof design. Our batteries  provide different types of vehicles with the energy they need – over long periods.</p>

                                <h4>Read more</h4>
                            </div>
                        </div>
                    </div>

                </div>

            </section>
            <Footer/>

        </>
        
    )
}


export default OurService
