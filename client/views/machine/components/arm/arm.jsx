import React from 'react';
import { connect } from 'react-redux';
import './styles.scss';
import { machineActions } from '../../../../core/redux/machine/index'

class Arm extends React.Component {

  render() {
    return (
        <div className='arm'>
            <div className='hand'></div>
        </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    purchase: (rackLiteral, slotIndex) =>
      dispatch(machineActions.purchase(rackLiteral, slotIndex)),
  }
};


Arm.propTypes = {
  purchase: React.PropTypes.func
};



export default connect(
  null,
  mapDispatchToProps
)(Arm);
