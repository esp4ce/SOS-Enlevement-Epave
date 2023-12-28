"use client"

import { useState } from 'react';
import Image from 'next/image';

export default function Contact() {
  const [isError, setIsError] = useState(false);
  const [isOk, setIsOk] = useState(false);


  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    name: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),

      });


      if (response.ok) {
        setIsOk(true)
      } else {
        setIsError(true)
      }
    } catch (error) {
      console.error('Erreur lors de l\'envoi du formulaire', error);
    }
  };

  return (
    <>
      <div className="flex flex-col items-center pt-12 text-4xl font-extrabold text-blue-500">
        Vous avez une question ?
      </div>

      <div className="container mx-auto p-4">
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4  font-extrabold text-blue-500 flex items-center">
            <p>
              Laissez-nous votre message et nous vous répondrons très rapidement !
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm mb-2" htmlFor="email">
                Votre adresse email*
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="email"
                name="email"
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm mb-2" htmlFor="phone">
                Votre téléphone
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                type="tel"
                name="phone"
                onChange={handleChange}
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm mb-2" htmlFor="name">
                Votre nom et prénom*
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                name="name"
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 text-sm mb-2" htmlFor="message">
                Votre message*
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                rows="4"
                name="message"
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <p className="text-red-500">{isError ? 'Erreur lors de l\'envoi du formulaire' : ''}</p>
            <p className="text-green-500">{isOk ? 'Formulaire envoyé avec succès' : ''}</p>


            <div className="flex flex-col items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Envoyer
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
