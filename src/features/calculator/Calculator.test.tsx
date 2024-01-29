import { screen, render, configure } from '@testing-library/react';
import { describe, test, expect, jest } from '@jest/globals';
import { Provider } from 'react-redux';
import { Header, HookedTextField, StyledDateTimePicker } from './components';
import Calculator from './Calculator';
import { store } from '../../app/store';

jest.mock('./components', () => ({
  Header: jest.fn(),
  HookedTextField: jest.fn(),
  StyledDateTimePicker: jest.fn(),
}));

describe('Test calculator component', () => {
  configure({ testIdAttribute: 'data-test-id' });

  describe('Can render basic page', () => {
    test('Can render all items', async () => {
      render(
        <Provider store={store}>
          <Calculator />
        </Provider>,
      );
      expect(Header).toBeCalled();
      expect(HookedTextField).toBeCalledTimes(3);
      expect(StyledDateTimePicker).toBeCalled();
      const button = screen.getByTestId('submitButton');
      expect(button).toBeDefined();
    });
  });
});
