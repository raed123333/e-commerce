"use client"
import React from 'react'
import ProductCard from './ProductCard';

const productsData = [{
        img: "/appleWatch.png",
        title: "watch ",
        desc: "apple watch ",
        rating: 2,
        price: "40.00"
}, {
        img: "/appleWatch.png",
        title: "watch ",
        desc: "apple watch ",
        rating: 3,
        price: "40.00"
}, {
        img: "/appleWatch.png",
        title: "watch ",
        desc: "apple watch ",
        rating: 4,
        price: "40.00"
}, {
        img: "/appleWatch.png",
        title: "watch ",
        desc: "apple watch ",
        rating: 1,
        price: "40.00"
}, {
        img: "/appleWatch.png",
        title: "watch ",
        desc: "apple watch ",
        rating: 5,
        price: "40.00"
}];

const NewProducts = () => {
        return (
                <div>
                        <div className='container pt-16'>
                                <h2 className='font-medium text-2xl pb-4'> New Productes</h2>
                                <div className='grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 
                                lg:grid-cols-3 xl:grid-cols-4 gap-10 xl:gap-x-20 xl:gap-x-10'>
                                        {productsData.map((item, index) => (
                                                <ProductCard key={index}
                                                        img={item.img}
                                                        title={item.title}
                                                        desc={item.desc}
                                                        rating={item.rating}
                                                        price={item.price}
                                                />))}
                                </div>
                        </div>
                </div>
        )
}

export default NewProducts