import { Footer, Header } from '../layout';

const Layout = ({ children }) => {
    return (
        <div className="min-h-screen bg-background">
            <Header />
            <div className="min-h-[80vh]">{children}</div>
            <Footer />
        </div>
    );
};

export default Layout;
