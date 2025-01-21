import { cn, formatNumber } from '@/lib/utils';
import { Bookmark } from 'lucide-react';
import GeneralInfoItem from './general-info-item';

const ProductGeneral = ({ product, className = '' }) => {
    return (
        <div className={cn('space-y-5', className)}>
            <h2 className="py-2 text-lg font-medium uppercase">
                {product?.title}
            </h2>
            <div className="grid grid-cols-1 gap-x-3 gap-y-4 border border-gray-400 p-3 md:grid-cols-2">
                <GeneralInfoItem
                    label={'Model'}
                    value={product?.metadata?.model}
                />
                <GeneralInfoItem
                    label={'Tình trạng'}
                    value={
                        product?.metadata?.inventory > 0
                            ? 'Còn hàng'
                            : 'Hết hàng'
                    }
                />
                <GeneralInfoItem
                    label={'Bảo hành'}
                    value={product?.metadata?.guarantee}
                />
                <GeneralInfoItem
                    label={'Xuất xứ'}
                    value={product?.origin_country}
                />
                <GeneralInfoItem
                    label={'Công nghệ'}
                    value={product?.metadata?.technology}
                />
            </div>
            <div className="text-lg">
                <span className="font-semibold">Giá: </span>
                {product?.metadata?.price && (
                    <span className="font-semibold text-red-500">
                        {formatNumber(product?.metadata?.price)} vnđ
                    </span>
                )}
            </div>
            <div className="border-2 border-primary p-10 text-center">
                <span className="">
                    Liên hệ hotline:{' '}
                    <a type='phone' href='tel:0917700303' className="font-semibold text-primary">
                        0917.700.303
                    </a>{' '}
                    để đặt hàng ngay.
                </span>
            </div>
        </div>
    );
};

export default ProductGeneral;
