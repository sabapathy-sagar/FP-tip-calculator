import * as R from "ramda";

const MSGS = {
  SET_BILL_AMOUNT: "SET_BILL_AMOUNT",
  SET_TIP_PERCENTAGE: "SET_TIP_PERCENTAGE"
};

export const setBillAmount = billAmount => {
  return {
    type: MSGS.SET_BILL_AMOUNT,
    billAmount
  };
};

export const setTipPercentage = tipPercentage => {
  return {
    type: MSGS.SET_TIP_PERCENTAGE,
    tipPercentage
  };
};

const update = (msg, model) => {
  switch (msg.type) {
    case MSGS.SET_BILL_AMOUNT:
      const { billAmount } = msg;
      return {
        ...model,
        billAmount
      };
    case MSGS.SET_TIP_PERCENTAGE:
      const { tipPercentage } = msg;
      return {
        ...model,
        tipPercentage
      };
    default:
      return model;
  }
};

export default update;
