import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Subheader() {
    const [activeTab, setActiveTab] = useState("Allgemein");

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className="h-[5vh] bg-[#B4D2E7] border-y-2 border-gray-500 flex space-x-12 p-2 pl-5">
            <Link to="/">
                <p
                    className={`md:text-sm ${activeTab === "Allgemein" ? "font-bold border-b border-black pb-1" : ""}`}
                    onClick={() => handleTabClick("Allgemein")}
                >
                    Allgemein
                </p>
            </Link>
            <Link to="/Neubau">
                <p
                    className={`md:text-sm ${activeTab === "Neubau" ? "font-bold border-b border-black pb-1" : ""}`}
                    onClick={() => handleTabClick("Neubau")}
                >
                    Neubau
                </p>
            </Link>
            <Link to="/Mode">
                <p
                    className={`md:text-sm ${activeTab === "Mode" ? "font-bold border-b border-black pb-1" : ""}`}
                    onClick={() => handleTabClick("Mode")}
                >
                    Mode
                </p>
            </Link>
            <Link to="/Chemie">
                <p
                    className={`md:text-sm ${activeTab === "Chemie" ? "font-bold border-b border-black pb-1" : ""}`}
                    onClick={() => handleTabClick("Chemie")}
                >
                    Chemie
                </p>
            </Link>
            <Link to="/Aula">
                <p
                    className={`md:text-sm ${activeTab === "Aula" ? "font-bold border-b border-black pb-1" : ""}`}
                    onClick={() => handleTabClick("Aula")}
                >
                    Aula
                </p>
            </Link>
        </div>
    );
}
