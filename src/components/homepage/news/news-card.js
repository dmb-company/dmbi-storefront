import Image from 'next/image';

/* eslint-disable @next/next/no-img-element */
const NewsCard = ({ post }) => {
    return (
        <a href={`/news/${post.id}`} className="flex w-full space-x-2">
            <Image
                width={500}
                height={500}
                src={post.image}
                className="h-[100px] w-1/3 rounded"
                alt={post.title}
            />
            <div className="w-2/3 space-y-2">
                <div className="text-sm font-medium">{post.title}</div>
                <div className="line-clamp-2 pr-10 text-[12px]">
                    {post.description}
                </div>
            </div>
        </a>
    );
};

export default NewsCard;
