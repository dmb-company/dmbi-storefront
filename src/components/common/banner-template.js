/* eslint-disable @next/next/no-img-element */
'use client';

import Image from 'next/image';
import Carousel from './carousel';

const BannerTemplate = ({ banners }) => {
    return (
        <div>
            <Carousel className="hidden md:block">
                {banners?.map((banner) => (
                    <Image
                        width={5000}
                        height={500}
                        key={banner.id}
                        src={banner.image_pc}
                        alt={banner.id}
                        className="w-full object-cover"
                    />
                ))}
            </Carousel>
        </div>
    );
};

export default BannerTemplate;
