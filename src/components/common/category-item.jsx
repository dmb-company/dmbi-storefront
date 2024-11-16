import Link from 'next/link';
import React from 'react';

const CategoryItem = ({ category }) => {
    return (
        <Link
            href={`/categories/${category.id}`}
            className="block border-b-2 border-gray-300 p-2 hover:bg-background"
        >
            {category.name}
        </Link>
    );
};

export default CategoryItem;
