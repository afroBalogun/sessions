import { CiFilter } from "react-icons/ci";
import { IoIosSearch } from "react-icons/io";
import FilterCategories from "./FilterCategories";
import Consultants from "./Consultants";

export default function Page() {
 
    return (
        <main className=" mx-auto p-5 md:p-10 text-primary flex flex-col gap-10 ">
            <h2 className="text-3xl font-bold sm:text-4xl lg:text-6xl font-suse">
                Join a session
            </h2>

            <section className="flex flex-col gap-6">
                <div className="flex flex-col lg:flex-row gap-4">
                    <div className="flex items-center gap-2 flex-1 border border-gray-300 rounded-lg px-4 py-2">
                        <IoIosSearch />
                        <input
                            type="text"
                            placeholder="Search by name, specialty, keyword..."
                            className="w-full outline-none"
                        />
                    </div>

                    <button className=" px-4 py-2 justify-center bg-primary text-white rounded-lg flex items-center gap-3 hover:cursor-pointer duration-200 transition-all">
                        <CiFilter
                            size={20}
                            className="hover:cursor-pointer duration-200 transition-all font-bold"
                        />
                        Filters
                    </button>
                </div>

                <div className="">
                    {/* Filter by Category */}
                    <FilterCategories/>
                </div>

                {/* Sessions List */}
                <Consultants/>
            </section>
        </main>
    )
}