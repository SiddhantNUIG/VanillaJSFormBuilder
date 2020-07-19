const { hboxFactory } = require("../hbox");
const { formFactory } = require("../form");
const { textInputFactory } = require("../text-input");
const { buttonFactory } = require("../button");
const { selectOneFactory } = require("../select_one");
import * as parser from '../../renderer/page-response-parser';

test("hbox hboxFactory should pass", () => {
  const testWidget = {
    widget_name: "hbox",
    children: [
      {
        action: "/submit",
        label: "Submit",
        validate: "1",
        widget_name: "button"
      }
    ]
  };
  const buttonTest = document.createElement('button');
  buttonTest.textContent = "Submit";
  parser.processChildren = jest.fn().mockImplementation(() => [buttonTest]);
  const testModel = {};
  const a = hboxFactory(testWidget, testModel);
  expect(a.firstChild.textContent).toEqual("Submit");
});
