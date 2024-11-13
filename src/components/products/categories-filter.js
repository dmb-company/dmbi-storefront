'use client';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { Dropdown } from '../common';
import { Suspense, useState } from 'react';
import { useDebouncedCallback } from 'use-debounce';

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
    return (
        <Dropdown label={'Danh mục'}>
            <ul className="space-y-2 text-sm font-normal">
                {product_categories?.map((category, index) => {
                    return (
                        <li key={index} className="flex items-center space-x-2">
                            <Suspense>
                                <input
                                    id={category.id}
                                    type="checkbox"
                                    onClick={(e) => {
                                        const isChecked = e.target.checked;
                                        setCategoryIds((prev) => {
                                            const result = !isChecked
                                                ? prev.filter(
                                                      (item) =>
                                                          item !== category?.id
                                                  )
                                                : [...prev, category.id];
                                            handleSearch(result);
                                            return result;
                                        });
                                    }}
                                />
                            </Suspense>
                            <label
                                htmlFor={category.id}
                                className="cursor-pointer"
                            >
                                {category.name}
                            </label>
                        </li>
                    );
                })}
            </ul>
        </Dropdown>
    );
};

export default CategoriesFilter;
