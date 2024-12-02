import ProductCard from "@/app/Components/cards/ProductCard";
import ProductCard2 from "@/app/Components/cards/ProductCard2";
import Pagination from "@/app/Components/Paginations";


export default function CategoryDetail2({ data, totalPages, currentPage }) {
  return (
    <section>
        <div className="bg-[#FEF7F4]">
            <div className="py-8 layout-wrapper">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="flex justify-center items-center bg-white rounded">
                        <img className="w-4/6" src={data.products[2]["Image URL"]} alt={data.products[0].Category} />
                    </div>
                    <div>
                        <h1 className="text-3xl font-semibold text-[#202c33]">{data.products[0].Category}</h1>
                        <p className="mt-3 leading-relaxed text-[#202c33]/80 ">
                        Browse our selection of {data.products[0].Category}, offering quality and variety to suit every preference and need.
                        </p>
                        <div className="px-4 py-3 border border-[#4F4F4F80]/50 mt-6 rounded-sm flex items-center space-x-1.5">
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 21C13.1819 21 14.3522 20.7672 15.4442 20.3149C16.5361 19.8626 17.5282 19.1997 18.364 18.364C19.1997 17.5282 19.8626 16.5361 20.3149 15.4442C20.7672 14.3522 21 13.1819 21 12C21 10.8181 20.7672 9.64778 20.3149 8.55585C19.8626 7.46392 19.1997 6.47177 18.364 5.63604C17.5282 4.80031 16.5361 4.13738 15.4442 3.68508C14.3522 3.23279 13.1819 3 12 3C9.61305 3 7.32387 3.94821 5.63604 5.63604C3.94821 7.32387 3 9.61305 3 12C3 14.3869 3.94821 16.6761 5.63604 18.364C7.32387 20.0518 9.61305 21 12 21ZM11.768 15.64L16.768 9.64L15.232 8.36L10.932 13.519L8.707 11.293L7.293 12.707L10.293 15.707L11.067 16.481L11.768 15.64Z" fill="black"/>
                            </svg>
                            <p className="text-lg font-semibold text-[#202c33]">Total Products:</p>
                            <p className="text-[#202c33] text-lg">{totalPages * 24}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      <div className="layout-wrapper">
        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 py-8">
          {data.products.map((product) => (
            <ProductCard2 key={product._id} product={product}/>
          ))}
        </div>
        <div>
            <Pagination route={'/category'} totalPages={totalPages} currentPage={currentPage}/>
        </div>
      </div>
    </section>
  );
}
