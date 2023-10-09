"use client"

import { useState } from "react";

var a='{ HelloWorld! }';

export default function NavBar() {
    const [navbar, setNavbar] = useState(false);
    return (
        <header className="w-full shadow">
            <nav className="justify-between px-20 py-4 max-sm:px-8 mx-auto lg:items-center lg:flex bg-slate-200">
                <div>
                    <div className="flex items-center justify-between md:py-5 lg:block ">
                        <a href="/">
                            <h2 className="text-2xl font-bold font-montserrat from-red-500 via-violet-600 to-green-600 bg-gradient-to-r bg-clip-text text-transparent">{a}</h2>
                        </a>
                        <div className="lg:hidden">
                            <button
                                id="hamburger"
                                className="p-2 text-gray-700 rounded-md outline-none"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <div >
                    <div
                        className={`flex-1 justify-self-center pb-3 mt-8 lg:block md:pb-0 md:mt-0 ${
                            navbar ? "block" : "hidden"
                        }`}
                    >
                        <ul className="items-center justify-center space-y-8 lg:flex lg:space-x-16 lg:space-y-0">
                            <li className="text-gray-600 font-sans text-center font-[800] text-lg">
                                <a href="/">Home</a>
                            </li>
                            <li className="text-gray-600 font-sans text-center font-[800] text-lg">
                                <a href="/">About</a>
                            </li>
                            <li className="text-gray-600 font-sans text-center font-[800] text-lg">
                                <a href="/">Speakers</a>
                            </li>
                            <li className="text-gray-600 font-sans text-center font-[800] text-lg">
                                <a href="/">FAQ</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}