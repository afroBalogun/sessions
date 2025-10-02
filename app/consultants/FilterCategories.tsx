"use client"
import { useState } from "react";

export default function FilterCategories() {
    const [selectedCategory, setSelectedCategory] = useState("All Categories");

    const Categories = [
        "All Categories",
        "Business",
        "Finance",
        "Health",
        "Legal",
        "Technology"
    ]

    const handleCategoryChange = (category: string) => {
        setSelectedCategory(category);
    }

    const category = Categories.map((category) => (
        <button
            key={category}
            onClick={() => handleCategoryChange(category)}
            className={`whitespace-nowrap px-4 py-2 rounded-md hover:cursor-pointer duration-200 transition-all ${selectedCategory === category
                ? "bg-primary text-white"
                : "text-gray-700 hover:bg-primary hover:text-white"
                }`}
        >
            {category}
        </button>
    ));

    return (
        <div className="w-full md:w-max flex gap-2 overflow-x-auto bg-gray-200 px-2 py-1 rounded-lg scrollbar-hide">
            {category}
        </div>
    )
}