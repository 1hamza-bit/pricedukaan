import React from 'react'
import Layout from '../Components/Layouts'
import CategoryDetail from '@/screens/categorydetail/Index'
import { API_BASE_URL } from "@/config";

// Define how many posts per page
const POSTS_PER_PAGE = 24;

async function page({ searchParams }) {
  const page = searchParams.page ? parseInt(searchParams.page) : 1;

  // Fetch jobs data based on the search query
  const res = await fetch(
    `${API_BASE_URL}/api/products?page=${page}&limit=${POSTS_PER_PAGE}`, 
    {
      cache: "no-store", // No caching to ensure fresh data
    }
  );

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  const productsData = await res.json();


  return (
    <div>
        <Layout>
            <CategoryDetail data={productsData.products} totalPages={productsData.pagination.totalPages} currentPage={page} />
        </Layout>
    </div>
  )
}

export default page