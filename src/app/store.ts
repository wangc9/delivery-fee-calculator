import { combineSlices, configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { calculatorSlice } from '../features/calculator/calculatorSlice';

const rootReducer = combineSlices(calculatorSlice);

export type RootState = ReturnType<typeof rootReducer>;

/**
 * Set up redux store.
 *
 * @param preloadedState Optional initial state
 *
 * @returns Redux store
 */
export const makeStore = (preloadedState?: Partial<RootState>) => {
  const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
    preloadedState,
  });
  setupListeners(store.dispatch);
  return store;
};

export const store = makeStore();

export type AppStore = typeof store;
export type AppDispatch = AppStore['dispatch'];
