import { NAV_ITEMS } from '@/constants/constants';
import React, { Suspense } from 'react';
import CategoriesList from './categories-list';
import { Menu, SearchIcon } from 'lucide-react';

const Navigation = () => {
    return (
        <div className="bg-primary text-sm uppercase">
            <div className="mx-auto flex max-w-screen-xl items-center justify-between text-white">
                <div className="group relative w-full cursor-pointer px-2 py-3 transition-all hover:bg-third hover:text-black lg:w-auto">
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
                <div className="hidden items-center justify-center space-x-20 lg:flex">
                    {NAV_ITEMS.map((item, index) => {
                        return (
                            <a href={item.url} key={index}>
                                {item.title}
                            </a>
                        );
                    })}
                </div>
                <div className="hidden py-2 lg:block">
                    <div className="flex items-center justify-center rounded-3xl bg-white px-2 py-1">
                        <input
                            type="text"
                            placeholder="Tìm kiếm sản phẩm"
                            className="px-2 text-black outline-none"
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
