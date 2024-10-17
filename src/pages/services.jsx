import React, { useState } from "react";
import Card from "../components/Fragments/Card";
import Service1Images from "../assets/images/service-1.jpg";
import Navigation from "../components/Layouts/Navigation";
import items from "../components/data/items";
import Button from "../components/Elements/Button";

const categories = [
    "All",
    "Psikologi",
    "Kehamilan",
    "Kesehatan Anak",
    "Perawatan Gigi",
];

const ServicePage = () => {
    const [selectedCategory, setSelectedCategory] = useState("All");

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    };

    // const filteredItems = items.filter(
    //     (item) => item.category === selectedCategory
    // );

    const filteredItems =
        selectedCategory === "All"
            ? items
            : items.filter((item) => item.category === selectedCategory);

    return (
        <div>
            <Navigation></Navigation>
            <div className="px-24 py-20">
                <div className="flex gap-4">
                    {categories.map((category) => (
                        <Button
                            key={category}
                            onClick={() => handleCategoryChange(category)}
                            className={`rounded-full ${
                                selectedCategory === category
                                    ? "bg-blue-100 text-blue-600"
                                    : "bg-white text-slate-500 border border-slate-500"
                            } hover:bg-blue-100 hover:text-blue-600 hover:border-none`}
                        >
                            {category}
                        </Button>
                    ))}
                </div>
                <div className="flex flex-wrap gap-4 mt-10">
                    {filteredItems.map((item) => (
                        <Card
                            key={item.id}
                            title={item.name}
                            price={item.price}
                            category={item.category}
                            img={Service1Images}
                        ></Card>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ServicePage;
