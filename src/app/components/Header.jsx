"use client"
import Link from "next/link"
import { useState } from 'react';

export default function Header() {
    const [navbar, setNavbar] = useState(false);

    return (
        <nav className="bg-white border-gray-200 dark:bg-gray-900 text-xl">
            <div className="flex flex-wrap items-center justify-between mx-auto pt-1 p-3">
                <Link href="/" className="flex items-center self-center text-2xl pl-5 pt-2  font-semibold whitespace-nowrap dark:text-white">
                    <img width={140} height={140} src="https://cdn.discordapp.com/attachments/878674914268311625/1188884118675673108/image-removebg-preview_2.png?ex=659c259e&is=6589b09e&hm=d88f5e689246312277c4dc69baa7c6d2e2dbe1639c989b0ecb04d412360b9483&" alt="Logo" />
                </Link>

                <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false" onClick={() => setNavbar(!navbar)}>
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                    </svg>
                </button>
                
                {/* Ajoutez la classe Tailwind directement ici pour gérer l'affichage */}
                <div className={`w-full md:w-auto md:block ${navbar ? 'block' : 'hidden'} pr-5`} id="navbar-default">
                    <div className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <Link href="/faq" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                            Informations
                        </Link>
                        <Link href="/contact" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                            Contact
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}