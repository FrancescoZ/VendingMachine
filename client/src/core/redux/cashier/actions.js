export const cashierActions = {

  SET_DISPLAY_DATA: 'CASHIER/SET_DISPLAY_DATA',
  GET_DATA: 'CASHIER/GET_DATA',

  updateData: () => {
    return {
      type: cashierActions.GET_DATA
    }
  },

  setDisplayData: (data) => {
    return {
      type: cashierActions.SET_DISPLAY_DATA,
      payload: {
        ...data
      }
    }
  }
};