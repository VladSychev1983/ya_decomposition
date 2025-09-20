 import React from 'react';
import './App.css'
import logo from './images/logo.png'
import banner from './images/banner.png'

// eslint-disable-next-line no-unused-vars
import { news, currency, resurces, adv } from './assets/data'
import { weather_data, tvbroadcast, visited, tv } from './assets/data'
import NewsToday from './components/NewsToday';
import Advertising from './components/Advertising';
import PortalResurces from './components/PortalResurces';
import SearchBar from './components/SearchBar';
import Banner from './components/Banner';
import Weather from './components/aside/Weather';
import Map from './components/aside/Map';
import TvBroadcast from './components/aside/TvBroadcast';
import Visited from './components/aside/Visited';
import Tv from './components/aside/Tv';

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
      <div className="footer">
        <Weather data={weather_data}/>
        <Map />
        <TvBroadcast title="Эфир" tvboadcast={tvbroadcast}>
        </TvBroadcast>
        <Visited title="Посещаемое" data={visited}>
        </Visited>
        <Tv title="Телепрограмма" data={tv}></Tv>
      </div>
    </>
  )
}
export default App
