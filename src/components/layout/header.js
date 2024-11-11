'use client';
import { NAV_ITEMS } from '@/constants/constants';
import { Search } from '../layout';
import Link from 'next/link';
import { AlignJustify, X } from 'lucide-react';
import { useState } from 'react';

/* eslint-disable @next/next/no-img-element */
const Header = () => {
    const [isHidden, setIsHidden] = useState('hidden');
    return (
        <header className="sticky top-0 z-50 border-b-2 border-primary bg-white shadow-sm">
            <div className="bg-primary py-1 text-center text-yellow-400">
                <div className="mx-auto flex max-w-screen-xl items-center justify-between">
                    <span>Hotline: 1900.4790</span>
                    <div className="text-white">
                        <Link href="/news">Tin tức</Link>
                        <span className="mx-2 border" />
                        <Link href="/products">Công nghệ</Link>
                    </div>
                </div>
            </div>
            <div className="relative mx-auto flex max-w-screen-xl items-center justify-between px-5 py-4 md:px-8 md:py-6 lg:px-5">
                {/* logo */}
                <Link href={'/'} className="block w-1/3">
                    <img
                        src={'/LOGODMB.png'}
                        alt="logo"
                        className="h-6 w-auto md:h-8 lg:h-10 xl:h-10"
                    />
                </Link>

                {/* navigation */}
                <nav
                    className={`${isHidden} absolute left-0 right-0 top-full animate-fade-down bg-white transition-all animate-duration-200 lg:relative lg:block lg:w-full lg:animate-none`}
                >
                    <div className="mb-2 flex justify-center p-2 lg:hidden">
                        <Search />
                    </div>
                    <ul className="flex flex-col items-center justify-center space-y-3 text-base font-medium uppercase text-primary transition-all lg:flex-row lg:space-x-10 lg:space-y-0 lg:text-sm xl:space-x-10 xl:text-base">
                        {NAV_ITEMS.map((item) => (
                            <li key={item.title}>
                                <Link href={item.url} prefetch={true}>
                                    {item.title}
                                </Link>
                            </li>
                        ))}
                        <li
                            onClick={() => {
                                setIsHidden('hidden');
                            }}
                            className="flex w-full cursor-pointer items-center justify-center bg-primary py-2 text-white shadow-md lg:hidden lg:shadow-none"
                        >
                            <X /> <span>Đóng</span>
                        </li>
                    </ul>
                </nav>

                {/* search */}
                <div className="hidden w-1/3 lg:block">
                    <Search />
                </div>

                {/* mobile navigation toggle */}
                <button
                    onClick={() => {
                        setIsHidden(isHidden === 'hidden' ? '' : 'hidden');
                    }}
                    className="rounded-full p-2 transition-all hover:bg-gray-400 lg:hidden"
                >
                    <AlignJustify />
                </button>
            </div>
        </header>
    );
};

export default Header;
