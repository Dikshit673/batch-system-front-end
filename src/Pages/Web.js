import '../App.css';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import Feature from '../components/Feature';
import Advantages from '../components/Advantages';
import Testimonial from '../components/Testimonial';
import Faq from '../components/Faq';

const Web = () => {
    return (
        <>
            <header>
                <Navbar />
            </header>
            <main>
                <Hero />
                <Feature />
                <Advantages />
                <Testimonial />
                <Faq />
            </main>
            <footer>
                <Footer />
            </footer>
        </>
    );
}

export default Web;
