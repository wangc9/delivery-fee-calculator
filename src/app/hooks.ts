/**
 * Index for all the custom hooks used throughout the application.
 */

/* eslint-disable @typescript-eslint/no-restricted-imports */
import { useDispatch, useSelector } from 'react-redux';
import { useState, useRef } from 'react';
import type { AppDispatch, RootState } from './store';

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();

/**
 * Custom hook for form input.
 *
 * @param type Define type of input. For integer, choose "number", for float, choose "float".
 *
 * @returns `onChange` -- `onChange` event handler \
 * `onBlur` -- `onBlur` event handler\
 * `value` -- Value of the property \
 * `error` -- Error message\
 * `errorRef` -- Reference of error\
 * `setError` -- set function to change error state
 */
// eslint-disable-next-line import/prefer-default-export
export const useField = (type: 'float' | 'number') => {
  /** State of the value. */
  const [value, setValue] = useState<string>('');
  /** State of error. */
  const [error, setError] = useState<null | string>(null);
  /** Reference of error. */
  const errorRef = useRef<null | string>(null);

  /**
   * Change value when the text field value has changed.
   *
   * @param event React change event
   */
  const onChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const target = event.currentTarget.value;
    setValue(target);
  };

  /**
   * Call when user focus has shifted (tab out or click out).
   *
   * Perform validation check when called. Matching float or integer number
   * will be accepted without changing the state. Float or integer with plus
   * sign only at the beginning will be recorded as normal number without sign.
   * All other inputs will be rejected with corresponding error message.
   */
  const onBlur = () => {
    if (type === 'float') {
      if (value.match(/^[0-9]*\.?([0-9]+)?$/)) {
        setError(null);
        errorRef.current = null;
      } else if (value.match(/^-(.+)?/)) {
        setError('Value must be a positive float number');
        errorRef.current = 'Value must be a positive float number';
      } else if (value.match(/^\+(.+)?/)) {
        const newValue = value.slice(1);
        if (newValue.match(/^[0-9]*\.?([0-9]+)?$/)) {
          setValue(newValue);
        } else {
          setError('Value must be a float number');
          errorRef.current = 'Value must be a float number';
        }
      } else {
        setError('Value must be a float number');
        errorRef.current = 'Value must be a float number';
      }
    } else if (type === 'number') {
      if (value.match(/^\d+$/)) {
        setError(null);
        errorRef.current = null;
      } else if (value.match(/^-(.+)?/)) {
        setError('Value must be a positive integer');
        errorRef.current = 'Value must be a positive integer';
      } else if (value.match(/^\+(.+)?/)) {
        const newValue = value.slice(1);
        if (newValue.match(/^\d+$/)) {
          setValue(newValue);
        } else {
          setError('Value must be an integer');
          errorRef.current = 'Value must be an integer';
        }
      } else {
        setError('Value must be an integer');
        errorRef.current = 'Value must be an integer';
      }
    }
  };

  return {
    /** Value of the property. Default as ''. Change according to input if valid. */
    value,
    /** Error message. Default as null. Contains error message if validation fails. */
    error,
    /** Reference of error. Does not change state. */
    errorRef,
    onChange,
    onBlur,
    /** Manually set error message. */
    setError,
  };
};
