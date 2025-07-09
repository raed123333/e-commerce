import Image from 'next/image'
import React from 'react'

const Testimonials = () => {
        return (
                <div>
                        <div className="container grid grid-cols-2 pt-16 pb-16">
                                <h2 className="font-medium text-2xl pb-4 col-span-2">Testimonials</h2>

                                <div className="grid lg:grid-cols-[300px_1fr] gap-4 col-span-2">
                                        <div className="border border-gray-300 rounded-2xl grid place-items-center p-6 lg:p-0">
                                                <div className="text-center flex flex-col items-center gap-1">
                                                        <Image
                                                                className="rounded-full inline-block"
                                                                src="/girl.jpg"
                                                                width={80}
                                                                height={80}
                                                                alt="dp"
                                                        />
                                                        <h2 className="text-gray-500 font-black text-[20px]">Elsa Doe</h2>
                                                        <p>CEO & FOUNDER Invision</p>
                                                        <Image
                                                                className="inline-block py-2"
                                                                src="/girl.jpg"
                                                                width={80}
                                                                height={80}
                                                                alt="dp"
                                                        />
                                                        <p className="max-w-[200px] text-gray-500">
                                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, impedit? Totam
                                                                maxime, aspernatur quis provident numquam laudantium repudiandae enim quaerat vel,
                                                        </p>
                                                </div>
                                        </div>
                                        <div className='bg-red-600 bg-[url(/boot.png)] bg-cover h-[500px] rounded-2xl grid place-items-center'>
                                                <div className='bg-gray-100 min-w-[270px] sm:min-w-[300px] md:min-w-[500px] rounded-xl py-8 sm:px-8 px-2 
                                        grid place-items-center gap-3 '
                                                >
                                                        <button className='bg-black text-white p-2 rounded-md'>
                                                                25% DISCOUNT
                                                        </button>
                                                        <h2 className='font-extrabold text-2xl text-black'>
                                                                Summer Collection
                                                        </h2>
                                                        <p>
                                                                Starting @ $20 <b>Shop Now</b>
                                                        </p>

                                                </div>

                                        </div>
                                </div>
                        </div>
                </div>
        )
}

export default Testimonials
