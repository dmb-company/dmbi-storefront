import { getProducts, getProductTags } from '@/api/products/api';
import Title from '@/components/common/title';
import BestSellingSlider from '@/components/homepage/best-selling/best-selling-slider';

const BestSelling = async () => {
    const productTags = await getProductTags({
        order: 'created_at',
        limit: 1,
    });

    if (!productTags) return;

    const bestSellingProducts = await getProducts({
        tags: [productTags[0].id],
    });

    return (
        <div className="mb-10 rounded-md border bg-third shadow">
            <Title className="text-center">Sản phẩm bán chạy</Title>
            <BestSellingSlider products={bestSellingProducts} />
        </div>
    );
};

export default BestSelling;
