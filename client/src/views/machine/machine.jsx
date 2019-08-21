import React from 'react';
import { connect } from 'react-redux';
import Rack from './components/rack/rack';
import Cashier from '../components/cashier/cashier';
import InfoDisplay from '../components/info-display/info-display';
import { getMachineInfo } from '../../core/redux/machine/index'
import { getInfoDisplayData } from '../../core/redux/info-display/index'
import './styles.scss';
import Tray from '../components/tray/tray';
import Arm from './components/arm/arm';
import Wallet from '../components/wallet/wallet';

class Machine extends React.Component {

  render() {
    let { machineInfo, infoDisplay } = this.props;

    return (
        <div className='row'>
            <div className='column'>
                <div className='machine'>
                    <div className='inner'>
                        {Object.keys(machineInfo).map((rackLiteral, index) => {
                            let rack = machineInfo[rackLiteral];
                            return (
                                <Rack
                                slots={rack}
                                key={index}
                                />
                            )
                            }
                        )}
                        <Arm />
                    </div>
                    <Tray />
                </div>
            </div>
            <div className='column'>
                <div className='info-container'>
                    <InfoDisplay message={infoDisplay.message}/>
                    <Cashier/>
                    <Wallet/>
                </div>
            </div>
        </div>
    );
  }
}

Machine.propTypes = {
  machineInfo: React.PropTypes.object,
  infoDisplay: React.PropTypes.object
};

const mapStateToProps = (state) => {
  return {
    machineInfo: getMachineInfo(state),
    infoDisplay: getInfoDisplayData(state)
  };
};


export default connect(
  mapStateToProps,
  null
)(Machine);
