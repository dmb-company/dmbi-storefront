import { getStore } from '@/api/store/api';
import Link from 'next/link';

const Footer = async () => {
    const store = await getStore();

    return (
        <footer className="min-h-[20vh] bg-primary">
            <div className="mx-auto grid max-w-screen-xl grid-cols-1 gap-10 px-5 py-16 text-white md:grid-cols-2 md:gap-5 md:px-5 lg:grid-cols-3 xl:px-5">
                <div className="space-y-5 pr-10">
                    <h3 className="text-xl font-semibold uppercase">
                        <span className="border-b-2">Liên hệ</span>
                    </h3>
                    {store?.metadata?.address?.map((a, i) => {
                        return (
                            <div key={i} className="space-y-2">
                                <div className="font-medium">
                                    <span className="border-b text-base">
                                        {a?.title}
                                    </span>
                                </div>
                                <div className="text-sm">{a.value}</div>
                            </div>
                        );
                    })}
                    <div>
                        <span>Hotline: </span>
                        <span>{store?.metadata?.hotline}</span>
                    </div>
                    <div>
                        <span>Fanpage: </span>
                        <Link
                            href={
                                'https://www.facebook.com/profile.php?id=61558885256355'
                            }
                            target="_blank"
                        >
                            DMB Industrial
                        </Link>
                    </div>
                </div>
                <div className="space-y-5 pr-10">
                    <h3 className="text-xl font-semibold uppercase">
                        <span className="border-b-2">Thông tin hỗ trợ</span>
                    </h3>
                    <div className="flex flex-col space-y-3 text-base">
                        {store?.metadata?.support_info?.map((e, i) => {
                            return (
                                <Link key={i} href={`/news/${e.id}`}>
                                    {e.label}
                                </Link>
                            );
                        })}
                    </div>
                </div>
                <div className="space-y-5 pr-10">
                    <h3 className="text-xl font-semibold uppercase">
                        <span className="border-b-2">Chính sách</span>
                    </h3>
                    <div className="flex flex-col space-y-3 text-base">
                        {store?.metadata?.company_policy?.map((e, i) => {
                            return (
                                <Link key={i} href={`/news/${e.id}`}>
                                    {e.label}
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </div>
            <div className="bg-gray-300 py-2 text-center text-sm md:text-base">
                © Copyright 2024 | DMB Industrial
            </div>
        </footer>
    );
};

export default Footer;
