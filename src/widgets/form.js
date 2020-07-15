import { processChildren } from '../renderer/page-response-parser';
import * as utils from '../utils/utils';

export const formFactory = (widgetJson, model) => {
  const children = processChildren(widgetJson, model);
  const form = document.createElement('table');

  for (const child in children) {
    const tableRow = utils.generateRow(widgetJson.children[child].label);
    const widgetColumn = utils.generateWidgetColumn(children[child]);

    tableRow.appendChild(widgetColumn);
    form.appendChild(tableRow);
  }

  return form;
};
