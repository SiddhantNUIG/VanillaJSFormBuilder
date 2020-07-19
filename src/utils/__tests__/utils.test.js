/**
 *
 * placeholder for util.js unit tests
 *
 */

const {
  submitForm,
  generateRow,
  generateWidgetColumn,
  errorFactory,
} = require("../utils");
//const { errorGenerator } = require("../../widgets/error");
import * as errGen from "../../widgets/error";

test("utility submitForm should pass", async () => {
  const obj = { a: 1 };
  jest.spyOn(window, "alert").mockImplementation(() => { });
  global.fetch = jest.fn(() =>
    Promise.resolve({
      text: () => Promise.resolve(JSON.stringify(obj)),
    })
  );
  await submitForm("testUri", obj);
  expect(window.alert).toBeCalledWith(JSON.stringify(obj));
});

test("utility generateRow should pass", () => {
  const test = "test";
  const a = generateRow(test);
  expect(a.firstChild.firstChild.firstChild.textContent).toEqual(test);
});

test("utility generateRow should pass with null", () => {
  const test = null
  const a = generateRow(test);
  expect(a).toEqual(null);
});

test("utility generateWidgetColumn should pass", () => {
  const test = document.createElement("p");
  test.textContent = "JackFruit";
  const a = generateWidgetColumn(test);
  expect(a.firstChild.textContent).toEqual("JackFruit");
});

test("utility generateWidgetColumn should pass with null", () => {
  const test = null;
  const a = generateWidgetColumn(test);
  expect(a).toEqual(null);
});

test("utility errorFactory should pass", () => {
  const testArrObj = [
    {
      label: "Last Name",
      value: "",
      required: "1",
      id: "last_name",
      widget_name: "text_input"
    }
  ];
  const div = document.createElement("div");
  div.id = "error";
  document.body.appendChild(div);
  const testDiv = document.createElement("div");
  testDiv.textContent = "test content"
  errGen.errorGenerator = jest.fn().mockImplementation(() => testDiv);
  const a = errorFactory(testArrObj);
  expect(errGen.errorGenerator).toBeCalledWith(testArrObj[0]);
  expect(document.getElementById('error').firstChild.textContent).toEqual("test content");
});
