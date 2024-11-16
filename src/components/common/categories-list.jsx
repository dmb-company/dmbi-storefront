import { getProductCategories } from '@/api/product-categories/api';
import CategoryItem from './category-item';

const CategoriesList = async () => {
    const categories = await getProductCategories();

    if (!categories) return <div>Không có danh mục nào!</div>;
    return (
        <div className="bg-third">
            {categories?.map((category, index) => (
                <CategoryItem category={category} key={category.id} />
            ))}
        </div>
    );
};

export default CategoriesList;
