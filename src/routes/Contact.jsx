import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import { motion } from 'framer-motion';
import {
  CheckCircleIcon,
  PaperAirplaneIcon,
  ChevronDownIcon,
} from '@heroicons/react/outline';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase';

function Contact() {
  const [loading, setLoading] = useState(false);
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
      e.target.subject.value,
      e.target.message.value
    );

    setTimeout(() => {
      setLoading(false);
      setSuccess(true);

      e.target.name.value = '';
      e.target.email.value = '';
      e.target.phone.value = '';
      e.target.subject.value = '';
      e.target.message.value = '';
    }, 1000);
  }

  return (
    <div>
      <Header />
      <section className="w-screen md:w-7/12 lg:w-5/12 xl:w-1/3 2xl:w-1/3 mx-auto px-6 mt-36 mb-12">
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
          autoComplete="on"
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
                className="mt-1 px-4 focus:text-cyan-900 text-slate-500 font-medium py-2 w-full bg-neutral-100 rounded-full focus:outline-cyan-700 text-sm leading-6"
              />
            </div>
            <div className="mt-5">
              <label
                className="block ml-4 text-slate-900 text-sm font-medium leading-6"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                className="mt-1 px-4 focus:text-cyan-900 text-slate-500 font-medium py-2 w-full bg-neutral-100 rounded-full focus:outline-cyan-700 text-sm leading-6"
              />
            </div>
            <div className="mt-5">
              <label
                className="block ml-4 text-slate-900 text-sm font-medium leading-6"
                htmlFor="phone"
              >
                Telefoonnummer
              </label>

              <input
                type="tel"
                name="phone"
                required
                className="mt-1 px-4 focus:text-cyan-900 text-slate-500 font-medium py-2 w-full bg-neutral-100 rounded-full focus:outline-cyan-700 text-sm leading-6"
              />
            </div>
            <div className="mt-5">
              <label
                className="block ml-4 text-slate-900 text-sm font-medium leading-6"
                htmlFor="subject"
              >
                Onderwerp
              </label>

              <select
                name="subject"
                className="mt-1 appearance-none px-4 focus:text-cyan-900 text-slate-500 font-medium py-2 w-full bg-neutral-100 rounded-full focus:outline-cyan-700 text-sm leading-6"
              >
                <option value="nieuwbouw" selected>
                  Nieuwbouw
                </option>
                <option value="onderhoud">Onderhoud</option>
                <option value="renovatie">Renovatie</option>
                <option value="herstelling">Herstelling</option>
                <option value="overige">Overige</option>
              </select>
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
                className="py-2 flex justify-center w-40 bg-green-600 rounded-full text-white items-center text-md font-medium"
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
                className="py-2 flex justify-center w-40 bg-cyan-700 hover:bg-cyan-800 rounded-full text-white items-center text-md font-medium"
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
                  <PaperAirplaneIcon className="w-4 h-4 text-white ml-2"></PaperAirplaneIcon>
                )}
              </motion.button>
            )}
          </div>
        </form>
      </section>
    </div>
  );
}

export default Contact;
