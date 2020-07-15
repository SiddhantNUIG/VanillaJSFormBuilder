import * as utils from '../utils/utils';

export const buttonFactory = (widgetJson, model) => {
  const button = document.createElement('button');
  const uri = widgetJson.action;
  button.textContent = widgetJson.label;

  button.addEventListener('click', () => {
    const postData = {};

    for (const item in model) {
      postData[item] = model[item].value;
    }

    utils.submitForm(uri, postData);
  });

  return button;
};
