import { machineActions } from './actions'

export const initialState = {
    debugMode: false
};

export function machineReducer (state = initialState, {type, payload} ) {


  switch (type) {
    case machineActions.UPDATE_DATA:
      return {...state, ...payload.data};

    case machineActions.UPDATE_SLOT_DATA: {
      let newState = {...state};
      newState[payload.rackLiteral][payload.slotIndex] = payload.data;
      return newState;
    }

    case machineActions.DEBUG_MODE_TOGGLE:{
        return { ...state, debugMode: !state.debugMode};
    }

    default:
      return state
  }
}