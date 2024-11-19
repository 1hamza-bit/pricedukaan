import Image from 'next/image';
import { Tag } from 'lucide-react';

export default function ComparisonHub() {
    return (
        <>
            <section className="bg-[#fef7f4] py-16">
                <div className="  px-4 lg:px-8 flex flex-col items-center ">
                    {/* Header Section */}
                    <div className="grid grid-cols-1 md:grid-cols-2 w-[94%] gap-4">


                        <div className="max-w-3xl flex flex-col justify-center px-8">
                            <h1 className="text-5xl font-bold">
                                Price <span className="text-[#059669]">Comparison Hub</span> <Tag className="inline-block text-[#059669]" size={32} />
                            </h1>
                            <p className="text-xl text-gray-600 mt-2">Find the Best Deals Across All Products</p>
                            <p className="text-md text-gray-600 mt-4">
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
                            <div key={index} className="bg-white p-4 rounded-md shadow-md">
                                <Image
                                    src={`/path/to/brand-logos/${brand}.png`}
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
            <section className="bg-white border-t-2 border-b-2 border-dotted border-gray-600 py-16">
                {/* Brand Logos */}
                <div className="flex flex-wrap justify-center gap-6 mt-1">
                    {/* Add brand logos here */}
                    {['amprobe', 'apple', 'anex', 'ags', 'chint', 'dell'].map((brand, index) => (
                        <div key={index} className="bg-white p-4 rounded-md shadow-md">
                            <Image
                                src={`/path/to/brand-logos/${brand}.png`}
                                alt={`${brand} logo`}
                                width={100}
                                height={100}
                                className="mx-auto"
                            />
                        </div>
                    ))}
                </div>

                {/* Brand Logos */}
                <div className="flex flex-wrap justify-center gap-6 mt-1">
                    {/* Add brand logos here */}
                    {['amprobe', 'apple', 'anex', 'ags', 'chint', 'dell'].map((brand, index) => (
                        <div key={index} className="bg-white p-4 rounded-md shadow-md">
                            <Image
                                src={`/path/to/brand-logos/${brand}.png`}
                                alt={`${brand} logo`}
                                width={100}
                                height={100}
                                className="mx-auto"
                            />
                        </div>
                    ))}
                </div>

            </section>
        </>
    );
}
