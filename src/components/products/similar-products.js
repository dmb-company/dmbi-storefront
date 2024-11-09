'use client';
import React from 'react';
import { ProductCardSkeleton, Slider, Title } from '../common';
import ProductCard from '../common/product-card';

const SimilarProducts = () => {
    const { products, isLoading } = useProducts({
        limit: 10,
        offset: 5,
    });

    return (
        <div>
            <Title className="md:px-0 md:text-xl">Sản phẩm tương tự</Title>
            <Slider
                className={
                    'auto-cols-[100%] sm:auto-cols-[50%] md:auto-cols-[33%] lg:auto-cols-[25%]'
                }
            >
                {isLoading
                    ? Array.from({ length: 5 }, () => null).map((item, i) => {
                          return <ProductCardSkeleton key={i} />;
                      })
                    : products?.map((product) => (
                          <ProductCard key={product.id} product={product} />
                      ))}
            </Slider>
        </div>
    );
};

export default SimilarProducts;
