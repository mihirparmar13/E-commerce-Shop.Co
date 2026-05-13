import React from 'react'
import { useNavigate } from 'react-router-dom';

const CategoryProductDetails = ({ Products = [] }) => {

    const navigate = useNavigate();

    const handleClick = (product) => {
        navigate(`/product/${product.id}`);

    };

    return (
        <div className='ProductSection container mx-auto py-8'>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

                {Products.map((product) => (
                    <div key={product.id}
                     className="w-full"
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
        </div>
    )
}

export default CategoryProductDetails
























