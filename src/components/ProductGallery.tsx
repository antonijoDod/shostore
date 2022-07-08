import React, { useState } from "react";

import { Box } from "@chakra-ui/react";
import { FreeMode, Navigation, Thumbs } from "swiper";
import { GetProduct_product } from "@graphqlTypes/GetProduct";

import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

const ProductGallery = ({ product }: { product: GetProduct_product }) => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <Box>
            <Swiper
                style={{
                    "--swiper-navigation-color": "#fe4536",
                    "--swiper-pagination-color": "#fe4536",
                    height: 500,
                }}
                spaceBetween={10}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs]}
            >
                {product.images.edges.map(({ node }) => (
                    <SwiperSlide
                        key={node.id}
                        style={{
                            position: "relative",
                            height: "100%",
                        }}
                    >
                        <Image
                            src={node.url}
                            alt={node.altText}
                            layout="fill"
                            objectFit="contain"
                            objectPosition="center"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
            <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                style={{ height: 150, marginTop: 16 }}
            >
                {product.images.edges.map(({ node }) => (
                    <SwiperSlide
                        key={node.id}
                        style={{
                            position: "relative",
                            height: "100%",
                        }}
                    >
                        <Image
                            src={node.url}
                            alt={node.altText}
                            layout="fill"
                            objectFit="contain"
                            objectPosition="center"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </Box>
    );
};

export default ProductGallery;
