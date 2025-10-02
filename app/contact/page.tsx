export default function Contact() {
    return (
        <main className="min-h-screen mx-auto p-5 md:p-10 text-primary flex flex-col lg:flex-row  gap-10">
            <h2 className="text-6xl font-semibold lg:text-8xl font-suse">
                Contact
            </h2>

            <form className="grid grid-cols-1 sm:grid-cols-2 gap-10 lg:py-40">
                <div className="flex border-b gap-5 items-center h-max">
                    <label className=" font-semibold">
                        Name
                    </label>
                    <input
                        type="text"
                        className="p-2 text-sm outline-none w-full focus:border-primary duration-200 transition-all focus:bg-gray-300"
                    />
                </div>
                <div className="flex border-b gap-5 items-center h-max">
                    <label className=" font-semibold">
                        Company
                    </label>
                    <input
                        type="text"
                        className="p-2 text-sm outline-none w-full focus:border-primary duration-200 transition-all focus:bg-gray-300"
                    />
                </div>
                <div className="flex border-b gap-5 items-center h-max">
                    <label className=" font-semibold">
                        Email
                    </label>
                    <input
                        type="email"
                        className="p-2 text-sm outline-none w-full focus:border-primary duration-200 transition-all focus:bg-gray-300"
                    />
                </div>
                <div className="flex border-b gap-5 items-center h-max">
                    <label className=" font-semibold">
                        Phone
                    </label>
                    <input
                        type="text"
                        className="p-2 text-sm outline-none w-full focus:border-primary duration-200 transition-all focus:bg-gray-300"
                    />
                </div>
                <div className="flex flex-col border-b gap-5 h-max">
                    <label className=" font-semibold">
                        Message
                    </label>
                    <textarea
                        className="p-2 min-h-40 text-sm outline-none w-full focus:border-primary duration-200 transition-all focus:bg-gray-300"
                    />
                </div>
                <div className="flex flex-row-reverse gap-5 h-max">
                    <label className="font-semibold">
                        I agree to the processing of my personal data in accordance with the Privacy Policy.
                    </label>
                    <input
                        type="checkbox"
                        className="w-5 text-sm outline-none focus:border-primary hover:cursor-pointer duration-200 transition-all focus:bg-gray-300"
                    />
                </div>
            </form>
        </main>
    )
}