'use client';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { Dropdown } from '../common';
import { Suspense, useState } from 'react';
import { useDebouncedCallback } from 'use-debounce';
import { buildCategoryHierarchy } from '@/lib/utils';

const CategoriesFilter = ({ product_categories }) => {
    const { replace } = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const [categoryIds, setCategoryIds] = useState([]);

    const handleSearch = useDebouncedCallback((categoryIdsArray) => {
        const params = new URLSearchParams(searchParams);
        if (categoryIdsArray) {
            const categoryIds = categoryIdsArray?.join(',');
            params.set('categoryIds', categoryIds);
        } else {
            params.delete('categoryIds');
        }
        replace(`${pathname}?${params.toString()}`);
    }, 100);

    const renderCategoriesTree = (category) => (
        <li key={category.id} className="mt-2">
            <label htmlFor={category.id} className="cursor-pointer space-x-2">
                <input
                    id={category.id}
                    type="checkbox"
                    onClick={(e) => {
                        const isChecked = e.target.checked;
                        setCategoryIds((prev) => {
                            const result = !isChecked
                                ? prev.filter((item) => item !== category?.id)
                                : [...prev, category.id];
                            handleSearch(result);
                            return result;
                        });
                    }}
                />
                <span>

                {category.name}
                </span>
            </label>
            {category?.children.length > 0 && (
                <ul className="ml-4 border-l border-gray-300 pl-2">
                    {category.children.map(renderCategoriesTree)}
                </ul>
            )}
        </li>
    );

    return (
        <Dropdown label={'Danh mục'}>
            <ul className="space-y-2 text-sm font-normal">
                {buildCategoryHierarchy(product_categories)?.map((category, index) =>
                    renderCategoriesTree(category)
                )}
            </ul>
        </Dropdown>
    );
};

export default CategoriesFilter;
