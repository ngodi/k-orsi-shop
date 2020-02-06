import React from 'react';

import './Header.scss';

import Button from '../Button/Button';

const Header = () => {
    const partners = ["./images/house_of_finn_juhl.png", "./images/nderse.png", "./images/parker_knoll.png", "./images/gubi.png", "./images/northern.png"];
    const partnerList = partners.map(img =>{
        return (
            <img src={img} alt={img} width="100vw" />
        )
    })
    return (
        <div className="header">
            <div className="top-header">
                <div className="left-header">
                  <div className="logo">
                  <i class="fas fa-th"></i>
                      <span>K-ORSI</span>
                  </div>
                  <p className="slogan">
                      Feel the Comfort
                  </p>
                  <p className="slogan">
                      Using Our Produts
                  </p>
                  <p>
                      Ex ex laboris est proident voluptate. Esse id Lorem proident Lorem
                      minim pariatur exercitation voluptate ipsum sit commodo.
                  </p>
                  <div className="buttons">
                      <Button color="yellow" text="Shop Now" />
                      <Button color="green" text="Try to My Room" />
                  </div>
                </div>
                <div className="right-header">
                    <img src='./images/show_room.png' alt="show room" width="100%"/>
                </div>
            </div>
            <div className="partners">
                {partnerList}
            </div>
        </div>
    )
}

export default Header;