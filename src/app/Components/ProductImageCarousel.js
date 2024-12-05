"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ProductImageCarousel({ products }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Cycle through images every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % products.length);
    }, 5000); // 3 seconds per image
    return () => clearInterval(interval);
  }, [products]);

  const currentProduct = products[currentImageIndex];

  return (
    <div className="flex justify-center items-center bg-white rounded py-10 relative">
      <AnimatePresence mode="wait">
        <motion.img
          key={currentProduct["_id"]} // Unique key for each product
          src={currentProduct["Main Image"]}
          alt={currentProduct.Product}
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
