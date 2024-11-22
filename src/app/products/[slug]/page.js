import ProductDetail from '@/app/Components/Detail'
import Layout from '@/app/Components/Layouts'
import { API_BASE_URL } from '@/config';
import React from 'react'

async function getData(slug) {
    const productRes = await fetch(`${API_BASE_URL}/api/products/${slug}`, { cache: 'no-store' });
    if (!productRes.ok) {
        throw new Error('Failed to fetch data');
    }
    const productData = await productRes.json();

    return { productData };
}

async function page({ params }) {
    const {productData} = await getData(params.slug);

    const jsonLd =         {
        "@context": "https://schema.org/",
        "@type": "Product",
        name: productData.Name,
        image: productData.Images,
        description: productData.Description,
        "brand": {
          "@type": "Brand",
          name: productData.Product
        },
        "review": {
          "@type": "Review",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": 5,
            "bestRating": 5
          },
          "author": {
            "@type": "Person",
            "name": "Ahsan"
          }
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": 5,
          "reviewCount": 89
        },
        "offers": {
          "@type": "Offer",
          "url": `https://pricedukan.com/products/${productData.Name}`,
          "priceCurrency": "PKR",
          price: productData.Price,
          "priceValidUntil": "2025-11-20",
          "itemCondition": "https://schema.org/UsedCondition",
          "availability": "https://schema.org/InStock"
        }
      }

  return (
    <div>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Layout>
            <ProductDetail product={productData}/>
        </Layout>
    </div>
  )
}

export default page