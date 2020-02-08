import React from 'react';

import './Footer.scss';

import Button from '../Button/Button';

const Footer = () => {
    return(
        <div className="footer">
            <div clasName="models">
            <p>Get Various Models to Your<br /> Interior space</p>
            <div className="subscribe">
              <span>
                <label>Your Name</label>
                <input type="text" name="name" />
              </span>
              <span>
                <label>Your Email</label>
                <input type="email" name="email" />
              </span>
              <span>
                <label>Phone Number</label>
                <input type="number" name="phone" />
              </span>
              <Button color="yellow" text="Subscribe Now" />
            </div>
          </div>
          <div className="footer-bottom">
              <p>CopyRight@2002-2019 K-orsi Firniture. All Right Reserved</p>
              <div className="terms">
                  <span>FAQ</span>
                  <span>Returns</span>
                  <span>Shipping</span>
                  <span>Privacy</span>
                  <span>Terms of Service</span>
              </div>
          </div>
        </div>
    )
}

export default Footer;