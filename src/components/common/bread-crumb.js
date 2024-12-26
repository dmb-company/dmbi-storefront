import { cn } from '@/lib/utils';
import Link from 'next/link';

const BreadCrumb = ({ data, className }) => {
    return (
        <div className={cn('py-3', className)}>
            {data.map((item, i) => (
                <a
                    className="text-sm font-medium text-primary md:text-base"
                    key={item.title}
                    href={item.href}
                >
                    {item.title} {i !== data.length - 1 && <span> / </span>}
                </a>
            ))}
        </div>
    );
};

export default BreadCrumb;
