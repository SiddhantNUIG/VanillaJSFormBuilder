import * as renderer from './renderer/renderer';
import { loadPage } from './index';
test("index loadPage should pass", async () => {
    const testPage = {
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
    };
    renderer.render = jest.fn();
    global.fetch = jest.fn(() =>
        Promise.resolve({
            json: () => Promise.resolve(testPage),
            status: 200
        })
    );
    const a = loadPage("testLoadPage")
    expect(global.fetch).toHaveBeenCalledTimes(1);
})