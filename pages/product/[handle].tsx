import React, { FC, useState } from "react";
import {
    Layout,
    RadioCard,
    Button,
    Hero,
    ProductOptions,
    ProductForm,
    ProductGallery,
} from "@components";
import {
    Box,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    Container,
    Heading,
    Text,
    SimpleGrid,
    Divider,
    Stack,
    useRadioGroup,
    TableContainer,
    Table,
    Tbody,
    Tr,
    Td,
    IconButton,
    useToast,
    HStack,
} from "@chakra-ui/react";

import Image from "next/image";
import NextLink from "next/link";

import { client } from "@services/graphql";
import { GET_PRODUCTS } from "@services/products";
import { GET_PRODUCT } from "@services/product";
import { GetProducts } from "@graphqlTypes/GetProducts";
import { GetProduct, GetProduct_product } from "@graphqlTypes/GetProduct";

import {
    MdOutlineHorizontalRule,
    MdOutlineAdd,
    MdOutlineFavorite,
} from "react-icons/md";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { FreeMode, Navigation, Thumbs } from "swiper";
import { formatPrice } from "@utils/price";
import { GetStaticPaths, GetStaticProps } from "next";

const Product = ({ product }: { product: GetProduct_product }) => {
    const toast = useToast();

    return (
        <Layout>
            {/* Header */}
            <Hero
                title="Our shop"
                breadcrumbs={[
                    { name: "Home", url: "/" },
                    { name: "Shop", url: "/shop" },
                ]}
            />
            {/* Product container */}
            <Container maxW="container.xl" mt="20">
                <SimpleGrid columns={{ base: 1, md: 2 }} gap="8">
                    <ProductGallery product={product} />
                    <ProductForm product={product} />
                </SimpleGrid>
            </Container>
        </Layout>
    );
};

export default Product;

export const getStaticPaths: GetStaticPaths = async () => {
    const { data } = await client.query<GetProducts>({ query: GET_PRODUCTS });

    const paths = data.products.edges.map((product) => ({
        params: { handle: product.node.handle },
    }));

    return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({
    params: { handle },
}: {
    params: { handle: string };
}) => {
    /* const res = await medusaServer(`/products/${params.id}`);
    const { product } = await res.data;

    return { props: { product } }; */

    const {
        data: { product },
    } = await client.query<GetProduct>({
        query: GET_PRODUCT,
        variables: { handle: handle },
    });

    return {
        props: { product },
    };
};
