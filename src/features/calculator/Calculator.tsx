import { Box, Button, Typography } from '@mui/material';
import { HookedTextField, StyledDateTimePicker } from './components';

export default function Calculator() {
  return (
    <main>
      <fieldset style={{ borderColor: 'transparent', padding: 0 }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            width: {
              xs: '100vw',
              sm: '100vw',
              md: 900,
              lg: 900,
              xl: 900,
            },
            backgroundColor: '#ffffff',
            boxShadow: 3,
            padding: '16 8 16 8',
          }}
        >
          <HookedTextField
            type="float"
            name="cartValue"
            label="Value in Euros"
          />
          <HookedTextField
            type="number"
            name="deliveryDistance"
            label="Distance in metres"
          />
          <HookedTextField
            type="number"
            name="numberOfItems"
            label="Number of items"
          />
          <StyledDateTimePicker />
          <Box sx={{ alignSelf: 'center', marginY: 8 }}>
            <Button
              variant="contained"
              sx={{
                width: 'fit-content',
              }}
            >
              <Typography variant="h5">SUBMIT</Typography>
            </Button>
          </Box>
        </Box>
      </fieldset>
    </main>
  );
}
