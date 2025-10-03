import { consultants } from "@/data/Mockdata";
import Link from "next/link";
import { BiCalendar, BiMessageSquare } from "react-icons/bi";
import { BsArrowLeft } from "react-icons/bs";
import { FaClock, FaStar } from "react-icons/fa";
import ConsultantTabs from "./ConsultantTabs";
import Button from "@/components/button";

export default function ConsultantProfilePage({ params }: { params: { id: string } }) {
    const consultant = consultants.find(c => c.id === parseInt(params.id));
    return (
        <main className="min-h-screen px-5 py-10 md:px-10">
            <Link href="/consultants" className="flex items-center text-muted-foreground hover:text-foreground mb-6">
                <BsArrowLeft className="h-4 w-4 mr-2" />
                Back to consultants
            </Link>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left column - Profile info */}
                <div className="lg:col-span-2">
                    <div className="flex flex-col md:flex-row gap-6 mb-8">
                        <div className="w-32 h-32 rounded-full overflow-hidden flex-shrink-0">
                            <img
                                src={consultant?.image || "/placeholder.svg"}
                                alt={consultant?.name}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div>
                            <div className="flex items-center gap-3 mb-2">
                                <h1 className="text-3xl font-bold">{consultant?.name}</h1>
                                <article className="text-xs bg-primary p-1 px-2 text-secondary rounded-lg">
                                    {consultant?.availability || "Not available"}
                                </article>
                            </div>
                            <p className="text-xl text-muted-foreground mb-2">{consultant?.specialty}</p>
                            <div className="flex items-center mb-4">
                                <FaStar className="h-4 w-4 text-yellow-500 fill-yellow-500 mr-1" />
                                <span className="font-medium">{consultant?.rating}</span>
                                <span className="text-sm text-muted-foreground ml-1">({consultant?.reviews} reviews)</span>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {consultant?.categories.map((category, idx) => (
                                    <article key={idx}>
                                        {category}
                                    </article>
                                ))}
                            </div>
                        </div>
                    </div>

                    <ConsultantTabs consultant={consultant} />
                </div>

                {/* Right column - Booking and contact */}
                <div>
                    <article className="border border-gray-200 rounded-lg p-6 shadow-md">
                        <h2 className="text-xl font-bold mb-4">Book a Consultation</h2>
                        <p className="text-2xl font-bold mb-6">${consultant?.rate}/hour</p>

                        <div className="space-y-4 mb-6">
                            <div className="flex items-center">
                                <BiCalendar className="h-5 w-5 text-primary mr-3" />
                                <div>
                                    <p className="font-medium">Available</p>
                                    <p className="text-sm text-muted-foreground">Mon-Fri, 9AM-5PM EST</p>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <FaClock className="h-5 w-5 text-primary mr-3" />
                                <div>
                                    <p className="font-medium">Session Length</p>
                                    <p className="text-sm text-muted-foreground">30, 60, or 90 minutes</p>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <BiMessageSquare className="h-5 w-5 text-primary mr-3" />
                                <div>
                                    <p className="font-medium">Response Time</p>
                                    <p className="text-sm text-muted-foreground">Usually within 2 hours</p>
                                </div>
                            </div>
                        </div>

                        <Link href={`/payment/${params.id}`}>
                            {/* <button className="w-full mb-3 bg-primary p-2 text-secondary rounded-md hover:cursor-pointer duration-200 transform-all hover:opacity-90">Book Now</button> */}
                            <Button text="book now"/>
                        </Link>
                        <p className="text-xs text-center text-muted-foreground">
                            You won&apos;t be charged until after the consultation
                        </p>
                    </article>
                </div>
            </div>
        </main>
    )
}