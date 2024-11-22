'use client';
import { sendPriceRequest } from '@/api/price-request/api';
/* eslint-disable @next/next/no-img-element */
import { Input, TextArea } from '@/components/common';
import Button from '@/components/common/button';
import Title from '@/components/common/title';
import { cn } from '@/lib/utils';
import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const PriceRequest = ({ className = '' }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        toast.promise(sendPriceRequest(data), {
            pending: 'Đang gửi...',
            success: 'Đã gửi thành công yêu cầu!',
            error: 'Đã có lỗi xảy ra',
        });
    };

    return (
        <div
            className={cn(
                'relative z-20 space-y-3 border bg-white/10 shadow',
                className
            )}
        >
            <div>
                <Title className="z-20 bg-primary py-2 text-lg text-white md:py-3 md:text-xl">
                    Gửi yêu cầu báo giá
                </Title>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="relative z-20 space-y-4 p-5"
                >
                    <Input
                        placeholder="Tên khách hàng/đơn vị"
                        {...register('customerName', {
                            required: 'Vui lòng điền mục này',
                        })}
                    />
                    {errors.customerName && (
                        <p className="text-red-500">
                            {errors.customerName.message}
                        </p>
                    )}

                    <Input
                        placeholder="Số điện thoại liên hệ"
                        {...register('customerPhone', {
                            required: 'Vui lòng điền mục này',
                        })}
                    />
                    {errors.phoneNumber && (
                        <p className="text-red-500">
                            {errors.phoneNumber.message}
                        </p>
                    )}

                    <Input
                        placeholder="Email nhận báo giá"
                        {...register('customerEmail', {
                            pattern: {
                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                message: 'Sai định dạng email',
                            },
                        })}
                    />
                    {errors.customerEmail && (
                        <p className="text-red-500">
                            {errors.customerEmail.message}
                        </p>
                    )}

                    <Input
                        placeholder="Sản phẩm hệ thống cần báo giá"
                        {...register('product', {
                            required: 'Vui lòng điền mục này',
                        })}
                    />
                    {errors.product && (
                        <p className="text-red-500">{errors.product.message}</p>
                    )}

                    <TextArea
                        placeholder="Nội dung chi tiết"
                        {...register('detail')}
                    />
                    {errors.details && (
                        <p className="text-red-500">{errors.details.message}</p>
                    )}

                    <Button className="text-base" type="submit">
                        Gửi yêu cầu
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default PriceRequest;
