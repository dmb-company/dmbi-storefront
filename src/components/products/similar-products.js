import React, { Suspense } from 'react';
import { ProductCardSkeleton, Slider, Title } from '../common';
import ProductCard from '../common/product-card';
import { getProducts } from '@/api/products/api';
import ListSimilarProducts from './list-similar-products';

const SimilarProducts = () => {
    return (
        <div>
            <Title className="md:px-0 md:text-xl">Sản phẩm tương tự</Title>
            <Slider
                className={
                    'auto-cols-[100%] sm:auto-cols-[50%] md:auto-cols-[33%] lg:auto-cols-[25%]'
                }
            >
                {}
                <Suspense
                    fallback={Array.from({ length: 5 }, () => null).map(
                        (item, i) => {
                            return <ProductCardSkeleton key={i} />;
                        }
                    )}
                >
                    <ListSimilarProducts />
                </Suspense>
            </Slider>
        </div>
    );
};

export default SimilarProducts;
