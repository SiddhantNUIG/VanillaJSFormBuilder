import { createModelObject } from "../renderer/page-response-parser";

export const selectOneFactory = (widgetJson, model) => {
  const data = createModelObject(widgetJson, model);
  const div = document.createElement("div");
  const select = document.createElement("select");
  select.id = data.id;
  const defaultOption = document.createElement("option");
  defaultOption.value = "";
  defaultOption.innerText = "";
  select.appendChild(defaultOption);
  data.items.forEach((item) => {
    const option = document.createElement("option");
    option.value = item.value;
    option.innerText = item.value;
    select.appendChild(option);
  });
  div.appendChild(select);
  select.addEventListener("change", () => {
    data.value = select.value;
  });

  return div;
};
