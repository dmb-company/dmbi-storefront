import { instance } from '@/context/axios';

export const getProductCategories = async () => {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    const res = await instance
        .get('/store/categories')
        .then(({ data }) => data.categories)
        .catch((err) => console.log(err));
    return res;
};
