import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Services from '../components/Services';
import DidYouKnow from '../components/DidYouKnow';
import About from '../components/About';
import Faq from '../components/Faq';
import Gallery from '../components/Gallery';
import PoolCover from '../assets/images/cover-pool.jpeg';
import PoolConstruction1 from '../assets/images/pool-construction.jpg';
import PoolConstruction2 from '../assets/images/pool-construction-2.jpeg';
import PoolConstruction3 from '../assets/images/pool-construction-3.jpeg';
import PoolConstruction4 from '../assets/images/pool-construction-4.jpeg';
import { CheckIcon, MailIcon, PhoneIcon } from '@heroicons/react/outline';
import Aos from 'aos';
import 'aos/dist/aos.css';
import '../styles/home.scss';

function Home() {
  useEffect(() => {
    Aos.init({});
  }, []);

  const features = [
    {
      name: 'Duurzaamheid',
      description: 'Lange levensduur en garantie.',
      icon: CheckIcon,
    },
    {
      name: 'Maatwerk',
      description: 'Volledig op maat.',
      icon: CheckIcon,
    },
    {
      name: 'Personalisatie',
      description: 'Verschillende kleuren mogelijk (kleurvast).',
      icon: CheckIcon,
    },
    {
      name: 'Osmosevrij',
      description:
        'Osmose is een proces waarbij door middel van diffusie een vloeistof met opgeloste stoffen door een semipermeabel membraan stroomt.',
      icon: CheckIcon,
    },
    {
      name: 'Multifunctioneel',
      description: 'Verschillende aansluitingen mogelijk.',
      icon: CheckIcon,
    },
  ];

  return (
    <div className="overflow-x-hidden selection:bg-cyan-600 selection:text-white">
      <Header />
      <div className="py-12 mt-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-cyan-700 font-semibold tracking-wide uppercase">
              HDPE Zwembaden
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-stone-700 sm:text-4xl">
              De verschillende voordelen van HDPE zwembaden
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Waarom zou je kiezen voor een HDPE zwembad?
            </p>
          </div>

          <div className="mt-10">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              {features.map((feature) => (
                <div key={feature.name} className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-neutral-50 border border-neutral-100 text-green-500">
                      <feature.icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                      {feature.name}
                    </p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500">
                    {feature.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
      <div className="py-12 px-8 bg-neutral-50 border border-t-neutral-100 md:flex md:justify-between items-center">
        <div>
          <h2 className="text-base text-cyan-700 font-bold tracking-wide">
            Aarzel ons niet te contacteren
          </h2>
          <p className="text-neutral-600 font-semibold text-xs">
            Wij luisteren naar iedere klant en streven naar kwaliteit.
          </p>
        </div>
        <div className="flex items-center space-x-2 my-4">
          <a
            type="submit"
            href="mailto:vincent@absolutesolutions.be"
            className="py-2 flex focus:outline-none focus:bg-cyan-800 hover:rotate-1 appearance-none justify-center w-32 bg-cyan-700 transition ease-in hover:bg-cyan-800 rounded-full text-white items-center text-md font-medium"
          >
            Mail
            <MailIcon className="w-4 h-4 text-white ml-2" />
          </a>
          <a
            type="submit"
            href="tel:+32479659639"
            className="py-2 hover:rotate-1 focus:outline-none focus:bg-neutral-600 flex appearance-none justify-center w-32 bg-neutral-500 transition ease-in hover:bg-neutral-600 rounded-full text-white items-center text-md font-medium"
          >
            Bel
            <PhoneIcon className="w-4 h-4 text-white ml-2" />
          </a>
        </div>
      </div>
      <Faq />
      <div className="py-12 px-8 bg-neutral-50 border border-t-neutral-100 grid grid-cols-2 grid-rows-2 gap-4">
        <a href={PoolConstruction1} target="_blank" className="mx-auto">
          <img
            className="rounded md:w-96"
            src={PoolConstruction1}
            alt="Pool construction one"
          />
        </a>
        <a href={PoolConstruction2} target="_blank" className="mx-auto">
          <img
            className="rounded md:w-96"
            src={PoolConstruction2}
            alt="Pool construction two"
          />
        </a>
        <a href={PoolConstruction3} target="_blank" className="mx-auto">
          <img
            className="rounded md:w-96"
            src={PoolConstruction3}
            alt="Pool construction three"
          />
        </a>
        <a href={PoolConstruction4} target="_blank" className="mx-auto">
          <img
            className="rounded md:w-96"
            src={PoolConstruction4}
            alt="Pool construction four"
          />
        </a>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
