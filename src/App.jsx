 import React from 'react';
import './App.css'
import logo from './images/logo.png'
import banner from './images/banner.png'

// eslint-disable-next-line no-unused-vars
import { news, currency, resurces, adv } from './assets/data'
import NewsToday from './components/NewsToday';
import Advertising from './components/Advertising';
import PortalResurces from './components/PortalResurces';
import SearchBar from './components/SearchBar';
import Banner from './components/Banner';

function App() {
  return (
    <>
      <div className='header'>
        <NewsToday news={news} currency={currency} />
        <Advertising img={adv.img} title={adv.title} link={adv.link}>
          {adv.content}
        </Advertising>
      </div>
      <div className="main">
      <PortalResurces resurces={resurces} />
      <SearchBar logo={logo}></SearchBar>
      <Banner banner={banner}></Banner>
      </div>
    </>
  )
}

export default App
