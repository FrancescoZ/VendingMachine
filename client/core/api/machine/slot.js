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
        return new Promise((resolve, reject) => {
            if (this.data.quantity > 0) {
                this.data.quantity--;
                return resolve(createMessage('Product have been successfully delivered',   this.data));
              } else {
                return reject(
                  createMessage('Something went wrong while trying to give a product to a client', this.data))
              }
            if (this.data.quantity > 0) {
                const formData = new FormData();
                formData.append('name', this.data.product.title);
                fetch(window.location.href + "product",
                    {
                        method: 'DELETE',
                        body: formData
                    })
                    .then(res => res.json())
                    .then(
                        (result) => {
                            resolve(createMessage('Product have been successfully delivered', this.data))
                        },
                        (error) => {
                            return reject(
                                createMessage('Something went wrong while trying to give a product to a client', this.data))
                        }
                    )
            }
        });
    }

}