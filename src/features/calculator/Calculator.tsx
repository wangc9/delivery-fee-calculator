import { Box, Button, Typography, useTheme } from '@mui/material';
import { Header, HookedTextField, StyledDateTimePicker } from './components';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import {
  changeShowConfirmation,
  selectDateTime,
  selectDistance,
  selectItemCount,
  selectShowConfirmation,
  selectValue,
} from './calculatorSlice';
import Confirmation from './Confirmation';

/**
 * A page for asking value input.
 *
 * Display title and four input field: cart value, delivery distance,
 * number of items, and order time. A button at the bottom of the page
 * redirects to confirmation when clicked. The button is disabled until
 * all text fields receive valid input.
 */
export default function Calculator(): React.JSX.Element {
  const cartValue = useAppSelector(selectValue);
  const deliveryDistance = useAppSelector(selectDistance);
  const itemCount = useAppSelector(selectItemCount);
  const dateTime = useAppSelector(selectDateTime);
  const showConfirmation = useAppSelector(selectShowConfirmation);

  const dispatch = useAppDispatch();

  const theme = useTheme();

  return (
    <main>
      <fieldset
        style={{
          borderColor: 'transparent',
          padding: 0,
          border: 0,
          margin: 0,
          maxWidth: '100vw',
        }}
      >
        {showConfirmation ? (
          <Confirmation />
        ) : (
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
              padding: theme.spacing(4, 2),
              alignSelf: 'center',
              borderRadius: theme.spacing(4),
            }}
          >
            <Header title="Delivery fee calculator" />
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
                data-test-id="submitButton"
                variant="contained"
                disabled={
                  cartValue === 0 ||
                  deliveryDistance === 0 ||
                  itemCount === 0 ||
                  dateTime === ''
                }
                onClick={() => {
                  dispatch(changeShowConfirmation(true));
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
