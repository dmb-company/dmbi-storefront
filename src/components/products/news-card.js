/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import React from 'react';

const NewsCard = ({ post }) => {
    return (
        <a href={`/news/${post.id}`} className="flex w-full space-x-2">
            <Image
                width={500}
                height={500}
                src={post.image}
                className="h-[80px] w-1/3 rounded"
                alt={post.title}
            />
            <div className="w-2/3 space-y-2">
                <div className="text-sm font-medium">{post.title}</div>
            </div>
        </a>
    );
};

export default NewsCard;
