// Import necessary modules
import React from 'react';
import Layout from '@/app/Components/Layouts';
import ComparisonHub from './Components/HomePage/hero';
import ProductSection from './Components/HomePage/ProductSection';
import ProductSection2 from './Components/HomePage/ProductSection2';
import { API_BASE_URL } from '@/config';

// Define metadata
export const metadata = {
  metadataBase: new URL('https://pricedukan.com'),
  title: "Price Dukan | Find the best deals across products ",
  description: "Find the best deals across products and services by comparing prices on Price Dukan. Shop smarter, save more!",
  keywords: "Price comparison, Online deals, Best prices, Save money, Price Dukan",
  openGraph: {
    title: "Price Dukan | Compare Prices & Save Money",
    description: "Discover the best prices for a variety of products and services on Price Dukan. Compare prices and make informed decisions.",
    url: "https://pricedukan.com",
    siteName: "Price Dukan",
    images: [
      {
        url: "/images/price-dukan-banner.jpg",
        width: 1200,
        height: 630,
        alt: "Price Dukan Banner",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@PriceDukan",
    title: "Price Dukan | Save Money with Price Comparisons",
    description: "Compare prices to get the best deals on Price Dukan. Shop smarter and save more!",
    image: "/images/price-dukan-banner.jpg",
  },
};



// Fetch data function
async function getData() {
  const [productRes, additionalDataRes] = await Promise.all([
    fetch(`${API_BASE_URL}/api/categories/categories-with-products`, { cache: 'no-store' }),
    fetch(`${API_BASE_URL}/api/main-categories/products`, { cache: 'no-store' }),
  ]);

  if (!productRes.ok || !additionalDataRes.ok) {
    throw new Error('Failed to fetch data');
  }

  const [productData, additionalData] = await Promise.all([
    productRes.json(),
    additionalDataRes.json(),
  ]);

  return { productData, additionalData };
}

// Homepage component
async function Page() {
  const { productData, additionalData } = await getData();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "image": "https://www.pricedukan.com/images/price-dukan-banner.jpg",
    "url": "https://www.pricedukan.com",
    "sameAs": ["https://www.pricedukan.com"],
    "logo": "https://www.pricedukan.com/images/logo.png",
    "name": "Price Dukan",
    "description": "Compare prices across a wide range of products and services to find the best deals. Shop smarter and save more with our easy-to-use platform!",
    "email": "contact@example.com",
    "telephone": "+47-99-999-9999",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Rue Improbable 99",
      "addressLocality": "Paris",
      "addressCountry": "FR",
      "addressRegion": "Ile-de-France",
      "postalCode": "75001"
    },
  }


  return (
    <div>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      <Layout productData={productData}>
        <ComparisonHub productData={productData} additionalData={additionalData} />
        {productData.map((item) => (
          <ProductSection key={item.category._id} item={item} />
        ))}
        {additionalData.data.map((item) => (
          <div key={item._id}>
            {item.subcategories.map((item2) => (
              <ProductSection2 key={item2._id} item={item2} />
            ))}
          </div>
        ))}
      </Layout>
    </div>
  );
}

export default Page;
