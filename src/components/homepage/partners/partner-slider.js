/* eslint-disable @next/next/no-img-element */

import { getPartners } from '@/api/partners/api';
import { Slider } from '@/components/common';

const PartnerSlider = async () => {
    const partners = await getPartners();
    return (
        <Slider>
            {partners?.map((partner, index) => {
                return (
                    <div
                        key={index}
                        className="mx-2 h-[50px] bg-white px-3 sm:h-[80px] md:mx-3 md:h-[100px]"
                    >
                        <img
                            src={partner.image_url}
                            alt={partner.name}
                            className="h-full w-full object-contain"
                        />
                    </div>
                );
            })}
        </Slider>
    );
};

export default PartnerSlider;
