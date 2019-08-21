/* eslint-disable */
import React from "react";
import classNames from "classnames";
import "./styles.scss";


function Coin({ coin, onClick }) {

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
        </div>
  );
}


Coin.propTypes = {
  coin: React.PropTypes.object.isRequired,
  onClick: React.PropTypes.func
};

export default Coin;
