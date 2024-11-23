import { Inter } from 'next/font/google';
import './globals.css';
import { Footer, Layout } from '@/components/layout';
import { ToastContainer } from 'react-toastify';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';
import 'react-toastify/dist/ReactToastify.css';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Analytics />
                <SpeedInsights />
                <Layout>
                    <ToastContainer />
                    {children}
                </Layout>
            </body>
        </html>
    );
}
