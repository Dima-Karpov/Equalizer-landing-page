import React from 'react';
import './App.scss';

import {Footer} from './component/footer';
import {Header} from './component/header';
import {PhoneSection} from './component/phone-section';

export const App: React.FC = (): JSX.Element => {
  return (
    <div className="wrapper-app">
      <Header/>
      <PhoneSection/>
      <Footer/>
    </div>
  );
}
