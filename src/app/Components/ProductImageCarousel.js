"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ProductImageCarousel({ products }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Cycle through images every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % products.length);
    }, 5000); // 5 seconds per image
    return () => clearInterval(interval);
  }, [products]);

  const currentProduct = products[currentImageIndex];

  return (
    <div className="flex justify-center items-center bg-white rounded py-10 relative">
      <AnimatePresence mode="wait">
        <motion.img
          key={currentProduct.id} // Unique key for each product
          src={currentProduct.image} // Updated to use the new "mainImage" field
          alt={currentProduct.name} // Updated to use the new "name" field
          className="w-3/6"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8 }}
        />
      </AnimatePresence>
    </div>
  );
}
