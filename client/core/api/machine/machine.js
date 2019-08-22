import { config } from '../../config/config';
import Rack from './rack';
import { createMessage } from '../utils/message';

class VendingMachine {

  constructor() {
    this.racks = {};

    Object.keys(config.RACKS).map((rack) => {
      this.racks[config.RACKS[rack].LITERAL] = new Rack(config.RACKS[rack])
    });
  }

  getSlotDataByIndex(rackLiteral, slotIndex) {
    return this.racks[rackLiteral].getSlotDataByIndex(slotIndex)
  }

  getMachineData() {

    let data = {};

    Object.keys(this.racks).forEach((rackLiteral) => {
      data[rackLiteral] = this.racks[rackLiteral].getSlotsData()
    });

    return data;
  }

  loadProduct(rack, slotNumber, product, quantity){
    this.racks[rack.LITERAL].loadProduct(slotNumber, product, quantity);
    const formData = new FormData();
    formData.append('name', product.title);
    fetch(window.location.href + "product",
        {
            method: 'PUT',
            body: formData
        },300)
        .then(res => 
            res.json())
        .then(
            (result) => {
                resolve(createMessage('Product have been successfully added', this.racks))
            },
            (error) => {
                return reject(
                    createMessage('Something went wrong while trying to add a product', this.slots))
            }
        )
  }

  giveProduct(rackLiteral, slotIndex) {
    return this.racks[rackLiteral].giveProduct(slotIndex);
  }

}

/**
 * export as singleton
 * @type {VendingMachine}
 */
export let vendingMachine = new VendingMachine();