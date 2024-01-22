import { Box, Typography, useTheme, TextField } from '@mui/material';
import { useAppDispatch, useField } from '../../../../app/hooks';
import {
  changeDistance,
  changeItemCount,
  changeValue,
} from '../../calculatorSlice';

export interface TextFieldType {
  /** Camel case of the field name. */
  name: string;
  type: 'float' | 'number';
  label: string;
}

export default function HookedTextField(prop: TextFieldType) {
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
        inputProps={{
          'data-test-id': name,
          'aria-label': `Enter ${label}`,
        }}
        required
        name={`${name}-textfield`}
        value={property.value}
        onChange={property.onChange}
        onBlur={() => {
          if (property.value === '' || property.value === '0') {
            property.setError('Value can not be empty!');
          } else if (name === 'cartValue') {
            dispatch(changeValue(parseFloat(property.value)));
          } else if (name === 'deliveryDistance') {
            dispatch(changeDistance(Number(property.value)));
          } else {
            dispatch(changeItemCount(Number(property.value)));
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
