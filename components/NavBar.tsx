import Link from 'next/link'
import React from 'react'

const NavBar = () => {
        return (
                <div className='hidden lg:block'>
                        <div className='container '>
                                <div className='flex w-fit gap-10 mx-auto font-medium py-4 text-black '>
                                        <Link
                                                href="#"
                                                className="relative text-black group hover:text-[#FF8F9C] transition-all duration-300"
                                        >
                                                Home
                                                <span
                                                        className="absolute left-0 -bottom-1 h-[2px] w-full bg-[#FF8F9C] scale-x-100 origin-left transition-transform duration-500 group-hover:scale-x-0"
                                                ></span>
                                        </Link>
                                        <Link
                                                href="#"
                                                className="relative text-black group hover:text-[#FF8F9C] transition-all duration-300"
                                        >
                                                CATEGORIES
                                                <span
                                                        className="absolute left-0 -bottom-1 h-[2px] w-full bg-[#FF8F9C] scale-x-100 origin-left transition-transform duration-500 group-hover:scale-x-0"
                                                ></span>
                                        </Link>
                                        <Link
                                                href="#"
                                                className="relative text-black group hover:text-[#FF8F9C] transition-all duration-300"
                                        >
                                                MEN&#39;S
                                                <span
                                                        className="absolute left-0 -bottom-1 h-[2px] w-full bg-[#FF8F9C] scale-x-100 origin-left transition-transform duration-500 group-hover:scale-x-0"
                                                ></span>
                                        </Link>
                                        <Link
                                                href="#"
                                                className="relative text-black group hover:text-[#FF8F9C] transition-all duration-300"
                                        >
                                                Women&#39;s
                                                <span
                                                        className="absolute left-0 -bottom-1 h-[2px] w-full bg-[#FF8F9C] scale-x-100 origin-left transition-transform duration-500 group-hover:scale-x-0"
                                                ></span>
                                        </Link>
                                        <Link
                                                href="#"
                                                className="relative text-black group hover:text-[#FF8F9C] transition-all duration-300"
                                        >
                                                JEWELRY
                                                <span
                                                        className="absolute left-0 -bottom-1 h-[2px] w-full bg-[#FF8F9C] scale-x-100 origin-left transition-transform duration-500 group-hover:scale-x-0"
                                                ></span>
                                        </Link>
                                        <Link
                                                href="#"
                                                className="relative text-black group hover:text-[#FF8F9C] transition-all duration-300"
                                        >
                                                PERFUME
                                                <span
                                                        className="absolute left-0 -bottom-1 h-[2px] w-full bg-[#FF8F9C] scale-x-100 origin-left transition-transform duration-500 group-hover:scale-x-0"
                                                ></span>
                                        </Link>
                                        <Link
                                                href="#"
                                                className="relative text-black group hover:text-[#FF8F9C] transition-all duration-300"
                                        >
                                                BLOG
                                                <span
                                                        className="absolute left-0 -bottom-1 h-[2px] w-full bg-[#FF8F9C] scale-x-100 origin-left transition-transform duration-500 group-hover:scale-x-0"
                                                ></span>
                                        </Link>
                                        <Link
                                                href="#"
                                                className="relative text-black group hover:text-[#FF8F9C] transition-all duration-300"
                                        >
                                                OFFERS
                                                <span
                                                        className="absolute left-0 -bottom-1 h-[2px] w-full bg-[#FF8F9C] scale-x-100 origin-left transition-transform duration-500 group-hover:scale-x-0"
                                                ></span>
                                        </Link>
                                </div>
                        </div>
                </div>
        )
}

export default NavBar
