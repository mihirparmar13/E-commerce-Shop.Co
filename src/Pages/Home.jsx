import Reviews from '../Components/Reviews .jsx'
import DressStyle from '../Components/DressStyle.jsx'
import Hero from '../Components/Hero .jsx'
import ProductCard from '../Components/ProductCard.jsx'
import { products } from '../data.js'
import { useEffect, useRef, useState } from 'react'
import { Rings } from 'react-loader-spinner'



function Home() {

    const [loading, setLoading] = useState(true);


    const newArrivalRef = useRef();

    const scrollToProducts = () => {
        newArrivalRef.current.scrollIntoView({
            behavior: "smooth"
        });
    };

    const newArrivals = products.newArrivals.slice(0, 4);
    const topSelling = products.topSelling;
    const menProducts = products.Men;
    const girlsProduct = products.Girls;

    useEffect(() => {

        setTimeout(() => {
            setLoading(false);
        }, 2000);

    }, []);

    if (loading) {
        return (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
                <div className="scale-75 sm:scale-90 md:scale-100">
                    <Rings
                        height="80"
                        width="80"
                        color="#000"
                        ariaLabel="loading"
                    />
                </div>
            </div>
        )
    }


    return (
        <div className='w-full'>

            <Hero scrollToProducts={scrollToProducts} />

            <div ref={newArrivalRef}>
                <ProductCard title="NEW ARRIVALS" products={newArrivals} />
            </div>

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