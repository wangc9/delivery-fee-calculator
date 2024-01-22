import { screen, render, configure } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, test, expect } from '@jest/globals';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Provider } from 'react-redux';
import StyledDateTimePicker from './StyledDateTimePicker';
import { store } from '../../../../app/store';

describe('Test date time picker component', () => {
  configure({ testIdAttribute: 'data-test-id' });

  describe('Test  date and time input', () => {
    test('Can save date and time input', async () => {
      const user = userEvent.setup();
      render(
        <Provider store={store}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <StyledDateTimePicker />
          </LocalizationProvider>
        </Provider>,
      );
      const inputField = await screen.findByTestId('orderTime');
      await user.type(inputField, '010520241135');
      expect((inputField as HTMLInputElement).value).toBe('01.05.2024 11.35');
    });

    test('Should report error when given time in the past', async () => {
      const user = userEvent.setup();
      render(
        <Provider store={store}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <StyledDateTimePicker />
          </LocalizationProvider>
        </Provider>,
      );
      const inputField = await screen.findByTestId('orderTime');
      await user.type(inputField, '020120241135');
      const errorMessage = await screen.findByText(
        'Please select a time in the future',
      );
      expect(errorMessage).toBeDefined();
    });
  });
});
