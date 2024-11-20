import Link from 'next/link'
import React from 'react'

function ProductCard({product}) {
  return (
    <Link
    href={`/products/${product.Name}`}
    key={product._id}
    className="card-border rounded-md px-4 py-6"
  >
    <div className="flex gap-4">
      <div className="min-w-24 max-w-24 aspect-square overflow-hidden">
        <img
          src={product["Main Image"]}
          alt={product.name}
          className="object-contain"
        />
      </div>
      <div className="flex flex-col">
      <h3 className="text-base text-[#202C33]">
{product.Name.length > 70 
? `${product.Name.slice(0, 70)}  ...  ` 
: product.Name}
</h3>

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
  )
}

export default ProductCard