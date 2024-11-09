import { instance } from '@/context/axios';

export const getStore = async () => {
    const store = await instance
        .get('/store')
        .then(({ data }) => {
            return data.data[0];
        })
        .catch((err) => console.log(err));
    return store;
};
