import { getStore } from '@/api/store/api';
import React from 'react';

const Policy = async () => {
    const store = await getStore();
    return (
        <ul className="list-disc space-y-2 px-5 py-2 text-sm">
            {store?.metadata?.policy?.map((item, index) => {
                return <li key={index}>{item?.title}</li>;
            })}
        </ul>
    );
};

export default Policy;
