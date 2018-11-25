import hh from "hyperscript-helpers";
import { h } from "virtual-dom";

import { setBillAmount, setTipPercentage } from "./Update";

const { div, h1, form, label, input } = hh(h);

const formView = (dispatch, model) => {
  //const { description, calories, showForm } = model;
  return form(
    {
      className: "w-100 mv2"
    },
    [
      div([
        label({ className: "db m1" }, "Bill Amount"),
        input({
          className: "pa2 input-reset ba w100 mb2",
          type: "text",
          value: model.billAmount,
          oninput: e => dispatch(setBillAmount(e.target.value))
        })
      ]),
      div([
        label({ className: "db m1" }, "Tip %"),
        input({
          className: "pa2 input-reset ba w100 mb2",
          type: "text",
          value: model.tipPercentage,
          oninput: e => dispatch(setTipPercentage(e.target.value))
        })
      ]),
      div([label({ className: "db m1" }, `Tip: ${model.tip} Euro`)]),
      div([
        label(
          { className: "db m1" },
          `Total: ${model.billAmount + model.tip} Euro`
        )
      ])
    ]
  );
};
function view(dispatch, model) {
  return div({ className: "mw6 center" }, [
    h1({ className: "f2 pv2 bb" }, "Tip Calculator"),
    formView(dispatch, model)
  ]);
}

export default view;
