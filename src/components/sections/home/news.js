import { getNews } from '@/api/news/api';
import { Title } from '@/components/common';
import NewsList from '@/components/homepage/news/news-list';
import { cn } from '@/lib/utils';
import React, { Suspense } from 'react';

const News = async ({ className }) => {
    return (
        <div className={cn('overflow-hidden', className)}>
            <Title className="z-20 bg-primary py-2 text-lg text-white md:py-3 md:text-xl">
                Tin tức sự kiện
            </Title>
            <Suspense>
                <NewsList />
            </Suspense>
        </div>
    );
};

export default News;
