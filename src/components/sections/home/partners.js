import Title from '@/components/common/title';
import PartnerSlider from '@/components/homepage/partners/partner-slider';
import React, { Suspense } from 'react';

const PartnersSection = async () => {
    return (
        <div className="mb-10 bg-primary md:mb-16 md:text-center">
            <Title className="text-center text-white">
                Đối tác của DMB Industrial
            </Title>
            <Suspense fallback={<div className="h-20 w-full"></div>}>
                <PartnerSlider />
            </Suspense>
        </div>
    );
};

export default PartnersSection;
