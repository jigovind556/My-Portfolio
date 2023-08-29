import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import ThemeContext from './ThemeContext';
import { defaultTheme } from './themeColors';
import Left from './component/main/left';
import Center from './component/main/center';
import Right from './component/main/right';
import './index.css';

function App() {
  const [theme, setTheme] = useState(defaultTheme);

  return (
    <ThemeProvider theme={theme}>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <AppContainer className="main-page">
          <Left />
          <Center theme={theme}/>
          <Right theme={theme} setTheme={setTheme} />
        </AppContainer>
      </ThemeContext.Provider>
    </ThemeProvider>
  );
}

const AppContainer = styled.div`
  background: linear-gradient(
    to right,
    ${props => props.theme.primary},
    ${props => props.theme.secondary}
  );
  /* Other global styles */
`;

export default App;
