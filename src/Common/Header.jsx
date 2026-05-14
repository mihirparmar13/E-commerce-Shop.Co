import { useState } from 'react'
import { FiLogOut, FiSearch } from 'react-icons/fi'
import { IoCartOutline, IoClose } from 'react-icons/io5'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from "react-redux";
import { products } from '../data'
import SideNav from './SideNav'
import SearchNav from './SearchNav'


function Header() {
    const [search, setSearch] = useState("");

    const [showHeader, setShowHeader] = useState(true);

    const cartItems = useSelector((state) => state.cart.cartItems);

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navigate = useNavigate()

    // ALL PRODUCTS
    const allProducts = [
        ...products.newArrivals,
        ...products.topSelling,
        ...products.casual,
        ...products.details,
        ...products.Men,
        ...products.Girls
    ];

    // FILTER PRODUCTS
    const filteredProducts = allProducts.filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase())
    );

    const handleLogout = (e) => {
        e.preventDefault();
        localStorage.removeItem("isLogin");
        navigate("/");
    }

    return (
        <div>
            <div >
                {showHeader && (
                    <div className='top-header-section bg-black text-white text-center py-2 text-sm'>
                        <div className='container mx-auto flex items-center'>
                            <div className='justify-center w-full'>
                                <p className='text-white text-center py-2'>Sign up and get 20% off to your first order. <Link to={"/"} className=' underline'>Sign Up Now</Link></p>
                            </div>
                            <div className=' '>
                                <IoClose
                                    onClick={() => setShowHeader(false)}
                                    className='text-white text-2xl cursor-pointer ' />
                            </div>
                        </div>
                    </div>
                )}
            </div>

            <div className='bottom-header-section py-4 px-4 sm:px-6 md:px-8'>
                <div className='container mx-auto flex items-center justify-between'>

                    <div className="md:hidden">
                        {/* <LuMenu size={26} /> */}
                        <SideNav setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} />
                    </div>

                    <Link to="/home">
                        <h1
                            className="text-2xl sm:text-3xl font-bold text-gray-800 cursor-pointer"
                            style={{ fontFamily: "Integral CF" }}
                        >
                            SHOP.CO
                        </h1>
                    </Link>

                    <div className='hidden md:flex items-center gap-6 lg:gap-10 flex-1 justify-center'>

                        <ul className='flex gap-6 lg:gap-9 items-center'>
                            <li><Link to={"/home"} className="text-gray-800 hover:text-gray-600 text-sm lg:text-base">Home</Link></li>
                            <li><Link to={"/category"} className='text-gray-800 hover:text-gray-600 text-sm lg:text-base'>Collections</Link></li>
                            <li><a href="#" className='text-gray-800 hover:text-gray-600 text-sm lg:text-base'>New Arrivals</a></li>
                            <li><a href="#" className='text-gray-800 hover:text-gray-600 text-sm lg:text-base'>Brands</a></li>
                        </ul>

                        <div className='relative'>
                            <div className='flex items-center gap-2 bg-[#F0F0F0] rounded-full px-3 py-2 w-[250px] lg:w-[400px]'>
                                <FiSearch className='text-gray-800' size={18} />
                                <input
                                    type="text"
                                    placeholder="Search for products..."
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                    className='bg-transparent w-full focus:outline-none text-sm'
                                />
                            </div>
                            {
                                search && (
                                    <div className='absolute top-14 left-0 w-full bg-white shadow-lg rounded-xl p-2 z-50 max-h-[350px] overflow-y-auto border'>

                                        {
                                            filteredProducts.length > 0 ? (
                                                filteredProducts.map((item) => (

                                                    <Link
                                                        key={item.id}
                                                        to={`/product/${item.id}`}
                                                        onClick={() => setSearch("")}
                                                        className='flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 transition'
                                                    >

                                                        <img
                                                            src={item.img}
                                                            alt={item.title}
                                                            className='w-12 h-12 rounded-lg object-cover'
                                                        />

                                                        <div>
                                                            <h3 className='text-sm font-medium text-gray-800'>
                                                                {item.title}
                                                            </h3>

                                                            <p className='text-sm text-gray-500'>
                                                                {item.price}
                                                            </p>
                                                        </div>

                                                    </Link>

                                                ))
                                            ) : (
                                                <p className='text-sm text-gray-500 p-2'>
                                                    No product found
                                                </p>
                                            )
                                        }

                                    </div>
                                )
                            }
                        </div>


                    </div>


                    <div className='flex items-center gap-4'>


                        <div className="md:hidden">
                            <SearchNav setSearch={setSearch} search={search} />
                        </div>

                        <Link to={"/cart"} className='relative cursor-pointer'>
                            <IoCartOutline size={22} />
                            {cartItems.length > 0 && (
                                <span className="absolute -top-[0.4rem] -right-[0.4rem] bg-red-500 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                                    {cartItems.length}
                                </span>
                            )}

                        </Link>
                        <FiLogOut
                            size={22}
                            className="cursor-pointer"
                            onClick={handleLogout}
                        />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Header