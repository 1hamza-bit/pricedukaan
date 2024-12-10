import React from 'react';
import CategoryDetail from '@/screens/categorydetail/Index';
import { API_BASE_URL } from "@/config";
import Layout from '@/app/Components/Layouts';

const POSTS_PER_PAGE = 24;

async function getData(page, slug, v) {
  const res = await fetch(
    `${API_BASE_URL}/api/products?page=${page}&limit=${POSTS_PER_PAGE}&category=${slug}&v=${v}`,
    { cache: "no-store" } // Ensure fresh data
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export async function generateMetadata({ searchParams, params }) {
  const { page = "1" } = await searchParams; 
  const { v } = await searchParams;
  const currentPage = parseInt(page);
  const {slug} = await params;
  const productsData = await getData(currentPage, slug, v);

  const categoryName = slug.replace("-", " ");
  const metadata = {
    metadataBase: new URL('https://pricedukan.com'),
    title: `Explore ${productsData.products[0].category} | Price Dukan`,
    description: `Discover the best deals in ${productsData.products[0].category}  on Price Dukan. Compare prices for top products and save more!`,
    keywords: `${productsData.products[0].category} , Price comparison, Best deals, Save money, Online shopping`,
    openGraph: {
      title: `Explore ${productsData.products[0].category} | Price Dukan`,
      description: `Find top products in ${productsData.products[0].category}   on Price Dukan. Compare prices and shop smarter!`,
      url: `https://pricedukan.com/category-detail/${slug}`,
      siteName: 'Price Dukan',
      images: productsData.products.slice(0, 3).map(product => ({
        url: product.image,
        width: 1200,
        height: 630,
        alt: product.name,
      })),
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      site: '@PriceDukan',
      title: `Explore ${productsData.products[0].category} Deals | Price Dukan`,
      description: `Shop smarter in ${productsData.products[0].category} with Price Dukan's price comparison platform.`,
      image: productsData.products[0].image || '/default-banner.jpg',
    },
  };

  return metadata;
} 


async function page({ searchParams, params }) {
  const { page = "1" } = await searchParams; // Await searchParams
  const { v } = await searchParams;
  const currentPage = parseInt(page);
  const {slug} = await params;
  const productsData = await getData(currentPage, slug, v);

  const jsonLd = {
    "@context": "https://schema.org/",
    "@type": "ItemList",
    itemListElement: productsData.products.map((product, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Product",
        name: product.name,
        image: product["Main Image"],
        description: product.description,
        brand: {
          "@type": "Brand",
          name: product.brand,
        },
        offers: {
          "@type": "Offer",
          url: `https://pricedukan.com/products/${product.name}`,
          priceCurrency: "PKR",
          price: product.price,
          itemCondition: "https://schema.org/NewCondition",
          availability: "https://schema.org/InStock",
        },
      },
    })),
  };

  return (
    <div>
      <Layout>
        <CategoryDetail
          data={productsData}
          totalPages={productsData.pagination.totalPages}
          currentPage={currentPage}
          v={v}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Layout>
    </div>
  );
}

export default page;
