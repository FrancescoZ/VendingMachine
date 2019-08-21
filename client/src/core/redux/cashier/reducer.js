import { cashierActions } from './actions'

export const initialState = {};

export function cashierReducer (state = initialState, {type, payload} ) {


  switch (type) {
    case cashierActions.SET_DISPLAY_DATA:
      return {...state, ...payload};

    default:
      return state
  }
}