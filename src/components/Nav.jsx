import { Link , NavLink } from "react-router-dom";
import { useState } from "react";
import { logo, menu, close } from "../assets";

export default function Nav() {
    let [active, setActive] = useState("");
    const [toggle, setToggle] = useState(false);
    return (
        <nav className="pt-6 pl-6 pr-6 sm:pt-16 sm:pl-16 sm:pr-16  w-full flex items-center fixed py-5 top-0 z-50 ">
            <div className="w-full flex justify-between items-center max-w-10xl mx-auto">

                <Link to="/" className="flex items-center gap-2" 
                onClick={() => {
                    setActive("");
                    window.scrollTo(0, 0);
                    }
                }> 
                    <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
                    <p className="text-white text-2xl font-bold cursor-pointer">Devansh</p>
                </Link>

                <ul className="list-none hidden sm:flex flex-row gap-10">
                    <li 
                        className={`text-lg font-semibold ${active === "about" ? "text-pink-600" : "text-secondary"
                        } hover:text-pink-600 text-[18px] font-medium cursor-pointer} `
                        } onClick={() => {
                            setActive("about");
                            window.scrollTo(0, 0);}}>
                        <a href="#about">About</a>
                    </li>
                    <li 
                        className={`text-lg font-semibold ${active === "projects" ? "text-pink-600" : "text-secondary"
                            } hover:text-pink-600 text-[18px] font-medium cursor-pointer} `
                            } onClick={() => {
                                setActive("projects");
                                window.scrollTo(0, 0);}}>
                        <a href="#projects">Projects</a>
                    </li>
                    <li 
                        className={`text-lg font-semibold ${active === "contact" ? "text-pink-600" : "text-secondary"
                            } hover:text-pink-600 text-[18px] font-medium cursor-pointer} `
                            } onClick={() => {
                                setActive("contact");
                                window.scrollTo(0, 0);}}>
                        <a href="#contact">Contact</a>
                    </li>

                </ul>
                <div className="sm:hidden flex flex-1 justify-end items-center">
                    <img
                        src={toggle ? close : menu}
                        alt='menu'
                        className='w-[28px] h-[28px] object-contain'
                        onClick={() => setToggle(!toggle)}
                    />
                    <div
                        className={`${
                        !toggle ? "hidden" : "flex"
                        } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`
                    }>
                        <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
                            <li className="font-poppins font-medium cursor-pointer text-[16px]">
                                
                                <NavLink to="/about" className={`${active === "about" ? "text-pink-600" : "text-secondary"
                                    } `
                                    } onClick={() => {
                                        setToggle(!toggle);
                                        setActive("about");}}>
                                    About</NavLink>
                            </li>
                            <li className="font-poppins font-medium cursor-pointer text-[16px]">
                                <NavLink to="/projects" className={`${active === "projects" ? "text-pink-600" : "text-secondary"
                                    } `
                                    } onClick={() => {
                                        setToggle(!toggle);
                                        setActive("projects");}}>
                                    Projects</NavLink>
                            </li>
                            <li className="font-poppins font-medium cursor-pointer text-[16px]">
                                <NavLink to="/contact" className={`${active === "contact" ? "text-pink-600" : "text-secondary"
                                    }`
                                    } onClick={() => {
                                    setToggle(!toggle);
                                    setActive("contact");}}>
                                Contact</NavLink>
                            </li>
                        </ul>

                    </div>
                </div>
            </div>
        </nav>

    )
}
