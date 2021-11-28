import React from 'react'
import { Button } from './Button';
import './CallToAction.css';

function CallToAction() {
    return (
    <section className="CallToAction" style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.57), rgba(0, 0, 0, 0.44)),url('images/banner.jpg')" }}>
        <h1>Book Your Service from anywhere</h1>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          LinkTo='/ContactUs'
        >
          Contact us
        </Button>
    </section>

    );
}

export default CallToAction;
