import { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from '../../styles/GlobalStyle';
import dark from '../../styles/themes/dark';
import light from '../../styles/themes/light';
import Header from '../Header';
import Router from '../Router';

function App() {
  const [theme, setTheme] = useState<string>('light');

  function toggleTheme() {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }

  return (
    <div className="App">
      <GlobalStyle />
      <ThemeProvider theme={theme === 'light' ? light : dark}>
        <Header currentTheme={theme} changeTheme={toggleTheme} />
        <Router />
      </ThemeProvider>
    </div>
  );
}

export default App;