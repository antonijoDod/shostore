import { gql } from "@apollo/client";

export const GET_PRODUCT = gql`
    query GetProduct($handle: String) {
        product(handle: $handle) {
            title
            handle
            description
            vendor
            images(first: 250) {
                edges {
                    node {
                        id
                        url
                        altText
                    }
                }
            }
            collections(first: 250) {
                edges {
                    node {
                        id
                        title
                    }
                }
            }
            tags
            totalInventory
            options {
                id
                name
                values
            }
            variants(first: 250) {
                edges {
                    node {
                        id
                        title
                        availableForSale
                        image {
                            url
                            altText
                        }
                        selectedOptions {
                            name
                            value
                        }
                        priceV2 {
                            amount
                            currencyCode
                        }
                    }
                }
            }
        }
    }
`;
