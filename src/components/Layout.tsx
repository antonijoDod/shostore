import React, { FC } from "react";
import { Box } from "@chakra-ui/react";
import { Header, Footer } from "@components";

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
    return (
        <>
            <Header />
            <Box as="main">{children}</Box>
            <Footer />
        </>
    );
};

export default Layout;
