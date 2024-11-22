import Layout from '@/app/Components/Layouts'
import { API_BASE_URL } from '@/config';
import React from 'react'
import ComparisonHub from './Components/HomePage/hero';
import ProductSection from './Components/HomePage/ProductSection';

async function getData() {
    const productRes = await fetch(`${API_BASE_URL}/api/categories/categories-with-products`, { cache: 'no-store' });
    if (!productRes.ok) {
        throw new Error('Failed to fetch data');
    }
    const productData = await productRes.json();

    return { productData };
}

async function page() {
    const {productData} = await getData();

  return (
    <div>
        <Layout productData={productData}>
            <ComparisonHub productData={productData}/>
            {productData.map(item => (
              <ProductSection key={item.category._id} item={item}/>
            ))}
        </Layout>
    </div>
  )
}

export default page