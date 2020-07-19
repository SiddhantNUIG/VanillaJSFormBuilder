import * as utils from "../utils/utils";
import { removeAllChildren } from "../renderer/renderer";

export const buttonFactory = (widgetJson, model) => {
  const button = document.createElement("button");
  const uri = widgetJson.action;
  button.textContent = widgetJson.label;

  button.addEventListener("click", () => {
    const postData = {};
    let flag = true;
    const errData = [];

    for (const item in model) {
      if (model[item].required === "1" && model[item].value === "") {
        flag = false;
        errData.push(model[item]);
      }
      postData[item] = model[item].value;
    }
    if (flag) {
      removeAllChildren(document.getElementById("error"))
      utils.submitForm(uri, postData);
    } else {
      utils.errorFactory(errData);
    }
  });

  return button;
};
