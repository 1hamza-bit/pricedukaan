import React from 'react';
import Layout from '@/app/Components/Layouts';
import Category from '@/screens/categories/Index';
import { API_BASE_URL } from '@/config';

// Metadata configuration
export const metadata = {
  metadataBase: new URL('https://pricedukan.com'),
  title: "Price Dukan | Categories of Computer Products",
  description: "Explore various categories of computer products with detailed price comparisons on Price Dukan. Shop smarter and save more!",
  keywords: "Computer products, Price comparison, Best deals, Computer accessories, Price Dukan",
  openGraph: {
    title: "Price Dukan | Categories of Computer Products",
    description: "Find the best deals on computer products and accessories. Compare prices and make smarter buying decisions with Price Dukan.",
    url: "https://pricedukan.com/categories",
    siteName: "Price Dukan",
    images: [
      {
        url: "/images/computer-category-banner.jpg",
        width: 1200,
        height: 630,
        alt: "Computer Category Banner",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@PriceDukan",
    title: "Price Dukan | Best Computer Deals",
    description: "Compare prices of computer products and accessories. Save more with Price Dukan.",
    image: "/images/computer-category-banner.jpg",
  },
};

// Fetching category data
async function getData() {
  const productRes = await fetch(`${API_BASE_URL}/api/categories/categories-with-product`, { cache: 'no-store' });
  if (!productRes.ok) {
    throw new Error('Failed to fetch category data');
  }
  const productData = await productRes.json();
  return { productData };
}

// Page component
async function Page() {
  const { productData } = await getData();

  return (
    <div>
      <Layout>
        {/* Category Component */}
        <Category productData={productData} />
      </Layout>
    </div>
  );
}

export default Page;
