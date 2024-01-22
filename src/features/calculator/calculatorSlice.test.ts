import dayjs from 'dayjs';
import { describe, test, expect, beforeEach } from '@jest/globals';
import type { CalculatorSliceState } from './calculatorSlice';
import reducer, {
  changeDateTime,
  changeDistance,
  changeItemCount,
  changeValue,
} from './calculatorSlice';

describe('Test calculator reducer', () => {
  let initialState: CalculatorSliceState;
  const startTime = dayjs().format();

  beforeEach(() => {
    initialState = {
      cartValue: 0,
      deliveryDistance: 0,
      numberOfItems: 0,
      orderTime: startTime,
    };
  });

  test('Should handle initial state', () => {
    expect(reducer(undefined, { type: 'unknown' })).toStrictEqual({
      cartValue: 0,
      deliveryDistance: 0,
      numberOfItems: 0,
      orderTime: null,
    });
  });

  test('Can handle cart value change', () => {
    expect(reducer(initialState, changeValue(20))).toStrictEqual({
      cartValue: 20,
      deliveryDistance: 0,
      numberOfItems: 0,
      orderTime: startTime,
    });
    expect(reducer(initialState, changeValue(4))).toStrictEqual({
      cartValue: 4,
      deliveryDistance: 0,
      numberOfItems: 0,
      orderTime: startTime,
    });
  });

  test('Can handle distance change', () => {
    expect(reducer(initialState, changeDistance(20))).toStrictEqual({
      cartValue: 0,
      deliveryDistance: 20,
      numberOfItems: 0,
      orderTime: startTime,
    });
    expect(reducer(initialState, changeDistance(4))).toStrictEqual({
      cartValue: 0,
      deliveryDistance: 4,
      numberOfItems: 0,
      orderTime: startTime,
    });
  });

  test('Can handle item number change', () => {
    expect(reducer(initialState, changeItemCount(20))).toStrictEqual({
      cartValue: 0,
      deliveryDistance: 0,
      numberOfItems: 20,
      orderTime: startTime,
    });
    expect(reducer(initialState, changeItemCount(4))).toStrictEqual({
      cartValue: 0,
      deliveryDistance: 0,
      numberOfItems: 4,
      orderTime: startTime,
    });
  });

  test('Can handle date change', () => {
    const newTime = dayjs();
    expect(
      reducer(initialState, changeDateTime(newTime.format())),
    ).toStrictEqual({
      cartValue: 0,
      deliveryDistance: 0,
      numberOfItems: 0,
      orderTime: newTime.format(),
    });
  });
});