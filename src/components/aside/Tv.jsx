import React from "react";

function Tv({title, data}) {
    return (
        <React.Fragment>
        <div className="footer-column">
            <div className="tv__wrapper">
                <div className="tv__title">{title}</div>
                <div className="tv_ul">
                    {
                        data.map((item,index) => (
                            <li key={index}>{item.time} {item.show} {item.channel}</li>
                        ))
                    }
                </div>
            </div>
        </div>
                <div className="footer-column some__wrapper">
            {/* <div className="some__wrapper"></div> */}
        </div>
        </React.Fragment>
    )
}
export default Tv;