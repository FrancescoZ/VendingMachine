/* eslint-disable */

export const config  = {

  MACHINE_ID: '1', //uuid of the machine
  RACKS: {
    A: {
      LITERAL: 'A',
      SLOTS_NUMBER: 5
    },
    B: {
      LITERAL: 'B',
      SLOTS_NUMBER: 5
    },
    C: {
        LITERAL: 'C',
        SLOTS_NUMBER: 5
    },
    D: {
        LITERAL: 'D',
        SLOTS_NUMBER: 5
    },
    E: {
        LITERAL: 'E',
        SLOTS_NUMBER: 5
    },
  }

};

export const COINS = {
    OnePenny    : { TYPE:"OnePenny", title : '0.01£', value : 0.01},
    TwoPenny    : { TYPE:"TwoPenny", title : '0.02£', value : 0.02},
    FivePenny   : { TYPE:"FivePenny", title : '0.05£', value : 0.05},
    TenPenny    : { TYPE:"TenPenny", title : '0.10£', value : 0.10},
    TwentyPenny : { TYPE:"TwentyPenny", title : '0.20£', value : 0.20},
    FiftyPenny  : { TYPE:"FiftyPenny", title : '0.50£', value : 0.50},
    OnePound    : { TYPE:"OnePound", title : '1.0£', value : 1.00},
    TwoPound    : { TYPE:"TwoPound", title : '2.0£', value : 2.0}
};

export const PRODUCTS = {
  CANDY : {title : 'CANDY', price : 1.00, type: 1},
  COKE : {title : 'COKE', price : 0.50, type: 2},
  CHIPS : {title : 'CHIPS', price : 0.25, type: 1},
  NOTHING: {title: 'NOTHING', price: 0, type: 0},
};

export const ANALYTICS_EVENT_TYPES = {
  SUCCESS: 'SUCCESS',
  ERROR: 'ERROR'
};
