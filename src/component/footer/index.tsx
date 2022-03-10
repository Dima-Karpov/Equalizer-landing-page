import React from 'react';
import './index.scss';

import logo from "../../assets/logo.svg";
import facebook from "../../assets/icon-facebook.svg";
import instagram from "../../assets/icon-instagram.svg";
import twitter from "../../assets/icon-twitter.svg";

export const Footer: React.FC = (): JSX.Element => {
  return (
    <div className='footer-wrapper'>
      <div className='footer-wrapper__logo'>
        <img src={logo} alt='logo' />
      </div>
      <p>
        All rights reserved © Equalizer 2021
        Have any problems? Contact us via social media or email us at
      </p>
      <span>equalizer@example.com</span>
      <div className='footer-wrapper__social-icons'>
        <a href='www.facebook.com'>
          <img src={facebook} alt='facebook' />
        </a>
        <a href='www.instagram.com'>
          <img src={instagram} alt='instagram' />
        </a>
        <a href='www.twitter.com'>
          <img src={twitter} alt='twitter' />
        </a>
      </div>
    </div>
  )
}
