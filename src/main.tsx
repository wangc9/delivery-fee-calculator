import React from 'react';
import { createRoot } from 'react-dom/client';
// import { Provider } from 'react-redux';
// import App from './App';
// import { store } from './app/store';
import './index.css';
import { Box } from '@mui/material';
import HookedTextField from './features/textField/HookedTextField';

const container = document.getElementById('root');

if (container) {
  const root = createRoot(container);

  root.render(
    <React.StrictMode>
      {/* <Provider store={store}> */}
      <main>
        <fieldset style={{ borderColor: 'transparent' }}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              width: {
                xs: '100vw',
                sm: '100vw',
                md: '100vw',
                lg: 900,
                xl: 900,
              },
              backgroundColor: '#ffffff',
              boxShadow: 3,
              padding: '16 8 16 8',
            }}
          >
            <HookedTextField type="float" name="cartValue" />
            <HookedTextField type="number" name="deliveryDistance" />
            <HookedTextField type="number" name="numberOfItems" />
          </Box>
        </fieldset>
      </main>

      {/* </Provider> */}
    </React.StrictMode>,
  );
} else {
  throw new Error(
    "Root element with ID 'root' was not found in the document. Ensure there is a corresponding HTML element with the ID 'root' in your HTML file.",
  );
}
