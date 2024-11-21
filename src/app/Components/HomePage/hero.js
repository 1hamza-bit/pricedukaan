import Image from 'next/image';
import { Tag } from 'lucide-react';
import Link from 'next/link';

export default function ComparisonHub({productData}) {
    return (
        <>
            <section className="bg-[#fef7f4] py-16">
                <div className=" flex flex-col items-center layout-wrapper">
                    {/* Header Section */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">


                     <div className="max-w-3xl flex flex-col justify-center">
                            <h1 className="text-5xl font-semibold text-[#202c33]">
                                Price <span className="text-[#059669]">Comparison Hub</span> <Tag className="inline-block text-[#059669]" size={32} />
                            </h1>
                            <p className="text-xl text-[#202c33]/80 mt-2">Find the Best Deals Across All Products</p>
                            <p className="text-md text-[#202c33]/80 mt-4">
                                Compare prices across a wide range of products and services to find the best deals. Shop smarter and save more with our easy-to-use platform!
                            </p>
                        </div>

                        {/* Product Image */}
                        <div className="mt-1">
                            <Image
                                src="/frame.png"
                                alt="Tools and Products"
                                width={680}
                                height={500}
                                className="mx-auto"
                            />
                        </div>
                    </div>

                    {/* Brand Logos */}
                    <div className="flex flex-wrap justify-center gap-6 mt-1">
                        {/* Add brand logos here */}
                        {['amprobe', 'apple', 'anex', 'ags', 'chint', 'dell'].map((brand, index) => (
                            <div key={index} className="bg-white p-4 rounded-md shadow-sm flex justify-center items-center">
                                <Image
                                    src={`/${brand}.png`}
                                    alt={`${brand} logo`}
                                    width={100}
                                    height={100}
                                    className="mx-auto"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className="bg-white border-y border-dashed border-black py-16">
                {/* Brand Logos */}
                <div className="grid grid-cols-10 gap-6 layout-wrapper">
                    {/* Add brand logos here */}
                    {productData.map(item => (
                        <Link href={`/categories/${item.category.Category}`} key={item.category._id} className="bg-white p-6 rounded-md shadow-sm hover:shadow-lg transition-all border">
                            <div className="min-w-20 max-w-20 aspect-square overflow-hidden">
                                {item.products?.[0] && (
                                    <img
                                        src={item.products[0]["Main Image"]}
                                        alt={item.products[0].Name}
                                        className="object-contain"
                                    />
                                )}
                            </div>
                        </Link>
                    ))}
                </div>

            </section>
        </>
    );
}
