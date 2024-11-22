import { Suspense } from 'react';
import { getProduct } from '@/api/products/api';
import { ProductDetailTemplate } from '@/components/products';

// Define the metadata generator
export const generateMetadata = async ({ params }) => {
    return {
        title: await getProduct(params.id).then((res) => {
            return res.title;
        }),
        description:
            'DMB Industrial, chuyên cung cấp các sản phẩm công nghiệp, máy móc, thiết bị công nghiệp, dịch vụ sửa chữa, bảo trì máy móc công nghiệp',
    };
};

// Product detail page component
const ProductDetailPage = async ({ params }) => {
    return (
        <Suspense fallback={<div>Loading product details...</div>}>
            <ProductDetailTemplate id={params.id} />
        </Suspense>
    );
};

export default ProductDetailPage;
