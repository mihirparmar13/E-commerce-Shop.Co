import { useState, useEffect } from 'react'
import { Rings } from 'react-loader-spinner'
import { MdOutlineSettingsInputComponent } from 'react-icons/md'
import { FaCheck, FaCheckCircle, FaChevronDown } from 'react-icons/fa'
import { FiMoreHorizontal, FiShoppingCart } from 'react-icons/fi'
import ProductCard from '../Components/ProductCard.jsx'
import { products } from '../data.js'
import { useParams } from 'react-router-dom'
import { addToCart, ChangeQuantity, deleteCart } from '../Feature/cartSlice.js'
import { useDispatch, useSelector } from 'react-redux'
import { RiDeleteBinLine } from 'react-icons/ri'
import { toast } from 'react-toastify'


function ProductDetails() {

    const [loading, setLoading] = useState(true);


    const { id } = useParams();

    const colors = [
        { name: "Brown", code: "#4F4631" },
        { name: "Green", code: "#314F4A" },
        { name: "Blue", code: "#31344F" }
    ]

    const [selectedColor, setSelectedColor] = useState(colors[0])

    const sizes = ["Small", "Medium", "Large", "X-Large"]

    const [selectedSize, setSelectedSize] = useState("Large")


    const dispatch = useDispatch();

    const Cart = useSelector((state) => state.cart.cartItems);

    const cartId = `${id}-${selectedSize}-${selectedColor.code}`;

    const CheckCart = Cart.find(
        (obj) =>
            obj.cartId === cartId
    );

    // console.log(CheckCart)

    // const CheckCart = Cart.find(
    //     (obj) =>
    //         obj.id == id &&
    //         obj.size === selectedSize &&
    //         obj.color.code === selectedColor.code
    // )

    //  console.log(CheckCart)

    const handleAddToCart = () => {

        const cartProduct = {
            cartId,
            id: product.id,
            title: product.title,
            price: product.price,
            img: product.img,
            size: selectedSize,
            color: {
                name: selectedColor.name,
                code: selectedColor.code
            },
            quantity: 1
        };

        dispatch(addToCart(cartProduct));
        toast.success("Item added to cart successfully!")
    };

    const handleRemoveToCart = () => {
        if (confirm("Are you sure..!")) {
            dispatch(deleteCart(cartId))
            toast.success("Item removed from cart 🗑️")
        }
    }


    const handleQuantity = (cartId, quantity, type) => {

        let finalQuantity = quantity;

        if (type === "+") {
            finalQuantity = finalQuantity + 1;
        } else if (type === "-" && quantity > 1) {
            finalQuantity = finalQuantity - 1;
        }

        dispatch(ChangeQuantity({ cartId, finalQuantity }));
    };


    const productsDetails = products.details;

    const allProducts = [
        ...products.newArrivals,
        ...products.topSelling,
        ...products.casual,
        ...products.details,
        ...products.Men,
        ...products.Girls
    ];

    const product = allProducts.find((item) => item.id === Number(id));

    useEffect(() => {

        const timer = setTimeout(() => {
            setLoading(false);
        }, 1500);

        return () => clearTimeout(timer);

    }, []);

    if (loading) {
        return (
            <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white">

                <Rings
                    height="80"
                    width="80"
                    color="#000"
                    ariaLabel="product-loading"
                />

                <p className="mt-4 text-sm tracking-[4px] text-gray-500 font-medium">
                    LOADING PRODUCT...
                </p>

            </div>
        )
    }

    if (!product) {
        return (
            <div className="container mx-auto px-4 py-10">
                <h1 className="text-3xl font-bold">Product not found</h1>
                <p className="mt-4 text-gray-600">Please go back to the shop and choose another product.</p>
            </div>
        )
    }



    return (
        <div>

            <div className='w-full'>
                <div className="section-closer  px-4 sm:px-6 md:px-8">
                    <div className="container mx-auto">
                        <div className="border-t border-gray-300"></div>
                    </div>
                    <div className="container mx-auto px-4 sm:px-6 md:px-8 py-10">

                        <div className="grid grid-cols-1 lg:grid-cols-2  gap-10">

                            <div className="flex gap-2 flex-col lg:flex-row">

                                {/* <div className="flex lg:flex-col gap-4 order-2 lg:order-1">
                                    <div className="w-24 h-24 sm:w-40 sm:h-40 rounded-md  cursor-pointer">
                                        <img src={row1} className=' object-cover' />
                                    </div>
                                    <div className='w-24 h-24  sm:w-40 sm:h-40 rounded-md cursor-pointer'>
                                        <img src={row2} className=' object-cover' />
                                    </div>
                                    <div className="w-24 h-24  sm:w-40 sm:h-40 rounded-md cursor-pointer">
                                        <img src={row3} className=' object-cover' />
                                    </div>
                                </div> */}


                                <div className="flex-1 flex justify-center items-center order-1  lg:order">
                                    <img
                                        src={product.img}
                                        className="w-full max-w-[400px] md:max-w-[450px] object-contain rounded-lg"
                                    />
                                </div>

                            </div>


                            <div className="flex flex-col gap-5">


                                <h1 className="text-[22px] sm:text-[26px] md:text-[30px] font-bold"
                                    style={{ fontFamily: "Integral CF" }}>
                                    {product.title}
                                </h1>


                                <div className="flex items-center gap-2 text-yellow-400 text-sm">
                                    ⭐⭐⭐⭐☆
                                    <span className="text-gray-600 text-sm">{product.rating}</span>
                                </div>


                                <div className="flex items-center gap-3 flex-wrap">
                                    <span className="text-[22px] sm:text-[26px] font-bold">{product.price}</span>
                                    <span className="line-through text-gray-400">{product.discount}</span>
                                    <span className="text-[14px] text-red-800 bg-red-100 px-1 rounded-full">{product.off}</span>
                                </div>


                                <p className="text-gray-600 text-[14px] sm:text-[20px]">
                                    This graphic t-shirt is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.
                                </p>

                                <div className="border-t border-gray-300"></div>

                                <div>
                                    <p className="text-sm text-gray-600 mb-2">Select Colors</p>
                                    <div className="flex gap-3">
                                        {colors.map((color) => (

                                            <span
                                                key={color.name}
                                                onClick={() => setSelectedColor(color)}
                                                className={`w-10 h-10 rounded-full cursor-pointer border-2 transition  flex items-center justify-center
                                                    ${selectedColor.code === color.code
                                                        ? "border-black scale-110"
                                                        : "border-transparent"
                                                    }`}
                                                style={{ backgroundColor: color.code }}
                                            >
                                                {selectedColor.code === color.code && (
                                                    <FaCheck className="text-white text-sm" />
                                                )}
                                            </span>

                                        ))}
                                    </div>
                                </div>

                                <div className="border-t border-gray-300"></div>

                                <div>
                                    <p className="text-sm text-gray-600 mb-2">Choose Size</p>
                                    <div className="flex gap-2 sm:gap-3">
                                        {sizes.map((size) => (

                                            <button
                                                key={size}
                                                onClick={() => setSelectedSize(size)}
                                                className={`px-3 bg-[#F0F0F0] sm:px-4 py-1 border rounded-full text-sm sm:text-base

                                                    ${selectedSize === size
                                                        ? "bg-black text-white border-0"
                                                        : "bg-[#F0F0F0] text-black  border"
                                                    }`}
                                            >
                                                {size}
                                            </button>

                                        ))}
                                    </div>
                                </div>

                                <div className="border-t border-gray-300"></div>

                                <div className="flex items-center gap-2 sm:gap-4 w-full">


                                    <div className="flex items-center border rounded-full px-7 py-1 gap-4 shrink-0 bg-[#F0F0F0]">
                                        <button
                                            onClick={() => handleQuantity(CheckCart && CheckCart.cartId, CheckCart.quantity, "-")}
                                            type="button"
                                            disabled={!CheckCart}
                                            id="decrement-button"
                                            data-input-counter-decrement="counter-input"
                                            className='text-lg'
                                        >
                                            -
                                        </button>
                                        <span className="text-[16px] font-semibold min-w-[20px] text-center">
                                            {CheckCart ? CheckCart.quantity : 1}
                                        </span>
                                        <button
                                            onClick={() => handleQuantity(CheckCart && CheckCart.cartId, CheckCart.quantity, "+")}
                                            type="button"
                                            disabled={!CheckCart}
                                            id="increment-button"
                                            data-input-counter-increment="counter-input"
                                            data-input-counter-decrement="counter-input"
                                            className='text-lg'>
                                            +
                                        </button>
                                    </div>

                                    <button
                                        className={`flex-1 py-3 rounded-full text-sm sm:text-base font-semibold 
                                                    flex items-center justify-center gap-2 shadow-sm
                                                    ${CheckCart
                                                ? "bg-red-600 text-white"
                                                : "bg-black text-white"
                                            }
                                            `}
                                        onClick={() => {
                                            CheckCart
                                                ? handleRemoveToCart()
                                                : handleAddToCart();
                                        }}

                                    >
                                        {CheckCart ? (
                                            <>
                                                <RiDeleteBinLine className="text-[20px]" />
                                                Remove From Cart
                                            </>
                                        ) : (
                                            <>
                                                <FiShoppingCart className="text-[20px]" />
                                                Add To Cart
                                            </>
                                        )}
                                    </button>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="Reviwe-Header ">
                    <div className="container mx-auto px-4">


                        <div className="grid grid-cols-3 text-center border-b">

                            <button className="py-3 text-sm sm:text-base font-medium text-gray-500 hover:text-black">
                                Product Details
                            </button>

                            <button className="py-3 text-sm sm:text-base font-medium border-b-2 border-black">
                                Rating & Reviews
                            </button>

                            <button className="py-3 text-sm sm:text-base font-medium text-gray-500 hover:text-black">
                                FAQs
                            </button>

                        </div>

                        <div className="flex items-center justify-between gap-2 sm:gap-3 py-4">


                            <div className="flex items-center gap-1 sm:gap-2 min-w-0">
                                <h1 className="text-base sm:text-lg md:text-xl font-semibold truncate">
                                    All Reviews
                                </h1>
                                <span className="text-sm text-gray-500 whitespace-nowrap">
                                    (451)
                                </span>
                            </div>


                            <div className="flex items-center gap-1 sm:gap-2 md:gap-3 shrink-0">

                                <button className="bg-[#F0F0F0] p-2 rounded-full flex items-center justify-center">
                                    <MdOutlineSettingsInputComponent className="text-base sm:text-lg" />
                                </button>

                                <button className="flex items-center gap-1 text-xs sm:text-sm md:text-base border px-2 sm:px-3 py-1 rounded-full bg-[#F0F0F0]">
                                    Latest
                                    <FaChevronDown className="text-xs" />
                                </button>

                                <button className="bg-black text-white px-3 sm:px-4 md:px-6 py-2 rounded-full text-xs sm:text-sm md:text-base whitespace-nowrap">
                                    Write a Review
                                </button>

                            </div>

                        </div>

                        <div className="customer-Reviews grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 pt-8">

                            <div className="review border border-gray-300 rounded-[12px] p-4 sm:p-5 md:p-6 h-full flex flex-col">

                                <div className="flex items-center justify-between">

                                    <div className="text-yellow-400 text-lg sm:text-xl md:text-2xl">
                                        ★★★★☆
                                    </div>

                                    <button className="p-1 sm:p-2 rounded-full hover:bg-gray-100">
                                        <FiMoreHorizontal className="text-lg sm:text-xl text-gray-600" />
                                    </button>

                                </div>

                                <div className="flex items-center gap-2 mt-3 sm:mt-4">
                                    <h3 className="text-gray-800 text-sm sm:text-base md:text-lg font-semibold">
                                        Samantha D.
                                    </h3>
                                    <FaCheckCircle className="text-green-500" size={16} />
                                </div>

                                <p className="text-gray-400 text-xs sm:text-sm md:text-base leading-relaxed mt-2 sm:mt-3">
                                    "I absolutely love this t-shirt! The design is unique and the fabric feels so
                                    comfortable. As a fellow designer, I appreciate the attention to detail. It's become
                                    my favorite go-to shirt."
                                </p>

                                <span className="text-[#000000] text-[16px] sm:text-[16px]  mt-4 sm:mt-4">
                                    Posted on August 14, 2023
                                </span>

                            </div>
                            <div className="review border border-gray-300 rounded-[12px] p-4 sm:p-5 md:p-6 h-full flex flex-col">

                                <div className="flex items-center justify-between">

                                    <div className="text-yellow-400 text-lg sm:text-xl md:text-2xl">
                                        ★★★★☆
                                    </div>

                                    <button className="p-1 sm:p-2 rounded-full hover:bg-gray-100">
                                        <FiMoreHorizontal className="text-lg sm:text-xl text-gray-600" />
                                    </button>

                                </div>

                                <div className="flex items-center gap-2 mt-3 sm:mt-4">
                                    <h3 className="text-gray-800 text-sm sm:text-base md:text-lg font-semibold">
                                        Alex M.
                                    </h3>
                                    <FaCheckCircle className="text-green-500" size={16} />
                                </div>

                                <p className="text-gray-400 text-xs sm:text-sm md:text-base leading-relaxed mt-2 sm:mt-3">
                                    "The t-shirt exceeded my expectations! The colors are vibrant and the print
                                    quality is top-notch. Being a UI/UX designer myself, I'm quite picky about
                                    aesthetics, and this t-shirt definitely gets a thumbs up from me."
                                </p>

                                <span className="text-[#000000] text-[16px] sm:text-[16px]  mt-4 sm:mt-4">
                                    Posted on August 15, 2023
                                </span>

                            </div>
                            <div className="review border border-gray-300 rounded-[12px] p-4 sm:p-5 md:p-6 h-full flex flex-col">

                                <div className="flex items-center justify-between">

                                    <div className="text-yellow-400 text-lg sm:text-xl md:text-2xl">
                                        ★★★★☆
                                    </div>

                                    <button className="p-1 sm:p-2 rounded-full hover:bg-gray-100">
                                        <FiMoreHorizontal className="text-lg sm:text-xl text-gray-600" />
                                    </button>

                                </div>

                                <div className="flex items-center gap-2 mt-3 sm:mt-4">
                                    <h3 className="text-gray-800 text-sm sm:text-base md:text-lg font-semibold">
                                        Ethan R.
                                    </h3>
                                    <FaCheckCircle className="text-green-500" size={16} />
                                </div>

                                <p className="text-gray-400 text-xs sm:text-sm md:text-base leading-relaxed mt-2 sm:mt-3">
                                    "This t-shirt is a must-have for anyone who appreciates good design. The
                                    minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can
                                    see the designer's touch in every aspect of this shirt."
                                </p>

                                <span className="text-[#000000] text-[16px] sm:text-[16px]  mt-4 sm:mt-4">
                                    Posted on August 16, 2023
                                </span>

                            </div>
                            <div className="review border border-gray-300 rounded-[12px] p-4 sm:p-5 md:p-6 h-full flex flex-col">

                                <div className="flex items-center justify-between">

                                    <div className="text-yellow-400 text-lg sm:text-xl md:text-2xl">
                                        ★★★★☆
                                    </div>

                                    <button className="p-1 sm:p-2 rounded-full hover:bg-gray-100">
                                        <FiMoreHorizontal className="text-lg sm:text-xl text-gray-600" />
                                    </button>

                                </div>

                                <div className="flex items-center gap-2 mt-3 sm:mt-4">
                                    <h3 className="text-gray-800 text-sm sm:text-base md:text-lg font-semibold">
                                        Olivia P.
                                    </h3>
                                    <FaCheckCircle className="text-green-500" size={16} />
                                </div>

                                <p className="text-gray-400 text-xs sm:text-sm md:text-base leading-relaxed mt-2 sm:mt-3">
                                    "As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not
                                    only represents those principles but also feels great to wear. It's evident
                                    that the designer poured their creativity into making this t-shirt stand out."
                                </p>

                                <span className="text-[#000000] text-[16px] sm:text-[16px]  mt-4 sm:mt-4">
                                    Posted on August 17, 2023
                                </span>

                            </div>
                            <div className="review border border-gray-300 rounded-[12px] p-4 sm:p-5 md:p-6 h-full flex flex-col">

                                <div className="flex items-center justify-between">

                                    <div className="text-yellow-400 text-lg sm:text-xl md:text-2xl">
                                        ★★★★☆
                                    </div>

                                    <button className="p-1 sm:p-2 rounded-full hover:bg-gray-100">
                                        <FiMoreHorizontal className="text-lg sm:text-xl text-gray-600" />
                                    </button>

                                </div>

                                <div className="flex items-center gap-2 mt-3 sm:mt-4">
                                    <h3 className="text-gray-800 text-sm sm:text-base md:text-lg font-semibold">
                                        Liam K.
                                    </h3>
                                    <FaCheckCircle className="text-green-500" size={16} />
                                </div>

                                <p className="text-gray-400 text-xs sm:text-sm md:text-base leading-relaxed mt-2 sm:mt-3">
                                    "This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the
                                    design speaks volumes about the designer's skill. It's like wearing a piece
                                    of art that reflects my passion for both design and fashion."
                                </p>

                                <span className="text-[#000000] text-[16px] sm:text-[16px]  mt-4 sm:mt-4">
                                    Posted on August 18, 2023
                                </span>

                            </div>
                            <div className="review border border-gray-300 rounded-[12px] p-4 sm:p-5 md:p-6 h-full flex flex-col">

                                <div className="flex items-center justify-between">

                                    <div className="text-yellow-400 text-lg sm:text-xl md:text-2xl">
                                        ★★★★☆
                                    </div>

                                    <button className="p-1 sm:p-2 rounded-full hover:bg-gray-100">
                                        <FiMoreHorizontal className="text-lg sm:text-xl text-gray-600" />
                                    </button>

                                </div>

                                <div className="flex items-center gap-2 mt-3 sm:mt-4">
                                    <h3 className="text-gray-800 text-sm sm:text-base md:text-lg font-semibold">
                                        Ava H.
                                    </h3>
                                    <FaCheckCircle className="text-green-500" size={16} />
                                </div>

                                <p className="text-gray-400 text-xs sm:text-sm md:text-base leading-relaxed mt-2 sm:mt-3">
                                    "I'm not just wearing a t-shirt; I'm wearing a piece of design philosophy.
                                    The intricate details and thoughtful layout of the design make this shirt a
                                    conversation starter."
                                </p>

                                <span className="text-[#000000] text-[16px] sm:text-[16px]  mt-4 sm:mt-4">
                                    Posted on August 19, 2023
                                </span>

                            </div>

                        </div>

                        <div className="flex justify-center mt-8">
                            <button className="border px-8 py-2 rounded-full text-[15px]">
                                Load More Reviews
                            </button>
                        </div>

                    </div>
                </div>
                <ProductCard title="YOU MIGHT ALSO LIKE" products={productsDetails} />
            </div>

        </div>
    )
}

export default ProductDetails