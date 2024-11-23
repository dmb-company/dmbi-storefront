import { NewsTemplate } from '@/components/news';

export const dynamic = 'force-dynamic';

export const metadata = {
    title: 'DMB Industrial | Tin tức',
    description:
        'Tổng hợp các bài viết liên quan đến các dự án, chính sách cũng như các vấn đề sản phẩm của công ty DMB Toàn Cầu | DMB Industrial Company.',
};

const News = () => {
    return <NewsTemplate />;
};

export default News;
