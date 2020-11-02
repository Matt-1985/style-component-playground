import styled, { keyframes, ThemeProvider } from 'styled-components/macro';
import React, { useState } from 'react';
import GlobalStyle from './GlobalStyle';
import logo from './logo.svg';

const logoSpin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Wrapper = styled.div`
  text-align: center;

  header {
    background-color: ${(props) => props.theme.backgroundColor};
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: ${(props) => props.theme.fontColor};
  }

  header img {
    height: 40vmin;
    pointer-events: none;
  }

  @media (prefers-reduced-motion: no-preference) {
    header img {
      animation: ${logoSpin} infinite 20s linear;
    }
  }
`;

const Link = styled.a`
  color: ${(props) => props.theme.primaryColor};
`;

const dark = {
  primaryColor: '#000000',
  backgroundColor: '#332E33',
  fontColor: '#332E33',
};

const pride = {
  primaryColor: '#E21AE8',
  backgroundColor: '#E8BF31',
  fontColor: '#02E8BE',
};

function App() {
  const [theme, setTheme] = useState(dark);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Wrapper>
        <button
          type="button"
          onClick={() => setTheme(theme === dark ? pride : dark)}
        >
          PUSH ME
        </button>
        <header>
          <img src={logo} alt="logo" />
          <p>
            Edit
            <code>src/App.js</code>
            and save to reload.
          </p>
          <Link
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </Link>
        </header>
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
