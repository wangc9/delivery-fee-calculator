import { screen, render, configure } from '@testing-library/react';
import { describe, test, expect, jest } from '@jest/globals';
import '@testing-library/jest-dom/jest-globals';
import Header from './Header';

jest.mock(
  '../../../../assets/Wolt-logo.jpg',
  () => '../../../../assets/Wolt-logo.jpg',
);

describe('Test header component', () => {
  configure({ testIdAttribute: 'data-test-id' });

  describe('Test display', () => {
    test('Can show image and correct title', async () => {
      render(<Header title="Test" />);
      const value = await screen.findByTestId('headerTest');
      expect(value).toHaveTextContent('Test');
      const image = await screen.findByRole('img');
      expect(image).toBeDefined();
    });
  });
});
