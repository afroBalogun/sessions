"use client"
import Button from "@/components/button";
import { consultants } from "@/data/Mockdata";
import { useState, useRef, useEffect } from "react";

export default function Cart() {
    const [selectedSession, setSelectedSession] = useState<typeof consultants[0] | undefined>(undefined);
    const [height, setHeight] = useState<number | 'auto'>('auto');
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (contentRef.current) {
            setHeight(contentRef.current.scrollHeight);
        }
    }, [selectedSession]);

    function showSessionDetails(id: number) {
        const session = consultants[id];
        setSelectedSession(session);
    }

    const bookedSessions = consultants.map((consultant, index) => {
        return (
            <article
                key={index}
                className="p-4 flex items-center justify-between rounded-md hover:cursor-pointer hover:shadow-sm duration-200 transition-all border"
                onClick={() => showSessionDetails(consultant.id)}
            >
                <div className="flex items-center gap-4">
                    <img
                        src={consultant.image}
                        alt={consultant.name}
                        className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className="">
                        <h4 className="font-semibold">
                            {consultant.name}
                        </h4>
                        <p className="text-sm text-gray-600">
                            {consultant.specialty}
                        </p>
                    </div>
                </div>
                <div className="">
                    <p className="font-semibold text-lg">
                        ${consultant.rate}
                    </p>
                </div>
            </article>
        )
    })

    return (
        <main className="min-h-screen flex items-center justify-center py-8">
            <div
                className="shadow-md p-6 rounded-md w-11/12 md:w-1/2 lg:w-1/3 transition-all duration-500 ease-in-out overflow-hidden flex flex-col justify-center items center gap-5 border"
                style={{ height: height }}
            >
                <div ref={contentRef}>
                    {selectedSession ? (
                        <>
                            <h2 className="text-2xl font-bold mb-4">Session Details</h2>
                            <div className="mb-4 space-y-2">
                                <p><strong>Consultant:</strong> {selectedSession.name}</p>
                                <p><strong>Specialty:</strong> {selectedSession.specialty}</p>
                                <p><strong>Rate:</strong> ${selectedSession.rate}</p>
                                <p><strong>Description:</strong> {selectedSession.bio}</p>
                            </div>
                            <Button text="Proceed to Payment" />
                            <button
                                className="mt-2 text-sm text-gray-600 underline hover:text-gray-900 transition-colors"
                                onClick={() => setSelectedSession(undefined)}
                            >
                                Back to Cart
                            </button>
                        </>
                    ) : (
                        <>
                            <h4 className="text-xl font-semibold mb-4">
                                Cart
                            </h4>
                            <div className="flex flex-col gap-3 mb-4">
                                {bookedSessions}
                            </div>
                            <Button text="proceed to checkout" />
                        </>
                    )}
                </div>
            </div>
        </main>
    )
}