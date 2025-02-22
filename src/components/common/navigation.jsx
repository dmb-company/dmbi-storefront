import { NAV_ITEMS } from '@/constants/constants';
import React, { Suspense } from 'react';
import CategoriesList from './categories-list';
import { Menu, SearchIcon } from 'lucide-react';

const Navigation = () => {
    return (
        <div className="bg-primary pr-2 text-sm uppercase">
            <div className="mx-auto flex max-w-screen-xl items-center justify-between px-2 text-white">
                <div className="group relative w-full cursor-pointer px-4 py-3 transition-all hover:bg-third hover:text-black lg:w-auto lg:px-3">
                    <p className="flex items-center space-x-2">
                        <Menu />
                        <span className="font-semibold">Danh mục sản phẩm</span>
                    </p>
                    <div className="invisible absolute inset-0 top-full group-hover:visible">
                        <Suspense>
                            <CategoriesList />
                        </Suspense>
                    </div>
                </div>
                <div className="hidden items-center justify-center space-x-20 lg:flex">
                    {NAV_ITEMS.map((item, index) => {
                        return (
                            <a
                                href={item.url}
                                key={index}
                                className="font-semibold"
                            >
                                {item.title}
                            </a>
                        );
                    })}
                </div>
                <div className="hidden py-2 lg:block">
                    <form
                        method="GET"
                        action="/products"
                        className="flex items-center justify-center rounded-3xl bg-white px-2 py-1"
                    >
                        <input
                            name="filter"
                            type="text"
                            placeholder="Tìm kiếm sản phẩm"
                            className="px-2 text-black outline-none"
                        />
                        <button type="submit" className="text-black">
                            <SearchIcon />
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Navigation;
