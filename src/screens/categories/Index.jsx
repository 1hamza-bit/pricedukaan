import Link from "next/link";

export default function Category({ productData }) {
  return (
    <section>
      <div className="bg-[#FEF7F4]">
        <div className="py-8 layout-wrapper">
          <div>
            <h1 className="text-3xl font-semibold text-[#202c33]">Computer Products</h1>
            <p className="text-[#202c33]/80 mt-3">
              Browse our selection of Computer Products, offering quality and variety to suit every preference and need.
            </p>
          </div>
        </div>
      </div>
      <div className="py-8">
        {/* Products Grid */}
        <div className="grid grid-cols-6 gap-6 layout-wrapper">
          {productData
            .filter(item => item.products?.length > 0) // Only include items with products
            .map(item => (
              <Link
                key={item.category?.id} // Add a key prop for React optimization
                href={`/category-detail/${item.category.Category}`}
                className="bg-white p-6 rounded-md hover:shadow-lg transition-all border border-dashed"
              >
                <div className="overflow-hidden flex justify-center">
                  <img
                    src={item.products[0]["Main Image"]}
                    alt={item.products[0].Name}
                    className="object-contain min-w-24 max-w-24 aspect-square"
                  />
                </div>
                <p className="text-[#202c33] text-center mt-3">{item.category.Category}</p>
              </Link>
            ))}
        </div>
      </div>
    </section>
  );
}
