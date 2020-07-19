/**
 * placeholder for page-response-parser.js unit tests
 */

import * as pageParser from "../page-response-parser"

describe('page-response-parser should', () => {
    test("parsePage pass", () => {
        const testPage = [{
            "page": {
                "form": {
                    "label": "Edit Address",
                    "widget_name": "form",
                    "children": [
                        {
                            "label": "First Name",
                            "value": "Homer",
                            "required": "1",
                            "id": "first_name",
                            "widget_name": "text_input"
                        },
                        {
                            "label": "Last Name",
                            "value": "Simpson",
                            "required": "1",
                            "id": "last_name",
                            "widget_name": "text_input"
                        }]
                }
            }
        }];
        const testModel = {};
        pageParser.processChildren = jest.fn();
        const a = pageParser.parsePage(testPage, testModel);
        expect(pageParser.processChildren).toBeCalledWith(testPage[0].page.form, testModel);


    })

});
