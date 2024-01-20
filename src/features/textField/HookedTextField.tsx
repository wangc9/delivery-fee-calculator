import { Box, Typography, useTheme, TextField } from '@mui/material';
import { useField } from '../../app/hooks';

export interface TextFieldType {
  /** Camel case of the field name. */
  name: string;
  type: 'float' | 'number';
}

export default function HookedTextField(prop: TextFieldType) {
  const { type, name } = prop;

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
          'aria-label': displayName,
        }}
        required
        name={`${name}-textfield`}
        value={property.value}
        onChange={property.onChange}
        variant="outlined"
        error={!!property.error}
        helperText={property.error}
      />
    </Box>
  );
}
