import Layout from '@/app/Components/Layouts'
import { API_BASE_URL } from '@/config';
import React from 'react'
import ComparisonHub from './Components/HomePage/hero';
import ProductSection from './Components/HomePage/ProductSection';
import ProductSection2 from './Components/HomePage/ProductSection2';

async function getData() {
    const [productRes, additionalDataRes] = await Promise.all([
        fetch(`${API_BASE_URL}/api/categories/categories-with-products`, { cache: 'no-store' }),
        fetch(`http://localhost:5000/api/main-categories/products`, { cache: 'no-store' }) // Replace with the actual API endpoint
    ]);

    if (!productRes.ok || !additionalDataRes.ok) {
        throw new Error('Failed to fetch data');
    }

    const [productData, additionalData] = await Promise.all([
        productRes.json(),
        additionalDataRes.json()
    ]);

    return { productData, additionalData };
}

async function page() {
    const { productData, additionalData } = await getData();

    return (
        <div>
            <Layout productData={productData}>
                <ComparisonHub productData={productData} additionalData={additionalData} />
                {productData.map(item => (
                    <ProductSection key={item.category._id} item={item} />
                ))}
                {additionalData.data.map(item => (
                    <div key={item._id}>
                        {
                            item.subcategories.map(item2 => (
                                <ProductSection2 key={item2._id} item={item2} />
                            ))
                        }
                    </div>
                ))}
            </Layout>
        </div>
    );
}

export default page;
