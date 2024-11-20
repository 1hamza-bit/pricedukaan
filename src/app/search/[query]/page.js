import Layout from '@/app/Components/Layouts'
import { API_BASE_URL } from '@/config';
import SearchScreen from '@/screens/searchscreen/Index';
import React from 'react'

async function getData(query) {
    const productRes = await fetch(`${API_BASE_URL}/api/products/search/query?q=${query}`, { cache: 'no-store' });
    if (!productRes.ok) {
        throw new Error('Failed to fetch data');
    }
    const productData = await productRes.json();

    return { productData };
}

async function page({ params }) {
    const {productData} = await getData(params.query);

  return (
    <div>
        <Layout>
            <SearchScreen data={productData} query={params.query}/>
        </Layout>
    </div>
  )
}

export default page