import React from 'react'
import { API_BASE_URL } from "@/config";
import Layout from '@/app/Components/Layouts';
import CategoryDetail2 from '@/screens/categorydetail2/Index';

// Define how many posts per page
const POSTS_PER_PAGE = 24;

async function page({ searchParams, params }) {
  const page = searchParams.page ? parseInt(searchParams.page) : 1;

  // Fetch jobs data based on the search query
  const res = await fetch(
    `http://localhost:5000/api/products/w11?page=${page}&limit=${POSTS_PER_PAGE}&category=${params.slug}`, 
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
            <CategoryDetail2 data={productsData} totalPages={productsData.pagination.totalPages} currentPage={page} />
        </Layout>
    </div>
  )
}

export default page