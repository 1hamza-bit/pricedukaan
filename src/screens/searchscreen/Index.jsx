import ProductCard3 from "@/app/Components/cards/ProductCard3";


export default function SearchScreen({ data, query }) {
  return (
    <section>
        <div className="bg-[#FEF7F4]">
            <div className="py-8 layout-wrapper">
                <div className="">
                    <div>
                        <h1 className="text-3xl font-semibold text-[#202c33]">Search Results</h1>
                        <p className="mt-3 leading-relaxed text-[#202c33]/80 ">
                           Top Search Results for "{decodeURIComponent(query)}"
                        </p>
                    </div>
                </div>
            </div>
        </div>
      <div className="layout-wrapper">
        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 py-12">
          {data.map((product, index) => (
            <ProductCard3 key={index} product={product}/>
          ))}
        </div>
      </div>
    </section>
  );
}
