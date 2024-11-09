import { getPartners } from '@/api/partners/api';
import Title from '@/components/common/title';
import PartnerSlider from '@/components/homepage/partners/partner-slider';
import React from 'react';

const PartnersSection = async () => {
    const partners = await getPartners();
    return (
        <div className="mb-10 bg-primary md:mb-16 md:text-center">
            <Title className="text-center text-white">
                Đối tác của DMB Industrial
            </Title>
            <div>
                <PartnerSlider partners={partners} />
            </div>
        </div>
    );
};

export default PartnersSection;
