import { GetProducts_products_edges_node_priceRange_minVariantPrice } from "@graphqlTypes/GetProducts";

// Get price api and format price in easy readable format, return string price ex: 25,00 Euro
export function formatPrice(
    price: GetProducts_products_edges_node_priceRange_minVariantPrice,
): string {
    const local = "uk";

    return new Intl.NumberFormat(local, {
        style: "currency",
        currency: price.currencyCode,
        minimumFractionDigits: 2,
    }).format(price.amount);
}
