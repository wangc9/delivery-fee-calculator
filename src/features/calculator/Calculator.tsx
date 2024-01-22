import { Box, Button, Typography } from '@mui/material';
import { useState } from 'react';
import { HookedTextField, StyledDateTimePicker } from './components';
import { useAppSelector } from '../../app/hooks';
import {
  selectDateTime,
  selectDistance,
  selectItemCount,
  selectValue,
} from './calculatorSlice';

export default function Calculator() {
  const [showSummary, setShowSummary] = useState<boolean>(false);

  const cartValue = useAppSelector(selectValue);
  const deliveryDistance = useAppSelector(selectDistance);
  const itemCount = useAppSelector(selectItemCount);
  const dateTime = useAppSelector(selectDateTime);

  return (
    <main>
      <fieldset
        style={{ borderColor: 'transparent', padding: 0, border: 0, margin: 0 }}
      >
        {showSummary ? (
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              width: {
                xs: 'calc(100vw - 32px)',
                sm: 'calc(100vw - 32px)',
                md: 868,
                lg: 868,
                xl: 868,
              },
              backgroundColor: '#ffffff',
              boxShadow: 3,
              paddingTop: 0,
            }}
          >
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              <Typography variant="h5">Cart Value</Typography>
              <Typography variant="subtitle1">{`\u20AC ${cartValue}`}</Typography>
            </Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              <Typography variant="h5">Delivery Distance</Typography>
              <Typography variant="subtitle1">{deliveryDistance} m</Typography>
            </Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              <Typography variant="h5">Number of Items</Typography>
              <Typography variant="subtitle1">{itemCount}</Typography>
            </Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              <Typography variant="h5">Order Time</Typography>
              <Typography variant="subtitle1">
                {dateTime?.slice(0, -9).replace('T', ' ')}
              </Typography>
            </Box>
          </Box>
        ) : (
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
                disabled={
                  cartValue === 0 || deliveryDistance === 0 || itemCount === 0
                }
                onClick={() => {
                  setShowSummary(true);
                }}
                sx={{
                  width: 'fit-content',
                }}
              >
                <Typography variant="h5">SUBMIT</Typography>
              </Button>
            </Box>
          </Box>
        )}
      </fieldset>
    </main>
  );
}
