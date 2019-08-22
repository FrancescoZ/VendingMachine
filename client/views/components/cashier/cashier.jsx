/* eslint-disable */
import React from "react";
import classNames from "classnames";
import { connect } from 'react-redux';
import { getCashierInfo, cashierActions } from '../../../core/redux/cashier/index';
import Coin from "../coin/coin";
import { COINS } from '../../../core/config/config';
import { getMachineDebugMode } from '../../../core/redux/machine/selectors'

import "./styles.scss";
import { walletAction } from "../../../core/redux/wallet/index";

class Cashier extends React.Component {

    onChangeClick(balance) {
        this.props.getChanges(balance);
        this.props.resetBalance();
    }

    onCoinClick(coin, debugMode) {
        if (debugMode)
            this.props.loadChanges(coin);
    }
    
    render() {

        const cssClass = classNames({
            'numpad': true,
        });

        let { cashierInfo, debugMode } = this.props;
        let coinsArray = COINS;
        let elements = cashierInfo.coins && debugMode ? Object.keys(coinsArray).map( (coin,index) => {
                return <Coin
                        key={index}
                        coin={coinsArray[coin]}
                        quantity={cashierInfo.coins[coin].toString()}
                        onClick={this.onCoinClick.bind(this,coinsArray[coin],   
                            debugMode)}/>
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

Cashier.propTypes = {
    cashierInfo: React.PropTypes.object,
    debugMode: React.PropTypes.bool,
    loadChanges: React.PropTypes.func,
    resetBalance: React.PropTypes.func,
    getChanges: React.PropTypes.func,
  };

const mapStateToProps = (state) => {
    return {
        cashierInfo: getCashierInfo(state),
        debugMode: getMachineDebugMode(state),
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
      loadChanges: (coin) =>
        dispatch(cashierActions.loadChanges(coin)),
      resetBalance: () =>
        dispatch(cashierActions.resetBalance()),
      getChanges: (balance) => 
        dispatch(walletAction.getChanges(balance)),
    }
  };


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Cashier);
