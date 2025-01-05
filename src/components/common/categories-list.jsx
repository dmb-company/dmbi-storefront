import { getProductCategories } from '@/api/product-categories/api';
import CategoryItem from './category-item';
import { buildCategoryHierarchy } from '@/lib/utils';

const CategoriesList = async () => {
    const categories = await getProductCategories().then(res => buildCategoryHierarchy(res))

    if (!categories) return <div>Không có danh mục nào!</div>;
    return (
        <div className="bg-third pb-2">
            {categories?.map((category, index) => (
                <CategoryItem category={category} key={category.id} />
            ))}
        </div>
    );
};

export default CategoriesList;
