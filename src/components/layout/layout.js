import Image from 'next/image';
import { Footer, Header } from '../layout';
import { PhoneCall } from 'lucide-react';
import Link from 'next/link';

const Layout = ({ children }) => {
    return (
        <div className="min-h-screen bg-background">
            <Header />
            <div className="min-h-[80vh]">{children}</div>
            <div className="fixed bottom-10 right-10 flex flex-col items-end space-y-2">
                <div className="flex aspect-square w-16 animate-bounce items-center justify-center rounded-full border-2 border-blue-400 p-4">
                    <a
                        href="https://zalo.me/2273702439801277716"
                        target="_blank"
                    >
                        <Image
                            alt="DMB Industrial Zalo"
                            src={'/zalo-icon.png'}
                            width={500}
                            height={500}
                            className="object-cover"
                        />
                    </a>
                </div>
                <div className="flex animate-bounce items-center justify-center space-x-3 rounded-2xl bg-primary px-4 py-2 text-xl font-medium text-white shadow-sm">
                    <p className="text-yellow-400">
                        <PhoneCall />
                    </p>
                    <p>
                        <a href="tel:0917700303" type="phone">
                            0917 700 303
                        </a>
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Layout;
