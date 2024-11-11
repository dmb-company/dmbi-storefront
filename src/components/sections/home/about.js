import { getStore } from '@/api/store/api';
import Title from '@/components/common/title';
import AboutContent from '@/components/homepage/about/about-content';
import Image from 'next/image';
import { Suspense } from 'react';

const AboutSection = async () => {
    return (
        <div className="">
            <Title id="about">Giới thiệu về chúng tôi</Title>
            <div className="relative grid grid-cols-7 gap-4 border bg-white px-5 py-12 shadow">
                <Image
                    width={500}
                    height={500}
                    priority={true}
                    src="/hero-banner.webp"
                    className="absolute bottom-0 left-0 right-0 top-0 z-10 h-full w-full object-cover"
                    alt="DMB Industrial Company logo"
                />
                <Suspense
                    fallback={
                        <div className="col-span-7 md:col-span-4 md:px-5 lg:px-10">
                            {/* Skeleton loading placeholder */}
                            <div className="h-[40vh] w-full animate-pulse bg-gray-300"></div>
                        </div>
                    }
                >
                    <AboutContent />
                </Suspense>
            </div>
        </div>
    );
};

export default AboutSection;
