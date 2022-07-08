import {
    ApolloClient,
    InMemoryCache,
    NormalizedCacheObject,
    createHttpLink,
} from "@apollo/client";
import { setContext } from "apollo-link-context";

let apolloClient: ApolloClient<NormalizedCacheObject> | null = null;

const httpLink = createHttpLink({
    uri: "https://shostored.myshopify.com/api/2022-07/graphql.json",
});

const middlewareLink = setContext(() => ({
    headers: {
        "X-Shopify-Storefront-Access-Token": "648ef067bd944e0701857af440226615",
    },
}));

export const client = new ApolloClient({
    ssrMode: typeof window === "undefined",
    /* uri: middlewareLink.concat(httpLink), */
    link: middlewareLink.concat(httpLink),
    cache: new InMemoryCache(),
});

export const initializeApollo = () => {
    // For SSG and SSR always create a new Apollo Client
    if (typeof window === "undefined") {
        return client;
    }

    // Create the Apollo Client once in the client
    if (!apolloClient) {
        apolloClient = client;
    }

    return apolloClient;
};
