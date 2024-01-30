/* eslint-disable react/destructuring-assignment */
import { Box, useTheme } from '@mui/material';
import { PropsWithChildren } from 'react';

export default function ContentContainer(
  props: PropsWithChildren,
): React.JSX.Element {
  const theme = useTheme();
  return (
    <Box
      data-test-id="contentContainer"
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
      {props.children}
    </Box>
  );
}
