import React from 'react';
import ProductItem from './detail/products-card';
import { getProducts } from '@/api/products/api';

const ProductsList = async () => {
    const products = await getProducts();
    return (
        <div className="flex md:block md:w-1/4 md:justify-between">
            {products?.map((product) => (
                <ProductItem key={product.id} product={product} />
            ))}
        </div>
    );
};

export default ProductsList;
