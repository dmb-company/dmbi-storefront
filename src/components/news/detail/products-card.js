/* eslint-disable @next/next/no-img-element */
'use client';

import { formatNumber } from '@/lib/utils';

const { default: Link } = require('next/link');

const ProductItem = ({ product }) => {
    return (
        <Link
            href={`/products/${product.id}`}
            className="mx-[5px] mb-[20px] block rounded-md border bg-white p-[15px] shadow md:mx-0"
        >
            <div className="inline">
                <div className="w-1/1 md:w-1/1 inline">
                    <div className="h-[22vh] min-h-[200px]">
                        <img
                            className="h-full w-full object-cover"
                            src={product.thumbnail}
                            alt={product.title}
                        />
                    </div>
                    <div className="mt-[20px] overflow-hidden text-ellipsis text-center">
                        <p className="line-clamp-2 h-[3em] text-center text-base font-medium">
                            {product?.title}
                        </p>
                        <p className="h-[3em] text-center text-base font-medium text-red-500">
                            {formatNumber(product?.metadata?.price)} vnđ
                        </p>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default ProductItem;
