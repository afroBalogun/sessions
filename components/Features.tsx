export default function Features() {
    const features = [
        {
            title: "Seamless Session Booking",
            desc: "Choose your preferred service, date, and time in just a few clicks."
        },
        {
            title: "Flexible Calendar Integration",
            desc: "Sync with Google or Outlook calendars to avoid double bookings."
        },
        {
            title: "Real-Time Availability",
            desc: "Instantly see open slots without back-and-forth messaging."
        },
        {
            title: "Secure Payments",
            desc: "Pay safely with multiple options including cards and wallets."
        },
        {
            title: "Personalized Dashboard",
            desc: "Manage upcoming sessions, history, and reschedules in one place."
        },
        {
            title: "Smart Reminders",
            desc: "Get notified via email or SMS so you never miss a session."
        },
        {
            title: "Group Bookings",
            desc: "Book sessions for teams, friends, or families with ease."
        },
        {
            title: "Reviews & Ratings",
            desc: "Build trust by leaving and reading feedback on sessions."
        },
    ];

    return (
        <section className="py-16">
            <div className="max-w-6xl mx-auto px-6 text-center">
                <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                    Powerful Features for Stress-Free Bookings
                </h2>
                <p className="mt-4 text-lg text-gray-600">
                    Everything you need to schedule, manage, and enjoy your sessions.
                </p>

                <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition"
                        >
                            <h3 className="text-xl font-semibold text-gray-900">
                                {feature.title}
                            </h3>
                            <p className="mt-2 text-gray-600">{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
