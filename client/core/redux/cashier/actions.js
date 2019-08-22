export const cashierActions = {

  SET_DISPLAY_DATA: 'CASHIER/SET_DISPLAY_DATA',
  GET_DATA: 'CASHIER/GET_DATA',
  LOAD_CHANGE: 'CASHIER/CHANGE',
  RESET_BALANCE: 'CASHIER/RESET',

  updateData: () => {
    return {
      type: cashierActions.GET_DATA
    }
  },

  resetBalance: () => {
    return {
      type: cashierActions.RESET_BALANCE
    }
  },

  setDisplayData: (data) => {
    return {
      type: cashierActions.SET_DISPLAY_DATA,
      payload: {
        ...data
      }
    }
  },

  loadChanges: (data) => {
      return {
          type: cashierActions.LOAD_CHANGE,
          payload: {
              ...data
          }
      }
  }

};