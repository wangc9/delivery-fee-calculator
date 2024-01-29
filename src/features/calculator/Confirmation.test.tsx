import { screen, render, configure } from '@testing-library/react';
import { describe, test, expect, jest } from '@jest/globals';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { Header, ConfirmItem } from './components';
import Confirmation from './Confirmation';
import { store } from '../../app/store';

jest.mock('./components', () => ({
  Header: jest.fn(),
  ConfirmItem: jest.fn(),
}));

describe('Test confirmation component', () => {
  configure({ testIdAttribute: 'data-test-id' });

  describe('Can render basic page', () => {
    test('Can render all items', async () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <Confirmation />
          </Provider>
        </BrowserRouter>,
      );
      expect(Header).toBeCalled();
      expect(ConfirmItem).toBeCalledTimes(4);
      const cancelButton = screen.getByTestId('cancelButton');
      expect(cancelButton).toBeDefined();
      const confirmButton = screen.getByTestId('orderConfirmButton');
      expect(confirmButton).toBeDefined();
    });
  });
});
