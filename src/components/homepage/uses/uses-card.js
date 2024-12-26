import Image from 'next/image';
import Link from 'next/link';

/* eslint-disable @next/next/no-img-element */
const UsesCard = ({
    categoryImage = '',
    categoryTitle = '',
    categoryId = '',
}) => {
    return (
        <a
            href={`/categories/${categoryId}`}
            className="block space-y-4 rounded bg-white"
        >
            <div className="h-[200px] rounded">
                <Image
                    width={500}
                    height={500}
                    src={categoryImage}
                    alt={categoryTitle}
                    className="h-full w-full object-contain"
                />
            </div>
            <div className="line-clamp-1 px-5 pb-10">
                <div className="text-center text-base font-medium text-primary">
                    {categoryTitle}
                </div>
            </div>
        </a>
    );
};

export default UsesCard;
