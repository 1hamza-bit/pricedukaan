import ProductDetail from '@/app/Components/Detail';
import Layout from '@/app/Components/Layouts';
import { API_BASE_URL } from '@/config';
import React from 'react';

async function getData(slug,v) {
  const productRes = await fetch(`${API_BASE_URL}/api/products/${slug}?v=${v}`, { cache: 'no-store' });
  if (!productRes.ok) {
    throw new Error('Failed to fetch data');
  }
  const productData = await productRes.json();
  return { productData };
}

export async function generateMetadata({ params , searchParams }) {
  const {v} = await searchParams;
  const {slug} = await params;
  const { productData } = await getData(slug,v);

  const metadata = {
    metadataBase: new URL('https://pricedukan.com'),
    title: `${productData.name} | Price Dukan`,
    description: `Buy ${productData.name} for just PKR ${productData.price}. ${productData.description}`,
    keywords: `${productData.name}, ${productData.category}, Online shopping, Best deals`,
    openGraph: {
      title: `${productData.name} | Price Dukan`,
      description: `Get the best price for ${productData.name} on Price Dukan. Shop smarter and save more!`,
      url: `https://pricedukan.com/products/${slug}`,
      siteName: 'Price Dukan',
      image: productData.image,
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      site: '@PriceDukan',
      title: `${productData.name} | Price Dukan`,
      description: `Buy ${productData.name} for just ${productData.price}.`,
      image: productData.image,
    },
  };

  return metadata;
}

async function page({ params, searchParams }) {
  const {v} = await searchParams;
  const {slug} = await params;
  const { productData } = await getData(slug,v);

  const jsonLd = {
    "@context": "https://schema.org/",
    "@type": "Product",
    name: productData.name,
    image: productData.image,
    description: productData.description,
    brand: {
      "@type": "Brand",
      name: productData.brand,
    },
    review: {
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: 5,
        bestRating: 5,
      },
      author: {
        "@type": "Person",
        name: "Ahsan",
      },
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: 5,
      reviewCount: 89,
    },
    offers: {
      "@type": "Offer",
      url: `https://pricedukan.com/products/${slug}`,
      priceCurrency: "PKR",
      price: productData.price,
      priceValidUntil: "2025-11-20",
      itemCondition: "https://schema.org/NewCondition",
      availability: "https://schema.org/InStock",
    },
  };

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Layout>
        <ProductDetail product={productData} />
      </Layout>
    </div>
  );
}

export default page;
