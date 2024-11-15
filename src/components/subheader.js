import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Subheader() {
    const [activeTab, setActiveTab] = useState("Allgemein");

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className="h-[6vh] bg-[#B4D2E7] border-y-2 border-gray-500 flex justify-evenly items-center px-2">
            <Link to="/">
                <p
                    className={`w-full text-center text-sm md:text-base lg:text-lg ${activeTab === "Allgemein" ? "font-bold border-b-2 border-black pb-1" : ""}`}
                    onClick={() => handleTabClick("Allgemein")}
                >
                    Allgemein
                </p>
            </Link>
            <Link to="/Neubau">
                <p
                    className={`w-full text-center text-sm md:text-base lg:text-lg ${activeTab === "Neubau" ? "font-bold border-b-2 border-black pb-1" : ""}`}
                    onClick={() => handleTabClick("Neubau")}
                >
                    Neubau
                </p>
            </Link>
            <Link to="/Mode">
                <p
                    className={`w-full text-center text-sm md:text-base lg:text-lg ${activeTab === "Mode" ? "font-bold border-b-2 border-black pb-1" : ""}`}
                    onClick={() => handleTabClick("Mode")}
                >
                    Mode
                </p>
            </Link>
            <Link to="/Chemie">
                <p
                    className={`w-full text-center text-sm md:text-base lg:text-lg ${activeTab === "Chemie" ? "font-bold border-b-2 border-black pb-1" : ""}`}
                    onClick={() => handleTabClick("Chemie")}
                >
                    Chemie
                </p>
            </Link>
            <Link to="/Aula">
                <p
                    className={`w-full text-center text-sm md:text-base lg:text-lg ${activeTab === "Aula" ? "font-bold border-b-2 border-black pb-1" : ""}`}
                    onClick={() => handleTabClick("Aula")}
                >
                    Aula
                </p>
            </Link>
        </div>
    );
}
