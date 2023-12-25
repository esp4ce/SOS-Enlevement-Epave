"use client"
import Hero from './components/Hero';
import { useRouter } from 'next/navigation';
import Feature from './components/Feature';


export default function Home() {
  const router = useRouter(); 
  console.log('%c Website developed by Alphonse Schwartz via the company ClickAndTrust.', 'background: #222; color: #bada55; font-size: 16px; font-weight: bold;');
  return (
    <>
      
        <Hero/>
        <Feature id="etapes" />
        <link rel="icon" href="/favicon.ico" />
    </>
  );
}