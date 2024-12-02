import Link from "next/link";

export default function Category2({ productData }) {
  return (
    <section className="min-h-[60vh]">
      <div className="bg-[#FEF7F4] ">
        <div className="py-8 layout-wrapper">
          <div>
            <h1 className="text-3xl font-semibold text-[#202c33]">{productData.data.categoryName}</h1>
            <p className="text-[#202c33]/80 mt-3">
              Browse our selection of {productData.data.categoryName}, offering quality and variety to suit every preference and need.
            </p>
          </div>
        </div>
      </div>
      <div className="py-8">
        {/* Products Grid */}
        <div className="grid grid-cols-6 gap-6 layout-wrapper">
          {productData.data.subcategories
            .map(item => (
              <Link
                key={item.category?.id} // Add a key prop for React optimization
                href={`/category-details/${item.name}`}
                className="bg-white p-6 rounded-md hover:shadow-lg transition-all border border-dashed"
              >
                <div className="overflow-hidden flex justify-center">
                  <img
                    src={item.product["Image URL"]}
                    alt={item.name}
                    className="object-contain min-w-24 max-w-24 aspect-square"
                  />
                </div>
                <p className="text-[#202c33] text-center mt-3">{item.name}</p>
              </Link>
            ))}
        </div>
      </div>
    </section>
  );
}
