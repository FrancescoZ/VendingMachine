import { machineActions } from './actions'

export const initialState = {
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

    default:
      return state
  }
}