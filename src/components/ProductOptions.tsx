import { HStack, Stack, Box } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";

const ProductOptions = ({
    name,
    values,
    selectedOptions,
    setOptions,
    productInventory,
    selectedVariant,
}) => {
    return (
        <Stack
            className="mt-3"
            direction={{ base: "column", md: "row" }}
            alignItems="center"
        >
            <Box as="legend">{name}</Box>
            <HStack className="inline-flex items-center flex-wrap">
                {values.map((value) => {
                    const id = `option-${name}-${value}`;
                    const checked = selectedOptions[name] === value;

                    return (
                        <label key={id} htmlFor={id}>
                            <input
                                style={{ display: "none" }}
                                type="radio"
                                id={id}
                                name={`option-${name}`}
                                value={value}
                                checked={checked}
                                onChange={() => {
                                    setOptions(name, value);
                                }}
                            />
                            <Box
                                cursor="pointer"
                                padding={2}
                                mt="3"
                                rounded="none"
                                bgColor={checked ? "primary.500" : "gray.100"}
                                textColor={checked ? "gray.100" : "gray.900"}
                            >
                                <span className="px-2">{value}</span>
                            </Box>
                        </label>
                    );
                })}
            </HStack>
        </Stack>
    );
};

export default ProductOptions;
