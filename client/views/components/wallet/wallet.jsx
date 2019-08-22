/* eslint-disable */
import React from "react";
import classNames from "classnames";
import { connect } from 'react-redux';
import { wallet } from '../../../core/api/index';
import { cashier } from '../../../core/api/index';
import { COINS } from '../../../core/config/config'
import Coin from '../coin/coin'

import "./styles.scss";
import { getWalletInfo } from "../../../core/redux/wallet";

class Wallet extends React.Component {

  onCoinClick(coin) {
    wallet.insertCoin(coin);
    cashier.insertCoin(coin);
  }

  render() {

    const cssClass = classNames({
      'numpad': true,
    });

    let { walletInfo } = this.props;
    let coinsArray = COINS;
    let elements = Object.keys(coinsArray).map( (coin,index) => {
            return <Coin
                    key={index}
                    coin={coinsArray[coin]}
                    onClick={this.onCoinClick.bind(this,coinsArray[coin])}/>
        });
    return (
      <div className={cssClass}>
        <div className='balance'>
          Wallet: <span className='sum'> {parseFloat( walletInfo.balance ?  
            walletInfo.balance.toFixed(2) :
            0)} £</span>
        </div>
        <div className='coins'>
          <div className='title'>
            Insert a coin from the wallet:
          </div>
          <div className='penny'>
            {elements}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    walletInfo: getWalletInfo(state),
  };
};


export default connect(
  mapStateToProps,
  null
)(Wallet);
