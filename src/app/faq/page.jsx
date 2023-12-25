"use client"
import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function InfoCards() {
  const cardData = [
    {

      title: 'Quels sont les services d\'enlèvement d\'épaves proposés en Île-de-France ?',
      description:
        'En tant qu\'épaviste professionnel, nous offrons un service complet d\'enlèvement d\'épaves dans toute l\'Île-de-France, incluant les départements 92, 91, 95, 94, et Paris. Nous nous occupons des véhicules hors service, en panne, ou en stationnement gênant, en assurant une intervention rapide. Notre service inclut également la gestion des démarches administratives nécessaires pour un enlèvement d\'épave efficace et sans tracas.'
    },
    {

      title: 'En tant qu\'épaviste, pouvez-vous intervenir pour un véhicule en panne ou en stationnement gênant dans le Val-d\'Oise (95) ?',
      description:
        'Oui, en tant qu\'épaviste, nous intervenons dans tout le Val-d\'Oise (95) pour l\'enlèvement de véhicules en panne ou en stationnement gênant. Nous couvrons des villes comme Argenteuil, Sarcelles, Cergy, Garges-lès-Gonesse, Franconville, Pontoise, Ermont, Goussainville, Bezons, et Villiers-le-Bel. Notre service est conçu pour répondre rapidement à ces situations, en assurant un enlèvement efficace et conforme'
    },
    {
      title: 'En tant qu\'épaviste, pouvez-vous gérer l\'enlèvement de véhicules en panne, de véhicules gênants ou hors service dans l\'Essonne (91) ?',
      description:
        'Absolument, nous offrons des services complets d\'épaviste dans l\'Essonne (91), couvrant l\'enlèvement de véhicules en panne, de véhicules hors service, ainsi que le débarras de véhicules gênants. Nous intervenons dans les principales villes de l\'Essonne, telles qu\'Évry, Corbeil-Essonnes, Massy, Savigny-sur-Orge, Sainte-Geneviève-des-Bois, Palaiseau, Viry-Châtillon, Draveil, Les Ulis, et Yerres. En plus de l\'enlèvement, nous assistons nos clients dans les démarches administratives, même en cas de papiers perdus, pour garantir un service complet et sans tracas. Notre objectif est de fournir une solution rapide et efficace pour tous vos besoins d\'enlèvement d\'épaves dans l\'Essonne.'
    },
    {
      title: 'Proposez-vous l\'enlèvement d\'épaves pour des véhicules en panne ou gênants dans les Hauts-de-Seine (92)? ',
      description:
        'Oui, nous sommes spécialisés dans l\'enlèvement d\'épaves de véhicules en panne, hors service ou stationnés de manière gênante dans les Hauts-de-Seine (92). Nous opérons dans des villes clés comme Boulogne-Billancourt, Nanterre, Courbevoie, Colombes, Asnières-sur-Seine, Rueil-Malmaison, Levallois-Perret, Issy-les-Moulineaux, Antony, et Neuilly-sur-Seine. En plus de l\'enlèvement, nous offrons une assistance pour les démarches administratives nécessaires en cas de papiers de véhicule perdus.'
    },
    {
      title: 'Fournissez-vous des services d\'enlèvement d\'épaves pour des véhicules en panne ou gênants dans la Seine-Saint-Denis (93) ?',
      description:
        'Absolument, nous proposons des services d\'enlèvement d\'épaves pour véhicules en panne, hors service ou en stationnement gênant dans toute la Seine-Saint-Denis (93). Nous intervenons dans des villes importantes telles que Saint-Denis, Montreuil, Aubervilliers, Drancy, Noisy-le-Grand, Épinay-sur-Seine, Sevran, Pantin, Le Blanc-Mesnil, et Bobigny. Notre équipe est également prête à vous aider pour toutes les démarches administratives en cas de perte des papiers du véhicule.'
    },
    {
      title: 'Offrez-vous des services d\'enlèvement d\'épaves pour des véhicules en panne ou gênants dans le Val-de-Marne (94)?',
      description:
        'Oui, nous fournissons des services d`\'enlèvement d\'épaves pour les véhicules en panne, hors service ou en stationnement gênant dans le Val-de-Marne (94). Nous couvrons des villes majeures comme Créteil, Vitry-sur-Seine, Champigny-sur-Marne, Saint-Maur-des-Fossés, Ivry-sur-Seine, Maisons-Alfort, Fontenay-sous-Bois, Villejuif, Vincennes, et Alfortville. En outre, nous offrons une assistance complète pour les démarches administratives nécessaires en cas de papiers de véhicule perdus.'
    },
    {
      title: 'Quel est le délai pour l\'enlèvement d\'un véhicule en stationnement gênant ?',
      description:
        'L\'enlèvement d\'un véhicule en stationnement gênant est une de nos spécialités et nous nous engageons à intervenir dans les plus brefs délais, généralement sous 24 heures. Que ce soit pour une voiture bloquant une voie de circulation, gênant l\'accès à un garage, ou stationnée illégalement, notre équipe d\'épavistes professionnels est prête à agir rapidement. Nous comprenons l\'urgence de ces situations et l\'importance de rétablir l\'ordre et la sécurité sur la voie publique. Pour planifier un enlèvement rapide et efficace, contactez-nous directement au 06 52 35 94 02. Notre service client est disponible pour répondre à vos questions et organiser l\'intervention .'
    },
    {
      title: 'Y a-t-il des frais pour l\'enlèvement d\'un véhicule en stationnement gênant ?',
      description:
        'Non, l\'enlèvement d\'un véhicule en stationnement gênant est entièrement gratuit. Nous offrons ce service pour faciliter la gestion des espaces publics et maintenir la sécurité. Pour organiser un enlèvement sans frais, contactez-nous au 06 52 35 94 02'
    },
    {
      title: 'Quelles sont les étapes pour faire enlever un véhicule hors service en Île-de-France ?',
      description:
        'Pour enlever un véhicule hors service en Île-de-France, contactez-nous au 06 52 35 94 02 ou via notre site web (www.sos-enlevement-epave.fr/contact). Indiquez-nous la marque et le modèle de votre véhicule, qu\'il s\'agisse d\'une citadine comme une Fiat 500, d\'une berline comme une Mercedes Classe C, d\'un SUV comme un BMW X5, ou même d\'un utilitaire comme un Ford Transit. Précisez également son emplacement, que ce soit à Nanterre, Créteil, Sarcelles, ou ailleurs dans la région. Nous organiserons l\'enlèvement selon vos disponibilités'
    },
    {
      title: 'Quels sont les délais pour l\'enlèvement d\'une épave ?',
      description:
        'L\'enlèvement d\'une épave se réalise généralement entre 30 minutes et 12 heures après votre demande. Pour planifier rapidement l\'enlèvement, contactez-nous au 06 52 35 94 02'
    },
    {
      title: 'Quel est le processus pour l\'enlèvement d\'une épave sans les papiers du véhicule ?',
      description:
        'Oui, nous nous occupons de tout. Même si vous avez perdu les papiers de votre véhicule, il n\'y a pas lieu de s\'inquiéter. Contactez-nous au 06 52 35 94 02, et nous prendrons en charge la situation. Nous sommes en relation constante avec la préfecture et gérons fréquemment des cas similaires.'
    },
    {
      title: 'Êtes-vous un épaviste agréé VHU (Véhicule Hors d\'Usage) ',
      description:
        'Oui, nous sommes un épaviste agréé VHU, ce qui signifie que nous respectons toutes les normes et réglementations requises pour l\'enlèvement et le traitement des véhicules hors d\'usage.'
    },
  ];

  const router = useRouter();

  const [openCard, setOpenCard] = useState(null);

  const toggleCard = (index) => {
    setOpenCard((prev) => (prev === index ? null : index));
  };

  const contact = () => {
    router.push('/contact');
  };

  return (
    <>
      <div className="flex flex-col items-center">
        <div className="pb-5 pt-12 font-bold text-3xl text-blue-500">
          <h1>Nous répondons à toutes vos questions sur notre service d'enlèvement d'épaves !</h1>
        </div>
      </div>

      <div className="container mx-auto p-4 pt-11">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="flex items-center bg-white shadow-md rounded-lg p-4 mb-4  border hover:border-blue-500 cursor-pointer"
            onClick={() => toggleCard(index)}
          ><div>{card.img}</div>
            <div className="flex-grow">
              <h3 className="text-lg font-semibold">{card.title}</h3>
              {openCard === index && <p>{card.description.split(/(\d{2} \d{2} \d{2} \d{2} \d{2})/).map((part, index) => (
                /\d{2} \d{2} \d{2} \d{2} \d{2}/.test(part) ? (
                  <strong key={index}>{part}</strong>
                ) : (
                  <span key={index}>{part}</span>
                )
              ))}</p>}
            </div>
            <svg
              className={`w-6 h-6 text-gray-600 ${openCard === index ? 'transform rotate-90' : ''}`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </div>
        ))}
      </div>

      <div className="flex flex-col items-center">
        <div className="pb-9 pt-5 font-bold text-3xl text-blue-500">
          <h1>Vous avez des questions sans réponses ?</h1>
        </div>
        <div className="flex justify-center cursor-pointer bg-blue-500 hover:bg-blue-700 text-white mb-5 font-bold mb-3 py-2 px-4 rounded-full shadow-lg focus:outline-none">
          <p onClick={contact}> Contactez-nous</p>
        </div>
      </div>
    </>
  );
}
