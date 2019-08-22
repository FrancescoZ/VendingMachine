export const machineActions = {

  UPDATE_DATA: 'MACHINE/UPDATE_DATA',
  UPDATE_SLOT_DATA: 'MACHINE/UPDATE_SLOT_DATA',
  PURCHASE_REQUEST: 'MACHINE/PURCHASE',
  INSERT_REQUEST: 'MACHINE/INSERT',
  DEBUG_MODE_TOGGLE: 'MACHINE/DEBUG',

  updateData: (data) => {
    return {
      type: machineActions.UPDATE_DATA,
      payload: {
        data
      }
    }
  },

  updateSlotData: (rackLiteral, slotIndex, data) => {
    return {
      type: machineActions.UPDATE_SLOT_DATA,
      payload: {
        rackLiteral,
        slotIndex,
        data
      }
    }
  },

  purchase: (rackLiteral, slotIndex) => {
    return {
      type: machineActions.PURCHASE_REQUEST,
      payload: {
        rackLiteral,
        slotIndex
      }
    }
  },

  insert: (rackLiteral, slotIndex) => {
    return {
      type: machineActions.INSERT_REQUEST,
      payload: {
        rackLiteral,
        slotIndex
      }
    }
  },

  toggleDebugMode: () => {
    return {
        type: machineActions.DEBUG_MODE_TOGGLE,
        payload: {
        }
      }
    }

};