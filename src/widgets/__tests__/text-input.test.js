import { textInputFactory } from "../text-input";

test("test text input has the correct type", () => {
  const mockWidgetJSON = {
    label: "First Name",
    value: "Homer",
    required: "1",
    id: "first_name",
    widget_name: "text_input",
  };

  const mockModel = {
    first_name: {
      id: "first_name",
      label: "First Name",
      required: "1",
      value: "Homer",
      widget_name: "text_input",
    },
  };

  const textInput = textInputFactory(mockWidgetJSON, mockModel);

  expect(textInput.firstChild.type).toEqual("text");
});
