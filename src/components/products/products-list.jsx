import React from 'react';
import ProductCard from '../common/product-card';
import { getProducts } from '@/api/products/api';

const ProductsList = async () => {
    const products = await getProducts();
    return (
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
            {products?.map((product, index) => (
                <ProductCard key={index} product={product} />
            ))}
        </div>
    );
};

export default ProductsList;
