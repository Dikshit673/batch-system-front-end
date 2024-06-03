import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Feature from './components/Feature';
import Advantages from './components/Advantages';
import Testimonial from './components/Testimonial';
import Faq from './components/Faq';
// import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <>
      {/* <BrowserRouter> */}
      <header>
        <Navbar />
      </header>
      <main>
        {/* <Hero /> */}
        <Feature />
        <Advantages />
        <Testimonial />
        <Faq />
      </main>
      <footer>
        <Footer />
      </footer>

      {/* </BrowserRouter> */}
    </>
  );
}

export default App;
