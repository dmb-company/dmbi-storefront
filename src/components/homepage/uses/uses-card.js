import Image from 'next/image';

const UsesCard = ({
    useImage = '',
    useLink = '',
    useName = ''
}) => {
    return (
        <a
            href={useLink}
            target={'_blank'}
            className="block space-y-4 rounded bg-white"
        >
            <div className="h-[200px] rounded overflow-hidden">
                <Image
                    width={500}
                    height={500}
                    src={useImage}
                    alt={useName}
                    className="h-full w-full object-cover"
                />
            </div>
            <div className="line-clamp-1 px-5 pb-10">
                <div className="text-center text-base font-medium text-primary">
                    {useName}
                </div>
            </div>
        </a>
    );
};

export default UsesCard;
