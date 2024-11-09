// components/ProductDetail.js

import { FileText, MessageSquare, Notebook, Reply, Tag } from "lucide-react";
import Image from "next/image";

export default function ProductDetail() {

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
        <>
            <section className="py-10 bg-[#fef7f4]  ">
                <div className="container mx-auto px-4">
                    {/* Breadcrumb */}
                    <nav className="text-sm text-gray-600 mb-4">
                        <a href="#" className="mx-2 hover:underline">Account</a> /
                        <a href="#" className="mx-2 hover:underline">Gaming</a> /
                        <span className="ml-2 text-black bold"> Havit HV G-92 Gamepad</span>
                    </nav>

                    {/* Product Section */}
                    <div className="flex flex-col lg:flex-row gap-8">
                        {/* Product Image */}
                        <div className="lg:w-1/2 bg-white flex justify-center items-center">
                            <img
                                src="/images/gamepad.png" // Replace with the actual image path
                                alt="Logitech F710 Wireless Gamepad"
                                className="w-full h-auto object-contain rounded-lg shadow-md"
                            />
                        </div>

                        {/* Product Info */}
                        <div className="lg:w-1/2">
                            <h1 className="text-2xl font-bold mb-2">Logitech F710 Wireless Gamepad (940-000119)</h1>
                            <p className="text-gray-600 mb-4">
                                PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble-free install & mess-free removal. Pressure sensitive.
                            </p>
                            <button className="bg-[#059669] text-white font-semibold py-2 px-4 flex gap-2 rounded-lg mb-4 hover:bg-green-600 transition">
                                <MessageSquare /> Inquire Now
                            </button>

                            {/* Product Details Table */}
                            <div className="border rounded-lg shadow-sm p-4 bg-none">
                                <div className="flex items-center gap-2 py-2">

                                    <span className="text-gray-700 font-semibold">Product Views:</span>
                                    <span className="text-gray-700">8825</span>
                                </div>
                                <div className="flex items-center gap-2 py-2 border-t">
                                    <span className="text-gray-700 font-semibold">Stock Availability:</span>
                                    <span className="text-green-600">Available</span>
                                </div>
                                <div className="flex items-center gap-2 py-2 border-t">
                                    <span className="text-gray-700 font-semibold">Model:</span>
                                    <span className="text-gray-700">LOGI-58</span>
                                </div>
                                <div className="flex items-center gap-2 py-2 border-t">
                                    <span className="text-gray-700 font-semibold">Brand:</span>
                                    <span className="flex items-center gap-2">
                                        <span className="text-gray-700">Logitech</span>
                                        <img src="/images/logitech-logo.png" alt="Logitech" className="h-10" />
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </section>

            {/* Description Section */}
            <section className="bg-white border-t-2 border-b-2 border-dotted border-gray-600 py-4">
                <div className="container mx-auto px-4">

                    <div className="mt-2">
                        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                            <Notebook />
                            Description
                        </h2>
                        <p className="text-gray-700 font-bold mb-4">
                            FEATURES:
                        </p>
                        <ul className="text-gray-700 space-y-2 list-disc ">
                            <li className="grid"><strong>2.4 GHz Wireless Connection Plug and Forget:</strong> Cut the cord and enjoy the freedom—gaming without wires. Simply insert the nano-receiver into a USB port for fast, 2.4 GHz data transmission with virtually no delays, dropouts, or interference.</li>
                            <li className="grid"><strong>Dual Vibration Feedback Motors Feel the Game:</strong> Discover a new level of feedback you can feel with every hit, crash, and explosion in games that support vibration feedback.</li>
                            <li className="grid"><strong>Extensive Game Support Play Hits and Classics:</strong> Play console ports with their native-style controller or adapt a more relaxed position while enjoying PC games. F710 is easy to set up and use with your favorite games thanks to XInput/ DirectInput—the two most common input standards.</li>
                            <li className="grid"><strong>Exclusive 4-Switch D-Pad Roll the D-pad:</strong> Provides a traditional D-pad feel for comfortable play.</li>
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
        </>
    );
}
