import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/home.scss';

function Home() {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <main className="mt-24 w-full selection:bg-cyan-600 selection:text-white flex justify-center px-4 items-start flex-col text-white">
        <h2 className="text-3xl font-semibold">
          AB Solutions bouwt en onderhoudt uw zwembad met de grootste zorg.
        </h2>
        <h3 className="text-lg">U hoeft enkel te genieten</h3>
        <div className="mt-12">
          <a
            href="/hdpe"
            className="py-3 px-5 transition ease-linear hover:bg-neutral-200 appearance-none rounded-sm bg-neutral-100 shadow-sm shadow-gray-300 font-semibold text-sm text-neutral-700"
          >
            Bekijk onze zwembaden
          </a>
        </div>
      </main>
      <section className="bg-zinc-50 text-center py-10">
        <div>
          <h3 className="text-zinc-600 font-semibold text-3xl">Waarom HDPE?</h3>
        </div>
        <div className="inline-grid gap-4 grid-cols-2 md:grid-cols-3">
          <div className="p-5 bg-zinc-100 border border-neutral-300 rounded shadow-lg shadow-zinc-200">
            Lange levensduur en garantie
          </div>
          <div className="p-5 bg-zinc-100 border border-neutral-300 rounded shadow-lg shadow-zinc-200">
            Volledig op maat
          </div>
          <div className="p-5 bg-zinc-100 border border-neutral-300 rounded shadow-lg shadow-zinc-200">
            Verschillende kleuren mogelijk
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Home;
