import { buttonFactory } from '../widgets/button';
import { formFactory } from '../widgets/form';
import { hboxFactory } from '../widgets/hbox';
import { textInputFactory } from '../widgets/text-input';
import { selectOneFactory } from '../widgets/select_one'; //selectOneFactory import 

let widgetFactories;

export const getRenderer = (widgetJson, pageModel) => {
  if (widgetFactories.hasOwnProperty(widgetJson.widget_name)) {
    return widgetFactories[widgetJson.widget_name](widgetJson, pageModel);
  }
};

export const processChildren = (page, pageModel) => {
  const children = [];
  Object.keys(page).forEach((key) => {
    const obj = page[key];
    if (typeof obj === 'object') {
      if (Array.isArray(obj)) {
        for (const i in obj) {
          children.push(getRenderer(obj[i], pageModel));
        }
      } else {
        children.push(getRenderer(obj, pageModel));
      }
    }
  });

  return children;
};

export const parsePage = (json, pageModel) => {
  if (!widgetFactories) {
    widgetFactories = {
      form: formFactory,
      text_input: textInputFactory,
      hbox: hboxFactory,
      button: buttonFactory,
      select_one: selectOneFactory
    };
  }

  return processChildren(json[0].page, pageModel);
};


export const createModelObject = (widgetJson, pageModel) => {
  if (widgetJson.hasOwnProperty('id')) {
    pageModel[widgetJson.id] = widgetJson;
  }

  return widgetJson;
};
