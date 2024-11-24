import { getStore } from '@/api/store/api';
import React from 'react';

const CompanyInfo = async () => {
    const store = await getStore();
    return (
        <>
            <div className="col-span-8 hidden text-center lg:block">
                <p className="text-xl font-semibold uppercase">{store?.name}</p>
                <p className="text-sm">{store?.metadata?.address[0].value}</p>
            </div>

            <div className="col-span-2 hidden space-y-1 text-sm font-semibold text-red-500 lg:block">
                <p className="flex animate-bounce items-center justify-center rounded-3xl border-2 border-red-300 px-3 py-1 text-red-500">
                    Hotline: <span>{store?.metadata?.hotline}</span>
                </p>
                <p className="flex animate-bounce items-center justify-center rounded-3xl border-2 border-red-300 px-3 py-1 text-red-500">
                    Hỗ trợ kỹ thuật: {store?.metadata?.support_hotline}
                </p>
            </div>
        </>
    );
};

export default CompanyInfo;
