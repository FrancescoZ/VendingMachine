/* eslint-disable */
import React from "react";
import classNames from "classnames";
import { connect } from 'react-redux';
import { getCashierInfo } from '../../../core/redux/cashier/index'
import { cashier } from '../../../core/api/index';
import { wallet } from '../../../core/api/index';

import "./styles.scss";

class Cashier extends React.Component {

    onChangeClick(balance){
        wallet.getChanges(balance);
        cashier.resetBalance();
      }

  render() {

    const cssClass = classNames({
      'numpad': true,
    });

    let { cashierInfo } = this.props;

    return (
      <div className={cssClass}>
        <div className='balance'>
          Balance: <span className='sum'>{ parseFloat(cashierInfo.balance ? 
            cashierInfo.balance.toFixed(2) :
            0) } £</span>
        </div>
        <div className='change' onClick={this.onChangeClick.bind(this,cashierInfo.balance)}></div>
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
