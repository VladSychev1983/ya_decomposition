/**
виджет посещаемое
 */
import React from "react";

function Visited({data}) {
    return (
        <React.Fragment>
        <div className="footer-column">
            <div className="visited__wrapper">
                <div className="visited__title">Посещаемое</div>
                <ul className="visited__ul">
                    {
                    data.map((item,index) => (
                        <li key={index}><span className="visited__bold">{item.title}</span> - {item.description}</li>
                    ))
                    }
                </ul>
            </div>
        </div>
        </React.Fragment>
    )
}
export default Visited;