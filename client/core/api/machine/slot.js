/* eslint-disable no-undef */

import { createMessage } from '../utils/message';

export default class Slot {
  constructor(product, quantity, rackLiteral, slotIndex) {
    //this.literal = literal;
    this.data = {
      rackLiteral,
      slotIndex,
      product,
      quantity
    }
  }

  getSlotInfo() {
    return { ...this.data };
  }

  giveProduct() {
    return new Promise((resolve, reject)=>{
      // call hardware or something else, response with data if OK, with error if not
      if (this.data.quantity > 0) {
        this.data.quantity--;
        resolve(createMessage('Product have been successfully delivered', this.data))
      } else {
        return reject(
          createMessage('Something went wrong while trying to give a product to a client', this.data))
      }
    });
  }

}