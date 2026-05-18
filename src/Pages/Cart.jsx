import { RiDeleteBin5Fill } from 'react-icons/ri'
import { FiArrowRight } from 'react-icons/fi'
import { useDispatch, useSelector } from 'react-redux'
import { deleteCart, ChangeQuantity } from '../Feature/cartSlice.js'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'



function Cart() {

    const CartProduct = useSelector((state) => state.cart.cartItems)

    // console.log(CartProduct)

    const dispatch = useDispatch()

    const handleQuantity = (cartId, quantity, type) => {

        let finalQuantity = quantity;

        if (type === "+") {
            finalQuantity = finalQuantity + 1;
        } else if (type === "-" && quantity > 1) {
            finalQuantity = finalQuantity - 1;
        }

        dispatch(ChangeQuantity({ cartId, finalQuantity }));
    };


    const handleRemoveFromCart = (cartId) => {
        if (confirm("Are you sure..!")) {
            dispatch(deleteCart(cartId))
            toast.success("Item removed from cart 🗑️")
        }
    }
    const subtotal = CartProduct.reduce((total, item) => {
        const price = Number(item.price.replace("$", ""));
        return total + price * item.quantity;
    }, 0);
    // console.log(subtotal)
    const discount = subtotal * 0.20;
    const deliveryFee = 15;
    const total = subtotal - discount + deliveryFee;

    function handleCheckout() {
       if (CartProduct.length === 0) {
        toast.error("Your cart is empty!");
        return;
    }

    toast.success("Proceeding to checkout...");
    }

    // const CartProduct = cartItems;


    return (
        <div className='W-full'>

            <div className='container mx-auto px-4'>
                <hr />
                <div className='Cart-Header py-4'>
                    <h1
                        className='text-[32px] sm:text-[48px] font-bold'
                        style={{ fontFamily: "Integral CF" }}
                    >
                        YOUR CART
                    </h1>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10'>

                    <div className='lg:col-span-2 border border-gray-300 rounded-lg p-4'>
                        {
                            CartProduct.length === 0 ? (

                                <div className="flex flex-col items-center justify-center py-16 text-center">

                                    <div className="w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center mb-5">
                                        <RiDeleteBin5Fill className="text-gray-400 text-[40px]" />
                                    </div>

                                    <h2 className="text-2xl font-bold text-gray-800">
                                        Your cart is empty
                                    </h2>

                                    <p className="text-gray-500 mt-2 max-w-[400px]">
                                        Looks like you haven’t added anything to your cart yet.
                                    </p>

                                    <Link to="/">
                                        <button className="mt-6 bg-black text-white px-6 py-3 rounded-full text-sm font-medium">
                                            Continue Shopping
                                        </button>
                                    </Link>
                                </div>

                            ) : (
                                CartProduct.map((items, index) => (
                                    <div key={index} className='flex items-center justify-between border-b last:border-none py-4'>


                                        <div className='flex items-center gap-4 px-4'>
                                            <img
                                                src={items.img}
                                                alt='Product'
                                                className='w-16 h-16  sm:w-20 sm:h-20 rounded-lg object-cover'
                                            />

                                            <div className='space-y-1'>
                                                <h2 className="font-semibold text-16 sm:text-[20px]">{items.title}</h2>

                                                <p className="text-sm">
                                                    <span className="text-black">Size: </span>
                                                    <span className='text-gray-500'>{items.size}</span>
                                                </p>

                                                <div className="text-sm flex gap-4">
                                                    <span className="text-black">Color: </span>
                                                    <div className="relative group">

                                                        <span
                                                            className='w-5 h-5 rounded-full border block cursor-pointer'
                                                            style={{ backgroundColor: items.color.code }}
                                                        ></span>

                                                        <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
                                                            {items.color.name}
                                                        </span>

                                                    </div>
                                                </div>

                                                <p className="font-semibold text-16 sm:text-[20px]">{items.price}</p>
                                            </div>
                                        </div>


                                        <div className='flex flex-col items-end justify-between  px-4 gap-5'>


                                            <RiDeleteBin5Fill
                                                onClick={() => handleRemoveFromCart(items.cartId)}    
                                                className="text-red-500 cursor-pointer transition"
                                                size={20}
                                            />


                                            <div className="flex items-center bg-[#F0F0F0] rounded-full px-4 py-1 gap-3 sm:gap-4 mt-4">
                                                <button
                                                    onClick={() => handleQuantity(items.cartId, items.quantity, "-")}
                                                    type="button"
                                                    id="decrement-button"
                                                    data-input-counter-decrement="counter-input"
                                                    className="text-base sm:text-lg font-semibold">
                                                    -
                                                </button>
                                                <span className="text-xs sm:text-sm font-medium">
                                                    {items.quantity}
                                                </span>
                                                <button
                                                    onClick={() => handleQuantity(items.cartId, items.quantity, "+")}
                                                    type="button"
                                                    id="increment-button"
                                                    data-input-counter-increment="counter-input"
                                                    data-input-counter-decrement="counter-input"
                                                    className="text-base sm:text-lg  font-semibold">
                                                    +
                                                </button>
                                            </div>

                                        </div>

                                    </div>
                                ))
                            )
                        }
                    </div>
                    <div className='bg-white border rounded-xl p-5 space-y-4 h-fit p-4'>
                        <h2 className="font-semibold text-lg">Order Summary</h2>
                        <div className='flex justify-between text-lg'>
                            <span className='text-gray-500'>Sub total</span>
                            {/* <span className='font-semibold'>$565</span> */}
                            <span className='font-semibold'>
                                ${subtotal.toFixed(2)}
                            </span>

                        </div>
                        <div className='flex justify-between text-lg'>
                            <span className='text-gray-500'>Discount (-20%)</span>
                            <span className='font-semibold text-red-500 '>-${discount.toFixed(2)}</span>
                        </div>
                        <div className='flex justify-between text-lg'>
                            <span className='text-gray-500'>Delivery Fee</span>
                            <span className='font-semibold'> ${deliveryFee.toFixed(2)}</span>
                        </div>
                        <hr />
                        <div className='flex justify-between text-lg'>
                            <span className='font-semibold text-black'>Total</span>
                            <span className='font-semibold'> ${total.toFixed(2)}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="flex items-center flex-1 bg-gray-100 rounded-full px-3">
                                <FiArrowRight size={16} />
                                <input
                                    type="text"
                                    placeholder="Add promo code"
                                    className="w-full bg-transparent p-2 text-sm outline-none"
                                />

                            </div>
                            <button className="bg-black text-white px-6 py-2 rounded-full text-sm hover:bg-gray-800 transition">
                                Apply
                            </button>
                        </div>
                        <div className="Check-out flex-1 mt-4">

                            <button
                                onClick={handleCheckout}
                                className="w-full flex items-center justify-center gap-2 bg-black text-white px-6 py-3 rounded-full text-sm hover:bg-gray-800 transition"
                            >
                                Go to Checkout
                                <FiArrowRight size={16} />
                            </button>

                        </div>
                    </div>



                </div>

            </div>
        </div>
    )
}

export default Cart