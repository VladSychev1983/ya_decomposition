 import React from 'react';
import './App.css'
import logo from './images/logo.png'
import banner from './images/banner.png'
import { news, currency, resurces, adv } from './assets/data'
import { weather_data, tvbroadcast, visited, tv } from './assets/data'
import { NewsToday, Advertising, PortalResurces } from './components';
import { SearchBar, Banner, Weather } from './components';
import { Map, TvBroadcast, Visited, Tv } from './components';

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
