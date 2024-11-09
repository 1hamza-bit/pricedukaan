// components/IndustrialMeters.js

import { Tag } from "lucide-react";
import Image from "next/image";

export default function ProductSection() {
    const products = [
        {
            image: '/industrial1.png',
            name: 'Fluke 922 Kit / Airflow Meter Micromanometer',
            price: '135,000 PKR',
            brand: 'FLUKE',
        },
        {
            image: '/images/fluke-922-airflow.png',
            name: 'Fluke 922 Kit / Airflow Meter Micromanometer',
            price: '85,000 PKR',
            brand: 'UNI-T',
        },
        {
            image: '/images/fluke-810.png',
            name: 'Fluke 810 Vibration Tester Product',
            price: '246,000 PKR',
            brand: 'MASTECH',
        },
        {
            image: '/images/lutron-emf.png',
            name: 'Lutron EMF-822A EMF Tester Pocket',
            price: '35,000 PKR',
            brand: 'Lutron',
        },
        {
            image: '/images/benetech-gm2200.png',
            name: 'Benetech GM-2200 Infrared Thermometer',
            price: '335,000 PKR',
            brand: 'KYORITSU',
        },
        {
            image: '/images/benetech-gm-thermometer.png',
            name: 'Benetech GM-Thermometer',
            price: '185,000 PKR',
            brand: 'MASTECH',
        },
        {
            image: '/images/fluke-83v.png',
            name: 'Fluke 83V Average Responding Industrial Multimeter',
            price: '90,000 PKR',
            brand: 'FLUKE',
        },
        {
            image: '/images/kyoritsu-8031f.png',
            name: 'KYORITSU KEW 8031F Phase Indicator',
            price: '15,000 PKR',
            brand: 'KYORITSU',
        },
        {
            image: '/images/mastech-ms8900.png',
            name: 'Mastech MS8900 Wood Timber Moisture Temperature Detector',
            price: '78,000 PKR',
            brand: 'Lutron',
        },
    ];

    return (
        <section className="py-10">
            <div className="container mx-auto px-4">
                {/* Header Section */}
                <div className="text-start mb-8 flex items-center ">
                <Image
                            src={`/industrial.png`}
                            alt={`industrial`}
                            width={70}
                            height={50}
                            className=""
                        />
                        <div className="pl-2">

                        
                    <h2 className="text-2xl font-bold ">
                        Industrial Meters</h2>
                    <p className="text-gray-600 pt-2">
                        Industrial meters provide accurate measurement of pressure, flow, and temperature in various industrial processes.
                    </p>
                    <div className="flex  mt-4 space-x-4">
                        <img src="/mastech.png" alt="Mastech" className="h-12" />
                        <img src="/benetech.png" alt="Lutron" className="h-12" />
                        <img src="/luton.png" alt="Kyoritsu" className="h-12" />
                        <img src="/kyoritsu.png" alt="Kyoritsu" className="h-12" />
                    </div>
                    </div>
                </div>

                {/* Products Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {products.map((product, index) => (
                        <div key={index} className="border-2  border-gray-400 border-dotted rounded-lg p-4 shadow-md flex justify-between items-end">
                            <div className="flex gap-2 ">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="h-32 w-24 object-contain mb-4"
                                />
                                <div className="flex flex-col pt-4">

                                    <h3 className="text-md ">{product.name}</h3>
                                    <p className=" font-bold flex gap-1 items-center pt-2"><Tag className="inline-block text-[#059669] " size={16} />{product.price}</p>
                                </div>
                            </div>
                            <p className="text-sm text-gray-500 mt-2 mb-2">{product.brand}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
