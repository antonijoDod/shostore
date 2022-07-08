/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CurrencyCode } from "./globalTypes";

// ====================================================
// GraphQL query operation: GetProduct
// ====================================================

export interface GetProduct_product_images_edges_node {
  __typename: "Image";
  /**
   * A unique identifier for the image.
   */
  id: string | null;
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

export interface GetProduct_product_images_edges {
  __typename: "ImageEdge";
  /**
   * The item at the end of ImageEdge.
   */
  node: GetProduct_product_images_edges_node;
}

export interface GetProduct_product_images {
  __typename: "ImageConnection";
  /**
   * A list of edges.
   */
  edges: GetProduct_product_images_edges[];
}

export interface GetProduct_product_collections_edges_node {
  __typename: "Collection";
  /**
   * A globally-unique identifier.
   */
  id: string;
  /**
   * The collection’s name. Limit of 255 characters.
   */
  title: string;
}

export interface GetProduct_product_collections_edges {
  __typename: "CollectionEdge";
  /**
   * The item at the end of CollectionEdge.
   */
  node: GetProduct_product_collections_edges_node;
}

export interface GetProduct_product_collections {
  __typename: "CollectionConnection";
  /**
   * A list of edges.
   */
  edges: GetProduct_product_collections_edges[];
}

export interface GetProduct_product_options {
  __typename: "ProductOption";
  /**
   * A globally-unique identifier.
   */
  id: string;
  /**
   * The product option’s name.
   */
  name: string;
  /**
   * The corresponding value to the product option name.
   */
  values: string[];
}

export interface GetProduct_product_variants_edges_node_image {
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

export interface GetProduct_product_variants_edges_node_selectedOptions {
  __typename: "SelectedOption";
  /**
   * The product option’s name.
   */
  name: string;
  /**
   * The product option’s value.
   */
  value: string;
}

export interface GetProduct_product_variants_edges_node_priceV2 {
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

export interface GetProduct_product_variants_edges_node {
  __typename: "ProductVariant";
  /**
   * A globally-unique identifier.
   */
  id: string;
  /**
   * The product variant’s title.
   */
  title: string;
  /**
   * Image associated with the product variant. This field falls back to the product image if no image is available.
   */
  image: GetProduct_product_variants_edges_node_image | null;
  /**
   * List of product options applied to the variant.
   */
  selectedOptions: GetProduct_product_variants_edges_node_selectedOptions[];
  /**
   * The product variant’s price.
   */
  priceV2: GetProduct_product_variants_edges_node_priceV2;
}

export interface GetProduct_product_variants_edges {
  __typename: "ProductVariantEdge";
  /**
   * The item at the end of ProductVariantEdge.
   */
  node: GetProduct_product_variants_edges_node;
}

export interface GetProduct_product_variants {
  __typename: "ProductVariantConnection";
  /**
   * A list of edges.
   */
  edges: GetProduct_product_variants_edges[];
}

export interface GetProduct_product {
  __typename: "Product";
  /**
   * The product’s title.
   */
  title: string;
  /**
   * A human-friendly unique string for the Product automatically generated from its title.
   * They are used by the Liquid templating language to refer to objects.
   */
  handle: string;
  /**
   * Stripped description of the product, single line with HTML tags removed.
   */
  description: string;
  /**
   * The product’s vendor name.
   */
  vendor: string;
  /**
   * List of images associated with the product.
   */
  images: GetProduct_product_images;
  /**
   * List of collections a product belongs to.
   */
  collections: GetProduct_product_collections;
  /**
   * A comma separated list of tags that have been added to the product.
   * Additional access scope required for private apps: unauthenticated_read_product_tags.
   */
  tags: string[];
  /**
   * The total quantity of inventory in stock for this Product.
   */
  totalInventory: number | null;
  /**
   * List of product options.
   */
  options: GetProduct_product_options[];
  /**
   * List of the product’s variants.
   */
  variants: GetProduct_product_variants;
}

export interface GetProduct {
  /**
   * Fetch a specific `Product` by one of its unique attributes.
   */
  product: GetProduct_product | null;
}

export interface GetProductVariables {
  handle?: string | null;
}
