import ProductCard from '../common/product-card';
import Standee from './standee';
import ProductFilter from './filter';
import { Search } from '../layout';
import { getProducts } from '@/api/products/api';
import ProductsList from './products-list';
import { Suspense } from 'react';
import ProductsListSkeleton from './products-list-skeleton';

const ProductsTemplate = ({ props }) => {
    return (
        <div className="flex flex-col space-y-3 px-3 md:px-5 lg:flex-row lg:space-x-10 lg:space-y-0 lg:px-8">
            <div className="w-full pb-10 lg:block lg:w-1/4">
                <div className="sticky top-36 w-full space-y-5 rounded border bg-white p-5 transition-all">
                    <Search />
                    <Suspense>
                        <ProductFilter />
                    </Suspense>
                    <div className="hidden lg:block">
                        <Suspense>
                            <Standee />
                        </Suspense>
                    </div>
                </div>
            </div>
            <div className="w-full pb-10 transition-all lg:w-3/4">
                <div>
                    <Suspense
                        fallback={
                            <ProductsListSkeleton PRODUCTS_PER_PAGE={9} />
                        }
                    >
                        <ProductsList query={props.searchParams} />
                    </Suspense>
                </div>
                <div>{/* Product overall */}</div>
            </div>
        </div>
    );
};

export default ProductsTemplate;
