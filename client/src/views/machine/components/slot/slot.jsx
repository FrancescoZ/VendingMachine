import React from 'react';
import classNames from 'classnames';
import { connect } from 'react-redux';
import './styles.scss';
import { machineActions } from '../../../../core/redux/machine/index'

class Slot extends React.Component {

  render() {
    let { slot } = this.props;
    let { product, quantity, rackLiteral, slotIndex } = slot;
    let type = quantity > 0 ? product.type : 0;
    const cssClass = classNames({
      'b-slot': true,
    });

    const slotClick = (debugMode) => {
        debugMode ? this.props.insert(rackLiteral,slotIndex) : this.props.purchase(rackLiteral, slotIndex);
    };

    return (
        <div className="container" 
            data-can={type} 
            onClick={slotClick.bind(this,this.props.debugMode)}>
            <div className='can'></div>
            <div className='b-slot__info'>
                <span>{ rackLiteral + '' + slotIndex }</span>
            </div>
            <div className='b-slot__info-price'>
                <span>{ product.price }£</span>
                <span className='b-slot__info-quantity'>Q.{quantity}</span>
            </div>

        </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    purchase: (rackLiteral, slotIndex) =>
      dispatch(machineActions.purchase(rackLiteral, slotIndex)),
    insert: (rackLiteral, slotIndex) =>
      dispatch(machineActions.insert(rackLiteral, slotIndex)),
  }
};


Slot.propTypes = {
  slot: React.PropTypes.object.isRequired,
  purchase: React.PropTypes.func,
  insert: React.PropTypes.func
};



export default connect(
  null,
  mapDispatchToProps
)(Slot);
