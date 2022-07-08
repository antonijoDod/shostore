/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CurrencyCode } from "./globalTypes";

// ====================================================
// GraphQL query operation: GetProducts
// ====================================================

export interface GetProducts_products_edges_node_priceRange_minVariantPrice {
  __typename: "MoneyV2";
  /**
   * Decimal money amount.
   */
  amount: any;
  /**
   * Currency of the money.
   */
  currencyCode: CurrencyCode;
}

export interface GetProducts_products_edges_node_priceRange_maxVariantPrice {
  __typename: "MoneyV2";
  /**
   * Decimal money amount.
   */
  amount: any;
  /**
   * Currency of the money.
   */
  currencyCode: CurrencyCode;
}

export interface GetProducts_products_edges_node_priceRange {
  __typename: "ProductPriceRange";
  /**
   * The lowest variant's price.
   */
  minVariantPrice: GetProducts_products_edges_node_priceRange_minVariantPrice;
  /**
   * The highest variant's price.
   */
  maxVariantPrice: GetProducts_products_edges_node_priceRange_maxVariantPrice;
}

export interface GetProducts_products_edges_node_featuredImage {
  __typename: "Image";
  /**
   * The location of the image as a URL.
   * 
   * If no transform options are specified, then the original image will be preserved including any pre-applied transforms.
   * 
   * All transformation options are considered "best-effort". Any transformation that the original image type doesn't support will be ignored.
   * 
   * If you need multiple variations of the same image, then you can use [GraphQL aliases](https: // graphql.org/learn/queries/#aliases).
   */
  url: any;
  /**
   * A word or phrase to share the nature or contents of an image.
   */
  altText: string | null;
}

export interface GetProducts_products_edges_node {
  __typename: "Product";
  /**
   * A globally-unique identifier.
   */
  id: string;
  /**
   * The product’s title.
   */
  title: string;
  /**
   * The product’s vendor name.
   */
  vendor: string;
  /**
   * A human-friendly unique string for the Product automatically generated from its title.
   * They are used by the Liquid templating language to refer to objects.
   */
  handle: string;
  /**
   * The price range.
   */
  priceRange: GetProducts_products_edges_node_priceRange;
  /**
   * The featured image for the product.
   * 
   * This field is functionally equivalent to `images(first: 1)`.
   */
  featuredImage: GetProducts_products_edges_node_featuredImage | null;
}

export interface GetProducts_products_edges {
  __typename: "ProductEdge";
  /**
   * The item at the end of ProductEdge.
   */
  node: GetProducts_products_edges_node;
}

export interface GetProducts_products {
  __typename: "ProductConnection";
  /**
   * A list of edges.
   */
  edges: GetProducts_products_edges[];
}

export interface GetProducts {
  /**
   * List of the shop’s products.
   */
  products: GetProducts_products;
}
