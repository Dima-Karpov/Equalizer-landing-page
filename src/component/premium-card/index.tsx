import React from 'react';
import './index.scss';

import apple from "../../assets/icon-apple.svg";
import android from "../../assets/icon-android.svg";

export const PremiumCard: React.FC = (): JSX.Element => {
  return (
    <section className='card-wrapp'>
      <h2>
        Premium EQ
      </h2>
      <p>
        Get expert-level countrol with a robust equalizer, volume mixer. and spatial audio.
        Take your listening experiance to a whole new level and access all our incredible features!
      </p>
      <div className='card-wrapp__price-wrapper'>
        <span>$4</span>
        <p>month</p>
      </div>
      <button className='card-wrapp__ico button'>
        <img src={apple} alt='apple ico' />
        IOS Download
      </button>
      <button className='card-wrapp__android button'>
        <img src={android} alt='android icon' />
        Android Download
      </button>
    </section>
  )
}