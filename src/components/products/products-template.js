import ProductCard from '../common/product-card';
import Standee from './standee';
import ProductFilter from './filter';
import { Search } from '../layout';
import { getProducts } from '@/api/products/api';

const ProductsTemplate = async () => {
    const products = await getProducts();
    return (
        <div className="flex flex-col space-y-3 px-3 md:px-5 lg:flex-row lg:space-x-10 lg:space-y-0 lg:px-8">
            <div className="w-full lg:block lg:w-1/4">
                <div className="w-full space-y-5 rounded border bg-white p-5 shadow">
                    <Search />
                    <ProductFilter />
                    {/* <div className="hidden lg:block">
                        <Standee standeeImage={standeeImage} />
                    </div> */}
                </div>
            </div>
            <div className="w-full lg:w-3/4">
                {/* <div className="hidden overflow-hidden rounded lg:block">
                    <BannerTemplate />
                </div> */}
                <div>
                    {/* {isProductsLoading ? (
                        <div className="grid gap-y-5 py-5 sm:grid-cols-2 md:grid-cols-3">
                            {Array.from(
                                { length: PRODUCTS_PER_PAGE },
                                () => null
                            ).map((_, index) => (
                                <ProductCardSkeleton key={index} />
                            ))}
                        </div>
                    ) : ( */}
                    <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
                        {products?.map((product, index) => (
                            <ProductCard key={index} product={product} />
                        ))}
                    </div>
                    {/* )} */}
                </div>
                <div>{/* Product overall */}</div>
            </div>
        </div>
    );
};

export default ProductsTemplate;
