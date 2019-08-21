export const getSlotInfo = (state, rackLiteral, slotIndex) =>
  state.machine[rackLiteral].slots[slotIndex];
export const getMachineInfo = (state) => state.machine;
export const getMachineDebugMode = (state) => state.machine.debugMode;
