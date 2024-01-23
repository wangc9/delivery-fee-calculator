import dayjs from 'dayjs';
import { Box, Divider, Typography, Button, useTheme } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../../app/hooks';
import {
  changeDistance,
  changeItemCount,
  changeShowConfirmation,
  changeValue,
  selectDateTime,
  selectDistance,
  selectItemCount,
  selectValue,
} from '../../calculatorSlice';
import logo from '../../../../assets/Wolt-logo.jpg';

export interface CalculateFeeProp {
  value: number;
  distance: number;
  items: number;
  dateTime: string;
}

export function calculateFee(prop: CalculateFeeProp): number {
  const { value, distance, items, dateTime } = prop;

  if (value >= 200) {
    return 0;
  }
  let fee = 0;
  if (value < 10) {
    fee += 10 - value;
  }
  fee += 2;

  if (distance > 1000) {
    const distanceCharge = Math.ceil((distance - 1000) / 500);
    fee += distanceCharge;
  }
  if (items > 4) {
    const itemCharge = (items - 4) * 0.5;
    fee += itemCharge;

    if (items > 12) {
      fee += 1.2;
    }
  }
  const date = dayjs(dateTime);
  if (date.day() === 5 && date.hour() >= 15 && date.hour() <= 19) {
    fee *= 1.2;
  }
  if (fee < 15) {
    return parseFloat(fee.toFixed(2));
  }
  return 15;
}

export default function FeeCalculator() {
  const cartValue = useAppSelector(selectValue);
  const deliveryDistance = useAppSelector(selectDistance);
  const itemCount = useAppSelector(selectItemCount);
  const dateTime = useAppSelector(selectDateTime);

  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const theme = useTheme();

  return (
    <main>
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
            Your delivery details
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
          <Typography variant="subtitle1">{`\u20AC ${cartValue}`}</Typography>
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
          <Typography variant="subtitle1">{deliveryDistance} m</Typography>
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
          <Typography variant="subtitle1">{itemCount}</Typography>
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
          <Typography variant="subtitle1">
            {dateTime?.slice(0, -9).replace('T', ' ')}
          </Typography>
        </Box>
        <Divider
          sx={{
            margin: theme.spacing(2, 0),
          }}
          variant="middle"
        />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: theme.spacing(2, 2),
            alignItems: 'center',
          }}
        >
          <Typography variant="h5">Delivery Fee</Typography>
          <Typography variant="h5" fontWeight={700} data-test-id="deliveryFee">
            {'\u20AC '}
            {calculateFee({
              value: cartValue,
              distance: deliveryDistance,
              items: itemCount,
              dateTime,
            })}
          </Typography>
        </Box>
        <Box sx={{ alignSelf: 'center', margin: theme.spacing(4, 0) }}>
          <Button
            data-test-id="returnButton"
            variant="contained"
            onClick={() => {
              dispatch(changeDistance(0));
              dispatch(changeItemCount(0));
              dispatch(changeValue(0));
              dispatch(changeShowConfirmation(false));
              navigate('/');
            }}
            sx={{
              width: 'fit-content',
            }}
          >
            <Typography variant="h5">RETURN</Typography>
          </Button>
        </Box>
      </Box>
    </main>
  );
}
