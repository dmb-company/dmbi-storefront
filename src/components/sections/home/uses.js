import Button from '@/components/common/button';
import Title from '@/components/common/title';
import UsesCard from '@/components/homepage/uses/uses-card';
import { getIndustryUses } from '@/api/industry-uses/api';

const Uses = async () => {
    const industryUses = await getIndustryUses();
    return (
        <div className="bg-primary px-5 pb-10 shadow-md">
            <Title className="text-center text-white">
                Ứng dụng ngành
            </Title>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {industryUses?.map((use, index) => {
                    return (
                        <UsesCard
                            key={use?.id}
                            useId={use?.id}
                            useImage={use?.image_url}
                            useName={use?.name}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default Uses;
