import { buttonFactory } from '../button';
import * as utils from '../../utils/utils';

describe('test the submit button', () => {
  const mockWidgetJson = {
    action: '/submit',
    label: 'Submit',
    validate: '1',
    widget_name: 'button',
  };

  test('submits the form when all required values are filled in', () => {
    utils.submitForm = jest.fn();

    const mockModel = {
      city: {
        label: 'City',
        value: 'Dublin',
        required: '1',
        id: 'city',
        widget_name: 'text_input',
      },
    };

    const buttonDiv = buttonFactory(mockWidgetJson, mockModel);
    buttonDiv.click();

    expect(utils.submitForm).toBeCalled();
  });

  test('does not submit the form when a required value is empty', () => {
    utils.submitForm = jest.fn();

    const mockModel = {
      city: {
        label: 'City',
        value: '',
        required: '1',
        id: 'city',
        widget_name: 'text_input',
      },
    };

    const buttonDiv = buttonFactory(mockWidgetJson, mockModel);
    buttonDiv.click();

    expect(utils.submitForm).toHaveBeenCalledTimes(0);
  });
});
