import { Route, Routes } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material';
import Calculator from './features/calculator/Calculator';
import { FeeCalculator } from './features/calculator/components';

export default function App() {
  const theme = createTheme({
    typography: {
      fontFamily: "'Hanken Grotesk', sans-serif",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Calculator />} />
        <Route path="/order" element={<FeeCalculator />} />
      </Routes>
    </ThemeProvider>
  );
}
