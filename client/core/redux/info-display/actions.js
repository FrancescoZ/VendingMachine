export const infoDisplayActions = {

  UPDATE_MESSAGE: 'INFO_DISPLAY/UPDATE_MESSAGE',

  updateMessage: (message) => {
    return {
      type: infoDisplayActions.UPDATE_MESSAGE,
      payload: {
        message
      }
    }
  },
};