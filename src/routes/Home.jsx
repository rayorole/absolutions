import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Services from '../components/Services';
import DidYouKnow from '../components/DidYouKnow';
import About from '../components/About';
import Gallery from '../components/Gallery';
import PoolCover from '../assets/images/cover-pool.jpeg';
import Aos from 'aos';
import vanbeers from '../assets/images/vanbeers.png';
import renolit from '../assets/images/renolit.png';
import 'aos/dist/aos.css';
import '../styles/home.scss';

function Home() {
  useEffect(() => {
    Aos.init({});
  }, []);

  return (
    <div className="overflow-x-hidden">
      <Header />
      <main className="mt-24 home w-full selection:bg-cyan-600 selection:text-white flex justify-center px-4 items-start flex-col text-white">
        <h2
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-sine"
          data-aos-duration="600"
          className="text-3xl font-semibold w-96 sm:w-fit md:w-[600px]"
        >
          AB Solutions bouwt en onderhoudt uw zwembad met de grootste zorg.
        </h2>
        <h3
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-sine"
          data-aos-duration="600"
          className="text-lg"
        >
          U hoeft enkel te genieten
        </h3>
        <div className="mt-12">
          <a
            data-aos="fade-right"
            data-aos-easing="ease-in-sine"
            data-aos-duration="600"
            href="/hdpe"
            className="py-3 px-5 transition ease-linear hover:bg-neutral-200 appearance-none rounded-sm bg-neutral-100 shadow-sm shadow-gray-300 font-semibold text-sm text-neutral-700"
          >
            Bekijk onze zwembaden
          </a>
        </div>
      </main>

      <Services />
      <About />
      <DidYouKnow />
      <Gallery />
      <div className="w-full py-10 px-4 sm:hidden">
        <h2 className="text-center text-neutral-600 font-semibold text-sm">
          In samenwerking met:
        </h2>
        <div className="flex items-center justify-center py-6">
          <img className="w-40" src={vanbeers} alt="Vanbeers Logo" />
          <img className="w-40" src={renolit} alt="Renolit Logo" />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
