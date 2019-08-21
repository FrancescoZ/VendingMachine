import { ANALYTICS_EVENT_TYPES } from '../../config/config'

export const analyticsActions = {

  SEND_DATA: 'ANALYTICS/SEND_DATA',

  sendEvent: (type, message) => {
    return {
      type: analyticsActions.SEND_DATA,
      payload: {
        type,
        message
      }
    }
  },
  sendSuccessEvent: (message) => analyticsActions.sendEvent(ANALYTICS_EVENT_TYPES.SUCCESS, message),
  sendErrorEvent: (message) => analyticsActions.sendEvent(ANALYTICS_EVENT_TYPES.ERROR, message)
};