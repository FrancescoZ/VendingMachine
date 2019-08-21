import { infoDisplayActions } from './actions'

export const initialState = {
  message: 'Machine is online'
};

export function infoDisplayReducer (state = initialState, {type, payload} ) {


  switch (type) {
    case infoDisplayActions.UPDATE_MESSAGE:
      return {...state, ...payload};

    default:
      return state
  }
}