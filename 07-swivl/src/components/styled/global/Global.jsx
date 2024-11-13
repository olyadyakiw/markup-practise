import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100..900&family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap');

    *,
    &::before,
    &::after {
        box-sizing: border-box;   
    }

    body {
        font-family: 'Open Sans';
        font-size: 16px;
    }
`

export default GlobalStyles