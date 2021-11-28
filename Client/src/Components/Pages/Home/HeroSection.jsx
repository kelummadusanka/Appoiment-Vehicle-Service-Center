import React from 'react';
import { Button } from './Button';
import Navbar from '../../Navbar';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container' style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.57), rgba(0, 0, 0, 0.44)),url('images/home_background.jpg')" }}>
      <Navbar/>
      <h1>WELCOME TO SLMOTORS</h1>
      <p>What are you waiting for?</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          LinkTo='/Login'>
          Login
        </Button>

        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          LinkTo='/SignUp'>
          Sign up
        </Button>
      </div>
    </div>

  );
}

export default HeroSection;
