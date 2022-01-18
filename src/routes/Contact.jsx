import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import {
  CheckCircleIcon,
  PaperAirplaneIcon,
  ChevronDownIcon,
  MailIcon,
  PhoneIcon,
} from '@heroicons/react/outline';
import { Menu, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase';

function Contact() {
  const [loading, setLoading] = useState(false);
  const [subject, setSubject] = useState('nieuwbouw');
  const [success, setSuccess] = useState(false);

  async function insertTicket(name, email, phone, subject, message) {
    const col = collection(db, 'tickets');

    try {
      addDoc(col, {
        name: name,
        email: email,
        phone: phone,
        subject: subject,
        message: message,
      });
    } catch (e) {
      console.log(e);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    insertTicket(
      e.target.name.value,
      e.target.email.value,
      e.target.phone.value,
      subject,
      e.target.message.value
    );

    setTimeout(() => {
      setLoading(false);
      setSuccess(true);

      e.target.name.value = '';
      e.target.email.value = '';
      e.target.phone.value = '';
      setSubject('nieuwbouw');
      e.target.message.value = '';
    }, 1000);
  }

  function handleSubject(e) {
    setSubject(e.target.value);
  }

  return (
    <div className="overflow-x-hidden">
      <Header />
      <section className="w-screen md:w-7/12 lg:w-5/12 xl:w-1/3 2xl:w-1/3 mx-auto px-6 mt-36 mb-12 selection:bg-cyan-600 selection:text-white">
        <h3 className="text-slate-700 font-semibold text-3xl">
          Contacteer ons
        </h3>
        <p className="text-xs text-neutral-500">
          Heb je vragen over één van onze diensten? Stuur ons gerust een mailtje
          via onderstaand formulier. We zijn ook telefonisch bereikbaar op +32
          479 65 96 39 .
        </p>
        <form
          onSubmit={handleSubmit}
          className="space-y-10 mt-6 accent-cyan-700"
          autoComplete="off"
        >
          <div>
            <div>
              <label
                htmlFor="name"
                className="block ml-4 text-slate-900 text-sm font-medium leading-6"
              >
                Naam
              </label>
              <input
                type="text"
                name="name"
                required
                className="mt-1 focus:ring-2 focus:ring-cyan-700 sm:focus:ring-0 px-4 border appearance-none border-gray-200 focus:text-cyan-900 text-slate-500 font-medium py-2 w-full bg-neutral-100 rounded-lg focus:outline-cyan-700 text-sm leading-6"
              />
            </div>
            <div className="mt-5">
              <label
                htmlFor="email"
                class="block text-slate-900 text-sm font-medium leading-6"
              >
                <span class="block text-sm font-medium text-slate-700 ml-4">
                  Email
                </span>
                <input
                  type="email"
                  name="email"
                  class="peer mt-1 focus:ring-2 focus:ring-cyan-700 sm:focus:ring-0 px-4 border appearance-none border-gray-200 focus:text-cyan-900 text-slate-500 font-medium py-2 w-full bg-neutral-100 rounded-lg focus:outline-cyan-700 text-sm leading-6"
                />
                <p class="invisible peer-invalid:visible text-pink-600 text-sm">
                  Deze email is niet geldig.
                </p>
              </label>
            </div>
            <div className="mt-2">
              <label
                htmlFor="phone"
                class="block text-slate-900 text-sm font-medium leading-6"
              >
                <span class="block text-sm font-medium text-slate-700 ml-4">
                  Telefoonnummer
                </span>
                <input
                  type="tel"
                  name="phone"
                  class="peer mt-1 focus:ring-2 focus:ring-cyan-700 sm:focus:ring-0 px-4 border appearance-none border-gray-200 focus:text-cyan-900 text-slate-500 font-medium py-2 w-full bg-neutral-100 rounded-lg focus:outline-cyan-700 text-sm leading-6"
                />
                <p class=" invisible peer-invalid:visible text-pink-600 text-sm">
                  Deze telefoonnummer is niet geldig.
                </p>
              </label>
            </div>
            <div className="mt-5">
              <Menu as="div" className="relative">
                {({ open }) => (
                  <Fragment>
                    <Menu.Button
                      type="button"
                      className="inline-flex items-center justify-between w-36 rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-gray-100 focus:ring-cyan-700"
                    >
                      {subject.charAt(0).toUpperCase() + subject.slice(1)}
                      <ChevronDownIcon
                        className="-mr-1 ml-2 h-4 w-4"
                        aria-hidden="true"
                      />
                    </Menu.Button>
                    <Transition
                      show={open}
                      enter="transform transition duration-100 ease-in"
                      enterFrom="opacity-0 scale-95"
                      enterTo="opacity-100 scale-100"
                      leave="transform transition duration-75 ease-out"
                      leaveFrom="opacity-100 scale-100"
                      leaveTo="opacity-0 scale-95"
                    >
                      <Menu.Items className="origin-top-left absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none">
                        <div className="py-1 w-full">
                          <Menu.Item>
                            <button
                              onClick={handleSubject}
                              name="subject"
                              value="nieuwbouw"
                              className="group w-full flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-cyan-600 hover:text-white"
                            >
                              Niewbouw
                            </button>
                          </Menu.Item>
                          <Menu.Item>
                            <button
                              onClick={handleSubject}
                              name="subject"
                              value="onderhoud"
                              className="group w-full flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-cyan-600 hover:text-white"
                            >
                              Onderhoud
                            </button>
                          </Menu.Item>

                          <Menu.Item>
                            <button
                              onClick={handleSubject}
                              name="subject"
                              value="renovatie"
                              className="group w-full flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-cyan-600 hover:text-white"
                            >
                              Renovatie
                            </button>
                          </Menu.Item>

                          <Menu.Item>
                            <button
                              onClick={handleSubject}
                              name="subject"
                              value="herstelling"
                              className="group w-full flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-cyan-600 hover:text-white"
                            >
                              Herstelling
                            </button>
                          </Menu.Item>
                        </div>
                        <div className="py-1 w-full">
                          <Menu.Item>
                            <button
                              onClick={handleSubject}
                              name="subject"
                              value="overige"
                              className="group w-full flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-cyan-600 hover:text-white"
                            >
                              Overige
                            </button>
                          </Menu.Item>
                        </div>
                      </Menu.Items>
                    </Transition>
                  </Fragment>
                )}
              </Menu>
            </div>
            <div className="my-5 w-full">
              <label
                className="block ml-4 text-slate-900 text-sm font-medium leading-6"
                htmlFor="message"
              >
                Bericht
              </label>
              <textarea
                className="w-full p-2 appearance-none h-48 resize-y focus:text-cyan-900 text-slate-500 focus:ring-cyan-700 focus:outline-cyan-700 focus:ring-opacity-25 border border-gray-300 rounded-sm"
                name="message"
                id="body"
                maxLength="3000"
                required
              ></textarea>
            </div>
            {success ? (
              <button
                type="submit"
                disabled
                className="py-2 focus:outline-none cursor-pointer flex justify-center w-40 bg-green-600 rounded-full text-white items-center text-md font-medium"
              >
                Verzonden
                {loading ? (
                  <svg
                    className="animate-spin ml-2 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      class="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      stroke-width="4"
                    ></circle>
                    <path
                      class="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                ) : (
                  <CheckCircleIcon className="w-4 h-4 text-white ml-2" />
                )}
              </button>
            ) : (
              <motion.button
                whileHover={{ scale: 1.02 }}
                type="submit"
                className="py-2 focus:bg-cyan-800 focus:outline-none flex justify-center w-40 bg-cyan-700 hover:bg-cyan-800 rounded-full text-white items-center text-md font-medium"
              >
                {loading ? 'Versturen...' : 'Verzend'}
                {loading ? (
                  <svg
                    className="animate-spin ml-2 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      class="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      stroke-width="4"
                    ></circle>
                    <path
                      class="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                ) : (
                  <PaperAirplaneIcon className="w-4 h-4 text-white ml-2" />
                )}
              </motion.button>
            )}
            <div className="my-10">
              <div className="flex items-center">
                <div className="h-[1px] bg-neutral-200 w-full"></div>
                <div className="text-sm text-gray-500 px-3">Of</div>
                <div className="h-[1px] bg-neutral-200 w-full"></div>
              </div>
              <div className="flex justify-center my-4 space-x-2">
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
          </div>
        </form>
      </section>
      <Footer />
    </div>
  );
}

export default Contact;
