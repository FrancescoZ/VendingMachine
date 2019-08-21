import { config } from '../../config/config';
import Rack from './rack';

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
    this.racks[rack.LITERAL].loadProduct(slotNumber, product, quantity)
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