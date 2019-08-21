import { walletAction } from './actions'

export const initialState = {};

export function walletReducer (state = initialState, {type, payload} ) {


  switch (type) {
    case walletAction.SET_DISPLAY_DATA:
      return {...state, ...payload};

    default:
      return state
  }
}