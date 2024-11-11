import { instance } from '@/context/axios';

const { medusa } = require('@/context/config');

export const getProductTags = async (options) => {
    const productTags = await medusa.productTags
        .list(options)
        .then((res) => res.product_tags)
        .catch((err) => {
            console.log(err);
        });
    return productTags;
};

export const getProducts = async () => {
    const products = await instance
        .get('/store/products')
        .then(({ data }) => data?.products)
        .catch((err) => {
            console.log(err);
        });
    return products;
};

export const getProduct = async (id) => {
    const product = await instance
        .get('/store/products/' + id)
        .then(({ data }) => data)
        .catch((err) => console.log(err));
    return product;
};
