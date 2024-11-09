/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { getStore } from '@/api/store/api';
import Title from '@/components/common/title';
import TextViewer from '@/components/homepage/about/text-view';

const AboutSection = async () => {
    const store = await getStore();

    return (
        <div className="">
            <Title id="about">Giới thiệu về chúng tôi</Title>
            <div className="relative grid grid-cols-7 gap-4 border bg-white px-5 py-12 shadow">
                <img
                    src="https://medusajs.com/_next/image/?url=%2Fimages%2Fhero-banner.png&w=3840&q=100"
                    className="absolute bottom-0 left-0 right-0 top-0 z-10 h-full w-full object-cover"
                    alt="DMB Industrial Company logo"
                />
                <div className="z-20 col-span-7 flex items-center border-primary/30 px-24 md:col-span-3 md:min-h-[40vh] md:border-r-2 md:px-16 lg:px-20">
                    <img
                        src={store?.metadata?.image}
                        alt="about-image"
                        className="w-full object-cover"
                    />
                </div>
                <div className="z-20 col-span-7 md:col-span-4 md:px-5 lg:px-10">
                    <TextViewer content={store?.metadata?.about} />
                </div>
            </div>
        </div>
    );
};

export default AboutSection;
