import React, { useEffect, useState } from 'react';
import {
  CogIcon,
  ChevronDownIcon,
  RefreshIcon,
  ColorSwatchIcon,
  ViewBoardsIcon,
  NewspaperIcon,
} from '@heroicons/react/outline';
import Aos from 'aos';
import 'aos/dist/aos.css';

function Services() {
  const [NBopen, setNBOpen] = useState(false);
  const [Ropen, setROpen] = useState(false);
  const [Hopen, setHOpen] = useState(false);
  const [Oopen, setOOpen] = useState(false);

  useEffect(() => {
    Aos.init({ duration: 700, offset: 15 });
  }, []);
  return (
    <>
      <section className="bg-zinc-50 text-center py-10 px-4 text-neutral-700 border-b border-b-zinc-100">
        <div className="lg:text-center">
          <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight sm:text-4xl">
            Onze diensten
          </h3>
          <p className="mt-2 max-w-2xl text-sm text-gray-500 lg:mx-auto">
            Welke diensten worden aangeboden bij AB Solutions?
          </p>
        </div>
        <div className="my-3 space-y-2">
          <div
            data-aos="fade-left"
            className="bg-neutral-100 py-3 px-2 border border-neutral-200 rounded-lg h-fit"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center h-min">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-cyan-700 text-white mr-4">
                  <ColorSwatchIcon
                    className="w-6 h-6 text-white"
                    aria-hidden="true"
                  />
                </div>
                <div>
                  <h3 className="text-lg leading-6 font-medium text-slate-700">
                    Nieuwbouw
                  </h3>
                </div>
              </div>
              <button
                onClick={() => setNBOpen(!NBopen)}
                className="p-2 rounded-full transition ease-in"
              >
                <ChevronDownIcon
                  className={
                    NBopen
                      ? 'text-neutral-500 h-5 w-5 rotate-180'
                      : 'text-neutral-500 h-5 w-5'
                  }
                />
              </button>
            </div>
            <div
              className={
                NBopen
                  ? 'mt-3 max-w-2xl text-sm text-gray-500 lg:mx-auto text-left'
                  : 'hidden'
              }
            >
              <p>
                Een zwembad in uw eigen tuin? AB Solutions heeft alles in huis
                om uw droom mee te verwezenlijken. Op basis van uw behoeften
                werken we een plan om maat uit en beheren we het volledige
                proces tot en met oplevering.
              </p>
              <button className="py-2 px-4 mt-3 bg-cyan-700 rounded-md flex items-center text-white text-xs font-semibold">
                Vraag een offerte
                <NewspaperIcon className="w-4 h-4 ml-2" />
              </button>
            </div>
          </div>
          <div
            data-aos="fade-left"
            className="bg-neutral-100 py-3 px-2 border border-neutral-200 rounded-lg h-min"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-cyan-700 text-white mr-4">
                  <RefreshIcon
                    className="w-6 h-6 text-white"
                    aria-hidden="true"
                  />
                </div>
                <div>
                  <h3 className="text-lg leading-6 font-medium text-slate-700">
                    Renovatie
                  </h3>
                </div>
              </div>
              <button
                onClick={() => setROpen(!Ropen)}
                className="p-2 rounded-full transition ease-in"
              >
                <ChevronDownIcon
                  className={
                    Ropen
                      ? 'text-neutral-500 h-5 w-5 rotate-180'
                      : 'text-neutral-500 h-5 w-5'
                  }
                />
              </button>
            </div>
            <div
              className={
                Ropen
                  ? 'mt-3 max-w-2xl text-sm text-gray-500 lg:mx-auto text-left'
                  : 'hidden'
              }
            >
              <p>
                Heeft u al een zwembad maar verkeert het niet meer in goede
                conditie? Dan geven wij uw zwembad terug het aanzien dat het
                verdient en garanderen. Wij doen ook folie-werken, verschillende
                zwembadtechnieken, Roldeck®, andere afdekkingen of nieuw
                leidingwerk.
              </p>
              <button className="py-2 px-4 mt-3 bg-cyan-700 rounded-md flex items-center text-white text-xs font-semibold">
                Vraag een offerte
                <NewspaperIcon className="w-4 h-4 ml-2" />
              </button>
            </div>
          </div>
          <div
            data-aos="fade-left"
            className="bg-neutral-100 py-3 px-2 border border-neutral-200 rounded-lg h-fit"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center h-min">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-cyan-700 text-white mr-4">
                  <CogIcon className="w-6 h-6 text-white" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-lg leading-6 font-medium text-slate-700">
                    Herstellingen
                  </h3>
                </div>
              </div>
              <button
                onClick={() => setHOpen(!Hopen)}
                className="p-2 rounded-full transition ease-in"
              >
                <ChevronDownIcon
                  className={
                    Hopen
                      ? 'text-neutral-500 h-5 w-5 rotate-180'
                      : 'text-neutral-500 h-5 w-5'
                  }
                />
              </button>
            </div>
            <div
              className={
                Hopen
                  ? 'mt-3 max-w-2xl text-sm text-gray-500 lg:mx-auto text-left'
                  : 'hidden'
              }
            >
              <p>
                Heeft uw zwembad een technisch probleem, is er een lamp stuk of
                doet de pomp het niet meer? Wij lossen dit voor u op. Is een
                herstelling van het originele stuk niet mogelijk? Dan bespreken
                we met u de mogelijkheden.
              </p>
              <button className="py-2 px-4 mt-3 bg-cyan-700 rounded-md flex items-center text-white text-xs font-semibold">
                Vraag een offerte
                <NewspaperIcon className="w-4 h-4 ml-2" />
              </button>
            </div>
          </div>
          <div
            data-aos="fade-left"
            className="bg-neutral-100 py-3 px-2 border border-neutral-200 rounded-lg h-fit"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center h-min">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-cyan-700 text-white mr-4">
                  <ViewBoardsIcon
                    className="w-6 h-6 text-white"
                    aria-hidden="true"
                  />
                </div>
                <div>
                  <h3 className="text-lg leading-6 font-medium text-slate-700">
                    Onderhoud
                  </h3>
                </div>
              </div>
              <button
                onClick={() => setOOpen(!Oopen)}
                className="p-2 rounded-full transition ease-in"
              >
                <ChevronDownIcon
                  className={
                    Oopen
                      ? 'text-neutral-500 h-5 w-5 rotate-180'
                      : 'text-neutral-500 h-5 w-5'
                  }
                />
              </button>
            </div>
            <div
              className={
                Oopen
                  ? 'mt-3 max-w-2xl text-sm text-gray-500 lg:mx-auto text-left'
                  : 'hidden'
              }
            >
              <p>
                Wekelijks vraagt uw zwembad om een onderhoud. Een proper zwembad
                is van groot belang vergroot de levensduur van het zwembad en de
                kwaliteit van de installatie. Hierdoor houden we de
                waterkwaliteit in perfecte staat zodat u zorgeloos kan genieten
                van het zwemmen.
              </p>
              <button className="py-2 px-4 mt-3 bg-cyan-700 rounded-md flex items-center text-white text-xs font-semibold">
                Vraag een offerte
                <NewspaperIcon className="w-4 h-4 ml-2" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;
