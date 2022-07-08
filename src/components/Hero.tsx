import React, { FC } from "react";
import Image from "next/image";
import NextLink from "next/link";
import {
    Box,
    Container,
    Heading,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
} from "@chakra-ui/react";

type Breadcrumb = {
    name: string;
    url: string;
};

type HeroProps = {
    title: string;
    breadcrumbs: Breadcrumb[];
};

const Hero: FC<HeroProps> = ({ title, breadcrumbs }) => {
    return (
        <Box as="section" h="350px" position="relative">
            <Image
                src="/assets/images/page-title.png"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
            />
            <Container
                maxW="container.xl"
                position="inherit"
                h="full"
                display="flex"
                justifyContent="center"
                alignItems="center"
            >
                <Box textAlign="center">
                    <Heading mb="4">{title}</Heading>
                    <Breadcrumb>
                        {breadcrumbs &&
                            breadcrumbs.map(({ name, url }, index) => (
                                <BreadcrumbItem key={index}>
                                    <BreadcrumbLink as={NextLink} href={url}>
                                        {name}
                                    </BreadcrumbLink>
                                </BreadcrumbItem>
                            ))}
                    </Breadcrumb>
                </Box>
            </Container>
        </Box>
    );
};

export default Hero;
