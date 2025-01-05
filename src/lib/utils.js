import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

export const cn = (...inputs) => {
    return twMerge(clsx(inputs));
};

export const formatDate = (date) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(date).toLocaleDateString('VI', options);
};

export const formatNumber = (number) => {
    return new Intl.NumberFormat().format(number);
};

export function buildCategoryHierarchy(categories) {
    const categoryMap = new Map();

    // Bước 1: Tạo một bản đồ danh mục từ id
    categories?.forEach(category => {
        category.children = [];
        categoryMap.set(category.id, category);
    });

    // Bước 2: Xây dựng cây phân tầng
    const rootCategories = [];

    categories?.forEach(category => {
        if (category.parent_category) {
            const parent = categoryMap.get(category.parent_category);
            if (parent) {
                parent.children.push(category);
            }
        } else {
            rootCategories.push(category);
        }
    });

    return rootCategories;
}
