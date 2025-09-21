/**
модуль отображает котировки валют
 */
import React from "react";
function CurrencyQuotes ({currency}) {
    return (
        <React.Fragment>
        <li className="currency-div">
            <ul className="currency-ul">
                {currency.map((item, index) => (
                        <li key={index}>
                            {item.code} {item.cost} {item.change}
                        </li>
                    ))
                }
            </ul>
        </li>
        </React.Fragment>
    );
}
export default CurrencyQuotes;