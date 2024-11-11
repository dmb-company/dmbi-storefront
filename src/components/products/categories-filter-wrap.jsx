import { getProductCategories } from '@/api/product-categories/api';
import CategoriesFilter from './categories-filter';

const CategoriesFilterWrap = async () => {
    const product_categories = await getProductCategories();
    return <CategoriesFilter product_categories={product_categories} />;
};

export default CategoriesFilterWrap;
