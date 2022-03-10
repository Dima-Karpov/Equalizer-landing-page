import React from 'react';
import {PremiumCard} from '../premium-card';
import './index.scss';

import bgPattern from "../../assets/bg-pattern-2.svg";
import illustration from "../../assets/illustration-app.png";


export const PhoneSection: React.FC = (): JSX.Element => {
  return(
    <section className='phone-section-wrapper'>
      <img src={bgPattern} alt=''/>
      <div className='phone-section-wrapper__images-wrapp'>
        <img src={illustration} alt='' />
      </div>
      <PremiumCard/>
    </section>

  )
}
