import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { App } from 'components/App/App';
import { store, persistor } from './redux/store';

import 'modern-normalize';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from 'utils/theme';
// import { MyStyleReset } from 'utils/resetStyles';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <MyStyleReset /> */}
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter basename="goit-react-hw-08-phonebook">
          <ThemeProvider theme={theme}>
            <App />
          </ThemeProvider>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
