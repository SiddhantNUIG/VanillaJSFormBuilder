export const unimplementedWidgetFactory = (widgetJson) => {
  const widget = document.createElement('p');

  widget.textContent = `${widgetJson.widget_name} widget has not been implemented`;
  widget.style.color = 'red';
  widget.style.fontStyle = 'italic';

  return widget;
};
