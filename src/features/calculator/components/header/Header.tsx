import { Box, Typography } from '@mui/material';
import React from 'react';
import logo from '../../../../assets/Wolt-logo.jpg';

/**
 * Type definition for {@link Header}.
 */
export interface HeaderPropsType {
  /** The title of the page to be displayed. */
  title: string;
}

/**
 * Display Wolt's logo and title for the page.
 *
 * @param props {@link HeaderPropsType}
 */
export default function Header(props: HeaderPropsType): React.JSX.Element {
  const { title } = props;
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <img src={logo} alt="A Wolt logo" height={100} />
      <Typography variant="h4" fontWeight={700} data-test-id={`header${title}`}>
        {title}
      </Typography>
    </Box>
  );
}
