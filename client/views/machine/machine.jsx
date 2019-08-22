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
    onDebugClick() {
        this.props.toggleDebugMode();
    }

    render() {
        let { machineInfo, infoDisplay } = this.props;
        let debugClass = machineInfo.debugMode ? "debugMode" : "debugMode active";
        return (
            <div className='page'>
                <div className='row'>
                    <div className='column '>
                        <div className='machineRow'>
                        <div className='machine'>
                            <div className='inner'>
                                {Object.keys(machineInfo).map((rackLiteral, index) => {
                                    if (rackLiteral !== "debugMode") {
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
                    </div>
                    <div className='column'>
                        <div className='info-container'>
                            <InfoDisplay message={infoDisplay.message} />
                            <Cashier />
                            <div className={debugClass} onClick={this.onDebugClick.bind(this)}></div>
                            <Wallet />
                        </div>
                    </div>
                </div>
                <div className='row instruction'>
                    <h1>Instruction</h1>
                    <h2>Normal usage</h2>
                    <p>The machine is initializate by the application, the user should insert money into the machine by clicking on the coins. One he/she has reached to desired amount it can select the product. The selection is indicated in the upper label. The button get change allow the user to get his/her money into his/her wallet</p>
                    <h2>Debug mode</h2>
                    <p>By clicking the debug button the user can enter in insert mode. In this state the user can add new product by clicking on one slot (empty slot will be filled with random product). Moreover the user can introduce some money in order to allow the machine give different changes.</p>
                    <br/>
                    <h5>Note: The machine can work offline and online, by fetching the API in a queue</h5>
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
