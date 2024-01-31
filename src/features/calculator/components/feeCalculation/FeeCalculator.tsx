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
import ConfirmItem from '../confirmItem/ConfirmItem';
import Header from '../header/Header';
import ContentContainer from '../contentContainer/ContentContainer';

/**
 * Type definition for {@link calculateFee} function.
 */
export interface CalculateFeeProp {
  /** Cart value in euros. */
  value: number;
  /** Delivery distance in meters. */
  distance: number;
  /** Number of items. */
  items: number;
  /** Order time string. */
  dateTime: string;
}

/**
 * Calculate the delivery fee based on given rules.
 *
 * @param prop {@link CalculateFeeProp}
 *
 * @returns fees in euros.
 */
export function calculateFee(prop: CalculateFeeProp): number {
  const { value, distance, items, dateTime } = prop;

  // 0 delivery fee for order over 200 euros.
  if (value >= 200) {
    return 0;
  }
  let fee = 0;

  // Surcharge between value and 10 euros.
  if (value < 10) {
    fee += 10 - value;
  }

  // Basic delivery fee for all distances.
  fee += 2;

  // Surcharge for distances longer than 1000 meters.
  if (distance > 1000) {
    const distanceCharge = Math.ceil((distance - 1000) / 500);
    fee += distanceCharge;
  }

  // Surcharge for more than 4 items.
  if (items > 4) {
    const itemCharge = (items - 4) * 0.5;
    fee += itemCharge;

    // Bulk charge for more than 12 items.
    if (items > 12) {
      fee += 1.2;
    }
  }

  // Friday rush charge for orders between 3 pm and 7 pm.
  const date = dayjs(dateTime);
  if (date.day() === 5 && date.hour() >= 15 && date.hour() < 19) {
    fee *= 1.2;
  }

  if (fee < 15) {
    return parseFloat(fee.toFixed(2));
  }

  // Maximum charge.
  return 15;
}

/**
 * Calculation page.
 *
 * Display the confirmed values and calculated fee. A return button at the
 * bottom of the page redirects to the front page and clear redux when clicked.
 */
export default function FeeCalculator(): React.JSX.Element {
  const cartValue = useAppSelector(selectValue);
  const deliveryDistance = useAppSelector(selectDistance);
  const itemCount = useAppSelector(selectItemCount);
  const dateTime = useAppSelector(selectDateTime);

  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const theme = useTheme();

  return (
    <main>
      <ContentContainer>
        <Header title="Your delivery details" />
        <ConfirmItem name="cartValue" value={cartValue} />
        <ConfirmItem name="deliveryDistance" value={deliveryDistance} />
        <ConfirmItem name="numberOfItems" value={itemCount} />
        <ConfirmItem
          name="orderTime"
          value={dateTime.slice(0, -9).replace('T', ' ')}
        />
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
      </ContentContainer>
    </main>
  );
}
