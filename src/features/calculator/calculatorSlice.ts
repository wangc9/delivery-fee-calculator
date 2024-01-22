/* eslint-disable no-param-reassign */
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

export interface CalculatorSliceState {
  /** Total value in the cart. */
  cartValue: number;
  /** Total distance in km. */
  deliveryDistance: number;
  /** Number of items in the cart. */
  numberOfItems: number;
  /** Selected time of order. */
  orderTime: string | null;
}

const initialState: CalculatorSliceState = {
  cartValue: 0,
  deliveryDistance: 0,
  numberOfItems: 0,
  orderTime: null,
};

export const calculatorSlice = createSlice({
  name: 'calculator',
  initialState,
  reducers: (create) => ({
    /** Change the value of cart. */
    changeValue: create.reducer((state, action: PayloadAction<number>) => {
      state.cartValue = action.payload;
    }),
    /** Change the delivery distance. */
    changeDistance: create.reducer((state, action: PayloadAction<number>) => {
      state.deliveryDistance = action.payload;
    }),
    /** Change the number of products. */
    changeItemCount: create.reducer((state, action: PayloadAction<number>) => {
      state.numberOfItems = action.payload;
    }),
    /** Change the date and time. */
    changeDateTime: create.reducer((state, action: PayloadAction<string>) => {
      state.orderTime = action.payload;
    }),
  }),
  selectors: {
    /** Select cart value. */
    selectValue: (calculator) => calculator.cartValue,
    /** Select delivery distance. */
    selectDistance: (calculator) => calculator.deliveryDistance,
    /** Select item number count. */
    selectItemCount: (calculator) => calculator.numberOfItems,
    /** Select the date and time. */
    selectDateTime: (calculator) => calculator.orderTime,
  },
});

export const { changeDateTime, changeDistance, changeItemCount, changeValue } =
  calculatorSlice.actions;

export const { selectDateTime, selectDistance, selectItemCount, selectValue } =
  calculatorSlice.selectors;

export default calculatorSlice.reducer;
