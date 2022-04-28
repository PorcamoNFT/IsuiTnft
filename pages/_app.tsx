import { AppProps } from "next/app";
import { ChakraProvider } from '@chakra-ui/react';
import theme from "../theme";
import '../styles/theme.css';
import Header from "../Components/Header";


const App = ({ Component, pageProps}: AppProps) => {

    return (
        
        <ChakraProvider theme={theme}>
               <Header />
        <Component {...pageProps}  />
        </ChakraProvider>
    )

};

export default App;