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

const toInt = R.pipe(
  parseInt,
  R.defaultTo(0)
);

const update = (msg, model) => {
  switch (msg.type) {
    case MSGS.SET_BILL_AMOUNT:
      const billAmount = toInt(msg.billAmount);
      const calculatedTip = calculateTip(billAmount, model.tipPercentage);
      return {
        ...model,
        billAmount,
        tip: calculatedTip
      };
    case MSGS.SET_TIP_PERCENTAGE:
      const tipPercentage = toInt(msg.tipPercentage);
      const tip = calculateTip(model.billAmount, tipPercentage);
      return {
        ...model,
        tipPercentage,
        tip
      };
    default:
      return model;
  }
};

const calculateTip = (billAmount, tipPercentage) =>
  billAmount * (tipPercentage / 100);

export default update;
