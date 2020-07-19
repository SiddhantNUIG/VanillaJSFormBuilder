import { createModelObject } from '../renderer/page-response-parser';

export const textInputFactory = (widgetJson, model) => {
  const data = createModelObject(widgetJson, model);
  const div = document.createElement('div');
  const input = document.createElement('input');
  input.id = data.id
  if (data.value != null) {
    input.value = data.value;
  }

  input.type = 'text';
  div.appendChild(input);
  input.addEventListener('input', () => {
    data.value = input.value;
  });

  return div;
};
