'use client';
import { ChevronRight } from 'lucide-react';
import { useState } from 'react';

const CategoryItem = ({ category, className }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div
            className={`${className} px-2 text-[12px] transition-all duration-300`}
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
        >
            <div className={'flex items-center justify-between'}>
                <a
                    href={`/categories/${category.id}`}
                    className="bg-card hover:bg-accent flex w-full items-center justify-between rounded-lg p-2 transition-colors duration-200 hover:bg-white/80"
                >
                    <span className="text-foreground font-medium transition-colors duration-200 group-hover:text-primary">
                        {category.name}
                    </span>
                </a>
                <div className={'h-5 w-5'}>
                    {category?.children?.length > 0 && (
                        <ChevronRight
                            onClick={() => setIsOpen(!isOpen)}
                            className={`text-muted-foreground transition-colors duration-200 group-hover:text-primary ${isOpen ? 'rotate-90' : ''}`}
                        />
                    )}
                </div>
            </div>
            {category?.children.length > 0 && isOpen && (
                <div className="space-y-1 pl-2">
                    {category.children.map((child) => (
                        <CategoryItem
                            key={child.id}
                            category={child}
                            className="mt-1 border-l-2 border-primary/60"
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default CategoryItem;
