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

  onCoinClick(coin, evt) {
    wallet.insertCoin(coin);
    cashier.insertCoin(coin);
  }

  render() {

    const cssClass = classNames({
      'numpad': true,
    });

    let { walletInfo } = this.props;

    return (
      <div className={cssClass}>
        <div className='balance'>
          Wallet: <span className='sum'> {walletInfo.balance} £</span>
        </div>
        <div className='coins'>
          <div className='title'>
            Insert a coin from the wallet:
          </div>
          <div className='penny'>
            <Coin coin={COINS.OnePenny} onClick={::this.onCoinClick}/>
            <Coin coin={COINS.TwoPenny} onClick={::this.onCoinClick}/>
            <Coin coin={COINS.FivePenny} onClick={::this.onCoinClick}/>
            <Coin coin={COINS.TenPenny} onClick={::this.onCoinClick}/>
            <Coin coin={COINS.TwentyPenny} onClick={::this.onCoinClick}/>
            <Coin coin={COINS.FiftyPenny} onClick={::this.onCoinClick}/>
            <Coin coin={COINS.OnePound} onClick={::this.onCoinClick}/>
            <Coin coin={COINS.TwoPound} onClick={::this.onCoinClick}/>
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
