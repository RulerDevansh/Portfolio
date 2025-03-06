import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { logo, menu, close } from "../assets";

export default function Nav() {
    const [active, setActive] = useState("");
    const [toggle, setToggle] = useState(false);

    useEffect(() => {
        const sections = document.querySelectorAll("section");
        
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActive(entry.target.id);
                    }
                });
            },
            { threshold: 0.2}
        );

        sections.forEach((section) => observer.observe(section));

        return () => {
            sections.forEach((section) => observer.unobserve(section));
        };
    }, []);

    return (
        <nav className="pt-6 pl-6 pr-6 sm:pt-16 sm:pl-16 sm:pr-16 w-full flex items-center fixed py-5 top-0 z-50 
                        backdrop-blur-sm bg-[#070508] bg-opacity-30">
            <div className="w-full flex justify-between items-center max-w-10xl mx-auto">
                <Link to="/" className="flex items-center gap-2"
                    onClick={() => {
                        setActive("");
                        window.scrollTo(0, 0);
                    }}>
                    <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
                    <p className="text-white text-2xl font-bold cursor-pointer">Devansh</p>
                </Link>

                <ul className="list-none hidden sm:flex flex-row gap-10">
                    {["about", "projects", "contact"].map((item) => (
                        <li key={item}
                            className={`text-lg font-semibold ${
                                active === item ? "text-pink-600" : "text-secondary"
                            } hover:text-pink-600 text-[18px] font-medium cursor-pointer`}
                        >
                            <a href={`#${item}`}>{item.charAt(0).toUpperCase() + item.slice(1)}</a>
                        </li>
                    ))}
                </ul>

                <div className="sm:hidden flex flex-1 justify-end items-center">
                    <img
                        src={toggle ? close : menu}
                        alt="menu"
                        className="w-[28px] h-[28px] object-contain"
                        onClick={() => setToggle(!toggle)}
                    />
                    <div
                        className={`${
                            !toggle ? "hidden" : "flex"
                        } p-6 backdrop-blur-md bg-[#070508] bg-opacity-90 
                                    absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
                    >
                        <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
                            {["about", "projects", "contact"].map((item) => (
                                <li key={item}
                                    className={`font-poppins font-medium cursor-pointer text-[16px] ${
                                        active === item ? "text-pink-600" : "text-secondary"
                                    }`}
                                    onClick={() => setToggle(!toggle)}
                                >
                                    <a href={`#${item}`}>{item.charAt(0).toUpperCase() + item.slice(1)}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}
