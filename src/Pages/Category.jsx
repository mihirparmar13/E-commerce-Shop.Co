import CategoryProductDetails from '../Components/CategoryProductDetails.jsx'
import { GiSettingsKnobs } from 'react-icons/gi'
import { products } from '../data.js'
import { useEffect, useState } from 'react'
import { Rings } from 'react-loader-spinner'
import Filter from '../Common/Filter.jsx'

const Category = () => {

    const [loading, setLoading] = useState(true);

    const allProducts = [
        ...products.casual.slice(0, 3),
        ...products.newArrivals.slice(0, 3),
        ...products.topSelling.slice(0, 3),
        ...products.Men.slice(0, 3),
        ...products.Girls.slice(0, 3),
    ];


    
    useEffect(() => {

        const timer = setTimeout(() => {
            setLoading(false);
        }, 1500);

        return () => clearTimeout(timer);

    }, []);

    if (loading) {
        return (
            <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white gap-4">

                <div className="scale-75 sm:scale-90 md:scale-100">
                    <Rings
                        height="80"
                        width="80"
                        color="#000"
                        ariaLabel="loading"
                    />
                </div>

                <p className="text-sm tracking-[4px] text-gray-500 font-medium">
                    LOADING PRODUCTS...
                </p>

            </div>
        )
    }


    return (
        <div className='w-full'>

            <div className="container mx-auto px-4 py-6">

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">


                    <Filter />

                    <div className="lg:col-span-3">


                        <div className='flex items-center justify-between sm:justify-between gap-3'>


                            <h1 className="text-3xl" style={{ fontFamily: "Satoshi" }}>
                                Our Collections
                            </h1>


                            <div className='flex items-center gap-2 text-sm text-gray-600'>

                                <span >
                                    Showing 1–10 of 100 Products
                                </span>

                                <span className="hidden sm:inline">|</span>

                                <span className='hidden sm:block'>Sort by:</span>

                                <select className="border border-gray-300 rounded-md px-3 py-1.5 text-sm font-semibold bg-white hidden sm:block">
                                    <option value="popular">Most Popular</option>
                                    <option value="latest">Latest</option>
                                    <option value="low">Price: Low to High</option>
                                    <option value="high">Price: High to Low</option>
                                    <option value="rating">Top Rated</option>
                                </select>


                                <GiSettingsKnobs className="block sm:hidden text-xl bg-gray-100 p-1 rounded-full text-[15px]" />
                            </div>
                        </div>
                        <CategoryProductDetails Products={allProducts} />
                        <div className="flex justify-between items-center  mt-10">

                            <button className="px-1 py-1.5  sm:py-1  border border-black rounded-md text-sm text-black hover:bg-gray-100">
                                ← Previous
                            </button>

                            <div className='flex  items-center gap-2'>
                                <button className="w-9 h-9 rounded-md bg-gray-100 text-black text-sm flex items-center justify-center">
                                    1
                                </button>

                                <button className="w-9 h-9 rounded-md border border-gray-200 text-sm flex items-center justify-center hover:bg-gray-100">
                                    2
                                </button>

                                <button className="w-9 h-9 rounded-md border border-gray-200 text-sm flex items-center justify-center hover:bg-gray-100 hidden sm:block">
                                    3
                                </button>

                                <span className="px-1 text-gray-400">...</span>

                                <button className="w-9 h-9 rounded-md border border-gray-200 text-sm flex items-center justify-center hover:bg-gray-100 hidden sm:block">
                                    8
                                </button>
                                <button className="w-9 h-9 rounded-md border border-gray-200 text-sm flex items-center justify-center hover:bg-gray-100">
                                    9
                                </button>
                                <button className="w-9 h-9 rounded-md border border-gray-200 text-sm flex items-center justify-center hover:bg-gray-100">
                                    10
                                </button>
                            </div>

                            <button className="px-1 py-1.5  sm:py-1 border border-black rounded-md text-sm text-black hover:bg-gray-100">
                                Next →
                            </button>

                        </div>

                    </div>

                </div>
            </div>

        </div>
    )
}

export default Category