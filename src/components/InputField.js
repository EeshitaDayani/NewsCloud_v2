import React, { useState } from 'react';
import TextField from '@mui/material/TextField';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export default function InputField({ onEnter }) {
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      // Call the onEnter callback with the current input value
      if (onEnter) {
        onEnter(e.target.value);
      }
    }
  };

  return (
    <div>
      <div style={{ zIndex:1 }} >
        <ThemeProvider theme={darkTheme}>
          <TextField id="outlined-basic" label="Keyword" variant="outlined" onKeyPress={handleKeyPress} />
        </ThemeProvider>
      </div>
    </div>
    
  );
}