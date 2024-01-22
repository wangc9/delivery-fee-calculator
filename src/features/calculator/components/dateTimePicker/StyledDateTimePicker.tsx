import dayjs, { Dayjs } from 'dayjs';
import { DateTimePicker, DateTimeValidationError } from '@mui/x-date-pickers';
import { useMemo, useState } from 'react';
import { Box, Typography, useTheme } from '@mui/material';

export default function StyledDateTimePicker() {
  const [dateTime, setDateTime] = useState<Dayjs | null>(dayjs());
  const [error, setError] = useState<DateTimeValidationError | null>(null);
  const theme = useTheme();

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
      <DateTimePicker
        sx={{
          width: 'fit-content',
          maxWidth: 235,
        }}
        value={dateTime}
        onChange={(newValue) => setDateTime(newValue)}
        minutesStep={1}
        ampm={false}
        ampmInClock={false}
        disablePast
        format="DD.MM.YYYY HH.mm"
        label="Time in DD.MM.YYYY HH.mm"
        onError={(newError) => setError(newError)}
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
