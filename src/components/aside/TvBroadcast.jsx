import React from "react";
function TvBroadcast ({title, tvboadcast}) {
    return (
      <React.Fragment>
        <div className="footer-column">
            <div className="tvbroadcast__wrapper">
                <div className="tvbroadcast__title">{title}</div>
                <ul className="tvbroadcast__ul">
                    {
                        tvboadcast.map((item,index) => (
                            <li key={index} className="tvbroadcast__li">
                                <img src={item.img} alt="img" />{item.title} 
                            <a href={item.link}> {item.description}</a></li>
                        ))
                    }
                </ul>
            </div>
        </div>
        </React.Fragment>
    )
}
export default TvBroadcast;