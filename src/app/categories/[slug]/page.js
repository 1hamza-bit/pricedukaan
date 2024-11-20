import React from 'react'
import CategoryDetail from '@/screens/categorydetail/Index'
import { API_BASE_URL } from "@/config";
import Layout from '@/app/Components/Layouts';

// Define how many posts per page
const POSTS_PER_PAGE = 24;

async function page({ searchParams, params }) {
  const page = searchParams.page ? parseInt(searchParams.page) : 1;

  // Fetch jobs data based on the search query
  const res = await fetch(
    `${API_BASE_URL}/api/products?page=${page}&limit=${POSTS_PER_PAGE}&category=${params.slug}`, 
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
            <CategoryDetail data={productsData} totalPages={productsData.pagination.totalPages} currentPage={page} />
        </Layout>
    </div>
  )
}

export default page