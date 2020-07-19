const { formFactory } = require("../form");
import * as parser from '../../renderer/page-response-parser';
//jest.mock('../../renderer/page-response-parser');

test('form formFactory should pass', () => {
    const testWidget = {
        widget_name: "form",
        children: [{ "id": "first_name", "label": "First Name", "required": "1", "value": "Homer", "widget_name": "text_input" }]
    };
    const testModel = {};
    const divTest = document.createElement('div');
    parser.processChildren = jest.fn().mockImplementation(() => [divTest]);
    const a = formFactory(testWidget, testModel);
    expect(a.firstChild.firstChild.firstChild.textContent).toEqual("First Name");
});
