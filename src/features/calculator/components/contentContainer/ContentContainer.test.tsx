import { screen, render, configure } from '@testing-library/react';
import { describe, test, expect } from '@jest/globals';
import '@testing-library/jest-dom/jest-globals';
import ContentContainer from './ContentContainer';

// jest.mock(
//   '../../../../assets/Wolt-logo.jpg',
//   () => '../../../../assets/Wolt-logo.jpg',
// );

describe('Test content container component', () => {
  configure({ testIdAttribute: 'data-test-id' });

  describe('Test display', () => {
    test('Can show image and correct title', async () => {
      render(
        <ContentContainer>
          <h1>Test</h1>
        </ContentContainer>,
      );
      const value = await screen.findByTestId('contentContainer');
      expect(value).toHaveTextContent('Test');
    });
  });
});
