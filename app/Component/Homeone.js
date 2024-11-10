"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Slider from "@madzadev/image-slider";
import "@madzadev/image-slider/dist/index.css";

export default function Homeone() {
  const images = [
    { url: "/slideimg1.png" },
    { url: "/slidimf2.png" },
    { url: "/slideimg1.png" },
    { url: "/slidimf2.png" },
    { url: "/slideimg1.png" }
  ];
  const categories = [
    "Woman’s Fashion",
    "Man’s Fashion",
    "Electronics",
    "Home & Lifestyle",
    "Medicine",
    "Sports & Outdoor",
    "Baby’s & Toys",
    "Groceries & Pets",
    "Health & Beauty"
];


  return (
    <div className='grid  grid-cols-1 md:grid-cols-2 justify-center md:justify-between  '>
       <div className="flex flex-col items-start">
        <ul className='text-start'>
            {
              categories.map((item,i)=>(
                <li className='mb-4 text-sm' key={i}><Link href=''>{item}</Link></li>
              ))
            }
        </ul>
       </div>

       <div className="w-[100%] md:w-[600px]">
        <Slider
        imageList={images} 
        width={1000} 
        height={300}
        loop={true}
        autoPlay={true}
        autoPlayInterval={3000}
        
        
        />
      
       </div>
    </div>
  )
}
