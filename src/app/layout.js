import { Montserrat } from 'next/font/google'


import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'

const montserrat = Montserrat({ subsets: ['latin'] })



export const metadata = {
  title: 'SOS Épave Gratuit',
  description: 'Service professionnel d\'enlèvement d\'épaves en Île-de-France. Récupération rapide et gratuite de véhicules hors d\'usage.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">

      <body className={montserrat.className}>
        <Header />
        {children}
        <Footer />
      </body>


    </html>
  )
}
