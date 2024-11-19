import React from 'react';
import { Title } from '../common';

const Specifications = ({ product }) => {
    const specifications = product?.metadata?.specifications;
    if (!specifications) return;

    return (
        <div>
            <Title className="bg-primary text-white md:px-1 md:py-1 md:text-base">
                Thông số kỹ thuật
            </Title>
            <div className="space-y-2 bg-white p-2 text-sm">
                {specifications.map((item, index) => {
                    return (
                        <div key={index} className="border-b-2 pb-2">
                            <span className="font-semibold">
                                {item.title}:{' '}
                            </span>
                            <span>{item.value}</span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Specifications;
