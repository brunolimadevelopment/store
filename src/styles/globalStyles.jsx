import { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle`

    * {
        padding: 0;
        margin: 0;
        font-family: 'Montserrat', sans-serif;
    }
    
    body {
        font-family: 'Montserrat', sans-serif; 
        background-color: ${({ theme }) => theme.colors.secondary};
    }
    
    input, button, textarea, select {
        font-family: 'Montserrat', sans-serif; 
    }

    input:focus, textarea:focus, select:focus {
        outline: none;
    }

    a {
        text-decoration: none;
        color: ${({ theme }) => theme.colors.secondary};

        &:hover {
            filter: opacity(0.8);
        }
    }

`
export default GlobalStyle