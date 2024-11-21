import { Poppins } from 'next/font/google';
import Footer from './footer';
import Header from './header';
import NextTopLoader from 'nextjs-toploader';

// Load the Poppins font
const poppins = Poppins({
    subsets: ['latin'], // Specify the character subsets
    weight: ['400', '600', '700'], // Specify the weights you need
});

export default function Layout({ children }) {
    return (
        <div className={poppins.className}>
            <NextTopLoader color='#059669' showSpinner={false} />
            <Header />
                <main>{children}</main>
            <Footer />
        </div>
    );
}
