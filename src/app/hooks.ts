// This file serves as a central hub for re-exporting pre-typed Redux hooks.
// These imports are restricted elsewhere to ensure consistent
// usage of typed hooks throughout the application.
// We disable the ESLint rule here because this is the designated place
// for importing and re-exporting the typed versions of hooks.
/* eslint-disable @typescript-eslint/no-restricted-imports */
// import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
// import type { AppDispatch, RootState } from './store';

// Use throughout your app instead of plain `useDispatch` and `useSelector`
// export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
// export const useAppSelector = useSelector.withTypes<RootState>();

/**
 * Custom hook for form input.
 *
 * @param type Define type of input. For integer, choose "number", for float, choose "float".
 *
 * @returns `onChange` -- `onChange` event handler \
 * `value` -- Value of the property \
 * `error` -- Error message
 */
// eslint-disable-next-line import/prefer-default-export
export const useField = (type: 'float' | 'number') => {
  const [value, setValue] = useState<string>('');
  const [error, setError] = useState<null | string>(null);

  const onChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const target = event.currentTarget.value;
    if (type === 'float') {
      if (target.match(/^[0-9]*\.?([0-9]+)?$/)) {
        setError(null);
        setValue(target);
      } else if (target.match(/^-(.+)?/)) {
        setError('Value must be a positive float number');
      } else if (target.match(/^\+(.+)?/)) {
        const newValue = target.slice(1);
        if (newValue.match(/^[0-9]*\.?([0-9]+)?$/)) {
          setValue(newValue);
        } else {
          setError('Value must be a float number');
        }
      } else {
        setError('Value must be a float number');
      }
    } else if (type === 'number') {
      if (target.match(/^\d+$/)) {
        setError(null);
        setValue(target);
      } else if (target.match(/^-(.+)?/)) {
        setError('Value must be a positive integer');
      } else if (target.match(/^\+(.+)?/)) {
        const newValue = target.slice(1);
        if (newValue.match(/^\d+$/)) {
          setValue(newValue);
        } else {
          setError('Value must be an integer');
        }
      } else {
        setError('Value must be an integer');
      }
    }
  };

  return {
    /** Value of the property. Default as ''. Change according to input if valid. */
    value,
    /** Error message. Default as null. Contains error message if validation fails. */
    error,
    /** `onChange` event handler. Perform validation check and return changed value or error message. */
    onChange,
  };
};
