import { Box, Typography, Button, useTheme } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import {
  changeShowConfirmation,
  selectDateTime,
  selectDistance,
  selectItemCount,
  selectValue,
} from './calculatorSlice';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { ConfirmItem, Header } from './components';

export default function Confirmation() {
  const theme = useTheme();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const cartValue = useAppSelector(selectValue);
  const deliveryDistance = useAppSelector(selectDistance);
  const itemCount = useAppSelector(selectItemCount);
  const dateTime = useAppSelector(selectDateTime);

  return (
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
      <Header title="Your Order" />
      <Box
        sx={{
          padding: theme.spacing(2, 2),
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Typography variant="subtitle1">Please confirm your order</Typography>
      </Box>
      <ConfirmItem name="cartValue" value={cartValue} />
      <ConfirmItem name="deliveryDistance" value={deliveryDistance} />
      <ConfirmItem name="numberOfItems" value={itemCount} />
      <ConfirmItem
        name="orderTime"
        value={dateTime.slice(0, -9).replace('T', ' ')}
      />
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
  );
}
