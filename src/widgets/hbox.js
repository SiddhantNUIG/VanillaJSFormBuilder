import { processChildren } from '../renderer/page-response-parser';

export const hboxFactory = (widgetJson, model) => {
  const hbox = document.createElement('div');
  const children = processChildren(widgetJson, model);
  for (const child in children) {
    hbox.appendChild(children[child]);
  }
  return hbox;
};
