import React from 'react';
import './Testimonials.css';

function Testimonials() {
    return (
        <section className="testimonials">
            <h1>From our customers</h1>
            <p>About our service according to our valuable customer's own words</p>
            <div className="row">
                <div className="testimonials-col">
                    <img src="images/girl.jpg" alt=''></img>
                    <div>
                        <p>
                            
Got the back brakes done. Would 100% recommend to anyone who needs their auto repaired at a reasonable rate.
                        </p>
                        <h3>Amaya Kariyawasam</h3>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star-o"></i>
                    </div>
                </div>

                <div className="testimonials-col">
                    <img src="images/boy.png" alt=''></img>
                    <div>
                        <p>
                        As always I have found their work on my car timely, well done and at a reasonable cost. I won't go anywhere else.
                        </p>
                        <h3>Gayesh Fernando</h3>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star-half-empty"></i>
                    </div>
                </div>

            </div>

        </section>

    );
}

export default Testimonials;