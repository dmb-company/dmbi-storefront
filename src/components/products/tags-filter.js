'use client';
import React, { useEffect } from 'react';
import { Dropdown } from '../common';

const TagsFilter = ({ setTagsId }) => {
    const { product_tags, isLoading } = useProductTags();
    return (
        <Dropdown open label={'Tags'}>
            {isLoading ? (
                <div>Loading...</div>
            ) : (
                <ul className="space-y-2 text-sm font-normal">
                    {product_tags?.map((tag, index) => {
                        return (
                            <li
                                key={index}
                                className="flex items-center space-x-2"
                            >
                                <input
                                    id={tag.id}
                                    type="checkbox"
                                    onClick={(e) => {
                                        const isChecked = e.target.checked;
                                        setTagsId((prev) =>
                                            !isChecked
                                                ? prev.filter(
                                                      (item) => item !== tag?.id
                                                  )
                                                : [...prev, tag.id]
                                        );
                                    }}
                                />
                                <label
                                    htmlFor={tag.id}
                                    className="cursor-pointer"
                                >
                                    {tag.value}
                                </label>
                            </li>
                        );
                    })}
                </ul>
            )}
        </Dropdown>
    );
};

export default TagsFilter;
