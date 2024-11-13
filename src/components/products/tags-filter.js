'use client';
import React, { Suspense, useEffect, useState } from 'react';
import { Dropdown } from '../common';
import { useDebouncedCallback } from 'use-debounce';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

const TagsFilter = ({ tags }) => {
    const { replace } = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const [tagIds, setTagIds] = useState([]);

    const handleSearch = useDebouncedCallback((tagIdsArray) => {
        const params = new URLSearchParams(searchParams);
        if (tagIdsArray) {
            const tagIds = tagIdsArray?.join(',');
            params.set('tagIds', tagIds);
        } else {
            params.delete('tagIds');
        }
        replace(`${pathname}?${params.toString()}`);
    }, 0);

    return (
        <Dropdown open label={'Tags'}>
            <ul className="space-y-2 text-sm font-normal">
                {tags?.map((tag, index) => {
                    return (
                        <li key={index} className="flex items-center space-x-2">
                            <Suspense>
                                <input
                                    id={tag.id}
                                    type="checkbox"
                                    onClick={(e) => {
                                        const isChecked = e.target.checked;
                                        setTagIds((prev) => {
                                            const result = !isChecked
                                                ? prev.filter(
                                                      (item) => item !== tag?.id
                                                  )
                                                : [...prev, tag.id];
                                            handleSearch(result);
                                            return result;
                                        });
                                    }}
                                />
                            </Suspense>
                            <label htmlFor={tag.id} className="cursor-pointer">
                                {tag.value}
                            </label>
                        </li>
                    );
                })}
            </ul>
        </Dropdown>
    );
};

export default TagsFilter;
