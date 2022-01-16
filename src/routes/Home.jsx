import React from 'react';
import Header from '../components/Header';
import '../styles/home.scss';

function Home() {
  return (
    <div>
      <Header />
      <main className="mt-24 w-full">
        <h2>HDPE zwembaden</h2>
        <h3>Flexibele afmetingen, snel geplaatst</h3>
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
    </div>
  );
}

export default Home;
