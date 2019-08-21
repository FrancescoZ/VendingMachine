/* eslint-disable */
import React from "react";
import classNames from "classnames";
import "./styles.scss";


function Coin({ coin, onClick, quantity = "" }) {

    const cssClass = classNames({
        'coin': true,
    });

    const onCoinClick = () => {
        onClick(coin);
    };

    return (
        <div className="coin-container" data-coin={coin.title}>
            <div className={cssClass} onClick={onCoinClick} >
            </div>
            {quantity ? <div>{quantity}</div> : "" }
        </div>
    );
}


Coin.propTypes = {
    quantity: React.PropTypes.string,
    coin: React.PropTypes.object.isRequired,
    onClick: React.PropTypes.func
};

export default Coin;
