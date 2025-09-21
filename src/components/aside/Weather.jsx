/**
виджет погода.
 */
import React from "react";

function Weather({data}) {
    return (
        <React.Fragment>
        <div className="footer-column">
            <div className="weather__wrapper">
                <div className="weather__title">{data.title}</div>
                <div className="block1">
                <img src={data.img} alt="Weather IMG"/> {data.total}
                </div>
                <div className="block2">
                    <span>Утром {data.morning},</span><br></br>
                    <span>днем {data.day}</span>
                </div>                
            </div>
        </div>
        </React.Fragment>
    )
}
export default Weather;