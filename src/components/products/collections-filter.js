'use client';
import React from 'react';
import { Dropdown } from '../common';

const CollectionsFilter = ({ setCollectionsId }) => {
    const { collections, isLoading } = useCollections();
    return (
        <Dropdown label={'Bộ sản phẩm'}>
            {isLoading ? (
                <div>Loading...</div>
            ) : (
                <ul className="space-y-2 text-sm font-normal">
                    {collections?.map((collection, index) => {
                        return (
                            <li
                                key={index}
                                className="flex items-center space-x-2"
                            >
                                <input
                                    id={collection.id}
                                    type="checkbox"
                                    onClick={(e) => {
                                        const isChecked = e.target.checked;
                                        setCollectionsId((prev) =>
                                            !isChecked
                                                ? prev.filter(
                                                      (item) =>
                                                          item !==
                                                          collection?.id
                                                  )
                                                : [...prev, collection.id]
                                        );
                                    }}
                                />
                                <label
                                    htmlFor={collection.id}
                                    className="cursor-pointer"
                                >
                                    {collection.title}
                                </label>
                            </li>
                        );
                    })}
                </ul>
            )}
        </Dropdown>
    );
};

export default CollectionsFilter;
