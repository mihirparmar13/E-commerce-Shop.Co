import React from 'react'
import Footer from '../Common/Footer.jsx'
import Header from '../Common/Header.jsx'
import Reviews from '../Components/Reviews .jsx'
import DressStyle from '../Components/DressStyle.jsx'
import Hero from '../Components/Hero .jsx'
import ProductCard from '../Components/ProductCard.jsx'
import { products } from '../data.js'




function Home() {

    const newArrivals = products.newArrivals;
    const topSelling = products.topSelling;
    const menProducts = products.Men;
    const girlsProduct = products.Girls;


    return (
        <div className='w-full'>

            <Hero />

            <ProductCard title="NEW ARRIVALS" products={newArrivals} />

            <div className='container mx-auto px-4'>
                <hr />
            </div>

            <ProductCard title="TOP SELLING" products={topSelling} />

            <div className='container mx-auto px-4'>
                <hr />
            </div>

            <ProductCard title="MEN'S COLLECTION" products={menProducts} />

            <div className='container mx-auto px-4'>
                <hr />
            </div>

            <ProductCard title="WOMEN'S COLLECTION" products={girlsProduct} />

            <DressStyle />
            <Reviews />

        </div>
    )
}

export default Home