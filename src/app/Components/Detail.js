// components/ProductDetail.js

import { FileText, MessageSquare, Notebook } from "lucide-react";

export default function ProductDetail({product}) {

    return (
        <>
            <section className="py-10 bg-[#fef7f4]  ">
                <div className="container mx-auto px-4">
                    {/* Breadcrumb */}
                    <nav className="text-sm text-[#202c33]/70 mb-4">
                        <a href="#" className="mx-2 hover:underline">Account</a> /
                        <a href="#" className="mx-2 hover:underline">Gaming</a> /
                        <span className="ml-2 text-[#202c33] bold">{product.Name}</span>
                    </nav>

                    {/* Product Section */}
                    <div className="flex flex-col lg:flex-row gap-8">
                        {/* Product Image */}
                        <div className="lg:w-1/2 bg-white flex justify-center items-center">
                            <img
                                src={product["Main Image"]} // Replace with the actual image path
                                alt="Logitech F710 Wireless Gamepad"
                                className="w-full h-auto object-contain rounded-md px-12 py-4"
                            />
                        </div>

                        {/* Product Info */}
                        <div className="lg:w-1/2">
                            <h1 className="text-3xl font-semibold">{product.Name}</h1>
                            <p className="text-[#202c33] mt-3">
                                {product.Description}
                            </p>
                            <button className="bg-[#059669] mt-5 text-white font-medium py-2.5 px-6 flex gap-2 rounded mb-6 hover:bg-green-600 transition">
                                <MessageSquare size={22} /> Inquire Now
                            </button>

                            {/* Product Details Table */}
                            <div className="border border-[#4F4F4F80]/50 rounded bg-none">
                                <div className="flex items-center gap-2 py-4 px-3">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M12 21C13.1819 21 14.3522 20.7672 15.4442 20.3149C16.5361 19.8626 17.5282 19.1997 18.364 18.364C19.1997 17.5282 19.8626 16.5361 20.3149 15.4442C20.7672 14.3522 21 13.1819 21 12C21 10.8181 20.7672 9.64778 20.3149 8.55585C19.8626 7.46392 19.1997 6.47177 18.364 5.63604C17.5282 4.80031 16.5361 4.13738 15.4442 3.68508C14.3522 3.23279 13.1819 3 12 3C9.61305 3 7.32387 3.94821 5.63604 5.63604C3.94821 7.32387 3 9.61305 3 12C3 14.3869 3.94821 16.6761 5.63604 18.364C7.32387 20.0518 9.61305 21 12 21ZM11.768 15.64L16.768 9.64L15.232 8.36L10.932 13.519L8.707 11.293L7.293 12.707L10.293 15.707L11.067 16.481L11.768 15.64Z" fill="black"/>
                                    </svg>
                                    <span className="text-gray-700 font-semibold">Warranty:</span>
                                    <span className="text-gray-700">{product.Warranty}</span>
                                </div>
                                <div className="flex items-center gap-2 py-4 px-3 border-t border-[#4F4F4F80]/50">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M12 21C13.1819 21 14.3522 20.7672 15.4442 20.3149C16.5361 19.8626 17.5282 19.1997 18.364 18.364C19.1997 17.5282 19.8626 16.5361 20.3149 15.4442C20.7672 14.3522 21 13.1819 21 12C21 10.8181 20.7672 9.64778 20.3149 8.55585C19.8626 7.46392 19.1997 6.47177 18.364 5.63604C17.5282 4.80031 16.5361 4.13738 15.4442 3.68508C14.3522 3.23279 13.1819 3 12 3C9.61305 3 7.32387 3.94821 5.63604 5.63604C3.94821 7.32387 3 9.61305 3 12C3 14.3869 3.94821 16.6761 5.63604 18.364C7.32387 20.0518 9.61305 21 12 21ZM11.768 15.64L16.768 9.64L15.232 8.36L10.932 13.519L8.707 11.293L7.293 12.707L10.293 15.707L11.067 16.481L11.768 15.64Z" fill="black"/>
                                    </svg>
                                    <span className="text-gray-700 font-semibold">Product Type:</span>
                                    <span className="flex items-center gap-2">
                                        <span className="text-gray-700">{product["Product"]}</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </section>

            {/* Description Section */}
            <section className="bg-white border-t border-dotted border-black py-6">
                <div className="layout-wrapper">

                    <div>
                        <h2 className="text-[#202c33] text-3xl font-semibold mb-4 flex items-center gap-3">
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.75 9.375H32.5V10.625H13.75V9.375Z" fill="black"/>
<path d="M13.75 11.875H35V13.125H13.75V11.875Z" fill="black"/>
<path d="M11.25 8.125H5V14.375H11.25V8.125ZM10 13.125H6.25V9.375H10V13.125Z" fill="black"/>
<path d="M13.75 18.125H32.5V19.375H13.75V18.125Z" fill="black"/>
<path d="M13.75 20.625H35V21.875H13.75V20.625Z" fill="black"/>
<path d="M11.25 16.875H5V23.125H11.25V16.875ZM10 21.875H6.25V18.125H10V21.875Z" fill="black"/>
<path d="M13.75 26.875H32.5V28.125H13.75V26.875Z" fill="black"/>
<path d="M13.75 29.375H35V30.625H13.75V29.375Z" fill="black"/>
<path d="M11.25 25.625H5V31.875H11.25V25.625ZM10 30.625H6.25V26.875H10V30.625Z" fill="black"/>
<path d="M4.27375 36.25H35.725C38.0863 36.25 40 34.3362 40 31.9762V8.02375C40 5.66375 38.0863 3.75 35.7262 3.75H4.27375C1.91375 3.75 0 5.66375 0 8.02375V31.975C0 34.3363 1.91375 36.25 4.27375 36.25ZM1.25 8.02375C1.25 6.35625 2.60625 5 4.27375 5H35.725C37.3937 5 38.75 6.35625 38.75 8.02375V31.975C38.75 33.6437 37.3937 35 35.7262 35H4.27375C2.60625 35 1.25 33.6437 1.25 31.9762V8.02375Z" fill="black"/>
</svg>

                            Description
                        </h2>
                        <p className="text-[#202c33] mt-3 mb-5">
                                {product.Description}
                            </p>
                        <p className="text-[#202c33] font-semibold mb-4">
                            FEATURES:
                        </p>
                        <ul className="text-[#202c33] space-y-2 list-disc ">
                            {product.Features.map(feature => <li key={feature}>{feature}</li>)}
                        </ul>
                    </div>
                </div>
            </section>

            <section className="bg-white border-t-2 border-b-2 border-dotted border-gray-600 py-4">
                <div className="container mx-auto px-4">

                    <div className="flex items-center space-x-2 mb-4">
                        <FileText className="w-6 h-10 text-gray-700" />
                        <h2 className="text-xl font-semibold">Specification</h2>
                    </div>

                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                        <div className="bg-gray-100 p-2 font-bold">Display Specification</div>

                        <div className="px-2 border-t border-gray-200 flex items-center">
                            <p className="w-[200px]  ">Display:</p>
                            <hr className="h-10 border-l border-gray-400 mx-2" />

                            <p className="p-2"> Digital: 6000 counts updates 4/sec | Analog: 32 segments, updates 40/sec | Frequency: 19,999 counts, updates 3/sec at  10 Hz</p>
                        </div>

                        <div className="bg-gray-100 p-2 font-bold">Power</div>
                        <div className="px-2 border-t border-gray-200 flex items-center">
                            <p className="w-[200px] p-2 font-medium">AC Current:</p>
                            <hr className="h-10 border-l border-gray-400 mx-2" />
                            <p className="p-2">Maximum amps: 10 A (20 A for 30 seconds maximum) | Amps accuracy: ±(1.2% + 2) | Maximum resolution: 0.1 μA</p>
                        </div>

                        <div className="px-2 border-t border-gray-200 flex items-center">
                            <p className="w-[200px] p-2 font-medium">Display Specification:</p>
                            <hr className="h-10 border-l border-gray-400 mx-2" />
                            <p className="p-2">Maximum voltage: 1000 V | Accuracy: ±(0.5% + 2) | Maximum resolution: 0.1 mV</p>
                        </div>

                        <div className="px-2 border-t border-gray-200 flex items-center">
                            <p className="w-[200px] p-2 font-medium">Display Specification:</p>
                            <hr className="h-10 border-l border-gray-400 mx-2" />
                            <p className="p-2">Maximum amps: 10 A (20 A for 30 seconds maximum) | Amps accuracy: ±(0.4% + 2) | Maximum resolution: 0.01 mA</p>
                        </div>

                        <div className="px-2 border-t border-gray-200 flex items-center">
                            <p className="w-[200px] p-2 font-medium">Display Specification:</p>
                            <hr className="h-10 border-l border-gray-400 mx-2" />
                            <p className="p-2">Maximum voltage: 1000 V | Accuracy: ±(0.1% + 1) | Maximum resolution: 100 μV</p>
                        </div>


                    </div>
                </div>
            </section>
        </>
    );
}
