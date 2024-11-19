/* eslint-disable @next/next/no-img-element */
'use client';
import { cn } from '@/lib/utils';
import React, { useState } from 'react';

const ProductImage = ({ images, className = '' }) => {
    const [currentImage, setCurrentImage] = useState(images[0] || '');
    return (
        <div className={cn('space-y-3', className)}>
            <div className="aspect-square w-full">
                <img
                    src={currentImage}
                    alt="product-image"
                    className="h-full w-full border object-cover shadow transition-all"
                />
            </div>
            <div className="grid grid-cols-4 gap-x-3">
                {images?.map((image, index) => {
                    return (
                        <div
                            key={index}
                            onClick={() => {
                                setCurrentImage(image);
                            }}
                            className="group relative aspect-square cursor-pointer overflow-hidden border shadow"
                        >
                            <img
                                src={image}
                                alt="product-image"
                                className={cn(
                                    'h-full w-full object-cover transition-all duration-200 group-hover:scale-105'
                                )}
                            />
                            {image !== currentImage && (
                                <div className="absolute bottom-0 left-0 right-0 top-0 bg-white/50" />
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default ProductImage;
