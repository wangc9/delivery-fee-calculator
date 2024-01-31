import { Box, Typography, Button, useTheme } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import {
  changeDistance,
  changeItemCount,
  changeShowConfirmation,
  changeValue,
  selectDateTime,
  selectDistance,
  selectItemCount,
  selectValue,
} from './calculatorSlice';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { ConfirmItem, ContentContainer, Header } from './components';

/**
 * A confirmation page.
 *
 * Display all the values from user input. The cancel page at the bottom
 * redirects to the front page when clicked. The confirm button redirects
 * to the calculation page when clicked.
 */
export default function Confirmation(): React.JSX.Element {
  const theme = useTheme();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const cartValue = useAppSelector(selectValue);
  const deliveryDistance = useAppSelector(selectDistance);
  const itemCount = useAppSelector(selectItemCount);
  const dateTime = useAppSelector(selectDateTime);

  return (
    <ContentContainer>
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
            dispatch(changeDistance(0));
            dispatch(changeItemCount(0));
            dispatch(changeValue(0));
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
    </ContentContainer>
  );
}
