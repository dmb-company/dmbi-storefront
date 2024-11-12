import { getBanners } from '@/api/banners/api';
import { getStore } from '@/api/store/api';
import { BreadCrumb } from '@/components/common';
import { ProductsTemplate, Standee } from '@/components/products';
import { Suspense } from 'react';

export const metadata = {
    title: 'DMB Industrial | Sản phẩm',
    description:
        'DMB Industrial, chuyên cung cấp các sản phẩm công nghiệp, máy móc, thiết bị công nghiệp, dịch vụ sửa chữa, bảo trì máy móc công nghiệp',
};

export const dynamic = 'force-dynamic';

const ProductsPage = async () => {
    const breadcrumb = [
        {
            title: 'Trang chủ',
            href: '/',
        },
        {
            title: 'Tất cả sản phẩm',
            href: '/products',
        },
    ];

    return (
        <div className="mx-auto min-h-[80vh] max-w-screen-2xl">
            <BreadCrumb
                className={'px-3 py-3 md:px-5 lg:px-8'}
                data={breadcrumb}
            />
            <Suspense>
                <ProductsTemplate />
            </Suspense>
        </div>
    );
};

export default ProductsPage;
