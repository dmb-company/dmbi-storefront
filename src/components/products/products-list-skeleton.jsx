import React from 'react';
import { ProductCardSkeleton } from '../common';

const ProductsListSkeleton = ({ PRODUCTS_PER_PAGE }) => {
    return (
        <div className="grid gap-y-5 sm:grid-cols-2 md:grid-cols-3">
            {Array.from({ length: PRODUCTS_PER_PAGE }, () => null).map(
                (_, index) => (
                    <ProductCardSkeleton key={index} />
                )
            )}
        </div>
    );
};

export default ProductsListSkeleton;
