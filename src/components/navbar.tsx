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
                    <a href="" className="flex items-center space-x-3 rtl:space-x-reverse">
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
                                    <img className="w-5 h-7 rounded-full" src="https://i.ibb.co/6JSJ5g5/68290-1697056482.webp" alt="user photo" />
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
