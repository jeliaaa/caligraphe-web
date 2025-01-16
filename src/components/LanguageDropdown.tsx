import React, { useState } from "react";

const LanguageDropdown: React.FC = () => {
    const [language, setLanguage] = useState("en");

    const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedLanguage = e.target.value;
        setLanguage(selectedLanguage);

        // Return the selected language
        console.log("Selected language:", selectedLanguage);
    };

    return (
        <div className="relative w-[100px] text-black">
            <select
                value={language}
                onChange={handleLanguageChange}
                className="px-3 py-2 border rounded-md bg-white shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
                <option value="en">EN</option>
                <option value="ge">GE</option>
            </select>
        </div>
    );
};

export default LanguageDropdown;
