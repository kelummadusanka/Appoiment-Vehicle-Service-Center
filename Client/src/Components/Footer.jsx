import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <section className="footer">
      <h4>About Us</h4>
      <p>
        We are leading car service cooperation in Sri Lanka since 1950. Lowest prices ,
        shedule workshop and friedly service<br></br> for our customers is the secret of long time journey.
      </p>

      <div className="icons">
        <i className='fab fa-facebook'></i>
        <i className="fab fa-twitter"></i>
        <i className="fab fa-instagram"></i>
        <i className="fab fa-linkedin"></i>
      </div>
      <p>© Slmotors 2021</p>
    </section>



  );
}

export default Footer;
