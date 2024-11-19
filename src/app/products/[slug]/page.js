import ProductDetail from '@/app/Components/Detail'
import Layout from '@/app/Components/Layouts'
import { API_BASE_URL } from '@/config';
import React from 'react'

async function getData(slug) {
    const productRes = await fetch(`${API_BASE_URL}/api/products/${slug}`, { cache: 'no-store' });
    if (!productRes.ok) {
        throw new Error('Failed to fetch data');
    }
    const productData = await productRes.json();

    return { productData };
}

async function page({ params }) {
    const {productData} = await getData(params.slug);

  return (
    <div>
        <Layout>
            <ProductDetail product={productData}/>
        </Layout>
    </div>
  )
}

export default page