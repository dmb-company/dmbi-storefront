import NewsList from './news-list';
import { Suspense } from 'react';
import ProductsList from './products-list';

const NewsTemplate = () => {
    return (
        <div className="mx-auto block min-h-[80vh] max-w-screen-xl px-10">
            <h1 className="px-5 py-5 text-xl font-bold uppercase text-primary md:py-7 md:text-2xl lg:px-0">
                TIN TỨC
            </h1>
            <div className="mx-auto block min-h-[80vh] max-w-screen-xl pb-10 md:flex">
                <div className="w-1/1 md:w-3/4">
                    <NewsList />
                </div>
                <Suspense>
                    <ProductsList />
                </Suspense>
            </div>
        </div>
    );
};

export default NewsTemplate;
