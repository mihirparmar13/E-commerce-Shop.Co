import { useNavigate } from "react-router-dom";
import { products } from "../data";

const NewArrivals = () => {

    const newarrivals = products.newArrivals;

    const navigate = useNavigate()

    const handleClick = (product) => {
        navigate(`/product/${product.id}`);
    };

    return (
        <div className="W-full mx-auto px-4 py-10">

            <div className="text-center mb-12">
                <h1 className="text-4xl font-extrabold text-gray-900">
                    NEW ARRIVALS
                </h1>

                <p className="text-gray-500 mt-2">
                    Discover our latest collection
                </p>
            </div>


            <div className=" container mx-auto py-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-8 p-4">

                    {newarrivals.map((product) => (
                        <div className="w-full cursor-pointer group"
                            key={product.id}
                            onClick={() => handleClick(product)}
                        >
                            <div className="w-full h-[360px] bg-[#F0F0F0] rounded-[20px] overflow-hidden">

                                <img
                                    src={product.img}
                                    alt={product.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                                />

                            </div>


                            <div className="pt-4 flex flex-col gap-1">

                                <h3 className="text-[20px] font-bold text-gray-900 group-hover:text-black transition">
                                    {product.title}
                                </h3>

                                <div className="flex items-center gap-2">

                                    <div className="text-yellow-400 text-[16px]">
                                        ★★★★☆
                                    </div>

                                    <span className="text-[14px] text-gray-600">
                                        {product.rating}
                                    </span>

                                </div>

                                <div className="flex items-center gap-2 mt-1">

                                    <span className="text-[24px] font-bold text-black">
                                        {product.price}
                                    </span>

                                    {product.discount && (
                                        <span className="text-[20px] font-bold text-gray-400 line-through">
                                            {product.discount}
                                        </span>
                                    )}

                                    {product.off && (
                                        <span className="text-[13px] font-medium text-red-600 bg-red-100 px-3 py-1 rounded-full">
                                            {product.off}
                                        </span>
                                    )}

                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            </div>

        </div>
    );
};

export default NewArrivals;