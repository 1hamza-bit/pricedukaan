import Link from "next/link";
import ProductCard from "../cards/ProductCard";

export default function ProductSection({ item }) {
    // Skip rendering if the products array is empty
    if (!item.products || item.products.length === 0) {
        return null;
    }

    return (
        <section className="py-10 border-b border-black border-dashed">
            <div className="layout-wrapper">
                {/* Header Section */}
                <div className="mb-8 grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
                    <div>
                        <h2 className="text-3xl font-semibold text-[#202c33]">
                            {item.category.Category}
                        </h2>
                        <p className="text-[#202c33]/80 mt-3">
                            Industrial meters provide accurate measurement of pressure, flow, 
                            and temperature in various industrial processes.
                        </p>
                    </div>
                    <div className="flex justify-end">
                        <button 
                            className="bg-[#059669] mt-5 text-white font-medium py-2.5 px-6 flex gap-2 rounded mb-6 hover:bg-green-600 transition"
                        >
                            <Link href={`/categories/${item.category.Category}`}>
                                View All
                            </Link>
                        </button>
                    </div>
                </div>

                {/* Products Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {item.products.map((product) => (
                        <ProductCard key={product._id} product={product} />
                    ))}
                </div>
            </div>
        </section>
    );
}
