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
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getProducts(query, PRODUCTS_PER_PAGE)
            .then((products) => {
                setProducts(products);
                setIsLoading(false);
            })
            .catch((err) => {
                setIsLoading(false);
                console.log(err);
            });
        setIsLoading(true);
    }, [query]);

    const fetchMoreData = () => {
        getProducts(query, PRODUCTS_PER_PAGE, index)
            .then((products) => {
                setProducts((prev) => [...prev, ...products]);

                products.length > 0 ? setHasMore(true) : setHasMore(false);
            })
            .catch((err) => {
                console.log(err);
            });
        setIndex((prevIndex) => prevIndex + 5);
    };

    if (isLoading) return <ProductsListSkeleton PRODUCTS_PER_PAGE={6} />;

    if (products.length === 0) return <div>Không có sản phẩm nào!</div>;

    return (
        <InfiniteScroll
            dataLength={products.length}
            next={fetchMoreData}
            hasMore={hasMore}
            loader={<div>Loading...</div>}
        >
            <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
                {products?.map((product, index) => (
                    <ProductCard key={index} product={product} />
                ))}
            </div>
        </InfiniteScroll>
    );
};

export default ProductsList;
