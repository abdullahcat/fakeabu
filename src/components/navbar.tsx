"use client"; // This is a client component 👈🏽
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import NotificationsButton from './notifications';
import MessagesButton from './messages';
import LogoutButton from './logout';

function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 0) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <div className={`fixed text-white w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black' : 'bg-black'}`}>


            <nav className="bg-white border-gray-100 dark:bg-gray-700">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-2">
                    <a href="https://flowbite.com" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src="uniLogo.png" className="h-8" alt="Flowbite Logo" />
                        <span className="self-center text-sm   whitespace-nowrap dark:text-white">ANTALYA BİLİM ÜNİVERSİTESİ | Bilgi Sistemleri</span>
                    </a>

                </div>
            </nav>
            <nav className="bg-gray-50 dark:bg-gray-600">
                <div className="max-w-screen-xl px-5 py-3 mx-auto">
                    <div className="flex flex-row items-end">
                        <ul className="flex flex-row   mt-0 space-x-4 rtl:space-x-reverse text-sm ml-auto">

                            <li className="relative">
                                <a href="#" className="text-gray-900 dark:text-white hover:underline">Türkçe</a>
                            </li>
                            <li className=' relative'>
                                <span className="absolute h-5 bg-white right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-px"></span>
                            </li>
                            <NotificationsButton />
                            <MessagesButton />
                            <div className="relative inline-flex">
                                <button
                                    type="button"
                                    className="flex items-center justify-center   rounded-full w-7 h-5      "
                                    id="user-menu-button"
                                    aria-expanded="false"
                                    data-dropdown-toggle="user-dropdown"
                                    data-dropdown-placement="bottom"
                                >
                                    <img className="w-5 h-7 rounded-full" src="data:image/jpg;base64,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" alt="user photo" />
                                </button>

                                {/* Dropdown button */}
                                <button
                                    type="button"
                                    className="text-lg rounded-full  focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-600"
                                    id="dropdown-button"
                                    aria-expanded="false"
                                    data-dropdown-toggle="dropdown"
                                    data-dropdown-placement="bottom"
                                >
                                    <svg fill="#fff" height="18px" width="18px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">

                                        <rect x="0" fill="none" width="24" height="24" />

                                        <g>

                                            <path d="M7 10l5 5 5-5" />

                                        </g>

                                    </svg>                                </button>
                            </div>

                            <LogoutButton />

                        </ul>
                    </div>
                </div>
            </nav>



        </div>
    );
}

export default Navbar;