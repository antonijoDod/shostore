import {
    ApolloClient,
    InMemoryCache,
    NormalizedCacheObject,
    createHttpLink,
} from "@apollo/client";
import { setContext } from "apollo-link-context";

let apolloClient: ApolloClient<NormalizedCacheObject> | null = null;

const httpLink = createHttpLink({
    uri: `${process.env.NEXT_PUBLIC_SHOPIFY_SHOP_URL}`,
});

const middlewareLink = setContext(() => ({
    headers: {
        "X-Shopify-Storefront-Access-Token":
            process.env.NEXT_PUBLIC_SHOPIFY_ACCESS_TOKEN,
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
