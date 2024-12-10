"use client";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";
import Link from "next/link";

export default function Header({ productData }) {
  const router = useRouter();

  const handleSearch = (e) => {
    e.preventDefault();
    const searchQuery = e.target.search.value.trim();
    if (searchQuery) {
      router.push(`/search/${encodeURIComponent(searchQuery)}`);
    }
  };


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
        <div className="py-4 layout-wrapper flex-col justify-center md:flex-row flex items-center md:justify-between">
          {/* Logo */}
          <Link href="/" className="text-2xl lg:text-3xl font-semibold text-[#202C33]">
            Price <span className="text-[#059669] font-bold">Dukan</span>
          </Link>

          {/* Search Bar */}
          <form className="block md:flex items-center" onSubmit={handleSearch}>
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
