export const walletAction = {

  SET_DISPLAY_DATA: 'WALLET/SET_DISPLAY_DATA',
  GET_DATA: 'WALLET/GET_DATA',

  updateData: () => {
    return {
      type: walletAction.GET_DATA
    }
  },

  setDisplayData: (data) => {
    return {
      type: walletAction.SET_DISPLAY_DATA,
      payload: {
        ...data
      }
    }
  }
};