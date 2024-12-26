import { getOneProductCategories } from '@/api/product-categories/api';
import { BreadCrumb } from '@/components/common';
import ProductsList from '@/components/products/products-list.jsx';
import { Suspense } from 'react';
import ProductsListSkeleton from '@/components/products/products-list-skeleton.jsx';

const CategoryDetailTemplate = async ({id = ""}) => {
    const category = await getOneProductCategories(id);
    const breadcrumb = [
        {
            title: 'Trang chủ',
            href: '/',
        },
        {
            title: 'Danh mục',
            href: '/categories',
        },
        {
            title: category?.name,
            href: `/categories/${id}`,
        },
    ];

    return <div className={"container max-w-screen-xl mx-auto p-4"}>
        <BreadCrumb data={breadcrumb} />
        <h1 className={"text-2xl font-semibold text-primary pb-10 text-center"}>Sản phẩm thuộc danh mục {category?.name}</h1>
        <div>
            <Suspense
                fallback={
                    <ProductsListSkeleton PRODUCTS_PER_PAGE={6} />
                }
            >
                <ProductsList query={{
                    categoryIds: id
                }} />
            </Suspense>
        </div>
    </div>
}

export default CategoryDetailTemplate;