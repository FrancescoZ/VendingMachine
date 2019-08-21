/* eslint-disable */
import React from "react";
import classNames from "classnames";
import { connect } from 'react-redux';
import { getCashierInfo } from '../../../core/redux/cashier/index';
import { cashier } from '../../../core/api/index';
import { wallet } from '../../../core/api/index';
import Coin from "../coin/coin";
import { COINS } from '../../../core/config/config';

import "./styles.scss";

class Cashier extends React.Component {

    onChangeClick(balance) {
        wallet.getChanges(balance);
        cashier.resetBalance();
    }

    onCoinClick(coin) {
      }
    
    render() {

        const cssClass = classNames({
            'numpad': true,
        });

        let { cashierInfo } = this.props;
        let coinsArray = COINS;
        let elements = cashierInfo.coins ? Object.keys(coinsArray).map( (coin,index) => {
                return <Coin
                        key={index}
                        coin={coinsArray[coin]}
                        quantity={cashierInfo.coins[coin].toString()}
                        onClick={this.onCoinClick.bind(this,coinsArray[coin])}/>
            }) : "" ;
        return (
            <div className={cssClass}>
                <div className='balance'>
                    Balance: <span className='sum'>{parseFloat(cashierInfo.balance ?
                        cashierInfo.balance.toFixed(2) :
                        0)} £</span>
                </div>
                <div 
                    className='change' 
                    onClick={this.onChangeClick.bind(this, cashierInfo.balance)}></div>
                <div className='penny'>
                    {elements}
                </div> 
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        cashierInfo: getCashierInfo(state),
    };
};


export default connect(
    mapStateToProps,
    null
)(Cashier);
