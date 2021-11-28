import React from 'react';
import './ServiceCenters.css';

function ServiceCenters() {
    return (
    <section className="ServiceCenters">
        <h1>Our Service Centers</h1>
	    <p>We cover the whole island through our wide service networks network</p>
        <div className="row">
            <div className="ServiceCenters-col">
                <img src="images\service cenerter_colombo.jpg" alt=''></img>
                <div className="layer">
                    <h3>COLOMBO</h3>
                </div>
            </div>

            <div className="ServiceCenters-col">
                <img src="images\service cenerter_kandy.jpg" className="kleum" alt=''></img>
                <div className="layer">
                    <h3>KANDY</h3>
                </div>
            </div>

            <div className="ServiceCenters-col">
                <img src="images\service cenerter_galle.jpg" alt=''></img>
                <div className="layer">
                    <h3>GALLE</h3>
                </div>
            </div>
        </div>
    </section>
          
    );
}

export default ServiceCenters;
