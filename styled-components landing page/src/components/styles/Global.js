import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`

  * {
    box-sizing: border-box;
    margin:0;
    pading:0;
  }

  body {
  
    color: hsl(192, 100%, 9%);
    font-family: 'Poppins', sans-serif;
    font-size: 1.15em;
    margin: 0;
  }

  p {
    opacity: 0.6;
    line-height: 1.5;
  }
`

export default GlobalStyles
