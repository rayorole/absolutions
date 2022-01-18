import React, { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/outline';

function Faq() {
  const [faqU, setFaqU] = useState(false);
  const faqs = [
    {
      name: 'Wat is een HDPE zwembad',
      description:
        'HDPE staat voor hoge dichtheid polyethyleen. Polyethyleen is een plastic geproduceerd op basis van aardolie. Een belangrijk voordeel van HDPE is dat het voornamelijk bestaat uit koolstof en water, waardoor er geen schadelijke stoffen vrijkomen bij hoge temperaturen. HDPE is dus veilig voor de mens en de natuur. Een HDPE zwembad wordt fabrieksmatig vervaardigd. Het bestaat uit plaatmateriaal van 10mm dik dat gelast wordt tot een kuip. Je kan een HDPE kuip verkrijgen in verschillende kleuren waardoor we het kunnen aanpassen naar de wens van de klant en zijn omgeving.',
      id: 1,
    },
    {
      name: 'Hoe wordt een HDPE zwembad geplaatst?',
      description:
        'Bij de plaatsing van een HDPE zwembad wordt er eerst gegraven en een bodemplaat gechapt. Nadat de betonplaat is uitgehard wordt de HDPE kuip door middel van een kraan waterpas geplaatst. Daarna wordt het zwembad al gevuld met water. Na de plaatsing voorziet men de nodige aansluitingen en de verdere afwerking.',
      id: 2,
    },
  ];

  function changeFaq(id) {
    if (id == faqU) {
      setFaqU('none');
    } else {
      setFaqU(id);
    }
  }

  return (
    <section className="text-center py-10 px-4 sm:px-6 md:px-9 text-neutral-700 border-b border-b-zinc-100 selection:bg-cyan-600 selection:text-white">
      <div className="lg:text-center my-4">
        <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight sm:text-4xl">
          Veelgestelde vragen
        </h3>
      </div>

      {faqs.map((faq) => (
        <div className="p-2 border-t border-t-neutral-200">
          <div className="flex items-center justify-between">
            <h2 className="font-semibold text-stone-800 text-sm">{faq.name}</h2>
            <button
              onClick={() => changeFaq(faq.id)}
              className="hover:bg-neutral-200 rounded-full p-3"
            >
              <ChevronDownIcon
                className={faqU == faq.id ? 'h-5 w-5 rotate-180' : 'h-5 w-5'}
              />
            </button>
          </div>
          <div
            className={
              faqU == faq.id
                ? 'text-left text-sm text-stone-500 font-semibold'
                : 'hidden'
            }
          >
            {faq.description}
          </div>
        </div>
      ))}
    </section>
  );
}

export default Faq;
