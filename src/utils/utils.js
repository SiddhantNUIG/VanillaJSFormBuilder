export const submitForm = async (uri, postData) => {
  try {
    const response = await fetch(uri, {
      method: 'post',
      body: JSON.stringify(postData),
    });
    const responseText = await response.text();

    alert(responseText);
  } catch (e) {
    alert(e);
  }
};

export const generateRow = (widgetLabel) => {
  if (widgetLabel == null) return null;

  const tr = document.createElement('tr');
  const labelCell = document.createElement('td');
  const span = document.createElement('span');
  const label = widgetLabel;
  span.textContent = label;
  span.style.float = 'right';

  labelCell.appendChild(span);
  tr.appendChild(labelCell);

  return tr;
};

export const generateWidgetColumn = (widget) => {
  if (widget == null) return null;

  const widgetColumn = document.createElement('td');
  widgetColumn.appendChild(widget);

  return widgetColumn;
};
