import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
            &:active,
            &:hover,
            &:focus {
              outline: 0;
              -webkit-tap-highlight-color: transparent;
            }
          }
          
          html {
            height: 100%;
            -ms-text-size-adjust: 100%;
            -webkit-text-size-adjust: 100%;
            -webkit-font-smoothing: antialiased;
            font-weight: 500;
            font-size: 15px;
            font-family: "SF Pro display", Tahoma, Geneva, Verdana, sans-serif;
          }
          
          body {
            height: 100%;
            background-color: transparent;
            padding: 0;
            margin: 0;
            overflow-x: hidden;
          }
          
          body,
          h1,
          h2,
          h3,
          h4,
          figure {
            margin: 0;
            padding: 0;
          }
          
          ul,
          ol {
            padding-left: 1.2rem;
            list-style: none;
          }
          
          a {
            color: $primary-color;
            text-decoration: none;
          }
          
          p {
            font-weight: 400;
            margin: 0 auto;
          }
        `;
