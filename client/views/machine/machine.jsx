import React from 'react';
import { connect } from 'react-redux';
import Rack from './components/rack/rack';
import Cashier from '../components/cashier/cashier';
import InfoDisplay from '../components/info-display/info-display';
import { getMachineInfo } from '../../core/redux/machine/index'
import { getInfoDisplayData } from '../../core/redux/info-display/index'
import { machineActions } from '../../core/redux/machine/index'
import './styles.scss';
import Tray from '../components/tray/tray';
import Arm from './components/arm/arm';
import Wallet from '../components/wallet/wallet';

class Machine extends React.Component {
    onDebugClick(){
        this.props.toggleDebugMode();
    }

  render() {
    let { machineInfo, infoDisplay } = this.props;
    let debugClass = machineInfo.debugMode ? "debugMode" : "debugMode active";
    return (
        <div className='row'>
            <div className='column'>
                <div className='machine'>
                    <div className='inner'>
                        {Object.keys(machineInfo).map((rackLiteral, index) => {
                            if (rackLiteral !== "debugMode"){
                                let rack = machineInfo[rackLiteral];
                                return (
                                    <Rack
                                    slots={rack}
                                    key={index}
                                    debugMode={machineInfo.debugMode}
                                    />
                                )
                                }
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
                    <div className={debugClass} onClick={this.onDebugClick.bind(this)}></div>
                    <Wallet/>
                </div>
            </div>
        </div>
    );
  }
}

Machine.propTypes = {
  machineInfo: React.PropTypes.object,
  infoDisplay: React.PropTypes.object,
  toggleDebugMode: React.PropTypes.func,
};

const mapStateToProps = (state) => {
  return {
    machineInfo: getMachineInfo(state),
    infoDisplay: getInfoDisplayData(state),
  };
};

const mapDispatchToProps = (dispatch) => {
    return {
      toggleDebugMode: () =>
        dispatch(machineActions.toggleDebugMode()),
    }
  };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Machine);
