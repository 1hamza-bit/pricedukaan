// components/ProductDetail.js

import { Clock, MessageSquare } from "lucide-react";
import Link from "next/link";

export default function ProductDetail({product}) {

    const whatsappLink = `https://wa.me/+923302635347?text=${encodeURIComponent(product.name)}`;

    return (
        <>
            <section className="py-10 bg-[#fef7f4]">
                <div className="container mx-auto px-4">
                    {/* Breadcrumb */}
                    <nav className="text-sm text-[#202c33]/70 mb-8">
                        <a href="#" className="mx-2 hover:underline">Home</a> /
                        <a href="#" className="mx-2 hover:underline">{product.category}</a> /
                        <span className="ml-2 text-[#202c33] bold">{product.name}</span>
                    </nav>

                    {/* Product Section */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Product Image */}
                        <div className="bg-white flex justify-center items-center">
                            <img
                                src={product.image} // Replace with the actual image path
                                alt={product?.name}
                                className="w-full h-auto object-contain rounded-md px-12 py-4"
                            />
                        </div>

                        {/* Product Info */}
                        <div>
                            <h1 className="text-2xl lg:text-3xl font-semibold text-[#202c33]">{product.name}</h1>
                            <h3 className="text-xl lg:text-2xl font-semibold text-[#202c33]/90 mt-4">{product.price}</h3>
                            <p className="text-[#202c33] mt-3">
                                {product.description || `The ${product.name} is a high-quality product designed to meet your needs. Learn more about its features and benefits!`}
                            </p>
                            <Link href={whatsappLink} target="_blank">
                                <button className="bg-[#059669] mt-5 text-white font-medium py-2.5 px-6 flex gap-2 rounded mb-6 hover:bg-green-600 transition">
                                    <MessageSquare size={22} /> Inquire Now
                                </button>
                            </Link>

                            <div className="border border-t-0 border-[#4F4F4F80]/50">
                                { product.warranty &&
                                <div className="border-t border-[#4F4F4F80]/50 bg-none">
                                    <div className="flex items-center gap-2 py-4 px-3">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M12 21C13.1819 21 14.3522 20.7672 15.4442 20.3149C16.5361 19.8626 17.5282 19.1997 18.364 18.364C19.1997 17.5282 19.8626 16.5361 20.3149 15.4442C20.7672 14.3522 21 13.1819 21 12C21 10.8181 20.7672 9.64778 20.3149 8.55585C19.8626 7.46392 19.1997 6.47177 18.364 5.63604C17.5282 4.80031 16.5361 4.13738 15.4442 3.68508C14.3522 3.23279 13.1819 3 12 3C9.61305 3 7.32387 3.94821 5.63604 5.63604C3.94821 7.32387 3 9.61305 3 12C3 14.3869 3.94821 16.6761 5.63604 18.364C7.32387 20.0518 9.61305 21 12 21ZM11.768 15.64L16.768 9.64L15.232 8.36L10.932 13.519L8.707 11.293L7.293 12.707L10.293 15.707L11.067 16.481L11.768 15.64Z" fill="black"/>
                                        </svg>
                                        <span className="text-gray-700 font-semibold">Warranty:</span>
                                        <span className="text-gray-700">{product.warranty}</span>
                                    </div>
                                </div> }
                                {product.brand && <div className="border-t border-[#4F4F4F80]/50 bg-none">
                                    <div className="flex items-center gap-2 py-4 px-3">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M12 21C13.1819 21 14.3522 20.7672 15.4442 20.3149C16.5361 19.8626 17.5282 19.1997 18.364 18.364C19.1997 17.5282 19.8626 16.5361 20.3149 15.4442C20.7672 14.3522 21 13.1819 21 12C21 10.8181 20.7672 9.64778 20.3149 8.55585C19.8626 7.46392 19.1997 6.47177 18.364 5.63604C17.5282 4.80031 16.5361 4.13738 15.4442 3.68508C14.3522 3.23279 13.1819 3 12 3C9.61305 3 7.32387 3.94821 5.63604 5.63604C3.94821 7.32387 3 9.61305 3 12C3 14.3869 3.94821 16.6761 5.63604 18.364C7.32387 20.0518 9.61305 21 12 21ZM11.768 15.64L16.768 9.64L15.232 8.36L10.932 13.519L8.707 11.293L7.293 12.707L10.293 15.707L11.067 16.481L11.768 15.64Z" fill="black"/>
                                        </svg>
                                        <span className="text-gray-700 font-semibold">Brand:</span>
                                        <span className="text-gray-700">{product.brand}</span>
                                    </div>
                                </div>}
                                {product.model && <div className="border-t border-[#4F4F4F80]/50 bg-none">
                                    <div className="flex items-center gap-2 py-4 px-3">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M12 21C13.1819 21 14.3522 20.7672 15.4442 20.3149C16.5361 19.8626 17.5282 19.1997 18.364 18.364C19.1997 17.5282 19.8626 16.5361 20.3149 15.4442C20.7672 14.3522 21 13.1819 21 12C21 10.8181 20.7672 9.64778 20.3149 8.55585C19.8626 7.46392 19.1997 6.47177 18.364 5.63604C17.5282 4.80031 16.5361 4.13738 15.4442 3.68508C14.3522 3.23279 13.1819 3 12 3C9.61305 3 7.32387 3.94821 5.63604 5.63604C3.94821 7.32387 3 9.61305 3 12C3 14.3869 3.94821 16.6761 5.63604 18.364C7.32387 20.0518 9.61305 21 12 21ZM11.768 15.64L16.768 9.64L15.232 8.36L10.932 13.519L8.707 11.293L7.293 12.707L10.293 15.707L11.067 16.481L11.768 15.64Z" fill="black"/>
                                        </svg>
                                        <span className="text-gray-700 font-semibold">Model:</span>
                                        <span className="text-gray-700">{product.model}</span>
                                    </div>
                                </div>}
                                {product.type && <div className="border-t border-[#4F4F4F80]/50 bg-none">
                                    <div className="flex items-center gap-2 py-4 px-3">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M12 21C13.1819 21 14.3522 20.7672 15.4442 20.3149C16.5361 19.8626 17.5282 19.1997 18.364 18.364C19.1997 17.5282 19.8626 16.5361 20.3149 15.4442C20.7672 14.3522 21 13.1819 21 12C21 10.8181 20.7672 9.64778 20.3149 8.55585C19.8626 7.46392 19.1997 6.47177 18.364 5.63604C17.5282 4.80031 16.5361 4.13738 15.4442 3.68508C14.3522 3.23279 13.1819 3 12 3C9.61305 3 7.32387 3.94821 5.63604 5.63604C3.94821 7.32387 3 9.61305 3 12C3 14.3869 3.94821 16.6761 5.63604 18.364C7.32387 20.0518 9.61305 21 12 21ZM11.768 15.64L16.768 9.64L15.232 8.36L10.932 13.519L8.707 11.293L7.293 12.707L10.293 15.707L11.067 16.481L11.768 15.64Z" fill="black"/>
                                        </svg>
                                        <span className="text-gray-700 font-semibold">Type:</span>
                                        <span className="text-gray-700">{product.type}</span>
                                    </div>
                                </div>}
                                {product.lastUpdated && <div className="border-t border-[#4F4F4F80]/50 bg-none">
                                    <div className="flex items-center gap-2 py-4 px-3">
                                        <Clock/>
                                        <span className="text-gray-700 font-semibold">Price Last Updated:</span>
                                        <span className="text-gray-700">{product.lastUpdated}</span>
                                    </div>
                                </div>}
                            </div>
                        </div>
                    </div>


                </div>
            </section>


            <section className="bg-white border-t border-dotted border-black py-6">
                <div className="layout-wrapper">

                    <div>
                        <h2 className="text-[#202c33] text-2xl lg:text-3xl font-semibold mb-4 flex items-center gap-3">
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
                                {product.description || `The ${product.name} is a high-quality product designed to meet your needs. Learn more about its features and benefits!`}
                            </p>
                        {product.features && 
                            <p className="text-[#202c33] font-semibold mb-4">
                            FEATURES:
                            </p>
                        }
                        <ul className="text-[#202c33] space-y-2 ">
                            {product.features.map(feature => <li key={feature}>{feature}</li>)}
                        </ul>
                    </div>
                </div>
            </section>

            <section className="bg-white border-t border-dotted border-black py-6">
                <div className="layout-wrapper">

                    <div className="flex items-center space-x-2 mb-4">
                        <h2 className="text-[#202c33] text-2xl lg:text-3xl font-semibold mb-4 flex items-center gap-2">
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M30.6666 4.66666H27.3333V4.00002C27.3333 3.26667 26.7333 2.66668 25.9999 2.66668H24V1.99997C24 0.866628 23.1333 0 22 0H18C16.8666 0 16 0.933347 16 1.99997V2.6666H14C13.2667 2.6666 12.6667 3.2666 12.6667 3.99994V4.66658H9.33337C7.46668 4.66658 6.00006 6.13328 6.00006 7.99989V36.6665C6.00006 38.5332 7.46676 39.9998 9.33337 39.9998H30.6667C32.5334 39.9998 34 38.5331 34 36.6665V7.99997C34 6.13335 32.5333 4.66666 30.6666 4.66666ZM13.9999 4.00002H16.6666C17.0666 4.00002 17.3333 3.73339 17.3333 3.33339V1.99997C17.3333 1.59998 17.5999 1.33334 17.9999 1.33334H21.9999C22.3999 1.33334 22.6665 1.6667 22.6665 1.99997V3.33331C22.6665 3.73331 22.9332 3.99994 23.3332 3.99994H25.9999V5.33329V8.6666H13.9999V5.33337V4.00002ZM32.6666 36.6666C32.6666 37.8 31.8 38.6666 30.6667 38.6666H9.33337C8.20003 38.6666 7.3334 37.8 7.3334 36.6666V7.99997C7.3334 6.86662 8.20003 6 9.33337 6H12.6667V8.66668C12.6667 9.40003 13.2667 10 14 10H26C26.7334 10 27.3334 9.40003 27.3334 8.66668V6H30.6667C31.8 6 32.6666 6.86662 32.6666 7.99997V36.6666Z" fill="black"/>
<path d="M22 31.9999H11.3333C10.9333 31.9999 10.6667 32.2666 10.6667 32.6666C10.6667 33.0666 10.9333 33.3332 11.3333 33.3332H22C22.4 33.3332 22.6666 33.0666 22.6666 32.6666C22.6666 32.2666 22.4 31.9999 22 31.9999Z" fill="black"/>
<path d="M22 25.9999H11.3333C10.9333 25.9999 10.6667 26.2666 10.6667 26.6666C10.6667 27.0666 10.9333 27.3332 11.3333 27.3332H22C22.4 27.3332 22.6666 27.0666 22.6666 26.6666C22.6666 26.2667 22.4 25.9999 22 25.9999Z" fill="black"/>
<path d="M22 19.9999H11.3333C10.9333 19.9999 10.6667 20.2666 10.6667 20.6666C10.6667 21.0666 10.9333 21.3332 11.3333 21.3332H22C22.4 21.3332 22.6666 21.0666 22.6666 20.6666C22.6666 20.2667 22.4 19.9999 22 19.9999Z" fill="black"/>
<path d="M22 13.9999H11.3333C10.9333 13.9999 10.6667 14.2666 10.6667 14.6666C10.6667 15.0666 10.9333 15.3332 11.3333 15.3332H22C22.4 15.3332 22.6666 15.0666 22.6666 14.6666C22.6666 14.2666 22.4 13.9999 22 13.9999Z" fill="black"/>
<path d="M29.7333 12.1333C29.4667 11.9333 29 12 28.8 12.2667L26.6074 15.0074L25.8 14.2C25.5334 13.9334 25.1334 13.9334 24.8667 14.2C24.6 14.4666 24.6 14.8666 24.8667 15.1334L26.1647 16.4314C26.1946 16.4698 26.2283 16.5046 26.2666 16.5333C26.274 16.537 26.2813 16.5406 26.2886 16.5442C26.3952 16.6255 26.5105 16.6666 26.6666 16.6666C26.6917 16.6666 26.7156 16.6656 26.7387 16.6635C26.9138 16.6486 27.0827 16.5759 27.2 16.4L29.8667 13.0667C30.0666 12.8 30 12.3333 29.7333 12.1333Z" fill="black"/>
<path d="M29.7333 18.1333C29.4667 17.9333 29 18 28.8 18.2667L26.6074 21.0074L25.8 20.2C25.5334 19.9334 25.1334 19.9334 24.8667 20.2C24.6 20.4666 24.6 20.8666 24.8667 21.1334L26.1647 22.4314C26.1946 22.4699 26.2283 22.5046 26.2666 22.5333C26.274 22.537 26.2813 22.5406 26.2886 22.5443C26.3952 22.6256 26.5105 22.6667 26.6666 22.6667C26.6917 22.6667 26.7156 22.6657 26.7387 22.6636C26.9138 22.6487 27.0827 22.576 27.2 22.4001L29.8667 19.0667C30.0666 18.8 30 18.3333 29.7333 18.1333Z" fill="black"/>
<path d="M29.7333 24.1333C29.4667 23.9333 29 24 28.8 24.2667L26.6074 27.0074L25.8 26.2C25.5334 25.9334 25.1334 25.9334 24.8667 26.2C24.6 26.4667 24.6 26.8666 24.8667 27.1334L26.1647 28.4314C26.1946 28.4698 26.2283 28.5046 26.2666 28.5333C26.274 28.537 26.2813 28.5406 26.2886 28.5442C26.3952 28.6255 26.5105 28.6666 26.6666 28.6666C26.6917 28.6666 26.7156 28.6656 26.7387 28.6635C26.9138 28.6486 27.0827 28.5759 27.2 28.4L29.8667 25.0667C30.0666 24.8 30 24.3333 29.7333 24.1333Z" fill="black"/>
<path d="M29.7333 30.1333C29.4667 29.9333 29 30 28.8 30.2667L26.6074 33.0074L25.8 32.2C25.5334 31.9334 25.1334 31.9334 24.8667 32.2C24.6 32.4666 24.6 32.8666 24.8667 33.1334L26.1647 34.4314C26.1946 34.4699 26.2283 34.5046 26.2666 34.5333C26.274 34.537 26.2813 34.5406 26.2886 34.5443C26.3952 34.6256 26.5105 34.6667 26.6666 34.6667C26.6917 34.6667 26.7156 34.6657 26.7387 34.6636C26.9138 34.6487 27.0827 34.576 27.2 34.4001L29.8667 31.0667C30.0666 30.8 30 30.3333 29.7333 30.1333Z" fill="black"/>
</svg>

                            Specifications
                        </h2>
                    </div>

                    <p className="text-[#202c33] mt-3 mb-5">
                                No Specifications
                            </p>
                </div>
            </section> 
        </>
    );
}
