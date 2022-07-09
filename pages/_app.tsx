import React from "react";
import { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "@definitions/chakra/theme";
import { initializeApollo } from "@services/graphql";
import { ApolloProvider } from "@apollo/client";
import { appWithTranslation } from "@i18n";
import CartProvider from "src/context/cartContext";
import "@fontsource/rubik/300.css";
import "@fontsource/rubik/400.css";
import "@fontsource/rubik/500.css";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
    const apolloClient = initializeApollo();

    return (
        <CartProvider>
            <ChakraProvider theme={theme}>
                <ApolloProvider client={apolloClient}>
                    <Component {...pageProps} />
                </ApolloProvider>
            </ChakraProvider>
        </CartProvider>
    );
}

export default MyApp;
