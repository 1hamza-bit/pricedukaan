"use client";
import { useRouter } from "next/navigation"; // Import the router
import { Search } from "lucide-react";
import Link from "next/link";

export default function Header() {
  const router = useRouter(); // Initialize the router

  const handleSearch = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    const searchQuery = e.target.search.value.trim(); // Get the search query

    if (searchQuery) {
      router.push(`/search/${encodeURIComponent(searchQuery)}`); // Navigate to the search route
    }
  };

  return (
    <header>
      {/* Announcement Bar */}
      <div className="bg-[#059669] text-[#fafafa] text-center py-3 text-sm">
        <p>
          "Due to currency devaluation, the prices are subject to change without prior notice. Please confirm the price before placing the order."
        </p>
      </div>

      {/* Main Header */}
      <div className="bg-[#fef7f4] border-b border-black/10">
        <div className="py-4 layout-wrapper flex flex-col md:flex-row items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-3xl font-semibold text-[#202C33]">
            Price <span className="text-[#059669] font-bold">Dukan</span>
          </Link>

          {/* Search Bar */}
          <form
            className="flex items-center"
            onSubmit={handleSearch} // Handle form submission
          >
            <div className="relative flex-1 w-[300px] md:w-[500px] hover:w-[700px] tt">
              <input
                type="text"
                name="search" // Add a name attribute to reference the input value
                placeholder="What are you looking for?"
                className="w-full px-4 py-4 rounded-md outline-none pr-10"
              />
              <Search
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#059669]"
                size={20}
              />
            </div>
          </form>
        </div>
      </div>
    </header>
  );
}
