import { consultants } from "@/data/Mockdata";
import { FaStar } from "react-icons/fa";

export default function Consultants() {
    const consultantCards = consultants.map((consultant) => (
        <article key={consultant.id} className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg hover:cursor-pointer transition flex flex-col gap-4">
            <div className="relative">
                <img
                    src={consultant.image}
                    alt={consultant.name}
                    className="w-full h-40 object-cover rounded-lg relative"
                />
                <p className="absolute bottom-2 left-2 bg-primary text-white px-3 py-1 rounded-lg text-sm">
                    Available at: {consultant.availability}
                </p>
            </div>
            <div className="flex flex-col gap-2 flex-1">
                <div className="flex justify-between items-center">
                    <h2 className="text-xl font-semibold">
                        {consultant.name}
                    </h2>
                    <div className="flex items-center gap-1 font-semibold">
                        <FaStar className="text-yellow-500" />
                        <p className="flex items-center gap-1">
                            {consultant.rating}
                            <span className="text-gray-500 font-normal text-sm">
                                ({consultant.reviews})
                            </span>
                        </p>
                    </div>
                </div>
                <p className="text-gray-600 flex-1">
                    {consultant.specialty}
                </p>
                <p className="text-lg font-bold text-primary">
                    ${consultant.rate}/hour
                </p>
                <p className="text-sm text-gray-500 flex items-center gap-2">
                    {consultant.categories.map((category, index) => (
                        <span key={index} className="font-semibold p-1 bg-gray-200 rounded-lg">
                            {category}
                        </span>
                    ))}
                </p>
            </div>
            <button className="bg-primary text-white px-4 py-2 lg:py-4 rounded-lg hover:cursor-pointer hover:bg-neutral-900 duration-200 transition-all">
                View Details
            </button>
        </article>
    ));

    return (
        <section className="py-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* <article className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg hover:cursor-pointer transition flex flex-col gap-4">
                <div className="relative">
                    <img
                        src=""
                        alt=""
                        className="w-full h-40 object-cover rounded-lg relative"
                    />
                    <p className="absolute bottom-2 left-2 bg-primary text-white px-3 py-1 rounded-lg text-sm">
                        Available at: 2:00 PM - 3:00 PM
                    </p>
                </div>
                <div className="flex flex-col gap-2 flex-1">
                    <div className="flex justify-between items-center">
                        <h2 className="text-xl font-semibold">
                            Session Title
                        </h2>
                        <div className="flex items-center gap-1 font-semibold">
                            <FaStar className="text-yellow-500"/>
                            <p className="flex items-center gap-1">
                                4.9
                                <span className="text-gray-500 font-normal text-sm">
                                    (120)
                                </span>
                            </p>
                        </div>

                    </div>
                    <p className="text-gray-600 flex-1">
                        Session description goes here. This is a brief overview of what the session will cover.
                    </p>
                    <p className="text-lg font-bold text-primary">
                        $99.00/hour
                    </p>
                    <p className="text-sm text-gray-500 flex items-center gap-2">
                        <span className="font-semibold p-1 bg-gray-200 rounded-lg">
                            Business
                        </span>
                        <span className="font-semibold p-1 bg-gray-200 rounded-lg">
                            Technology
                        </span>

                    </p>
                </div>
                <button className="bg-primary text-white px-4 py-2 lg:py-4 rounded-lg hover:cursor-pointer hover:bg-neutral-900 duration-200 transition-all">
                    View Details
                </button>
            </article> */}
            {consultantCards}
        </section>
    )
}