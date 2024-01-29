import { screen, render, configure } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, test, expect } from '@jest/globals';
import { Provider } from 'react-redux';
import HookedTextField from './HookedTextField';
import { store } from '../../../../app/store';

describe('Test text field component', () => {
  configure({ testIdAttribute: 'data-test-id' });

  describe('Test float option', () => {
    test('Can input normal int number', async () => {
      const user = userEvent.setup();
      render(
        <Provider store={store}>
          <HookedTextField
            name="cartValue"
            type="float"
            label="Value in Euros"
          />
        </Provider>,
      );
      const inputField = await screen.findByTestId('cartValue');
      await user.type(inputField, '123');
      await user.tab();
      expect((inputField as HTMLInputElement).value).toBe('123');
    });

    test('Can input normal float number', async () => {
      const user = userEvent.setup();
      render(
        <Provider store={store}>
          <HookedTextField
            name="cartValue"
            type="float"
            label="Value in Euros"
          />
        </Provider>,
      );
      const inputField = await screen.findByTestId('cartValue');
      await user.type(inputField, '123.45');
      await user.tab();
      expect((inputField as HTMLInputElement).value).toBe('123.45');
    });

    test('Can accept float number with plus sign', async () => {
      const user = userEvent.setup();
      render(
        <Provider store={store}>
          <HookedTextField
            name="cartValue"
            type="float"
            label="Value in Euros"
          />
        </Provider>,
      );
      const inputField = await screen.findByTestId('cartValue');
      await user.type(inputField, '+123.45');
      await user.tab();
      expect((inputField as HTMLInputElement).value).toBe('123.45');
    });

    test('Can not accept non-digit string', async () => {
      const user = userEvent.setup();
      render(
        <Provider store={store}>
          <HookedTextField
            name="cartValue"
            type="float"
            label="Value in Euros"
          />
        </Provider>,
      );
      const inputField = await screen.findByTestId('cartValue');
      await user.type(inputField, 'test');
      await user.tab();
      expect((inputField as HTMLInputElement).value).toBe('test');
      const errorMessage = await screen.findByText(
        'Value must be a float number',
      );
      expect(errorMessage).toBeDefined();
    });

    test('Can not accept plus sign with random input', async () => {
      const user = userEvent.setup();
      render(
        <Provider store={store}>
          <HookedTextField
            name="cartValue"
            type="float"
            label="Value in Euros"
          />
        </Provider>,
      );
      const inputField = await screen.findByTestId('cartValue');
      await user.type(inputField, '+123-1');
      await user.tab();
      expect((inputField as HTMLInputElement).value).toBe('+123-1');
      const errorMessage = await screen.findByText(
        'Value must be a float number',
      );
      expect(errorMessage).toBeDefined();
    });

    test('Can not accept negative number', async () => {
      const user = userEvent.setup();
      render(
        <Provider store={store}>
          <HookedTextField
            name="cartValue"
            type="float"
            label="Value in Euros"
          />
        </Provider>,
      );
      const inputField = await screen.findByTestId('cartValue');
      await user.type(inputField, '-');
      await user.tab();
      expect((inputField as HTMLInputElement).value).toBe('-');
      const errorMessage = await screen.findByText(
        'Value must be a positive float number',
      );
      expect(errorMessage).toBeDefined();
    });

    test('Can not accept non-digit character', async () => {
      const user = userEvent.setup();
      render(
        <Provider store={store}>
          <HookedTextField
            name="cartValue"
            type="float"
            label="Value in Euros"
          />
        </Provider>,
      );
      const inputField = await screen.findByTestId('cartValue');
      await user.type(inputField, '123.+++');
      await user.tab();
      expect((inputField as HTMLInputElement).value).toBe('123.+++');
      const errorMessage = await screen.findByText(
        'Value must be a float number',
      );
      expect(errorMessage).toBeDefined();
    });
  });

  describe('Test number option', () => {
    test('Can input normal int number', async () => {
      const user = userEvent.setup();
      render(
        <Provider store={store}>
          <HookedTextField
            name="cartValue"
            type="number"
            label="Value in Euros"
          />
        </Provider>,
      );
      const inputField = await screen.findByTestId('cartValue');
      await user.type(inputField, '123');
      await user.tab();
      expect((inputField as HTMLInputElement).value).toBe('123');
    });

    test('Can not accept float number', async () => {
      const user = userEvent.setup();
      render(
        <Provider store={store}>
          <HookedTextField
            name="cartValue"
            type="number"
            label="Value in Euros"
          />
        </Provider>,
      );
      const inputField = await screen.findByTestId('cartValue');
      await user.type(inputField, '123.');
      await user.tab();
      expect((inputField as HTMLInputElement).value).toBe('123.');
      const errorMessage = await screen.findByText('Value must be an integer');
      expect(errorMessage).toBeDefined();
    });

    test('Can accept integer with plus sign', async () => {
      const user = userEvent.setup();
      render(
        <Provider store={store}>
          <HookedTextField
            name="cartValue"
            type="number"
            label="Value in Euros"
          />
        </Provider>,
      );
      const inputField = await screen.findByTestId('cartValue');
      await user.type(inputField, '+123');
      await user.tab();
      expect((inputField as HTMLInputElement).value).toBe('123');
    });

    test('Can not accept plus sign with random input', async () => {
      const user = userEvent.setup();
      render(
        <Provider store={store}>
          <HookedTextField
            name="cartValue"
            type="number"
            label="Value in Euros"
          />
        </Provider>,
      );
      const inputField = await screen.findByTestId('cartValue');
      await user.type(inputField, '+123+-n');
      await user.tab();
      expect((inputField as HTMLInputElement).value).toBe('+123+-n');
      const errorMessage = await screen.findByText('Value must be an integer');
      expect(errorMessage).toBeDefined();
    });

    test('Can not accept non-digit string', async () => {
      const user = userEvent.setup();
      render(
        <Provider store={store}>
          <HookedTextField
            name="cartValue"
            type="number"
            label="Value in Euros"
          />
        </Provider>,
      );
      const inputField = await screen.findByTestId('cartValue');
      await user.type(inputField, 'test');
      await user.tab();
      expect((inputField as HTMLInputElement).value).toBe('test');
      const errorMessage = await screen.findByText('Value must be an integer');
      expect(errorMessage).toBeDefined();
    });

    test('Can not accept negative number', async () => {
      const user = userEvent.setup();
      render(
        <Provider store={store}>
          <HookedTextField
            name="cartValue"
            type="number"
            label="Value in Euros"
          />
        </Provider>,
      );
      const inputField = await screen.findByTestId('cartValue');
      await user.type(inputField, '-');
      await user.tab();
      expect((inputField as HTMLInputElement).value).toBe('-');
      const errorMessage = await screen.findByText(
        'Value must be a positive integer',
      );
      expect(errorMessage).toBeDefined();
    });

    test('Can not accept non-digit character', async () => {
      const user = userEvent.setup();
      render(
        <Provider store={store}>
          <HookedTextField
            name="cartValue"
            type="number"
            label="Value in Euros"
          />
        </Provider>,
      );
      const inputField = await screen.findByTestId('cartValue');
      await user.type(inputField, '123+.++');
      await user.tab();
      expect((inputField as HTMLInputElement).value).toBe('123+.++');
      const errorMessage = await screen.findByText('Value must be an integer');
      expect(errorMessage).toBeDefined();
    });
  });
});
