import { getProductCategories } from '@/api/product-categories/api';
import Button from '@/components/common/button';
import Title from '@/components/common/title';
import UsesCard from '@/components/homepage/uses/uses-card';
import UsesCardSkeleton from '@/components/homepage/uses/uses-card-skeleton';

const Uses = async () => {
    const product_categories = await getProductCategories();
    return (
        <div className="bg-primary px-5 pb-10 shadow-md">
            <Title className="text-center text-white">
                Ứng dụng ngành công nghiệp
            </Title>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {product_categories?.map((category, index) => {
                    return (
                        <UsesCard
                            key={category?.id}
                            categoryId={category?.id}
                            categoryTitle={category?.display_name}
                            categoryImage={category?.metadata?.image}
                        />
                    );
                })}
            </div>
            <div className="mt-10 flex justify-center">
                <Button
                    href="/"
                    className="bg-white text-primary hover:border-primary"
                >
                    Xem thêm
                </Button>
            </div>
        </div>
    );
};

export default Uses;
