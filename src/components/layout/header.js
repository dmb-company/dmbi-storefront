import Link from 'next/link';
import Navigation from '../common/navigation';
import Image from 'next/image';
import NavToggleButton from '../common/nav-toggle-button';
import CompanyInfo from './company-info';
import { Suspense } from 'react';

const Header = () => {
    return (
        <header className="sticky top-0 z-50 border-primary bg-white">
            <div className="relative mx-auto grid max-w-screen-xl grid-cols-12 items-center justify-between px-5 py-4 md:px-8 md:py-6 lg:px-5">
                {/* logo */}
                <Link href={'/'} className="col-span-2 block">
                    <Image
                        width={500}
                        height={500}
                        src={'/LOGODMB.png'}
                        alt="logo"
                        className="h-6 w-auto md:h-8 lg:h-10 xl:h-12"
                    />
                </Link>

                <Suspense>
                    <CompanyInfo />
                </Suspense>

                <NavToggleButton className="col-start-12" />
            </div>
            <Navigation />
        </header>
    );
};

export default Header;
