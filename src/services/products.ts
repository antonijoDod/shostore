import { gql } from "@apollo/client";

export const GET_PRODUCTS = gql`
    query GetProducts {
        products(first: 6) {
            edges {
                node {
                    id
                    title
                    vendor
                    handle
                    priceRange {
                        minVariantPrice {
                            amount
                            currencyCode
                        }
                        maxVariantPrice {
                            amount
                            currencyCode
                        }
                    }
                    featuredImage {
                        url
                        altText
                    }
                }
            }
        }
    }
`;
