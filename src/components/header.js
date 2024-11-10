import React, { useState, useEffect } from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

export default function Header() {
    const [isUserModalOpen, setIsUserModalOpen] = useState(false);
    const [isTimeModalOpen, setIsTimeModalOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);

    // Effekt, um den Dark Mode basierend auf dem State zu setzen
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
        <div className="bg-[#94C5CC] flex h-[13vh] items-center justify-between">

            <div className="flex items-center">
                <div className="border-r-2 border-black h-[13vh] flex items-center justify-center w-[5vw]">
                    <img className="h-[12vh] p-2" src="pictures/HTL-Logo.jpg" alt="HTL Logo" />
                </div>
                <div className="pl-[10vw]">
                    <p className="text-lg font-bold">Bluetooth Geräte an der HTL Dornbirn</p>
                </div>
            </div>

            {/* Neuer Dark/Light Mode Toggle */}
            <div className="ml-[5vw] flex items-center p-2">
                <button
                    onClick={handleToggleDarkMode}
                    className="relative flex items-center justify-center w-10 h-10 bg-gray-300 rounded-full dark:bg-gray-400 transition duration-300 group"
                >
                    {isDarkMode ? (
                        <img src="pictures/dark-mode.png" alt="Moon Icon" className="h-6 w-6" />
                    ) : (
                        <img src="pictures/light-mode.png" alt="Sun Icon" className="h-6 w-6" />
                    )}
                    {/* Tooltip */}
                    <span className="absolute bottom-12 left-1/2 transform -translate-x-1/2 bg-gray-400 text-black text-xs rounded-md px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {isDarkMode ? 'Light Mode aktivieren' : 'Dark Mode aktivieren'}
                    </span>
                </button>
            </div>

            <div className="flex items-center space-x-4 pr-[5vw]">
                {/* Zeitdauer Dropdown */}
                <Menu as="div" className="relative inline-block text-left">
                    <MenuButton className="bg-white flex items-center border-2 border-gray-500 rounded-lg px-4 py-2">
                        <img className="h-[3vh] pl-2" src="pictures/zeiterfassung.png" alt="Icon" />
                        <span className="text-lg font-bold px-5">Zeitdauer</span>
                        <ChevronDownIcon className="h-5 w-5 text-gray-400" />
                    </MenuButton>
                    <MenuItems className="absolute right-0 z-10 mt-2 w-60 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <MenuItem>
                            {({ active }) => (
                                <button className={`${active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'} block px-4 py-2 text-sm w-full text-left`}>
                                    Letzte 15 Minuten
                                </button>
                            )}
                        </MenuItem>
                        <MenuItem>
                            {({ active }) => (
                                <button className={`${active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'} block px-4 py-2 text-sm w-full text-left`}>
                                    Letzte 30 Minuten
                                </button>
                            )}
                        </MenuItem>
                        <MenuItem>
                            {({ active }) => (
                                <button className={`${active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'} block px-4 py-2 text-sm w-full text-left`}>
                                    Letzte 1 Stunde
                                </button>
                            )}
                        </MenuItem>
                        <MenuItem>
                            {({ active }) => (
                                <button className={`${active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'} block px-4 py-2 text-sm w-full text-left`}>
                                    Letzte 3 Stunden
                                </button>
                            )}
                        </MenuItem>
                        <MenuItem>
                            {({ active }) => (
                                <button onClick={openTimeModal} className={`${active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'} block px-4 py-2 text-sm w-full text-left`}>
                                    Benutzerdefiniert
                                </button>
                            )}
                        </MenuItem>
                    </MenuItems>
                </Menu>

                {/* Benutzer Dropdown */}
                <Menu as="div" className="relative inline-block text-left">
                    <MenuButton className="bg-white flex items-center border-2 border-gray-500 rounded-lg px-4 py-2">
                        <img className="h-[3vh] pl-2" src="pictures/user-icon.png" alt="Icon" />
                        <span className="text-lg font-bold px-5">Benutzer</span>
                        <ChevronDownIcon className="h-5 w-5 text-gray-400" />
                    </MenuButton>
                    <MenuItems className="absolute right-0 z-10 mt-2 w-40 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        {['RAN', 'BAT', 'KAUF', 'JUL'].map((user, index) => (
                            <MenuItem key={index}>
                                {({ active }) => (
                                    <button className={`${active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'} block px-4 py-2 text-sm w-full text-left`}>
                                        {user}
                                    </button>
                                )}
                            </MenuItem>
                        ))}
                        <MenuItem>
                            {({ active }) => (
                                <button onClick={openUserModal} className={`${active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'} block px-4 py-2 text-sm w-full text-left`}>
                                    Benutzer hinzufügen
                                </button>
                            )}
                        </MenuItem>
                    </MenuItems>
                </Menu>
            </div>

            {/* Benutzer Pop-up */}
            {isUserModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
                    <div className="bg-gray-200 rounded-lg shadow-lg p-6 w-[300px]">
                        <h2 className="text-xl font-bold mb-4">Benutzer hinzufügen</h2>
                        <label className="block text-sm font-medium text-gray-700">Anzeigename:</label>
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
                    <div className="bg-gray-300 rounded-lg shadow-lg p-6 w-[300px]">
                        <h2 className="text-xl font-bold mb-4">Zeitdauer</h2>
                        <label className="block text-sm font-medium">Von:</label>
                        <input type="text" className="w-full mt-2 mb-4 p-2 border rounded-md" placeholder="Startdatum" />
                        <label className="block text-sm font-medium">Bis:</label>
                        <input type="text" className="w-full mt-2 mb-4 p-2 border rounded-md" placeholder="Enddatum" />
                        <button onClick={closeTimeModal} className="w-full bg-blue-600 text-white font-bold py-2 rounded-md">
                            Übernehmen
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
