import React from 'react'
import { Link, useNavigate } from "react-router-dom";

function ProductCard({ title = "", products = [] },) {

    const navigate = useNavigate();

    const handleClick = (product) => {

        navigate(`/product/${product.id}`);

    };

    return (
        <div className='ProductSection container mx-auto py-8'>


            <div className='flex justify-center py-8'>
                <h1
                    className='text-[25px] sm:text-[48px] font-bold'
                    style={{ fontFamily: "Integral CF" }}
                >
                    {title}
                </h1>
            </div>


            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-8 p-4">
                {products.map((product) => (
                    <div key={product.id}
                        className="w-full cursor-pointer"
                        onClick={() => handleClick(product)}>

                        <div className="w-full h-[360px] bg-[#F0F0F0] rounded-[12px] overflow-hidden">
                            <img
                                src={product.img}
                                alt={product.title}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        <div className="pt-3 flex flex-col gap-1">
                            <h3 className="text-[20px] font-bold hover:font-medium text-gray-800">
                                {product.title}
                            </h3>

                            <div className="flex items-center gap-2">
                                <div className="text-yellow-400">★★★★☆</div>
                                <span className="text-[14px] text-gray-600">
                                    {product.rating}
                                </span>
                            </div>

                            <div className="flex items-center gap-2">
                                <span className="text-[20px] font-bold">
                                    {product.price}
                                </span>

                                {product.discount && (
                                    <span className="text-[20px] font-bold text-gray-600 line-through">
                                        {product.discount}
                                    </span>
                                )}

                                {product.off && (
                                    <span className="text-[14px] text-red-800 bg-red-100 px-1 rounded-full">
                                        {product.off}
                                    </span>
                                )}
                            </div>
                        </div>

                    </div>
                ))}
            </div>


            <div className="ViewAllBtn px-4">
                <button className="bg-white text-black w-full lg:w-[210px] h-[52px] px-6 py-3 rounded-full border border-gray-400 text-sm lg:text-base font-medium mt-8 mx-auto block">
                    View All
                </button>
            </div>


        </div>
    )
}

export default ProductCard