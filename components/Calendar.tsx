export default function Calendar() {
    // 7 distinct layout templates (each array must be length 7)
    const layouts = [
        // layout 0
        [
            "col-span-3 row-span-2",
            "col-span-1 row-span-1",
            "col-span-2 row-span-1",
            "col-span-1 row-span-2",
            "col-span-2 row-span-3",
            "col-span-1 row-span-1",
            "col-span-1 row-span-1"
        ],
        // layout 1
        [
            "col-span-2 row-span-2",
            "col-span-2 row-span-1",
            "col-span-1 row-span-1",
            "col-span-1 row-span-2",
            "col-span-3 row-span-2",
            "col-span-1 row-span-1",
            "col-span-1 row-span-1"
        ],
        // layout 2
        [
            "col-span-2 row-span-3",
            "col-span-1 row-span-1",
            "col-span-2 row-span-1",
            "col-span-1 row-span-1",
            "col-span-2 row-span-2",
            "col-span-1 row-span-1",
            "col-span-1 row-span-1"
        ],
        // layout 3
        [
            "col-span-1 row-span-2",
            "col-span-2 row-span-2",
            "col-span-2 row-span-1",
            "col-span-1 row-span-1",
            "col-span-3 row-span-3",
            "col-span-1 row-span-1",
            "col-span-1 row-span-1"
        ],
        // layout 4
        [
            "col-span-3 row-span-1",
            "col-span-1 row-span-2",
            "col-span-1 row-span-1",
            "col-span-2 row-span-2",
            "col-span-2 row-span-2",
            "col-span-1 row-span-1",
            "col-span-1 row-span-1"
        ],
        // layout 5
        [
            "col-span-2 row-span-2",
            "col-span-1 row-span-1",
            "col-span-1 row-span-1",
            "col-span-2 row-span-3",
            "col-span-2 row-span-2",
            "col-span-1 row-span-1",
            "col-span-1 row-span-1"
        ],
        // layout 6
        [
            "col-span-1 row-span-1",
            "col-span-2 row-span-2",
            "col-span-2 row-span-1",
            "col-span-1 row-span-2",
            "col-span-3 row-span-2",
            "col-span-1 row-span-1",
            "col-span-1 row-span-1"
        ]
    ];

    // Example items: each item uses one of the layouts and 7 images
    const items = [
        // {
        //     title: "Photo session",
        //     desc: "Studio & outdoor photo shoots",
        //     layoutIndex: 0,
        //     images: [
        //         "https://images.unsplash.com/photo-1517816743773-6e0fd518b4a6?auto=format&fit=crop&w=800&q=60",
        //         "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=60",
        //         "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=60",
        //         "https://images.unsplash.com/photo-1504198453319-5ce911bafcde?auto=format&fit=crop&w=800&q=60",
        //         "https://images.unsplash.com/photo-1519340333755-88f5ce6b6b79?auto=format&fit=crop&w=800&q=60",
        //         "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=60",
        //         "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=60"
        //     ]
        // },
        {
            title: "Consultation",
            desc: "Strategy sessions & coaching",
            layoutIndex: 1,
            images: [
                "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=60",
                "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=60",
                "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=60",
                "https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?auto=format&fit=crop&w=800&q=60",
                "https://images.unsplash.com/photo-1515376670460-3b3d0c1ccbb9?auto=format&fit=crop&w=800&q=60",
                "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=800&q=60",
                "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=60"
            ]
        },
        // Add more items (each must have 7 images and a layoutIndex 0-6)
    ];

    const itemPage = items.map((item, idx) => {
        const cellClasses = layouts[item.layoutIndex];
        if (!cellClasses || cellClasses.length !== 7) {
            console.warn(
                `Invalid layout for item ${item.title}. layouts[${item.layoutIndex}] must be an array of length 7`
            );
        }

        return (
            <section key={idx} className="max-w-6xl mx-auto">
                {/* <header className="mb-4 flex items-center justify-between">
                    <div>
                        <h3 className="text-2xl font-semibold">{item.title}</h3>
                        <p className="text-sm text-gray-600">{item.desc}</p>
                    </div>
                </header> */}

                {/* grid: 6 columns base; auto row height ensures images are large enough */}
                <div className="grid grid-cols-6 auto-rows-[120px] gap-4">
                    {item.images.map((src, i) => (
                        <div
                            key={i}
                            className={`${cellClasses[i] ?? "col-span-1 row-span-1"} rounded-xl overflow-hidden shadow-sm`}
                        >
                            <img
                                src={src}
                                alt={`${item.title} ${i + 1}`}
                                loading="lazy"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    ))}
                </div>
            </section>
        );
    });

    return (
        <div className="hidden border w-4xl h-full rounded-t-2xl rounded-b-md md:flex flex-col">
            <div className="flex items-center justify-between p-4 border-b">
                <div className="w-5 h-5 bg-primary rounded-full"></div>
                <div className="w-5 h-5 bg-primary rounded-full"></div>
            </div>
            <div className="flex-grow p-4">{itemPage}</div>
        </div>
    );
}
