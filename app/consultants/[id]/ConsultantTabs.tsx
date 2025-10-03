"use client"
import { useState } from "react";
import { FaStar } from "react-icons/fa";

export default function ConsultantTabs({ consultant }: { consultant: any }) {
    const [activeTab, setActiveTab] = useState("about");

    const tabs = ["about", "experience", "education", "reviews"];

    return (
        <div className="mb-8">
            {/* Tab Navigation */}
            <div className="flex gap-2 border-b border-gray-200 mb-6">
                {tabs.map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`px-4 py-2 font-medium capitalize transition-colors hover:cursor-pointer duration-200 transform-all ${activeTab === tab
                                ? "border-b-2 border-primary text-primary"
                                : "text-gray-600 hover:text-gray-900"
                            }`}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            {/* Tab Content */}
            <div className="mt-6">
                {/* About Tab */}
                {activeTab === "about" && (
                    <article>
                        <h2 className="text-xl font-bold mb-4">About {consultant.name}</h2>
                        <p className="text-gray-600">{consultant.bio}</p>
                    </article>
                )}

                {/* Experience Tab */}
                {activeTab === "experience" && (
                    <article>
                        <h2 className="text-xl font-bold mb-4">Professional Experience</h2>
                        <div className="space-y-6">
                            {consultant.experience.map((exp: any, idx: number) => (
                                <div key={idx} className="border-l-2 border-primary pl-4 hover:cursor-pointer duration-200 transform-all hover:shadow-md p-4 rounded-lg">
                                    <h3 className="font-bold">{exp.title}</h3>
                                    <p className="text-gray-600">{exp.company}</p>
                                    <p className="text-sm text-gray-500">{exp.period}</p>
                                </div>
                            ))}
                        </div>
                    </article>
                )}

                {/* Education Tab */}
                {activeTab === "education" && (
                    <article>
                        <h2 className="text-xl font-bold mb-4">Education</h2>
                        <div className="space-y-6">
                            {consultant.education.map((edu: any, idx: number) => (
                                <div key={idx} className="border-l-2 border-primary pl-4 hover:cursor-pointer duration-200 transform-all hover:shadow-md p-4 rounded-lg">
                                    <h3 className="font-bold">{edu.degree}</h3>
                                    <p className="text-gray-600">{edu.institution}</p>
                                    <p className="text-sm text-gray-500">{edu.year}</p>
                                </div>
                            ))}
                        </div>
                    </article>
                )}

                {/* Reviews Tab */}
                {activeTab === "reviews" && (
                    <article>
                        <h2 className="text-xl font-bold mb-4">Client Reviews</h2>
                        <div className="space-y-6">
                            {consultant.testimonials.map((testimonial: any, idx: number) => (
                                <div key={idx} className="border border-gray-200 rounded-lg p-6 shadow-sm hover:cursor-pointer duration-200 transform-all hover:shadow-md">
                                    <div className="flex items-center mb-2">
                                        {[...Array(5)].map((_, i) => (
                                            <FaStar
                                                key={i}
                                                className={`h-4 w-4 ${i < testimonial.rating
                                                        ? "text-yellow-500 fill-yellow-500"
                                                        : "text-gray-300"
                                                    } mr-1`}
                                            />
                                        ))}
                                    </div>
                                    <p className="mb-4 text-gray-700">"{testimonial.text}"</p>
                                    <div>
                                        <p className="font-medium">{testimonial.author}</p>
                                        <p className="text-sm text-gray-500">
                                            {testimonial.position}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </article>
                )}
            </div>
        </div>
    );
}