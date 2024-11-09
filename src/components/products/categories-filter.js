'use client';
import React from 'react';
import { Dropdown } from '../common';

const CategoriesFilter = ({ setCategoriesId }) => {
    const { product_categories, isLoading } = useProductCategories();
    return (
        <Dropdown label={'Danh mục'}>
            {isLoading ? (
                <div>Loading...</div>
            ) : (
                <ul className="space-y-2 text-sm font-normal">
                    {product_categories?.map((category, index) => {
                        return (
                            <li
                                key={index}
                                className="flex items-center space-x-2"
                            >
                                <input
                                    id={category.id}
                                    type="checkbox"
                                    onClick={(e) => {
                                        const isChecked = e.target.checked;
                                        setCategoriesId((prev) =>
                                            !isChecked
                                                ? prev.filter(
                                                      (item) =>
                                                          item !== category?.id
                                                  )
                                                : [...prev, category.id]
                                        );
                                    }}
                                />
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
            )}
        </Dropdown>
    );
};

export default CategoriesFilter;
