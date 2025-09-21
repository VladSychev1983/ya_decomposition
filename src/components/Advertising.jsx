/**
рекламный компонент
 */
import React from "react";
function Advertising ({img, title, link, children}) {
    console.log(title)
    return (
        <React.Fragment>
        <div className="adv__wrapper">
            <div className="adv__img">
            <img src={img} alt="Some IMG" />
            </div>
            <p><a href={link}>{title}</a></p>
            {children}
        </div>
        </React.Fragment>
    )
}
export default Advertising;
