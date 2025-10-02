"use client"
import Link from "next/link";
import { useState } from "react";
import { MdFiberManualRecord, MdFiberSmartRecord } from "react-icons/md";
import { TfiClose } from "react-icons/tfi";
import { VscMenu } from "react-icons/vsc";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState<Boolean>(false);

    function toggleMenu() {
        setIsMenuOpen(!isMenuOpen);
    }

    const navLinks = [
        { name: "About", href: "about" },
        { name: "Consultants", href: "consultants" },
        { name: "Pricing", href: "pricing" },
        { name: "Contact", href: "contact" },
    ]

    const navItems = navLinks.map((link) => (
        <li key={link.name} className=" hover:underline hover:underline-offset-4 capitalize">
            <Link href={link.href} onClick={() => setIsMenuOpen(false)}>
                {link.name}
            </Link>
        </li>
    ));

    return (
        <nav className="relative w-full flex items-center justify-between p-5 md:px-10 py-5 text-primary bg-prima">
            <div className="relative w-full md:w-max flex items-center justify-between z-[10000]">
                <a href="/" className="flex items-center gap-2">
                    <h2 className="font-suse text-2xl font-bold">
                        sessions
                    </h2>
                    {/* <MdFiberManualRecord /> */}
                    <MdFiberSmartRecord />
                </a>

                {
                    isMenuOpen ?
                        <TfiClose
                            className="md:hidden text-2xl hover:cursor-pointer duration-200 transition-all text-primary "
                            onClick={toggleMenu}
                        /> :
                        <VscMenu
                            className="md:hidden text-2xl hover:cursor-pointer duration-200 transition-all text-primary "
                            onClick={toggleMenu}
                        />

                }
            </div>

            <ul className="hidden md:flex gap-5">
                {navItems}
            </ul>

            <div className="hidden md:flex gap-2 h-9">
                <button className=" bg-primary p-0.5 rounded-full hover:cursor-pointer duration-200 transition-all group hover:bg-">
                    <Link href={"login"} className="bg-blue-7 px-5 py-2 rounded-md duration-200 transition-all text-white">
                        Login
                    </Link>
                </button>
                <button className=" bg-blue-700 p-0.5 rounded-full hover:cursor-pointer duration-200 transition-all group hover:bg-">
                    <Link href={"sign-up"} className="bg-white px-5 py-2 rounded-md group-hover:py-[7px] group-: group-hover:text- duration-200 transition-all">
                        Sign Up
                    </Link>
                </button>
            </div>

            <div
                className={`
                        absolute w-full left-0 bg-secondary shadow-lg p-8 z-50 h-screen flex flex-col items-center justify-center top-0
                        transform transition-all duration-300 ease-in-out md:hidden
                        ${isMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}
                    `}
            >
                <ul className="w-full flex flex-col space-y-4 text-primary text-2xl">
                    {navItems}
                </ul>
            </div>

        </nav>
    )
}