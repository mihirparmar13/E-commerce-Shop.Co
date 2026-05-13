import  { useState } from 'react'
import { FiSearch } from 'react-icons/fi'
import { IoClose } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import { products } from '../data'

const SearchNav = ({ setSearch, search }) => {

    const [isSearchOpen, setIsSearchOpen] = useState(false)


    const allProducts = [
        ...products.newArrivals,
        ...products.topSelling,
        ...products.casual,
        ...products.details,
        ...products.Men,
        ...products.Girls
    ]


    const filteredProducts = allProducts.filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase())
    )

    return (
        <div>


            <button
                className="md:hidden"
                onClick={() => setIsSearchOpen(true)}
            >
                <FiSearch size={22} />
            </button>


            {isSearchOpen && (
                <div className="fixed inset-0 z-50">


                    <div
                        className="absolute inset-0 bg-black/40"
                        onClick={() => setIsSearchOpen(false)}
                    />


                    <div className="absolute top-0 left-0 w-full bg-white p-4 shadow-lg">

                        <div className="flex items-start gap-3">


                            <div className="relative flex-1">

                                <div className="flex items-center gap-3 bg-[#F0F0F0] rounded-full px-3 py-2">

                                    <FiSearch
                                        className="text-gray-800"
                                        size={18}
                                    />

                                    <input
                                        type="text"
                                        placeholder="Search for products..."
                                        value={search}
                                        onChange={(e) =>
                                            setSearch(e.target.value)
                                        }
                                        className="bg-transparent w-full focus:outline-none text-sm"
                                        autoFocus
                                    />
                                </div>


                                {search && (
                                    <div className="absolute top-14 left-0 w-full bg-white shadow-lg rounded-xl p-2 z-50 max-h-[350px] overflow-y-auto border">

                                        {filteredProducts.length > 0 ? (
                                            filteredProducts.map((item) => (

                                                <Link
                                                    key={item.id}
                                                    to={`/product/${item.id}`}
                                                    onClick={() => {
                                                        setSearch("")
                                                        setIsSearchOpen(false)
                                                    }}
                                                    className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 transition"
                                                >

                                                    <img
                                                        src={item.img}
                                                        alt={item.title}
                                                        className="w-12 h-12 rounded-lg object-cover"
                                                    />

                                                    <div>
                                                        <h3 className="text-sm font-medium text-gray-800">
                                                            {item.title}
                                                        </h3>

                                                        <p className="text-sm text-gray-500">
                                                            {item.price}
                                                        </p>
                                                    </div>

                                                </Link>

                                            ))
                                        ) : (
                                            <p className="text-sm text-gray-500 p-2">
                                                No product found
                                            </p>
                                        )}

                                    </div>
                                )}

                            </div>

                           
                            <button
                                onClick={() => setIsSearchOpen(false)}
                            >
                                <IoClose size={24} />
                            </button>

                        </div>
                    </div>
                </div>
            )}

        </div>
    )
}

export default SearchNav