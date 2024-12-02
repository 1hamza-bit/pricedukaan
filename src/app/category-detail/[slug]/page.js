import React from 'react';
import CategoryDetail from '@/screens/categorydetail/Index';
import { API_BASE_URL } from "@/config";
import Layout from '@/app/Components/Layouts';

const POSTS_PER_PAGE = 24;

async function getData(page, slug) {
  const res = await fetch(
    `${API_BASE_URL}/api/products?page=${page}&limit=${POSTS_PER_PAGE}&category=${slug}`,
    { cache: "no-store" } // Ensure fresh data
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export async function generateMetadata({ searchParams, params }) {
  const page = searchParams.page ? parseInt(searchParams.page) : 1;
  const productsData = await getData(page, params.slug);

  // Extract metadata dynamically
  const categoryName = params.slug.replace("-", " ");
  const metadata = {
    metadataBase: new URL('https://pricedukan.com'),
    title: `Explore ${categoryName} | Price Dukan`,
    description: `Discover the best deals in ${categoryName} on Price Dukan. Compare prices for top products and save more!`,
    keywords: `${categoryName}, Price comparison, Best deals, Save money, Online shopping`,
    openGraph: {
      title: `Explore ${categoryName} | Price Dukan`,
      description: `Find top products in ${categoryName} on Price Dukan. Compare prices and shop smarter!`,
      url: `https://pricedukan.com/category-detail/${params.slug}`,
      siteName: 'Price Dukan',
      images: productsData.products.slice(0, 3).map(product => ({
        url: product["Main Image"],
        width: 1200,
        height: 630,
        alt: product.name,
      })),
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      site: '@PriceDukan',
      title: `Explore ${categoryName} Deals | Price Dukan`,
      description: `Shop smarter in ${categoryName} with Price Dukan's price comparison platform.`,
      image: productsData.products[0]["Main Image"] || '/default-banner.jpg'
    },
  };

  return metadata;
}

export async function generateJsonLd({ searchParams, params }) {
  const page = searchParams.page ? parseInt(searchParams.page) : 1;
  const productsData = await getData(page, params.slug);

  const jsonLd = {
    "@context": "https://schema.org/",
    "@type": "ItemList",
    itemListElement: productsData.products.map((product, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Product",
        name: product.Name,
        image: product["Main Image"],
        description: product.Description,
        brand: {
          "@type": "Brand",
          name: "Brand",
        },
        offers: {
          "@type": "Offer",
          url: `https://pricedukan.com/products/${product.slug}`,
          priceCurrency: "PKR",
          price: product.Price,
          itemCondition: "https://schema.org/NewCondition",
          availability: product["Stock Status"],
        },
      },
    })),
  };

  return jsonLd;
}

async function page({ searchParams, params }) {
  const page = searchParams.page ? parseInt(searchParams.page) : 1;
  const productsData = await getData(page, params.slug);
  const jsonLd = await generateJsonLd({ searchParams, params });

  return (
    <div>
      <Layout>
        <CategoryDetail data={productsData} totalPages={productsData.pagination.totalPages} currentPage={page} />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Layout>
    </div>
  );
}

export default page;
