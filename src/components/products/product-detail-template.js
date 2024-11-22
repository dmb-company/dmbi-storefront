import { getProduct } from '@/api/products/api';
import { BreadCrumb, Title } from '../common';
import TextViewer from '../homepage/about/text-view';
import News from './news';
import ProductGeneral from './product-general';
import ProductImage from './product-image';
import SimilarProducts from './similar-products';
import { Suspense } from 'react';
import Policy from './policy';
import Specifications from './specifications';

const ProductDetailTemplate = async ({ id }) => {
    const product = await getProduct(id);
    const breadcrumbData = [
        {
            title: 'Trang chủ',
            href: '/',
        },
        {
            title: 'Sản phẩm',
            href: '/products',
        },
        {
            title: product?.title,
            href: `/products/${id}`,
        },
    ];

    return (
        <div className="mx-auto mb-10 min-h-[80vh] max-w-screen-xl">
            <BreadCrumb className={'px-3 pt-5'} data={breadcrumbData} />
            <div className="grid grid-cols-12 gap-5">
                <div className="col-span-12 grid grid-cols-7 gap-3 rounded border bg-white px-3 py-5 shadow md:gap-3 md:px-5 lg:col-span-9">
                    <ProductImage
                        className="col-span-7 md:col-span-3"
                        images={product?.images?.images.map((image) => image)}
                    />
                    <ProductGeneral
                        className="col-span-7 md:col-span-4"
                        product={product}
                    />
                    <div className="col-span-7 overflow-hidden">
                        <Title className="px-0 text-base md:px-0 md:text-lg">
                            Mô tả
                        </Title>
                        <TextViewer content={product?.description} />
                    </div>
                </div>

                <div className="col-span-12 space-y-3 lg:col-span-3 lg:block">
                    <div className="space-y-3 rounded border bg-white shadow">
                        <Title className="bg-primary text-white md:px-2 md:py-1 md:text-base">
                            Chính sách hỗ trợ khách hàng
                        </Title>
                        <Suspense>
                            <Policy />
                        </Suspense>
                    </div>
                    <Specifications product={product} />
                    <Suspense>
                        <News />
                    </Suspense>
                </div>
            </div>
            <SimilarProducts />
        </div>
    );
};

export default ProductDetailTemplate;
