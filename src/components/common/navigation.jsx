import { NAV_ITEMS } from '@/constants/constants';
import React, { Suspense } from 'react';
import CategoriesList from './categories-list';
import { Menu, SearchIcon } from 'lucide-react';
import Link from 'next/link';

const Navigation = () => {
    return (
        <div className="bg-primary text-sm uppercase">
            <div className="mx-auto flex max-w-screen-xl items-center justify-between text-white">
                <div className="group relative cursor-pointer px-2 py-3 transition-all hover:bg-third hover:text-black">
                    <p className="flex items-center space-x-2">
                        <Menu />
                        <span>Danh mục sản phẩm</span>
                    </p>
                    <div className="invisible absolute inset-0 top-full group-hover:visible">
                        <Suspense>
                            <CategoriesList />
                        </Suspense>
                    </div>
                </div>
                <div className="flex items-center justify-center space-x-20">
                    {NAV_ITEMS.map((item, index) => {
                        return (
                            <Link href={item.url} key={index}>
                                {item.title}
                            </Link>
                        );
                    })}
                </div>
                <div className="">
                    <div className="flex items-center justify-center rounded-3xl bg-white px-2 py-1">
                        <input
                            type="text"
                            placeholder="Tìm kiếm sản phẩm"
                            className="px-2"
                        />
                        <button className="text-black">
                            <SearchIcon />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navigation;
