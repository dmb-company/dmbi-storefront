'use client';
import Link from 'next/link';
import { cn } from '@/lib/utils';

const Button = ({
    className = '',
    children,
    size = '',
    href = null,
    onClick = () => {},
    type = 'button', // default button type
    ...props
}) => {
    const isLink = Boolean(href);
    const ComponentTag = isLink ? Link : 'button';

    const attributes = isLink
        ? {
              href,
              className: cn(
                  'rounded-lg text-center border-2 border-primary bg-primary px-5 py-3 text-lg font-bold uppercase text-white transition-all duration-200 hover:border-white',
                  className
              ),
              ...props,
          }
        : {
              className: cn(
                  'rounded-lg text-center border-2 border-primary bg-primary px-5 py-3 text-lg font-bold uppercase text-white transition-all duration-200 hover:border-white',
                  className
              ),
              onClick,
              type,
              ...props,
          };

    return <ComponentTag {...attributes}>{children}</ComponentTag>;
};

export default Button;
