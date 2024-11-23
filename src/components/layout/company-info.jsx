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

            <div className="col-span-2 hidden text-sm font-semibold text-red-500 lg:block">
                <p>
                    Hotline: <span>{store?.metadata?.hotline}</span>
                </p>
                <p>Hỗ trợ kỹ thuật: {store?.metadata?.support_hotline}</p>
            </div>
        </>
    );
};

export default CompanyInfo;
