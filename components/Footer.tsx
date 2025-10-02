import Link from "next/link";
import { MdFiberSmartRecord } from "react-icons/md";
import HeroTitle from "./HeroTitle";

export default function Footer() {
    return (
        <footer className="w-full p-5 md:px-10 py-10 bg-secondary text-primary ">
            <div className="w-full flex flex-col md:flex-row gap-10 items-start justify-between">
                <div className="flex items-center gap-2">
                    <h2 className="font-suse text-2xl font-bold">
                        sessions
                    </h2>
                    {/* <MdFiberManualRecord /> */}
                    <MdFiberSmartRecord />
                </div>
                <menu className="flex flex-col gap-1 font-semibold lg:text-lg">
                    <li>
                        <Link href="about">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link href="sessions">
                            Sessions
                        </Link>
                    </li>
                    <li>
                        <Link href="pricing">
                            Pricing
                        </Link>
                    </li>
                    <li>
                        <Link href="contact">
                            Contact
                        </Link>
                    </li>
                </menu>
                <form className="xl:w-5/13 flex flex-col gap-5">
                    <div className="flex flex-col md:flex-row lg:items-end">
                        <label className="text-lg lg:text-2xl font-suse font-bold">
                            Newsletter
                        </label>
                        <input
                            type="text"
                            placeholder="Your email address"
                            className="border-b py-2 text-sm outline-none w-full md:text-center min-w-[250px] lg:min-w-[300px] focus:border-primary duration-200 transition-all"
                        />
                    </div>
                    <div className="w-full flex justify-between items-end gap-5 text-sm">
                        <p className="w-full font-light text-gray-500 italic">
                            By subscribing to our newsletter you agree to our <Link href={""} className="text-primary hover:underline duration-200 transition-all">Privacy Policy</Link>
                        </p>
                        <button className="text-primary text-base md:text-xl">
                            Subscribe
                        </button>
                    </div>
                </form>
            </div>
            <article>
                <HeroTitle/>
                <p className="text-center text-sm ">
                    &copy; {new Date().getFullYear()} Sessions. 
                </p>
            </article>
        </footer>
    )
}