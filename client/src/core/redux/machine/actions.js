export const machineActions = {

  UPDATE_DATA: 'MACHINE/UPDATE_DATA',
  UPDATE_SLOT_DATA: 'MACHINE/UPDATE_SLOT_DATA',
  PURCHASE_REQUEST: 'MACHINE/PURCHASE',

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

};