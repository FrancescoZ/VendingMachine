/* eslint-disable no-console */
import { PRODUCTS } from '../../config/config'

import Slot from './slot'

export default class Rack {

  constructor(rackConfig) {
    this.literal = rackConfig.LITERAL;
    this.maxSlots = rackConfig.SLOTS_NUMBER;
    this.slots = [];
    for (let i = 0; i < this.maxSlots; i++) {
      this.slots.push(new Slot(PRODUCTS.NOTHING, 0, this.literal, i));
    }
  }

  getSlotDataByIndex(slotIndex) {
    return this.slots[slotIndex].getSlotInfo();
  }

  getSlotsData() {
    return this.slots.map((slot) => {
      return slot.getSlotInfo();
    })
  }

  giveProduct(slotIndex) {
    return this.slots[slotIndex].giveProduct();
  }

  loadProduct(slotIndex, product, quantity) {
    if (slotIndex >= 0 && slotIndex < this.maxSlots) {
      this.slots[slotIndex] = new Slot(product, quantity, this.literal, slotIndex);
    } else {
      console.error('not a valid slotIndex');
    }
  }
}