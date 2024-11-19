import Pagination from "@/app/Components/Paginations";
import Link from "next/link";


export default function CategoryDetail({ data, totalPages, currentPage }) {
  return (
    <section>
        <div className="bg-[#FEF7F4]">
            <div className="py-8 layout-wrapper">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div>
                        <img className="rounded" src="/laptop.png" alt="" />
                    </div>
                    <div>
                        <h1 className="text-3xl font-semibold text-[#202c33]">Laptops</h1>
                        <p className="mt-3 leading-relaxed text-[#202c33]/80 ">
                        PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.
                        </p>
                        <div className="px-8 py-3 border border-[#4F4F4F80]/50 mt-6 rounded-sm flex items-center space-x-1.5">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 21C13.1819 21 14.3522 20.7672 15.4442 20.3149C16.5361 19.8626 17.5282 19.1997 18.364 18.364C19.1997 17.5282 19.8626 16.5361 20.3149 15.4442C20.7672 14.3522 21 13.1819 21 12C21 10.8181 20.7672 9.64778 20.3149 8.55585C19.8626 7.46392 19.1997 6.47177 18.364 5.63604C17.5282 4.80031 16.5361 4.13738 15.4442 3.68508C14.3522 3.23279 13.1819 3 12 3C9.61305 3 7.32387 3.94821 5.63604 5.63604C3.94821 7.32387 3 9.61305 3 12C3 14.3869 3.94821 16.6761 5.63604 18.364C7.32387 20.0518 9.61305 21 12 21ZM11.768 15.64L16.768 9.64L15.232 8.36L10.932 13.519L8.707 11.293L7.293 12.707L10.293 15.707L11.067 16.481L11.768 15.64Z" fill="black"/>
                            </svg>
                            <p className="text-lg font-semibold text-[#202c33]">Total Products:</p>
                            <p className="text-[#202c33]">{totalPages * 24}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      <div className="layout-wrapper">
        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 py-8">
          {data.map((product) => (
            <Link
              href={`/products/${product.Name}`}
              key={product._id}
              className="card-border rounded-md px-4 py-6"
            >
              <div className="flex gap-4">
                <div className="w-24 aspect-square overflow-hidden">
                  <img
                    src={product["Main Image"]}
                    alt={product.name}
                    className="object-contain"
                  />
                </div>
                <div className="flex flex-col">
                  <h3 className="text-base text-[#202C33]">{product.Name}</h3>
                  <div className="flex items-center space-x-2 mt-3">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14.6666 0H9.12485C8.75825 0 8.24587 0.212381 7.98685 0.471207L0.389089 8.06892C-0.129696 8.58712 -0.129696 9.43673 0.389089 9.9543L6.04624 15.6113C6.56385 16.1295 7.41263 16.1295 7.93103 15.6107L15.5288 8.01412C15.7876 7.75533 16 7.24213 16 6.87632V1.33339C16 0.600191 15.3998 0 14.6666 0ZM11.9998 5.33336C11.2634 5.33336 10.6664 4.73575 10.6664 3.99997C10.6664 3.26298 11.2634 2.66658 11.9998 2.66658C12.7362 2.66658 13.3334 3.26298 13.3334 3.99997C13.3334 4.73575 12.7362 5.33336 11.9998 5.33336Z"
                        fill="#059669"
                      />
                    </svg>
                    <p className="font-semibold text-base text-[#202C33]">
                      {product.Price}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div>
            <Pagination route={'/category'} totalPages={totalPages} currentPage={currentPage}/>
        </div>
      </div>
    </section>
  );
}
