import { parsePage } from './page-response-parser';

export const removeAllChildren = (element) => {
  while (element.hasChildNodes()) {
    element.removeChild(element.firstChild);
  }
};

export const render = (json, contentPane) => {
  removeAllChildren(contentPane);

  const $json = [json];
  const model = {};
  const views = parsePage($json, model);

  for (const view in views) {
    contentPane.appendChild(views[view]);
  }
};
