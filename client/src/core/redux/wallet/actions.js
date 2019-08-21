export const walletAction = {

  SET_DISPLAY_DATA: 'WALLET/SET_DISPLAY_DATA',
  GET_DATA: 'WALLET/GET_DATA',
  GET_CHANGES: 'WALLET/CHANGES',

  updateData: () => {
    return {
      type: walletAction.GET_DATA
    }
  },

  getChanges: (data) => {
    return {
      type: walletAction.GET_CHANGES,
      payload: {
        value: data
      }
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