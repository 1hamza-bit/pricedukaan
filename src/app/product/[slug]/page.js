import ProductDetail2 from '@/app/Components/Detail2';
import Layout from '@/app/Components/Layouts'
import { API_BASE_URL } from '@/config';
import React from 'react'

async function getData(slug) {
    const productRes = await fetch(`${API_BASE_URL}/api/products/name/${slug}`, { cache: 'no-store' });
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
        name: productData.data.Name,
        image: [productData.data["Image URL"]],
        description: productData.data.Description,
        "brand": {
          "@type": "Brand",
          name: productData.data.Brand.Name
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
          "url": `https://pricedukan.com/product/${productData.data.Name}`,
          "priceCurrency": "PKR",
          price: productData.data.Price,
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
            <ProductDetail2 product={productData}/>
        </Layout>
    </div>
  )
}

export default page