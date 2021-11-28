import React from 'react';

import './OurService.css';

function OurService() {
    return (



        <section className="OurServices">
            <h1>Our Services</h1>
            <p>We porvide genuine service and ensure the warrentry</p>
            <div className="row" >
                <div className="OurServices-col">
                    <h3>Inspection and checks</h3>
                    <img src="images\inspenction_check2.png" alt=''></img>
                    <p>
                    We can provide professional servicing and maintenance work with no loss of manufacturer warranty coverage.
                    </p>
                </div>
                <div className="OurServices-col">
                    <h3>Engine Service</h3>
                    <img src="images\car-engine.png" alt=''></img>
                    <p>
                    A computerised car diagnostic check ,will give you a true picture of how your vehicle is running.
                    </p>
                </div>
                <div className="OurServices-col">
                    <h3>Battery Checks</h3>
                    <img src="images\battery.png" alt=''></img>
                    <p>
                    Is your car battery ready for action and properly equipped for the winter? lets check out.
                    </p>
                </div>
            </div>

        </section>

    );
}

export default OurService;

