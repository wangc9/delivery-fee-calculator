import { Box, Typography, useTheme, TextField } from '@mui/material';
import { useAppDispatch, useField } from '../../../../app/hooks';
import {
  changeDistance,
  changeItemCount,
  changeValue,
} from '../../calculatorSlice';

/**
 * Type definition for {@link HookedTextField}
 */
export interface TextFieldType {
  /** Camel case of the field name. */
  name: string;
  type: 'float' | 'number';
  /** aria label. */
  label: string;
}

/**
 * A component displaying name and a textfield for input.
 *
 * The textfield performs validation check when loses focus and emit error message if needed.
 *
 * @param prop {@link TextField}
 */
export default function HookedTextField(
  prop: TextFieldType,
): React.JSX.Element {
  const { type, name, label } = prop;

  const dispatch = useAppDispatch();

  const nameWithSpace = name.replace(/([A-Z])/g, ' $1');
  const displayName =
    nameWithSpace.charAt(0).toUpperCase() + nameWithSpace.slice(1);

  const property = useField(type);
  const theme = useTheme();

  return (
    <Box
      key={`${name}-box`}
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: theme.spacing(2, 2),
      }}
    >
      <Typography key={`${name}-typography`} variant="h5" fontWeight={500}>
        {displayName}
      </Typography>
      <TextField
        data-test-id={`${name}Helper`}
        inputProps={{
          'data-test-id': name,
          'aria-label': `Enter ${label}`,
        }}
        required
        name={`${name}-textfield`}
        value={property.value}
        onChange={property.onChange}
        onBlur={() => {
          if (name === 'cartValue') {
            dispatch(changeValue(0));
          } else if (name === 'deliveryDistance') {
            dispatch(changeDistance(0));
          } else {
            dispatch(changeItemCount(0));
          }
          property.onBlur();
          if (property.value === '' || property.value === '0') {
            property.setError('Value can not be empty!');
          }
          if (property.error === null || property.error === '') {
            if (name === 'cartValue') {
              dispatch(changeValue(parseFloat(property.value)));
            } else if (name === 'deliveryDistance') {
              dispatch(changeDistance(Number(property.value)));
            } else {
              dispatch(changeItemCount(Number(property.value)));
            }
          }
        }}
        variant="outlined"
        error={property.value === '0' || !!property.error}
        helperText={
          property.value === '0' ? 'Value can not be empty!' : property.error
        }
        label={label}
      />
    </Box>
  );
}
