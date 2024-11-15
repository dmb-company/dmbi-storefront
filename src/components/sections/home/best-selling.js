import {
    getBestSellerProducts,
    getProducts,
    getProductTags,
} from '@/api/products/api';
import Title from '@/components/common/title';
import BestSellingSlider from '@/components/homepage/best-selling/best-selling-slider';
import ProductsListSkeleton from '@/components/products/products-list-skeleton';
import { Suspense } from 'react';

const BestSelling = async () => {
    return (
        <div className="my-10 rounded-md border bg-third shadow">
            <Title className="text-center">Sản phẩm bán chạy</Title>
            <Suspense
                fallback={
                    <ProductsListSkeleton
                        PRODUCTS_PER_PAGE={8}
                        className="md:grid-cols-4"
                    />
                }
            >
                <BestSellingSlider />
            </Suspense>
        </div>
    );
};

export default BestSelling;
