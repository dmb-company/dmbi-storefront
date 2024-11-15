import { getBestSellerProducts } from '@/api/products/api';

const { Slider } = require('@/components/common');
const { default: ProductCard } = require('@/components/common/product-card');

const BestSellingSlider = async () => {
    const products = await getBestSellerProducts();
    return (
        <div className={'grid grid-cols-12 gap-5 p-5'}>
            {products?.map((product, index) => {
                return (
                    <ProductCard
                        key={index}
                        product={product}
                        className={`col-span-12 md:col-span-3`}
                    />
                );
            })}
        </div>
    );
};

export default BestSellingSlider;
