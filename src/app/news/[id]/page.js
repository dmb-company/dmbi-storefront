/* eslint-disable @next/next/no-img-element */
import { getNews, getOneNews } from '@/api/news/api';
import { getProducts } from '@/api/products/api';
import { Title } from '@/components/common';
import TextViewer from '@/components/homepage/about/text-view';
import NewsCategories from '@/components/news/detail/news-categories';
import Products from '@/components/news/detail/products';
import Link from 'next/link';

export const generateMetadata = async ({ params }) => {
    const news = await getOneNews(params.id);
    return {
        title: news?.title,
        description: news?.description,
    };
};

const NewsDetail = async ({ params }) => {
    const otherNews = await getNews(4);
    const news = await getOneNews(params.id);

    return (
        <div>
            <div className="mx-auto grid min-h-[80vh] max-w-screen-xl grid-cols-12 gap-5 px-5 py-5 lg:px-5">
                <div className="col-span-12 space-y-2 lg:col-span-3">
                    <div className="sticky top-36 space-y-2">
                        <div className="space-y-2 rounded-md bg-primary p-3 text-white">
                            <h2 className="text-base font-semibold uppercase">
                                Chuyên mục
                            </h2>
                            <NewsCategories />
                        </div>
                        <div className="hidden rounded-md border bg-white px-2 py-3 shadow lg:block">
                            <h2 className="font-semibold uppercase">
                                Sản phẩm
                            </h2>
                            <Products />
                        </div>
                    </div>
                </div>
                <div className="col-span-12 space-y-3 overflow-hidden rounded-md border bg-white p-5 shadow lg:col-span-9">
                    <h1 className="text-lg font-bold text-gray-800 md:text-xl lg:text-2xl">
                        {news?.title}
                    </h1>
                    <TextViewer content={news?.content} />
                </div>
            </div>
            <div className="mx-auto max-w-screen-xl px-5">
                <Title className="lg:px-0">Bài viết khác</Title>
                <div className="grid grid-cols-1 gap-5 px-5 pb-10 md:grid-cols-2 lg:grid-cols-4 lg:px-0">
                    {otherNews?.map((news) => {
                        return (
                            <Link
                                key={news.id}
                                href={`/news/${news.id}`}
                                className="group space-y-5 rounded-md border bg-white p-3 shadow"
                            >
                                <div className="overflow-hidden">
                                    <img
                                        src={news.image}
                                        alt={news.title}
                                        className="h-full w-full object-cover transition-all group-hover:scale-105"
                                    />
                                </div>
                                <div className="px-2">
                                    <p className="line-clamp-2 text-base font-medium">
                                        {news.title}
                                    </p>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default NewsDetail;
