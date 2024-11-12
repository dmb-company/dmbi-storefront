'use client';
import { Pagination, ProductCardSkeleton } from '@/components/common';
import ProductCard from '@/components/common/product-card';
import { PRODUCTS_PER_PAGE } from '@/constants/constants';
import { useState } from 'react';

const SearchResultsPage = ({ params }) => {
    const [currentPage, setCurrentPage] = useState(1);

    const TOTAL_PAGES = Math.ceil(count / PRODUCTS_PER_PAGE);
    return (
        <div className="mx-auto max-w-screen-xl px-10">
            <div className="py-5 text-xl font-semibold uppercase text-primary">
                Kết quả tìm kiếm cho: {params.q}
            </div>
            <div>
                {isProductsLoading ? (
                    <div className="grid gap-y-5 py-5 sm:grid-cols-2 md:grid-cols-3">
                        {Array.from(
                            { length: PRODUCTS_PER_PAGE },
                            () => null
                        ).map((_, index) => (
                            <ProductCardSkeleton key={index} />
                        ))}
                    </div>
                ) : (
                    <div>
                        <div className="grid gap-5 py-5 sm:grid-cols-2 md:grid-cols-3">
                            {products?.map((product, index) => (
                                <ProductCard key={index} product={product} />
                            ))}
                        </div>
                        <Pagination
                            totalPages={TOTAL_PAGES}
                            currentPage={currentPage}
                            setCurrentPage={setCurrentPage}
                        />
                    </div>
                )}
            </div>
        </div>
    );
};

export default SearchResultsPage;
