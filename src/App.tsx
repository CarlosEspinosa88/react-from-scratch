import React from 'react';
import { ThemeProvider } from '@emotion/react';
import { hot } from 'react-hot-loader';
import { theme } from '@styles/theme';
import { globalStyles } from '@styles/globalStyles';
import Home from './pages';

function App() {
  return (
    <ThemeProvider theme={theme}>
      {globalStyles}
      <Home />
    </ThemeProvider>
  );
}

export default hot(module)(App);
