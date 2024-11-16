'use client';
import { useState } from 'react';
import Link from 'next/link';
import { twMerge } from 'tailwind-merge';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS } from '@/constants/constants';

const NavToggleButton = ({ className }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
    };

    return (
        <div className={twMerge('mx-auto lg:hidden', className)}>
            <p className="cursor-pointer" onClick={toggleMenu}>
                <Menu />
            </p>
            <div
                className={`fixed inset-0 flex animate-flip-up flex-col items-center justify-start bg-white py-40 ${isMenuOpen ? 'block' : 'hidden'}`}
            >
                {NAV_ITEMS.map((item, index) => (
                    <Link
                        onClick={toggleMenu}
                        href={item.url}
                        key={index}
                        className="block p-2"
                    >
                        {item.title}
                    </Link>
                ))}
                <button
                    onClick={toggleMenu}
                    className="flex w-full items-center justify-center space-x-2 bg-primary p-2 text-white"
                >
                    <X />
                    <span>Đóng</span>
                </button>
            </div>
        </div>
    );
};

export default NavToggleButton;
