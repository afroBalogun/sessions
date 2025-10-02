import { CiClock1 } from "react-icons/ci";
import Clock from "./clock";
import Calendar from "./Calendar";

export default function Hero() {
    return (
        <main className="w-full flex flex-col md:flex-row min-h-screen items-center justify-center lg:justify-between px-24 bg-">
            <div className="flex flex-col gap-6 max-w-2xl text-primary">
                <h3 className="text-5xl lg:text-8xl font-suse font-bold flex flex-col gap-3">
                    <span className="flex">
                    Your Time,
                    </span>
                    <span className="flex items-center">
                        Your Sessi<Clock/>ns
                    </span>
                </h3>
                <p className="text-sm md:text-lg max-w-xl">
                    Take control of your time and boost your productivity with our expert-led sessions.
                </p>
            </div>
            <div className="">
                <Calendar/>
            </div>
        </main>
    )
}