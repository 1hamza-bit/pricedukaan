import ProductDetail from '@/app/Components/Detail';
import Layout from '@/app/Components/Layouts';
import { API_BASE_URL } from '@/config';
import React from 'react';

async function getData(slug) {
  const productRes = await fetch(`${API_BASE_URL}/api/products/${slug}`, { cache: 'no-store' });
  if (!productRes.ok) {
    throw new Error('Failed to fetch data');
  }
  const productData = await productRes.json();
  return { productData };
}

export async function generateMetadata({ params }) {
  const {slug} = await params;
  const { productData } = await getData(slug);

  const metadata = {
    metadataBase: new URL('https://pricedukan.com'),
    title: `${productData.Name} | Price Dukan`,
    description: `Buy ${productData.Name} for just PKR ${productData.Price}. ${productData.Description}`,
    keywords: `${productData.Name}, ${productData.Product}, Online shopping, Best deals`,
    openGraph: {
      title: `${productData.Name} | Price Dukan`,
      description: `Get the best price for ${productData.Name} on Price Dukan. Shop smarter and save more!`,
      url: `https://pricedukan.com/products/${params.Name}`,
      siteName: 'Price Dukan',
      images: productData.Images.map((image) => ({
        url: image,
        width: 1200,
        height: 630,
        alt: `${productData.Name}`,
      })),
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      site: '@PriceDukan',
      title: `${productData.Name} | Price Dukan`,
      description: `Buy ${productData.Name} for just ${productData.Price}.`,
      image: productData.Images[0],
    },
  };

  return metadata;
}

async function page({ params }) {
  const {slug} = await params;
  const { productData } = await getData(slug);

  const jsonLd = {
    "@context": "https://schema.org/",
    "@type": "Product",
    name: productData.Name,
    image: productData.Images,
    description: productData.Description,
    brand: {
      "@type": "Brand",
      name: productData.Product,
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
      url: `https://pricedukan.com/products/${productData.Name}`,
      priceCurrency: "PKR",
      price: productData.Price,
      priceValidUntil: "2025-11-20",
      itemCondition: "https://schema.org/UsedCondition",
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
