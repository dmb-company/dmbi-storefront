import { instance } from '@/context/axios';

export const getBanners = async () => {
    const banners = await instance
        .get('/store/banners')
        .then(({ data }) => data.banners)
        .catch((err) => {
            throw err;
        });
    return banners;
};

// export const getBanners = async () => {
//     try {
//         const response = await fetch('http://localhost:3050/store/banners');

//         if (!response.ok) {
//             throw new Error(`Error: ${response.status} ${response.statusText}`);
//         }

//         const data = await response.json();
//         return data.banners;
//     } catch (err) {
//         throw err;
//     }
// };
