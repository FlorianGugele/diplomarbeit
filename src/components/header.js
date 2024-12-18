import React, { useState, useEffect } from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

export default function Header() {
    const [isUserModalOpen, setIsUserModalOpen] = useState(false);
    const [isTimeModalOpen, setIsTimeModalOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [isDarkMode]);

    const openUserModal = () => setIsUserModalOpen(true);
    const closeUserModal = () => setIsUserModalOpen(false);

    const openTimeModal = () => setIsTimeModalOpen(true);
    const closeTimeModal = () => setIsTimeModalOpen(false);

    const handleToggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <div className="bg-[#94C5CC] flex h-[13vh] items-center justify-between px-4 md:px-10">
            <div className="flex items-center h-full">
                <div className="flex items-center justify-center h-full border-r-2 border-gray-500 pr-2 ml-[-10px]">
                    <img
                        className="h-[10vh] w-auto"
                        src="pictures/HTL-Logo.jpg"
                        alt="HTL Logo"
                    />
                </div>

                <div className="pl-4 md:pl-[8vw]">
                    <p className="text-sm md:text-lg font-bold">
                        Bluetooth Geräte an der HTL Dornbirn
                    </p>
                </div>
            </div>

            <div className="flex items-center space-x-4 pl-2">
                <button
                    onClick={handleToggleDarkMode}
                    className="flex items-center justify-center w-12 h-12 min-w-12 bg-white rounded-full border-2 border-gray-500 transition duration-300 group"
                >
                    {isDarkMode ? (
                        <img src="pictures/dark-mode.png" alt="Moon Icon" className="h-6 w-6" />
                    ) : (
                        <img src="pictures/light-mode.png" alt="Sun Icon" className="h-6 w-6" />
                    )}
                </button>
            
                <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
                    {/* Zeitdauer Dropdown */}
                    <Menu as="div" className="relative inline-block text-left">
                        <MenuButton className="bg-white flex items-center border-2 border-gray-500 rounded-lg px-2 md:px-4 py-2">
                            <img className="h-[3vh] pl-1" src="pictures/zeiterfassung.png" alt="Icon" />
                            <span className="text-sm md:text-lg font-bold px-2 md:px-5">Zeitdauer</span>
                            <ChevronDownIcon className="h-5 w-5 text-gray-400" />
                        </MenuButton>
                        <MenuItems className="absolute right-0 z-10 mt-2 w-60 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            {['Letzte 15 Minuten', 'Letzte 30 Minuten', 'Letzte 1 Stunde', 'Letzte 3 Stunden'].map((option, index) => (
                                <MenuItem key={index}>
                                    {({ active }) => (
                                        <button className={`${active ? 'bg-gray-100' : ''} block px-4 py-2 text-sm w-full text-left`}>
                                            {option}
                                        </button>
                                    )}
                                </MenuItem>
                            ))}
                            <MenuItem>
                                {({ active }) => (
                                    <button onClick={openTimeModal} className={`${active ? 'bg-gray-100' : ''} block px-4 py-2 text-sm w-full text-left`}>
                                        Benutzerdefiniert
                                    </button>
                                )}
                            </MenuItem>
                        </MenuItems>
                    </Menu>

                    {/* Benutzer Dropdown */}
                    <Menu as="div" className="relative inline-block text-left">
                        <MenuButton className="bg-white flex items-center border-2 border-gray-500 rounded-lg px-2 md:px-4 py-2">
                            <img className="h-[3vh] pl-1" src="pictures/user-icon.png" alt="Icon" />
                            <span className="text-sm md:text-lg font-bold px-2 md:px-5">Benutzer</span>
                            <ChevronDownIcon className="h-5 w-5 text-gray-400" />
                        </MenuButton>
                        <MenuItems className="absolute right-0 z-10 mt-2 w-40 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            {['RAN', 'BAT', 'KAUF', 'JUL'].map((user, index) => (
                                <MenuItem key={index}>
                                    {({ active }) => (
                                        <button className={`${active ? 'bg-gray-100' : ''} block px-4 py-2 text-sm w-full text-left`}>
                                            {user}
                                        </button>
                                    )}
                                </MenuItem>
                            ))}
                            <MenuItem>
                                {({ active }) => (
                                    <button onClick={openUserModal} className={`${active ? 'bg-gray-100' : ''} block px-4 py-2 text-sm w-full text-left`}>
                                        Benutzer hinzufügen
                                    </button>
                                )}
                            </MenuItem>
                        </MenuItems>
                    </Menu>
                </div>
            </div>

            {/* Benutzer Pop-up */}
            {isUserModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
                    <div className="bg-gray-200 rounded-lg shadow-lg p-6 w-[300px] relative">
                        <button onClick={closeUserModal} className="absolute top-2 right-2 w-8 h-8 flex items-center justify-center rounded-full border border-gray-400 text-gray-500 hover:text-gray-700">
                            &times;
                        </button>
                        <h2 className="text-xl font-bold mb-4">Benutzer hinzufügen</h2>
                        <input type="text" className="w-full mt-2 mb-4 p-2 border rounded-md" placeholder="Name eingeben" />
                        <button onClick={closeUserModal} className="w-full bg-blue-600 text-white font-bold py-2 rounded-md">
                            Übernehmen
                        </button>
                    </div>
                </div>
            )}

            {/* Zeitdauer Pop-up */}
            {isTimeModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
                    <div className="relative bg-gray-300 rounded-lg shadow-lg p-6 w-[350px]">
                        <button onClick={closeTimeModal} className="absolute top-2 right-2 w-8 h-8 flex items-center justify-center rounded-full border border-gray-400 text-gray-500 hover:text-gray-700">
                            &times;
                        </button>
                        <h2 className="text-xl font-bold mb-4 text-center">Zeitdauer festlegen</h2>
                        <label className="block text-sm font-medium">Von:</label>
                        <div className="flex space-x-2 mb-4">
                            <select className="w-1/2 p-2 border rounded-md">
                                {[...Array(24).keys()].map(hour => (
                                    <option key={hour}>{`${hour.toString().padStart(2, '0')} Uhr`}</option>
                                ))}
                            </select>
                            <select className="w-1/2 p-2 border rounded-md">
                                {[0, 15, 30, 45].map(min => (
                                    <option key={min}>{`${min.toString().padStart(2, '0')} Min`}</option>
                                ))}
                            </select>
                        </div>

                        <label className="block text-sm font-medium">Bis:</label>
                        <div className="flex space-x-2 mb-4">
                            <select className="w-1/2 p-2 border rounded-md">
                                {[...Array(24).keys()].map(hour => (
                                    <option key={hour}>{`${hour.toString().padStart(2, '0')} Uhr`}</option>
                                ))}
                            </select>
                            <select className="w-1/2 p-2 border rounded-md">
                                {[0, 15, 30, 45].map(min => (
                                    <option key={min}>{`${min.toString().padStart(2, '0')} Min`}</option>
                                ))}
                            </select>
                        </div>

                        <button onClick={closeTimeModal} className="w-full bg-blue-600 text-white font-bold py-2 rounded-md">
                            Übernehmen
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
