'use client';
import React, { useEffect, useState } from 'react';
import ProductCard from '../common/product-card';
import { getProducts } from '@/api/products/api';
import { PRODUCTS_PER_PAGE } from '@/constants/constants';
import InfiniteScroll from 'react-infinite-scroll-component';
import ProductsListSkeleton from './products-list-skeleton';

const ProductsList = ({ query }) => {
    const [products, setProducts] = useState([]);
    const [hasMore, setHasMore] = useState(true);
    const [index, setIndex] = useState(PRODUCTS_PER_PAGE);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        setIsLoading(true);
        setError(null);
        getProducts(query, PRODUCTS_PER_PAGE)
            .then((products) => {
                setProducts(products);
                setHasMore(products.length === PRODUCTS_PER_PAGE); // Check if more data is available
                setIsLoading(false);
            })
            .catch((err) => {
                setIsLoading(false);
                setError("Failed to load products. Please try again.");
                console.log(err);
            });
    }, [query]);

    const fetchMoreData = () => {
        getProducts(query, PRODUCTS_PER_PAGE, index)
            .then((products) => {
                setProducts((prev) => [...prev, ...products]);
                setHasMore(products.length === PRODUCTS_PER_PAGE);
                setIndex((prevIndex) => prevIndex + PRODUCTS_PER_PAGE);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    if (isLoading) return <ProductsListSkeleton PRODUCTS_PER_PAGE={6} />;

    if (error) return <div>{error}</div>;

    if (products.length === 0) return <div>Không có sản phẩm nào!</div>;

    return (
        <InfiniteScroll
            dataLength={products.length}
            next={fetchMoreData}
            hasMore={hasMore}
        >
            <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
                {products?.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </InfiniteScroll>
    );
};

export default ProductsList;
