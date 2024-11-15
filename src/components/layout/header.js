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
            <div className="relative mx-auto grid max-w-screen-xl grid-cols-12 items-center justify-between px-5 py-4 md:px-8 md:py-6 lg:px-5">
                {/* logo */}
                <Link href={'/'} className="col-span-2 block">
                    <img
                        src={'/LOGODMB.png'}
                        alt="logo"
                        className="h-6 w-auto md:h-8 lg:h-10 xl:h-12"
                    />
                </Link>

                <div className="col-span-8 hidden text-center lg:block">
                    <p className="text-xl font-semibold uppercase">
                        CÔNG TY TNHH SẢN XUẤT VÀ THƯƠNG MẠI DMB TOÀN CẦU
                    </p>
                    <p className="text-sm">
                        Cổng B, Khu công nghiệp Thăng Long, Thôn Hải Bối, Huyện
                        Đông Anh, TP Hà Nội
                    </p>
                </div>

                <div className="col-span-2 hidden text-sm font-semibold text-red-500 lg:block">
                    <p>Hotline: 0917 700 303</p>
                    <p>Hỗ trợ kỹ thuật: 0911 435 283</p>
                </div>

                {/* mobile navigation toggle */}
                <button
                    onClick={() => {
                        setIsHidden(isHidden === 'hidden' ? '' : 'hidden');
                    }}
                    className="col-start-12 w-full rounded-full p-2 transition-all hover:scale-110 lg:hidden"
                >
                    <AlignJustify />
                </button>
            </div>
        </header>
    );
};

export default Header;
