import { getProducts } from '@/api/products/api';
import React from 'react';
import ProductCard from '../common/product-card';

const ListSimilarProducts = async () => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const products = await getProducts();
    return (
        <>
            {products?.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </>
    );
};

export default ListSimilarProducts;
