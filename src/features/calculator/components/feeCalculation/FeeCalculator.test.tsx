import { describe, test, expect, jest } from '@jest/globals';
import { calculateFee } from './FeeCalculator';

jest.mock('../../../../assets/Wolt-logo.jpg', () => jest.fn());

describe('Test fee calculation service', () => {
  test('More than 200 euro worth of items should have 0 delivery fee', () => {
    expect(
      calculateFee({
        value: 200,
        distance: 999,
        items: 1,
        dateTime: '2024-03-01T22:53:35+02:00',
      }),
    ).toBe(0);
    expect(
      calculateFee({
        value: 201,
        distance: 999,
        items: 1,
        dateTime: '2024-03-01T17:53:35+02:00',
      }),
    ).toBe(0);
    expect(
      calculateFee({
        value: 202,
        distance: 999,
        items: 5,
        dateTime: '2024-03-01T22:53:35+02:00',
      }),
    ).toBe(0);
    expect(
      calculateFee({
        value: 203,
        distance: 999,
        items: 5,
        dateTime: '2024-03-01T17:53:35+02:00',
      }),
    ).toBe(0);
    expect(
      calculateFee({
        value: 204,
        distance: 999,
        items: 13,
        dateTime: '2024-03-01T22:53:35+02:00',
      }),
    ).toBe(0);
    expect(
      calculateFee({
        value: 205,
        distance: 999,
        items: 13,
        dateTime: '2024-03-01T17:53:35+02:00',
      }),
    ).toBe(0);
    expect(
      calculateFee({
        value: 206,
        distance: 1999,
        items: 1,
        dateTime: '2024-03-01T22:53:35+02:00',
      }),
    ).toBe(0);
    expect(
      calculateFee({
        value: 207,
        distance: 1999,
        items: 1,
        dateTime: '2024-03-01T17:53:35+02:00',
      }),
    ).toBe(0);
    expect(
      calculateFee({
        value: 208,
        distance: 1999,
        items: 5,
        dateTime: '2024-03-01T22:53:35+02:00',
      }),
    ).toBe(0);
    expect(
      calculateFee({
        value: 209,
        distance: 1999,
        items: 5,
        dateTime: '2024-03-01T17:53:35+02:00',
      }),
    ).toBe(0);
    expect(
      calculateFee({
        value: 210,
        distance: 1999,
        items: 13,
        dateTime: '2024-03-01T22:53:35+02:00',
      }),
    ).toBe(0);
    expect(
      calculateFee({
        value: 211,
        distance: 1999,
        items: 13,
        dateTime: '2024-03-01T17:53:35+02:00',
      }),
    ).toBe(0);
  });

  test('Value is less than 10 euros', () => {
    expect(
      calculateFee({
        value: 0.34,
        distance: 999,
        items: 1,
        dateTime: '2024-03-01T22:53:35+02:00',
      }),
    ).toBe(11.66);
    expect(
      calculateFee({
        value: 1.23,
        distance: 999,
        items: 1,
        dateTime: '2024-03-01T17:53:35+02:00',
      }),
    ).toBe(12.92);
    expect(
      calculateFee({
        value: 2.34,
        distance: 999,
        items: 5,
        dateTime: '2024-03-01T22:53:35+02:00',
      }),
    ).toBe(10.16);
    expect(
      calculateFee({
        value: 3.45,
        distance: 999,
        items: 5,
        dateTime: '2024-03-01T17:53:35+02:00',
      }),
    ).toBe(10.86);
    expect(
      calculateFee({
        value: 4.56,
        distance: 999,
        items: 13,
        dateTime: '2024-03-01T22:53:35+02:00',
      }),
    ).toBe(13.14);
    expect(
      calculateFee({
        value: 5.67,
        distance: 999,
        items: 13,
        dateTime: '2024-03-01T17:53:35+02:00',
      }),
    ).toBe(14.44);
    expect(
      calculateFee({
        value: 6.78,
        distance: 1999,
        items: 1,
        dateTime: '2024-03-01T22:53:35+02:00',
      }),
    ).toBe(7.22);
    expect(
      calculateFee({
        value: 7.89,
        distance: 1999,
        items: 1,
        dateTime: '2024-03-01T17:53:35+02:00',
      }),
    ).toBe(7.33);
    expect(
      calculateFee({
        value: 8.9,
        distance: 1999,
        items: 5,
        dateTime: '2024-03-01T22:53:35+02:00',
      }),
    ).toBe(5.6);
    expect(
      calculateFee({
        value: 9.01,
        distance: 1999,
        items: 5,
        dateTime: '2024-03-01T17:53:35+02:00',
      }),
    ).toBe(6.59);
    expect(
      calculateFee({
        value: 0.12,
        distance: 1999,
        items: 13,
        dateTime: '2024-03-01T22:53:35+02:00',
      }),
    ).toBe(15);
    expect(
      calculateFee({
        value: 1.54,
        distance: 1999,
        items: 13,
        dateTime: '2024-03-01T17:53:35+02:00',
      }),
    ).toBe(15);
  });

  test('Value is between 10 euros and 200 euros', () => {
    expect(
      calculateFee({
        value: 10.34,
        distance: 999,
        items: 1,
        dateTime: '2024-03-01T22:53:35+02:00',
      }),
    ).toBe(2);
    expect(
      calculateFee({
        value: 11.23,
        distance: 999,
        items: 1,
        dateTime: '2024-03-01T17:53:35+02:00',
      }),
    ).toBe(2.4);
    expect(
      calculateFee({
        value: 12.34,
        distance: 999,
        items: 5,
        dateTime: '2024-03-01T22:53:35+02:00',
      }),
    ).toBe(2.5);
    expect(
      calculateFee({
        value: 13.45,
        distance: 999,
        items: 5,
        dateTime: '2024-03-01T17:53:35+02:00',
      }),
    ).toBe(3);
    expect(
      calculateFee({
        value: 14.56,
        distance: 999,
        items: 13,
        dateTime: '2024-03-01T22:53:35+02:00',
      }),
    ).toBe(7.7);
    expect(
      calculateFee({
        value: 15.67,
        distance: 999,
        items: 13,
        dateTime: '2024-03-01T17:53:35+02:00',
      }),
    ).toBe(9.24);
    expect(
      calculateFee({
        value: 199.78,
        distance: 1999,
        items: 1,
        dateTime: '2024-03-01T22:53:35+02:00',
      }),
    ).toBe(4);
    expect(
      calculateFee({
        value: 198.89,
        distance: 1999,
        items: 1,
        dateTime: '2024-03-01T17:53:35+02:00',
      }),
    ).toBe(4.8);
    expect(
      calculateFee({
        value: 197.9,
        distance: 1999,
        items: 5,
        dateTime: '2024-03-01T22:53:35+02:00',
      }),
    ).toBe(4.5);
    expect(
      calculateFee({
        value: 196.01,
        distance: 1999,
        items: 5,
        dateTime: '2024-03-01T17:53:35+02:00',
      }),
    ).toBe(5.4);
    expect(
      calculateFee({
        value: 195.12,
        distance: 1999,
        items: 13,
        dateTime: '2024-03-01T22:53:35+02:00',
      }),
    ).toBe(9.7);
    expect(
      calculateFee({
        value: 194.54,
        distance: 1999,
        items: 13,
        dateTime: '2024-03-01T17:53:35+02:00',
      }),
    ).toBe(11.64);
  });
});
