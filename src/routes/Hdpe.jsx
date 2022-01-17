import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Services from '../components/Services';
import DidYouKnow from '../components/DidYouKnow';
import About from '../components/About';
import Gallery from '../components/Gallery';
import PoolCover from '../assets/images/cover-pool.jpeg';
import { CheckIcon } from '@heroicons/react/outline';
import Aos from 'aos';
import 'aos/dist/aos.css';
import '../styles/home.scss';

function Home() {
  useEffect(() => {
    Aos.init({});
  }, []);

  const features = [
    {
      name: 'Competitive exchange rates',
      description: 'Lange levensduur en garantie.',
      icon: CheckIcon,
    },
    {
      name: 'No hidden fees',
      description: 'Volledig op maat.',
      icon: CheckIcon,
    },
    {
      name: 'Transfers are instant',
      description: 'Verschillende kleuren mogelijk (kleurvast).',
      icon: CheckIcon,
    },
    {
      name: 'Mobile notifications',
      description: 'Osmosevrij.',
      icon: CheckIcon,
    },
    {
      name: 'Testing',
      description: 'Verschillende aansluitingen mogelijk.',
      icon: CheckIcon,
    },
  ];

  return (
    <div className="overflow-x-hidden">
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
      <Footer />
    </div>
  );
}

export default Home;
