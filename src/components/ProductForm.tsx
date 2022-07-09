import { useState, useEffect } from "react";
import {
    Box,
    Heading,
    Divider,
    TableContainer,
    Table,
    Tbody,
    Tr,
    Td,
    HStack,
    Button,
    Text,
} from "@chakra-ui/react";
import { formatPrice } from "@utils/price";
import React from "react";
import ProductOptions from "./ProductOptions";
import { GetProduct_product } from "@graphqlTypes/GetProduct";

const ProductForm = ({ product }: { product: GetProduct_product }) => {
    // Initial default values for option - preselected product options
    const defaultValues = {};
    product.options.map((item) => {
        defaultValues[item.name] = item.values[0];
    });

    // Restructure data
    const allVariantOptions = product.variants.edges?.map((variant) => {
        const allOptions = {};

        variant.node.selectedOptions.map((item) => {
            allOptions[item.name] = item.value;
        });

        return {
            id: variant.node.id,
            title: product.title,
            handle: product.handle,
            image: variant.node.image?.url,
            options: allOptions,
            variantTitle: variant.node.title,
            variantPrice: variant.node.priceV2,
            availableForSale: variant.node.availableForSale,
            variantQuantity: 1,
        };
    });

    // Product for show, change on selection different variant
    const [selectedVariant, setSelectedVariant] = useState(
        allVariantOptions[0],
    );

    const [selectedOptions, setSelectedOptions] = useState(defaultValues);

    // When selection different option, this will change selectedVariant show different data for product
    function setOptions(name: string, value: string | number) {
        setSelectedOptions((prevState) => {
            return {
                ...prevState,
                [name]: value,
            };
        });

        const selection = {
            ...selectedOptions,
            [name]: value,
        };

        allVariantOptions.map((item) => {
            if (JSON.stringify(item.options) === JSON.stringify(selection)) {
                setSelectedVariant(item);
            }
        });
    }

    return (
        <Box textAlign={{ base: "center", md: "left" }}>
            <Text textTransform="uppercase" fontSize="xl" color="gray.600">
                {/*  {product.tags.map((tag, index) => (
                                <Text key={index} textTransform="uppercase">
                                    {tag}
                                </Text>
                            ))} */}
                {product.vendor}
            </Text>
            <Heading size="xl" as="h1">
                {product.title}
            </Heading>
            <Text fontSize="4xl" fontWeight="light" color="primary.500">
                {formatPrice(selectedVariant.variantPrice)}
            </Text>
            <Divider />
            {product.options &&
                product.options.map(({ id, name, values }) => (
                    <ProductOptions
                        key={id}
                        name={name}
                        values={values}
                        selectedOptions={selectedOptions}
                        setOptions={setOptions}
                    />
                ))}
            <Text my="8">{product.description}</Text>
            <Divider />
            <TableContainer my="8">
                <Table variant="simple" fontSize="sm">
                    <Tbody>
                        <Tr>
                            <Td
                                w="50px"
                                fontWeight="500"
                                color="gray.900"
                                paddingLeft="0"
                            >
                                Tags:
                            </Td>
                            <Td color="gray.600">
                                <HStack>
                                    {product.tags?.map((tag, index) => (
                                        <Button
                                            size="xs"
                                            key={index}
                                            colorScheme="blackAlpha"
                                        >
                                            {tag}
                                        </Button>
                                    ))}
                                </HStack>
                            </Td>
                        </Tr>
                        <Tr>
                            <Td
                                w="50px"
                                fontWeight="500"
                                color="gray.900"
                                paddingLeft="0"
                            >
                                Product Code:
                            </Td>
                            <Td color="gray.600">XZ524</Td>
                        </Tr>
                        <Tr>
                            <Td
                                w="50px"
                                fontWeight="500"
                                color="gray.900"
                                paddingLeft="0"
                            >
                                Stock:
                            </Td>
                            <Td color="gray.600">
                                {selectedVariant.availableForSale ? (
                                    <Box color="green.500">In stock</Box>
                                ) : (
                                    <Box color="red.500">Not available</Box>
                                )}
                            </Td>
                        </Tr>
                    </Tbody>
                </Table>
            </TableContainer>
            {/*   <HStack>
                            <HStack bg="primary.100" p={2} rounded="full">
                                <IconButton
                                    icon={<MdOutlineHorizontalRule />}
                                    isRound
                                    aria-label="Remove product"
                                    bg="white"
                                />
                                <Text px="4" fontSize="sm" color="gray.600">
                                    1
                                </Text>
                                <IconButton
                                    icon={<MdOutlineAdd />}
                                    isRound
                                    aria-label="Add product"
                                    bg="white"
                                />
                            </HStack>
                            <Box bg="primary.100" p="2" rounded="full">
                                <IconButton
                                    icon={<MdOutlineFavorite />}
                                    isRound
                                    aria-label="Add to wishlist"
                                    bg="transparent"
                                    p="2"
                                    color="primary.500"
                                    _active={{ bg: "primary.500" }}
                                />
                            </Box>
                        </HStack> */}
            <Button
                rounded="none"
                mt="8"
                size="lg"
                _hover={{ bgColor: "primary.100", color: "black" }}
            >
                ADD TO CART
            </Button>
        </Box>
    );
};

export default ProductForm;
