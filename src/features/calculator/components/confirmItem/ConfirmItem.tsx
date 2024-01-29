import { Box, Typography, useTheme } from '@mui/material';

export interface ConfirmItemType {
  name: string;
  value: number | string;
}

export default function ConfirmItem(props: ConfirmItemType) {
  const theme = useTheme();

  const { name, value } = props;

  const nameWithSpace = name.replace(/([A-Z])/g, ' $1');
  const displayName =
    nameWithSpace.charAt(0).toUpperCase() + nameWithSpace.slice(1);

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        padding: theme.spacing(2, 2),
        alignItems: 'center',
      }}
    >
      <Typography variant="h5">{displayName}</Typography>
      <Typography
        variant="subtitle1"
        data-test-id={`confirm${displayName.replace(/\s/g, '')}`}
      >
        {name === 'cartValue' && '\u20AC '}
        {value}
        {name === 'deliveryDistance' && ' m'}
      </Typography>
    </Box>
  );
}
