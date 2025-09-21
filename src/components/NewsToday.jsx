/**
модуль отображает блок новостей
 */
import React from "react";
import CurrencyQuotes from "./CurrencyQuotes";

function NewsToday ({ news, currency }) {
    return (
        <React.Fragment>
            <div className="news__wrapper">
                <ul>
               {
                news.map((item,index) => (
                    <li key={index}><img src={item.img}></img><a href={item.link}>{item.title}</a></li>
                ))
               }
               <CurrencyQuotes currency={currency}/>
               </ul>
            </div>
        </React.Fragment>
    );
}
export default NewsToday;