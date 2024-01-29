import { Box, Button, Typography, useTheme } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { HookedTextField, StyledDateTimePicker } from './components';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import {
  changeShowConfirmation,
  selectDateTime,
  selectDistance,
  selectItemCount,
  selectShowConfirmation,
  selectValue,
} from './calculatorSlice';
import logo from '../../assets/Wolt-logo.jpg';

export default function Calculator() {
  const navigate = useNavigate();

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
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <img src={logo} alt="A Wolt logo" height={100} />
              <Typography variant="h4" fontWeight={700}>
                Your Order
              </Typography>
            </Box>
            <Box
              sx={{
                padding: theme.spacing(2, 2),
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <Typography variant="subtitle1">
                Please confirm your order
              </Typography>
            </Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                padding: theme.spacing(2, 2),
                alignItems: 'center',
              }}
            >
              <Typography variant="h5">Cart Value</Typography>
              <Typography
                variant="subtitle1"
                data-test-id="confirmCartValue"
              >{`\u20AC ${cartValue}`}</Typography>
            </Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                padding: theme.spacing(2, 2),
                alignItems: 'center',
              }}
            >
              <Typography variant="h5">Delivery Distance</Typography>
              <Typography
                variant="subtitle1"
                data-test-id="confirmDeliveryDistance"
              >
                {deliveryDistance} m
              </Typography>
            </Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                padding: theme.spacing(2, 2),
                alignItems: 'center',
              }}
            >
              <Typography variant="h5">Number of Items</Typography>
              <Typography
                variant="subtitle1"
                data-test-id="confirmNumberOfItems"
              >
                {itemCount}
              </Typography>
            </Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                padding: theme.spacing(2, 2),
                alignItems: 'center',
              }}
            >
              <Typography variant="h5">Order Time</Typography>
              <Typography variant="subtitle1" data-test-id="confirmOrderTime">
                {dateTime?.slice(0, -9).replace('T', ' ')}
              </Typography>
            </Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-evenly',
                marginY: 8,
              }}
            >
              <Button
                data-test-id="cancelButton"
                variant="contained"
                onClick={() => {
                  dispatch(changeShowConfirmation(false));
                }}
                sx={{
                  width: 'fit-content',
                  backgroundColor: theme.palette.grey[600],
                }}
              >
                <Typography variant="h6">CANCEL</Typography>
              </Button>
              <Button
                data-test-id="orderConfirmButton"
                variant="contained"
                onClick={() => {
                  navigate('/order');
                }}
                sx={{
                  width: 'fit-content',
                }}
              >
                <Typography variant="h6">CONFIRM</Typography>
              </Button>
            </Box>
          </Box>
        ) : (
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              width: {
                xs: 'calc(100vw - 32px)',
                sm: 'calc(100vw - 32px)',
                md: 900,
                lg: 900,
                xl: 900,
              },
              backgroundColor: '#ffffff',
              boxShadow: 3,
              padding: theme.spacing(4, 2),
              alignSelf: 'center',
              borderRadius: theme.spacing(4),
            }}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <img src={logo} alt="A Wolt logo" height={100} />
              <Typography variant="h4" fontWeight={700}>
                Delivery fee calculator
              </Typography>
            </Box>
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
