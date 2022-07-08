import React, { FC } from "react";
import { Box, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import NextLink from "next/link";

interface Props {
    title: string;
    tag: string;
    slug: string;
    thumbnail: string;
    thumbnailAltText: string | null | undefined;
    price: string;
}

const ProductItem: FC<Props> = ({
    title,
    tag,
    slug,
    price,
    thumbnail,
    thumbnailAltText,
}) => {
    return (
        <NextLink href={`/product/${slug}`}>
            <Box cursor="pointer">
                <Box
                    h="400px"
                    w="full"
                    position="relative"
                    overflow="hidden"
                    _hover={{
                        transform: "scale(1.1)",
                        transition: "100ms linear",
                    }}
                >
                    <Image
                        src={
                            typeof thumbnail === "string"
                                ? thumbnail
                                : "/assets/images/placeholder_300x300.png"
                        }
                        layout="fill"
                        objectFit="contain"
                        objectPosition="center"
                        alt={thumbnailAltText}
                    />
                    <Box position="absolute" p="8"></Box>
                </Box>
                <Box color="primary.500" mt="8" mb="2">
                    {tag}
                </Box>
                <Heading size="md" mb="2">
                    {title}
                </Heading>
                <Text>{price}</Text>
            </Box>
        </NextLink>
    );
};

export default ProductItem;
