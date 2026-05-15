
import { IoClose } from 'react-icons/io5'
import { LuMenu } from 'react-icons/lu'
import { Link } from 'react-router-dom'

function SideNav({ setIsMenuOpen, isMenuOpen }) {
    return (
        <div>
            <button
                type="button"
                onClick={() => setIsMenuOpen(true)}
                className="md:hidden text-gray-800 focus:outline-none"
                aria-label="Open menu"
            >
                <LuMenu size={26} />
            </button>
            {isMenuOpen && (
                <div className="fixed inset-0 z-50 flex">
                    <div
                        className="fixed inset-0 bg-black/40 backdrop-blur-sm"
                        onClick={() => setIsMenuOpen(false)}
                    />
                    <div className="relative w-[80%] max-w-xs bg-white shadow-2xl">
                        <div className="flex items-center justify-between p-4 border-b">
                            <span className="text-lg font-semibold">Menu</span>
                            <button
                                type="button"
                                onClick={() => setIsMenuOpen(false)}
                                className="text-gray-700 hover:text-gray-900 focus:outline-none"
                                aria-label="Close menu"
                            >
                                <IoClose size={24} />
                            </button>
                        </div>
                        <div className="flex flex-col gap-4 p-4">

                            <Link
                                to="/"
                                onClick={() => setIsMenuOpen(false)}
                                className="text-gray-800 hover:text-gray-600"
                            >
                                Home
                            </Link>
                            <Link
                                to="/category"
                                onClick={() => setIsMenuOpen(false)}
                                className="text-gray-800 hover:text-gray-600"
                            >
                                Collections
                            </Link>
                            <Link
                                 to="/newarrivals"
                                onClick={() => setIsMenuOpen(false)}
                                className="text-gray-800 hover:text-gray-600"
                            >
                                New Arrivals
                            </Link>
                            <Link

                                onClick={() => setIsMenuOpen(false)}
                                className="text-gray-800 hover:text-gray-600"
                            >
                                Brands
                            </Link>

                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default SideNav