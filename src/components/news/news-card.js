/* eslint-disable @next/next/no-img-element */
'use client';

import Link from 'next/link';

const NewsItem = ({ news }) => {
    return (
        <Link
            prefetch={true}
            href={`/news/${news.id}`}
            className="block rounded-md border bg-white p-3 transition-all hover:shadow"
        >
            <div className="grid-cols-3 gap-5 sm:block md:grid">
                <div className="col-span-1 overflow-hidden rounded">
                    <img
                        className="h-full w-full object-cover"
                        src={news.image}
                        alt={news.title}
                    />
                </div>
                <div className="col-span-2 flex flex-col justify-between py-1">
                    <div className="space-y-2">
                        <p className="text-xl font-medium text-primary">
                            {news.title}
                        </p>
                        <div className="line-clamp-3 max-h-[4.5em] overflow-hidden text-ellipsis pr-20 text-justify text-sm md:max-h-[7.5em]">
                            {news.description}
                        </div>
                    </div>
                    <div className="">
                        <button className="btn w-[100px] rounded border-[1px] border-solid border-primary text-primary md:w-[120px]">
                            Xem thêm
                        </button>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default NewsItem;
