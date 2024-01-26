import dayjs, { Dayjs } from 'dayjs';
import {
  DesktopDateTimePicker,
  DateTimeValidationError,
} from '@mui/x-date-pickers';
import { useMemo, useState } from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../../../app/hooks';
import { changeDateTime, selectDateTime } from '../../calculatorSlice';

export default function StyledDateTimePicker() {
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
          maxWidth: 223,
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
        onError={(newError) => setError(newError)}
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
