import axios from 'axios';

const BASE_URL = `${process.env.NEXT_PUBLIC_BASE_URL}`;

export const instance = axios.create({
    baseURL: BASE_URL,
});
