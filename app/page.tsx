import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Partners from "@/components/Partners";
import Reviews from "@/components/Reviews";

export default function Home() { 
    return (
        <main className="w-full flex min-h-screen flex-col">
            <Hero />
            <Partners />
            <Features />
            <Reviews/>
        </main>
    )
}