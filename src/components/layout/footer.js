'use client';
import { BASE_URL } from '@/constants/constants';
import useFetch from '@/hook/useFetch';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const Footer = () => {
    const [store, setStore] = useState(null);
    const { data, loading } = useFetch(BASE_URL + '/store');

    useEffect(() => {
        setStore(data);
    }, [data]);

    return (
        <footer className="min-h-[20vh] bg-primary">
            <div className="mx-auto grid max-w-screen-xl grid-cols-1 gap-10 px-5 py-16 text-white md:grid-cols-2 md:gap-5 md:px-5 lg:grid-cols-3 xl:px-0">
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
                        <span className="border-b-2">Bản đồ</span>
                    </h3>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4519.8436337139465!2d105.52270891156897!3d21.01241668055209!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135abc60e7d3f19%3A0x2be9d7d0b5abcbf4!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBGUFQgSMOgIE7hu5lp!5e1!3m2!1svi!2s!4v1724485293554!5m2!1svi!2s"
                        width="300"
                        height="150"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
            <div className="bg-gray-300 py-2 text-center text-sm md:text-base">
                © Copyright 2024 | DMB Industrial
            </div>
        </footer>
    );
};

export default Footer;
