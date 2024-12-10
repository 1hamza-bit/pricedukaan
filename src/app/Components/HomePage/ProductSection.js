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
                    <div className="flex items-center gap-4">
                        <div className="min-w-20 max-w-20 aspect-square overflow-hidden">
                            <img
                                src={item.products[0].image}
                                alt={item.category.Name}
                                className="object-contain"
                            />
                        </div>
                        <div>
                            <h2 className="text-2xl lg:text-3xl font-semibold text-[#202c33]">
                                {item.category.Name}
                            </h2>
                            <p className="text-[#202c33]/80 mt-3">
                            Browse our selection of {item.category.Name}, offering quality and variety to suit every preference and need.
                            </p>
                        </div>
                    </div>
                    <div className="flex lg:justify-end">
                        <button 
                            className="bg-[#059669] mt-5 text-white font-medium py-2.5 px-6 flex gap-2 rounded mb-6 hover:bg-green-600 transition"
                        >
                            <Link 
    href={
        item.category.slug 
            ? `/category-detail/${encodeURIComponent(item.category.Name)}?v=1`
            : `/categories/${encodeURIComponent(item.category.Name)}`
    }
>
    View All
</Link>

                        </button>
                    </div>
                </div>

                {/* Products Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {item.products.map((product, index) => (
                        <ProductCard v={item.category.slug ? "1" : "2"} key={index} product={product} />
                    ))}
                </div>
            </div>
        </section>
    );
}
