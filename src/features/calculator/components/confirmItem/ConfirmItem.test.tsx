import { screen, render, configure } from '@testing-library/react';
import { describe, test, expect } from '@jest/globals';
import '@testing-library/jest-dom/jest-globals';
import ConfirmItem from './ConfirmItem';

describe('Test confirm item component', () => {
  configure({ testIdAttribute: 'data-test-id' });

  describe('Test display with different options', () => {
    test('Can show cart value with euro sign', async () => {
      render(<ConfirmItem name="cartValue" value={123.45} />);
      const value = await screen.findByTestId('confirmCartValue');
      expect(value).toHaveTextContent('\u20AC 123.45');
    });

    test('Can show distance value with unit m', async () => {
      render(<ConfirmItem name="deliveryDistance" value={1234} />);
      const value = await screen.findByTestId('confirmDeliveryDistance');
      expect(value).toHaveTextContent('1234 m');
    });

    test('Can show pure item count', async () => {
      render(<ConfirmItem name="numberOfItems" value={12} />);
      const value = await screen.findByTestId('confirmNumberOfItems');
      expect(value).toHaveTextContent('12');
    });

    test('Can show pure order time', async () => {
      render(<ConfirmItem name="orderTime" value="2024-01-29 11:11" />);
      const value = await screen.findByTestId('confirmOrderTime');
      expect(value).toHaveTextContent('2024-01-29 11:11');
    });
  });
});
