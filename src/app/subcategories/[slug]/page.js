import Layout from '@/app/Components/Layouts'
import { API_BASE_URL } from '@/config';
import Category2 from '@/screens/categories/Categories2';
import React from 'react'

async function getData() {
  const productRes = await fetch(`${API_BASE_URL}/api/main-categories/Home%20&%20Living`, { cache: 'no-store' });
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
      <Layout>
        <Category2 productData={productData}/>
      </Layout>
    </div>
  )
}

export default page