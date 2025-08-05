
import React, { useRef } from 'react';
const Navbar = () => {
    const sidenavRef = useRef();

    const openSideNav = () => {
        sidenavRef.current.style.right = '0';
    };

    const closeSideNav = () => {
        sidenavRef.current.style.right = '-50%';
    };
    const sideNavLinks = [
        'Store',
        'Mac',
        'iPad',
        'iPhone',
        'Watch',
        'Airpods',
        'TV & Home',
        'Entertainment',
        'Accessories',
        'Support'
    ];
    return (
        <>   <nav className="sticky top-0">
            <div className="bg-gray-300 p-3 w-auto" >
                <a href="#" className=" text-l text-gray-600 hover:text-black w-full">Education Store Home | Exit</a>
            </div>
            <div className="flex  bg-white shadow-md w-auto relative ">
                <div className="container  py-4 items-center flex">
                    <img src="src/images/logo.jpg " alt="Logo" className="w-15 h-10 ml-5 lg:w-8 h-8" />
                </div>

                <div className=" mt-4">
                    <ul className=" space-x-10 hidden lg:flex  w-full absolute left-60">
                        <li><a href="#" className="text-sm text-gray-600 hover:text-black hover:underline">Store</a></li>
                        <li><a href="#" className="text-sm text-gray-600 hover:text-black hover:underline">Mac</a></li>
                        <li><a href="#" className="text-sm text-gray-600 hover:text-black hover:underline">iPad</a></li>
                        <li><a href="#" className="text-sm text-gray-600 hover:text-black hover:underline">iPhone</a></li>
                        <li><a href="#" className="text-sm text-gray-600 hover:text-black hover:underline">Watch</a></li>
                        <li><a href="#" className="text-sm text-gray-600 hover:text-black hover:underline">AirPods</a></li>
                        <li><a href="#" className="text-sm text-gray-600 hover:text-black hover:underline">Tv & Home</a></li>
                        <li><a href="#" className="text-sm text-gray-600 hover:text-black hover:underline">Entertainment</a></li>
                        <li><a href="#" className="text-sm text-gray-600 hover:text-black hover:underline">Accessories</a></li>
                        <li><a href="#" className="text-sm text-gray-600 hover:text-black hover:underline">Support</a></li>
                    </ul>
                    <div className="absolute right-10 space-x-10 cursor-pointer lg:absolute right-20 space-x-10"><i class="fa-solid fa-magnifying-glass w-3 h-3"></i>
                        <i class="fa-solid fa-bag-shopping w-3 h-3"></i></div>

                        <div>

                            <svg
                                onClick={openSideNav}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-6 h-6 mt-[1px] absolute right-8 lg:hidden  cursor-pointer  "
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                                />
                            </svg>
                        </div></div></div>
                            {/* Side Navigation */}
            <section
                ref={sidenavRef}
                className="fixed z-50 top-0 transition-all duration-1000 bg-white shadow-lg"
                style={{ width: '50%', height: '100vh', right: '-50%' }}
            >
                <div className="text-right p-5">
                    <p onClick={closeSideNav} className="inline cursor-pointer text-xl font-bold">
                        ✕
                    </p>
                </div>
                <ul className="flex flex-col gap-6 items-center text-gray-600">
                    {sideNavLinks.map((item, index) => (
                        <li key={index}>
                            <a
                                href="#"
                                className="hover:underline hover:text-black"
                            >
                                {item}
                            </a>
                        </li>
                    ))}
                </ul>

            </section>
            </nav>
            </>
            );
            }

export default Navbar;