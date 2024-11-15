import React from 'react';
import { twMerge } from 'tailwind-merge';
import { ProductCardSkeleton } from '../common';

const ProductsListSkeleton = ({ PRODUCTS_PER_PAGE, className = '' }) => {
    return (
        <div
            className={twMerge(
                `grid gap-y-5 pb-5 sm:grid-cols-2 md:grid-cols-3`,
                className
            )}
        >
            {Array.from({ length: PRODUCTS_PER_PAGE }, () => null).map(
                (_, index) => (
                    <ProductCardSkeleton key={index} />
                )
            )}
        </div>
    );
};

export default ProductsListSkeleton;
