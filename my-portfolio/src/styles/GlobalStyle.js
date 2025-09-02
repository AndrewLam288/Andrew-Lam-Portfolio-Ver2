import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root { color-scheme: ${({ theme }) => theme.name}; }
  * { box-sizing: border-box; }
  html, body, #root { height: 100%; }

  body {
    margin: 0;
    font-family: 'Inter', system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif;
    background: ${({ theme }) => theme.colors.bg};
    color: ${({ theme }) => theme.colors.text};
  }

  a { color: inherit; text-decoration: none; }

  button, a, input {
    outline: none;
  }

  button:focus-visible, a:focus-visible, input:focus-visible {
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.focus};
    border-radius: 10px;
  }
`;

