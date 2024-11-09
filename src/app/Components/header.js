"use client" ;
import { useState } from 'react';
import { ChevronDown, Search } from 'lucide-react';

export default function Header() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Rent', 'Sale', 'Services']; // Example categories

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const selectCategory = (category) => {
    setSelectedCategory(category);
    setDropdownOpen(false);
  };

  return (
    <header className="border-b">
      {/* Announcement Bar */}
      <div className="bg-[#059669] text-white text-center py-2 text-sm">
        <p>"Due to currency devaluation, the prices are subject to change without prior notice. Please confirm the price before placing the order."</p>
      </div>

      {/* Main Header */}
      <div className="bg-[#fef7f4] py-4 px-12 flex flex-col md:flex-row items-center justify-between">
        {/* Logo */}
        <h1 className="text-3xl font-bold text-gray-800">
          Price <span className="text-[#059669]">Dukan</span>
        </h1>

        {/* Search Bar */}
        <div className="flex items-center ">
          {/* Category Dropdown */}
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="bg-[#059669] text-white px-4 py-3 rounded-l-md flex items-center"
            >
              {selectedCategory} <ChevronDown className="ml-1" size={16} />
            </button>
            {dropdownOpen && (
              <ul className="absolute top-full left-0 w-full bg-white border border-gray-300 rounded-md mt-1 shadow-lg z-10">
                {categories.map((category) => (
                  <li
                    key={category}
                    onClick={() => selectCategory(category)}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  >
                    {category}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Search Input */}
          <div className="relative flex-1 w-[300px] md:w-[500px]">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="w-full border border-gray-300 px-4 py-3 rounded-r-md outline-none pr-10"
            />
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#059669]" size={20} />
          </div>
        </div>
      </div>
    </header>
  );
}
