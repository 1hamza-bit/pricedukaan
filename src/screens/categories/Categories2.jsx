import Link from "next/link";

export default function Category2({ productData }) {
  return (
    <section className="min-h-[60vh]">
      <div className="bg-[#FEF7F4] ">
        <div className="py-8 layout-wrapper">
          <div>
            <h1 className="text-3xl font-semibold text-[#202c33]">{productData.main_category}</h1>
            <p className="text-[#202c33]/80 mt-3">
              Browse our selection of {productData.main_category}, offering quality and variety to suit every preference and need.
            </p>
          </div>
        </div>
      </div>
      <div className="py-8 layout-wrapper">
  {productData.categories.map((item, categoryIndex) => (
    <div key={categoryIndex}> {/* Add a key for each category */}
      <h3 className="text-3xl font-semibold text-[#202c33] mb-5 mt-10">{item.category_name}</h3>
      <div className="grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-6">
        {item.products.map((productGroup, subcategoryIndex) => (
          productGroup.products.map((product, productIndex) => ( /* Map through products array */
            <Link
              key={`${subcategoryIndex}-${productIndex}`} // Use a composite key for unique identification
              href={`/category-detail/${encodeURIComponent(productGroup.subcategory)}?v=2`}
              className="bg-white p-6 rounded-md hover:shadow-lg transition-all border border-dashed"
            >
              <div className="overflow-hidden flex justify-center">
                <img
                  src={product["Product Image"]}
                  alt={productGroup.subcategory}
                  className="object-contain min-w-24 max-w-24 aspect-square"
                />
              </div>
              <p className="text-[#202c33] text-center mt-3">{productGroup.subcategory}</p>
            </Link>
          ))
        ))}
      </div>
    </div>
  ))}
</div>

    </section>
  );
}
