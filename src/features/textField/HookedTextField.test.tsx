import { screen, render, configure } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, test, expect } from '@jest/globals';
import HookedTextField from './HookedTextField';

describe('Test text field component', () => {
  configure({ testIdAttribute: 'data-test-id' });

  describe('Test float option', () => {
    test('Can input normal int number', async () => {
      const user = userEvent.setup();
      render(<HookedTextField name="cartValue" type="float" />);
      const inputField = await screen.findByTestId('cartValue');
      await user.type(inputField, '123');
      expect((inputField as HTMLInputElement).value).toBe('123');
    });
    test('Can input normal float number', async () => {
      const user = userEvent.setup();
      render(<HookedTextField name="cartValue" type="float" />);
      const inputField = await screen.findByTestId('cartValue');
      await user.type(inputField, '123.45');
      expect((inputField as HTMLInputElement).value).toBe('123.45');
    });
    test('Can accept float number with plus sign', async () => {
      const user = userEvent.setup();
      render(<HookedTextField name="cartValue" type="float" />);
      const inputField = await screen.findByTestId('cartValue');
      await user.type(inputField, '+123.45');
      expect((inputField as HTMLInputElement).value).toBe('123.45');
    });
    test('Can not accept negative number', async () => {
      const user = userEvent.setup();
      render(<HookedTextField name="cartValue" type="float" />);
      const inputField = await screen.findByTestId('cartValue');
      await user.type(inputField, '-');
      expect((inputField as HTMLInputElement).value).toBe('');
      const errorMessage = await screen.findByText(
        'Value must be a positive float number',
      );
      expect(errorMessage).toBeDefined();
    });
    test('Can not accept non-digit character', async () => {
      const user = userEvent.setup();
      render(<HookedTextField name="cartValue" type="float" />);
      const inputField = await screen.findByTestId('cartValue');
      await user.type(inputField, '123.+++');
      expect((inputField as HTMLInputElement).value).toBe('123.');
      const errorMessage = await screen.findByText(
        'Value must be a float number',
      );
      expect(errorMessage).toBeDefined();
    });
  });

  describe('Test number option', () => {
    test('Can input normal int number', async () => {
      const user = userEvent.setup();
      render(<HookedTextField name="cartValue" type="number" />);
      const inputField = await screen.findByTestId('cartValue');
      await user.type(inputField, '123');
      expect((inputField as HTMLInputElement).value).toBe('123');
    });
    test('Can not accept float number', async () => {
      const user = userEvent.setup();
      render(<HookedTextField name="cartValue" type="number" />);
      const inputField = await screen.findByTestId('cartValue');
      await user.type(inputField, '123.');
      expect((inputField as HTMLInputElement).value).toBe('123');
      const errorMessage = await screen.findByText('Value must be an integer');
      expect(errorMessage).toBeDefined();
    });
    test('Can accept integer with plus sign', async () => {
      const user = userEvent.setup();
      render(<HookedTextField name="cartValue" type="number" />);
      const inputField = await screen.findByTestId('cartValue');
      await user.type(inputField, '+123');
      expect((inputField as HTMLInputElement).value).toBe('123');
    });
    test('Can not accept negative number', async () => {
      const user = userEvent.setup();
      render(<HookedTextField name="cartValue" type="number" />);
      const inputField = await screen.findByTestId('cartValue');
      await user.type(inputField, '-');
      expect((inputField as HTMLInputElement).value).toBe('');
      const errorMessage = await screen.findByText(
        'Value must be a positive integer',
      );
      expect(errorMessage).toBeDefined();
    });
    test('Can not accept non-digit character', async () => {
      const user = userEvent.setup();
      render(<HookedTextField name="cartValue" type="number" />);
      const inputField = await screen.findByTestId('cartValue');
      await user.type(inputField, '123+.++');
      expect((inputField as HTMLInputElement).value).toBe('123');
      const errorMessage = await screen.findByText('Value must be an integer');
      expect(errorMessage).toBeDefined();
    });
  });
});
