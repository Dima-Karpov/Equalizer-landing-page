import React from 'react';
import './index.scss';

import logo from "../../assets/logo.svg";
import bgPattern from "../../assets/bg-pattern-1.svg";




export const Header: React.FC = (): JSX.Element => {

  return (
    <div className='wrapper-header'>
      <div className='wrapper-header__decorative-patter-img'>
        <img src={bgPattern} alt='bgPattern-1' />
      </div>
      <div className='wrapper-header__logo'>
        <img src={logo} alt='' />
      </div>
      <h1>
        We make your music sound extraordinary.
      </h1>
      <p>
        A sustem audion equalizer apecifically designed for Android and iOs.
        Freely tune the way your music sounds with a proffessional grade
        parametric EQ & volume mixer. Control bass, mids, treble, gain control,
        reverb, and more!
      </p>
    </div>
  )
}
