import { getStore } from '@/api/store/api';
import TextViewer from '@/components/homepage/about/text-view';
import Image from 'next/image';

const AboutContent = async () => {
    const store = await getStore();

    return (
        <>
            <div className="z-20 col-span-7 flex items-center overflow-hidden border-primary/30 px-24 md:col-span-3 md:h-[50vh] md:min-h-[40vh] md:border-r-2 md:px-16 lg:px-20">
                <Image
                    width={5000}
                    height={500}
                    src={store?.metadata?.image}
                    alt="about-image"
                    className="w-full object-cover"
                />
            </div>
            <div className="z-20 col-span-7 max-h-[50vh] overflow-y-auto md:col-span-4 md:px-5 lg:px-10">
                <TextViewer content={store?.metadata?.about} />
            </div>
        </>
    );
};

export default AboutContent;
