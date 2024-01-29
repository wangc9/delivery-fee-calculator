import { Box, Typography } from '@mui/material';
import logo from '../../../../assets/Wolt-logo.jpg';

export interface HeaderPropsType {
  /** The title of the page to be displayed. */
  title: string;
}

export default function Header(props: HeaderPropsType) {
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
