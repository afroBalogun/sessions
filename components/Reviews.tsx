export default function Reviews() {
    const testimonials = [
        {
            name: "Amaka Johnson",
            company: "Wellness Coach",
            avatar: "/images/amaka.jpg",
            logo: "/images/wellness.png",
            quote:
                "Booking a session was so easy and intuitive. I love how smooth the process felt — no more endless back-and-forth scheduling!",
        },
        {
            name: "David Adeyemi",
            company: "Startup Founder",
            avatar: "/images/david.jpg",
            logo: "/images/startup.png",
            quote:
                "The reminders are a lifesaver. I never worry about missing an appointment anymore, and my clients appreciate the professionalism.",
        },
        {
            name: "Sophia Martins",
            company: "Therapist",
            avatar: "/images/sophia.jpg",
            logo: "/images/therapy.png",
            quote:
                "Having a dashboard with all my upcoming sessions in one place saves me hours every week. This is the kind of tool I’ve been waiting for.",
        },
        {
            name: "Chinedu Okafor",
            company: "Fitness Trainer",
            avatar: "/images/chinedu.jpg",
            logo: "/images/fitness.png",
            quote:
                "Group session bookings work perfectly for my bootcamps. The flexibility makes managing my clients so much easier.",
        },
        {
            name: "Emily Zhang",
            company: "Music Teacher",
            avatar: "/images/emily.jpg",
            logo: "/images/music.png",
            quote:
                "I love how my students can book recurring lessons with me without confusion. It really keeps everything organized.",
        },
    ];

    return (
        <section className="py-16">
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-3xl font-bold text-center mb-12">
                    What Our Users Are Saying
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((t, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-start hover:shadow-lg transition"
                        >
                            <div className="flex items-center mb-4">
                                <img
                                    src={t.avatar}
                                    alt={t.name}
                                    className="w-12 h-12 rounded-full object-cover mr-3"
                                />
                                <div>
                                    <p className="font-semibold">{t.name}</p>
                                    <p className="text-sm text-gray-500">{t.company}</p>
                                </div>
                                <img
                                    src={t.logo}
                                    alt={`${t.company} logo`}
                                    className="ml-auto w-8 h-8 object-contain"
                                />
                            </div>
                            <p className="text-gray-700 text-sm leading-relaxed">
                                “{t.quote}”
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
