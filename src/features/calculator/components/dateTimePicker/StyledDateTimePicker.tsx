import dayjs, { Dayjs } from 'dayjs';
import {
  DesktopDateTimePicker,
  DateTimeValidationError,
} from '@mui/x-date-pickers';
import React, { useMemo, useState } from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../../../app/hooks';
import { changeDateTime, selectDateTime } from '../../calculatorSlice';

/**
 * A datetime picker.
 *
 * Time is displayed in finnish DD.MM.YY HH.mm format. Date and time can be
 * typed in to the text field or selected using the selector. Default time is
 * 30 minutes after the time when the component is initially loaded. Selecting
 * or typing a time earlier than the current time will result in warning. The
 * datetime selected or typed will be memorised in redux after the component loses
 * focus.
 *
 * The input field can be tested with id "orderTime".
 */
export default function StyledDateTimePicker(): React.JSX.Element {
  const initDateTime = useAppSelector(selectDateTime);
  const [dateTime, setDateTime] = useState<Dayjs>(dayjs(initDateTime));
  const [error, setError] = useState<DateTimeValidationError | null>(null);
  const theme = useTheme();
  const dispatch = useAppDispatch();

  const errorMessage = useMemo(() => {
    switch (error) {
      case 'disablePast': {
        return 'Please select a time in the future';
      }
      case 'invalidDate': {
        return 'Please select a valid date';
      }
      default: {
        return '';
      }
    }
  }, [error]);

  return (
    <Box
      key="date-box"
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: theme.spacing(2, 2),
      }}
    >
      <Typography key="date-typography" variant="h5" fontWeight={500}>
        Order Time
      </Typography>
      <DesktopDateTimePicker
        sx={{
          width: 'fit-content',
          maxWidth: 200,
        }}
        value={dateTime}
        onChange={(newValue) => {
          if (newValue) {
            setDateTime(newValue);
          }
        }}
        onAccept={() => dispatch(changeDateTime(dateTime.format()))}
        onSelectedSectionsChange={() =>
          dispatch(changeDateTime(dateTime.format()))
        }
        minutesStep={1}
        timeSteps={{ minutes: 1 }}
        ampm={false}
        ampmInClock={false}
        disablePast
        format="DD.MM.YYYY HH.mm"
        label="Time in DD.MM.YYYY HH.mm"
        onError={(newError) => {
          setError(newError);
          dispatch(changeDateTime(''));
        }}
        readOnly={false}
        slotProps={{
          textField: {
            helperText: errorMessage,
            label: 'Order time',
            inputProps: {
              'data-test-id': 'orderTime',
              'aria-label': 'Enter the order Time',
            },
          },
        }}
      />
    </Box>
  );
}
