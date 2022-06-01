import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { getDesignTokens } from './components/Theme';
import { ImageUploader } from './components/ImageUploader/ImageUploader';

function App() {
  const theme = createTheme(getDesignTokens('light'));

  return (
    <ThemeProvider theme={theme}>
      <ImageUploader />
    </ThemeProvider>
  );
}

export default App;
