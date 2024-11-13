'use client';
import Link from 'next/link';
import { Suspense, useState } from 'react';
import { SearchIcon } from 'lucide-react';
import { useDebouncedCallback } from 'use-debounce';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

const Search = ({ setSearchValue }) => {
    const [q, setQ] = useState('');
    const { replace } = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const handleSearch = useDebouncedCallback((title) => {
        const params = new URLSearchParams(searchParams);
        if (title) {
            params.set('filter', title);
        } else {
            params.delete('filter');
        }
        replace(`${pathname}?${params.toString()}`);
    }, 300);

    return (
        <Suspense>
            <div className="flex w-full items-center justify-between rounded-md border-2 border-gray-300 py-1 pl-3 pr-2">
                <input
                    type="text"
                    placeholder="Tìm kiếm sản phẩm"
                    onChange={(e) => {
                        handleSearch(e.target.value);
                    }}
                    defaultValue={searchParams.get('filter')?.toString()}
                    className="mr-2 w-full truncate bg-transparent text-sm outline-none lg:w-4/5"
                />
                <Link
                    href={!setSearchValue ? `/search/${q}` : '/products'}
                    className="rounded-md bg-primary px-4 py-2 text-white"
                >
                    <SearchIcon size={18} />
                </Link>
            </div>
        </Suspense>
    );
};

export default Search;
