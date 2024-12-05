'use client'
import { ReactTyped } from "react-typed";
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function ComparisonHub({ productData, additionalData }) {
    // Hero images array
    const heroImages = [
        { src: "i1.png", alt: 'Tools and Products' },
        { src: "i2.png", alt: 'Wide Range of Products' },
        { src: "i3.png", alt: 'Save More' },
    ];

    const [currentImage, setCurrentImage] = useState(0);

    // Update image every 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % heroImages.length);
        }, 3000);

        return () => clearInterval(interval); // Cleanup interval on unmount
    }, [heroImages.length]);

    return (
        <>
            <section className="bg-[#fef7f4] py-16">
                <div className="flex flex-col items-center layout-wrapper">
                    {/* Header Section */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex flex-col justify-center">
                            <h1 className="text-3xl lg:text-5xl font-semibold text-[#202c33] leading-[1.15] lg:leading-[1.15]">
                                Find Best Prices of <br/> <span className="text-[#059669]">
                                    <ReactTyped strings={["Laptops", "Cameras", "Cartridges", "Casing", "Desktop Computers", "Gaming Products"]} typeSpeed={40} backSpeed={30} loop />
                                </span>
                            </h1>
                            <p className="text-lg lg:text-xl text-[#202c33]/80 mt-3">
                                Find the Best Deals Across All Products
                            </p>
                            <p className="text-sm lg:text-base text-[#202c33]/80 mt-3">
                                Compare prices across a wide range of products and services to find the best
                                deals. Shop smarter and save more with our easy-to-use platform!
                            </p>
                        </div>

                        {/* Product Image with Animation */}
                        <div className="mt-1 relative w-[70vw] h-[30vh] lg:w-[33.5vw] lg:h-[54vh] mx-auto">
                            <AnimatePresence>
                                {heroImages.map((image, index) => (
                                    index === currentImage && (
                                        <motion.div
                                            key={image.src}
                                            className="absolute inset-0 flex justify-center lg:justify-end"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            transition={{ duration: 1 }}
                                        >
                                            <img
                                                src={image.src}
                                                alt={image.alt}
                                                className='object-contain'
                                            />
                                        </motion.div>
                                    )
                                ))}
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-white border-y border-dashed border-black py-16">
                {/* Brand Logos */}
                <div className="grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-6 layout-wrapper">
                    <Link
                        href={`/categories/computer-products`}
                        className="bg-white p-6 rounded-md hover:shadow-lg transition-all border border-dashed"
                    >
                        <div className="aspect-square overflow-hidden">
                            <img
                                src={productData[0].products[0]["Main Image"]}
                                alt={productData[0].products[0].Name}
                                className="object-contain"
                            />
                        </div>
                        <p className="text-[#202c33] text-center">Computer Products</p>
                    </Link>
                </div>
            </section>
        </>
    );
}
