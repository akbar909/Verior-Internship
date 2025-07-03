import { useState } from "react";

const Navbar = () => {
const [ isOpen, setIsOpen ] = useState(false);
    const menuItems = [
        { name: 'Home', link: '#home' },
        { name: 'About', link: '#about' },
        { name: 'Projects', link: '#projects' },
        { name: 'Contact', link: '#contact' }
    ];

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div id="home">
            <nav className="bg-gray-800 p-4 fixed w-full top-0 left-0 shadow-lg z-50">
                {/* desktop nav */}
                <div className="container mx-auto flex justify-between items-center">
                    <div className="text-white text-lg font-bold">Ghulam Akbar</div>
                    <ul className="space-x-4 hidden md:flex">
                        {menuItems.map((item, index) => (
                            <li key={index}>
                                <a href={item.link} className="text-white hover:text-gray-400">{item.name}</a>
                            </li>
                        ))}
                    </ul>

            {/* mobile nav */}

            <div className="md:hidden z-50">
                <button onClick={toggleMenu} className="text-white p-2 cursor-pointer">
                    {isOpen ? 'Close' : 'Menu'}
                </button>
                <div
                    className={`fixed top-16 left-0 w-full bg-gray-800  text-white p-4 z-50 transition-all duration-300 ease-in-out ${isOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-4 pointer-events-none'}`}
                >
                    <ul>
                        {menuItems.map((item, index) => (
                            <li key={index} className="py-2 text-center ">
                                <a href={item.link} onClick={() => setIsOpen(false)} className="text-white hover:text-gray-400 ">{item.name}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar