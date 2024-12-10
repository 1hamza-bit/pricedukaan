import React from 'react';
import Layout from '@/app/Components/Layouts';
import { API_BASE_URL } from '@/config';
import Category2 from '@/screens/categories/Categories2';

export async function generateMetadata({ params }) {
  const { slug } = params;
  const res = await fetch(`${API_BASE_URL}/api/categories/categories-with-products-v2?main_category=${slug}`, { cache: 'no-store' });
  if (!res.ok) {
    throw new Error('Failed to fetch metadata for the category');
  }

  const data = await res.json();

  // Construct metadata dynamically
  const mainCategory = data.main_category || 'Category';
  const title = `Price Dukan | ${mainCategory}`;
  const description = `Explore ${mainCategory} categories and discover the best deals with detailed price comparisons on Price Dukan. Shop smarter and save more!`;

  const keywords = data.categories
    .map((category) => category.category_name)
    .join(', ');

  const images = data.categories.flatMap((category) =>
    category.products.flatMap((product) =>
      product.products.map((item) => ({
        url: item["Product Image"],
        width: 1200,
        height: 630,
        alt: item['Product Name'],
      }))
    )
  );

  return {
    metadataBase: new URL('https://pricedukan.com'),
    title,
    description,
    keywords,
    openGraph: {
      title,
      description,
      url: `https://pricedukan.com/categories/${slug}`,
      siteName: 'Price Dukan',
      images: images.slice(0, 1), // Use the first product image as OG image
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      site: '@PriceDukan',
      title,
      description,
      image: images[0]?.url || '/images/default-banner.jpg',
    },
  };
}

// Fetching category data
async function getData(slug) {
  const productRes = await fetch(`${API_BASE_URL}/api/categories/categories-with-products-v2?main_category=${slug}`, { cache: 'no-store' });
  if (!productRes.ok) {
    throw new Error('Failed to fetch category data');
  }
  const productData = await productRes.json();
  return { productData };
}

// Page component
async function Page({ params }) {
  const { slug } = params;
  const { productData } = await getData(slug);

  return (
    <div>
      <Layout>
        <Category2 productData={productData} />
      </Layout>
    </div>
  );
}

export default Page;
