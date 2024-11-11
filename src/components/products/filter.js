import React, { Suspense } from 'react';
import CategoriesFilterWrap from './categories-filter-wrap';
import TagsFilterWrap from './tags-filter-wrap';

const ProductFilter = () => {
    return (
        <div className="space-y-5">
            <Suspense>
                <TagsFilterWrap />
            </Suspense>
            <Suspense>
                <CategoriesFilterWrap />
            </Suspense>
        </div>
    );
};

export default ProductFilter;
