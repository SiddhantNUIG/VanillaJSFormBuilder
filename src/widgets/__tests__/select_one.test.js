import { selectOneFactory } from "../select_one";

test("test text input has the correct type", () => {
  const mockWidgetJSON = {
    label: "State",
    required: "1",
    id: "state",
    widget_name: "select_one",
    value: "",
    items: [
      { value: "Alabama" },
      { value: "Alaska" },
      { value: "American Samoa" },
      { value: "Wyoming" },
    ],
  };

  const mockModel = {
    state: {
      label: "State",
      required: "1",
      id: "state",
      widget_name: "select_one",
      value: "",
      items: [
        { value: "Alabama" },
        { value: "Alaska" },
        { value: "American Samoa" },
        { value: "Wyoming" },
      ],
    },
  };

  const selectOne = selectOneFactory(mockWidgetJSON, mockModel);

  expect(selectOne.firstChild.id).toEqual("state");
});
