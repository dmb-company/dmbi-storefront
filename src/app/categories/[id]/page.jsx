import { Suspense } from 'react';
import CategoryDetailTemplate from '@/components/categories/CategoriesDetailTemplate';
import { getOneProductCategories } from '@/api/product-categories/api';

export const generateMetadata = async ({ params }) => {
    const {id} = params;
    return {
        title: await getOneProductCategories(id).then((res) => {
            return "DMB Industrial | " + res.name;
        }),
        description:
            'DMB Industrial, chuyên cung cấp các sản phẩm công nghiệp, máy móc, thiết bị công nghiệp, dịch vụ sửa chữa, bảo trì máy móc công nghiệp',
    };
};

const CategoriesDetailPage = ({params}) => {
    const {id} = params;

    return <Suspense fallback={<div>Loading category details...</div>}>
            <CategoryDetailTemplate id={id} />
        </Suspense>
}

export default CategoriesDetailPage