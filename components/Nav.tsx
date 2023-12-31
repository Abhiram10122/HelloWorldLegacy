"use client"
import { useState, useEffect } from "react";
import ThemeButton from "./ThemeButton";

const Nav = ({dark, handleTheme}: any) => {
  const [opened, setOpened] = useState(false)

  return (
    <main className="">
        <nav className={`fixed right-0 left-0 top-0 z-[1000] flex justify-between py-7 px-10 pointer-events-auto ${dark ? "bg-[#1d2233]" : "bg-white"} max-sm:px-5 max-sm:py-5 shadow-md transition-all duration-700`}>
            <h1 className="flex items-center lg:text-2xl text-xl font-[700] font-montserrat from-red-500 via-violet-600 to-green-600 bg-gradient-to-r bg-clip-text text-transparent">
                <a href="#Home">HelloWorld</a>
            </h1>

            <div className="flex md:hidden z-[3000]">
                <ThemeButton dark={dark} handleTheme={handleTheme} color={dark ? "text-white-400": "text-black"}/>
                <button
                    id="hamburger"
                    className={`p-2 ${dark ? "text-white-400":"text-black"} rounded-md outline-none`}
                    onClick={() => setOpened(!opened)}
                >
                    {opened ? (
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
            <div className={`${dark ? "bg-[#1d2233] text-white":"bg-white text-black"} flex flex-col gap-10 fixed items-center justify-center h-[100vh] text-center top-0 w-[100%] z-[300] ${opened ? "left-0": "left-[-100%]"} transition-all duration-700 text-2xl font-[600] font-montserrat`}>
                <a onClick={() => setOpened(!opened)} href="#Home" className="cursor-pointer">Home</a>
                <a onClick={() => setOpened(!opened)} href="#about" className="cursor-pointer">About</a>
                <a onClick={() => setOpened(!opened)} href="#course" className="cursor-pointer">Course</a>
                <a onClick={() => setOpened(!opened)} href="#speakers" className="cursor-pointer">Speakers</a>
                <a onClick={() => setOpened(!opened)} href="#faqs" className="cursor-pointer">FAQs</a>
            </div>  
            {/* <div className={`absolute ${opened ? "left-[-100%]": "left-[0]"} flex flex-col bg-[#323232] text-white right-0 top-full w-full justify-center items-center gap-3 pb-2 text-lg font-bold`}>
                <a href="#Home" className="cursor-pointer">Home</a>
                <a href="#about" className="cursor-pointer">About</a>
                <a href="#speakers" className="cursor-pointer">Speakers</a>
                <a href="#faqs" className="cursor-pointer">FAQs</a>
            </div> */}

            <div className={`md:flex hidden gap-10 text-lg font-bold items-center ${dark ? "text-white-400": "text-black"}`}>
                <ThemeButton dark={dark} handleTheme={handleTheme} color={dark ? "text-white-400": "text-black"}/>
                <a href="#Home" className="cursor-pointer">Home</a>
                <a href="#about" className="cursor-pointer">About</a>
                <a href="#course" className="cursor-pointer">Course</a>
                <a href="#speakers" className="cursor-pointer">Speakers</a>
                <a href="#faqs" className="cursor-pointer">FAQs</a>
            </div>
        </nav>
    </main>
  )
}

export default Nav