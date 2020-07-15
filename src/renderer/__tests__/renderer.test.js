import { render, removeAllChildren } from '../renderer';
import * as pageParser from '../page-response-parser';

const createHTMLElement = () => {
  const htmlElement = document.createElement('div');
  htmlElement.appendChild(document.createElement('p'));
  htmlElement.appendChild(document.createElement('div'));
  htmlElement.appendChild(document.createElement('span'));

  return htmlElement;
};

const createArrayOfHTMLElements = () => {
  const div = document.createElement('div');
  const button = document.createElement('button');

  return [div, button];
};

test('test removeAllChildren', () => {
  const htmlElement = createHTMLElement();

  removeAllChildren(htmlElement);

  expect(htmlElement.innerHTML).toEqual('');
});

test('test render', () => {
  const htmlElement = createHTMLElement();
  const views = createArrayOfHTMLElements();
  const json = [
    { widgetOne: 'testing' },
    { widgetTwo: 'testingAgain' },
  ];

  pageParser.parsePage = jest.fn().mockReturnValueOnce(views);
  render(json, htmlElement);

  expect(htmlElement.innerHTML).toEqual('<div></div><button></button>');
});
