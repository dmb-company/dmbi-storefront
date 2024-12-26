import Link from 'next/link';
import React from 'react';

const CategoryItem = ({ category }) => {
    return (
        <a
            href={`/categories/${category.id}`}
            className="block border-b-2 border-gray-300 p-2 hover:bg-background"
        >
            {category.name}
        </a>
    );
};

export default CategoryItem;
