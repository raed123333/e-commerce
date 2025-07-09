import React from 'react'
import { BsFacebook, BsInstagram, BsTwitter, BsLinkedin } from 'react-icons/bs'
const HeaderTop = () => {
        return (
                <div className='border-b border-gray-200 hidden sm:block'>
                        <div className='container py-4'>
                                <div className='flex justify-between items  '>
                                        <div className="hidden lg:flex gap-1 ml-[60px]">
                                                <div className="header_top_icons_wrapper rounded-md p-[6px] text-[14px] 
                                                                cursor-pointer  hover:text-gray-500">
                                                        <BsFacebook />
                                                </div>
                                                <div className="header_top_icons_wrapper rounded-md p-[6px] text-[14px] 
                                                                cursor-pointer hover:text-gray-500">
                                                        <BsTwitter />
                                                </div>
                                                <div className="header_top_icons_wrapper rounded-md p-[6px] text-[14px] 
                                                                cursor-pointer hover:text-gray-500">
                                                        <BsInstagram />
                                                </div>
                                                <div className="header_top_icons_wrapper rounded-md p-[6px] text-[14px] 
                                                                cursor-pointer hover:text-gray-500">
                                                        <BsLinkedin />
                                                </div>

                                        </div>
                                        <div className='text-gray-500 text-[12px]  '>
                                                <b>FREE SHOPING</b> THE IS WEEK ORDER OVER - $55
                                        </div>
                                        <div className='flex gap-4'>
                                                <select
                                                        className='text-gray-500 text-[12px] w-[70px]'
                                                        name="currency"
                                                        id="currency">
                                                        <option value="USD ">USD </option>
                                                        <option value="EUR ">EUR</option>
                                                        <option value="INR">INR</option>

                                                </select>
                                                <select
                                                        className='text-gray-500 text-[12px] w-[70px]'
                                                        name="langage" id="langage">
                                                        <option value="english">English</option>
                                                        <option value="French">French</option>

                                                </select>

                                        </div>

                                </div>

                        </div>

                </div>
        )
}

export default HeaderTop