"use client";
import { useRouter } from "next/navigation";
import { Search, ChevronDown } from "lucide-react";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Header({ productData }) {
  const pathname = usePathname();
  const router = useRouter();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleSearch = (e) => {
    e.preventDefault();
    const searchQuery = e.target.search.value.trim();
    if (searchQuery) {
      router.push(`/search/${encodeURIComponent(searchQuery)}`);
    }
  };

  // Close dropdown on outside click
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <header>
      {/* Announcement Bar */}
      <div className="bg-[#059669] text-[#fafafa] text-center py-3 text-sm hidden lg:flex justify-center">
        <p>
          "Due to currency devaluation, the prices are subject to change without prior notice. Please confirm the price before placing the order."
        </p>
      </div>

      {/* Main Header */}
      <div className="bg-[#fef7f4] border-b border-black/10">
        <div className="py-4 layout-wrapper flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-2xl lg:text-3xl font-semibold text-[#202C33]">
            Price <span className="text-[#059669] font-bold">Dukan</span>
          </Link>

          <div className="hidden lg:flex items-center space-x-6 relative">

            <div ref={dropdownRef} className="relative">
              {pathname === '/' && <div
                className="flex items-center space-x-1 cursor-pointer"
                onClick={() => setIsDropdownOpen((prev) => !prev)}
              >
                <span className="text-[#202c33]/90">Computer Products</span>
                <ChevronDown
                  size={16}
                  className={`text-[#202c33]/90 transition-transform duration-200 ${
                    isDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </div>}

              {/* Dropdown */}
              {isDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-[800px] bg-white shadow-lg border border-black/10 p-4 rounded-md z-10">
                  <div className="grid grid-cols-4 gap-4">
                    {productData.map((item) => (
                      <Link
                        key={item.category._id}
                        href={`#${item.category._id}`}
                        className="text-[#202C33] hover:text-[#059669] transition-colors truncate"
                        title={item.category.Category} // Show full name on hover
                      >
                        {item.category.Category}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Search Bar */}
          <form className="hidden lg:flex items-center" onSubmit={handleSearch}>
            <div className="relative flex-1 w-[300px] md:w-[500px] hover:w-[600px] transition-all duration-300">
              <input
                type="text"
                name="search"
                placeholder="What are you looking for?"
                className="w-full px-4 py-4 rounded-md outline-none pr-10"
              />
              <Search
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#059669]"
                size={20}
              />
            </div>
          </form>

          <div className="flex lg:hidden"></div>
        </div>
      </div>
    </header>
  );
}
