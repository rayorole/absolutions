import React from 'react';

function About() {
  return (
    <section className="bg-zinc-100 text-center py-12 px-4 text-neutral-700 border-b border-b-zinc-100 overflow-hidden">
      <div className="lg:text-center">
        <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight sm:text-4xl">
          Over ons
        </h3>
        <p className="mt-3 max-w-2xl text-sm text-gray-500 lg:mx-auto text-left">
          Wanneer u na onze samenwerking een wauw-gevoel heeft, is onze opdracht
          geslaagd. Ook wat betreft een kleine interventie. Omdat we dagelijks
          uw wauw-ervaring dienen te verzekeren, dragen we oog voor detail,
          esthetiek en stiptheid hoog in het vaandel. AB Solutions is
          hoofdzakelijk actief in de provincie Antwerpen.
        </p>
        <div className="flex items-center">
          <a
            href="/contact"
            className="py-2 mt-5 focus:outline-none cursor-pointer flex justify-center w-40 bg-cyan-700 rounded-md text-white items-center text-md font-medium"
          >
            Neem contact op
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
