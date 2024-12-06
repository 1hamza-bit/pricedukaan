'use client'

import Link from 'next/link'
import React from 'react'
import Layout from './Components/Layouts'

function Error() {
  return (
    <div>
        <Layout>
            <div className="container mx-auto mt-40 px-[4vw] 2xl:px-0 min-h-[50vh]">
                <h3 className="text-gradient font-semibold text-2xl lg:text-3xl drop-shadow-2xl text-center">404 - Not Found</h3>
                <div className="flex justify-center">
                    <Link className='text-green-500 drop-shadow-2xl text-lg hvr-underline-from-left mt-3' href={'/'}>Go To Home</Link>
                </div>
            </div>
        </Layout>
    </div>
  )
}

export default Error