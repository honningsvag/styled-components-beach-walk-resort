import React from 'react';
import { ThemeProvider } from 'styled-components';
import { redTheme, blueTheme, greenTheme } from './components/themes';
import Navbar from './components/Navbar';

function App() {
  return (
    <ThemeProvider theme={redTheme}>
      <main>
        <Navbar />
      </main>
    </ThemeProvider>
  );
}

export default App;
