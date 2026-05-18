
import { FaChevronRight } from 'react-icons/fa'
import { GiSettingsKnobs } from 'react-icons/gi'
import { IoArrowUpSharp } from 'react-icons/io5'
import { filters } from '../data';

function Filter() {

    const Filter = filters.categories;

    const DressStyle = filters.dressStyles;

    const colors = filters.colors;

    const sizes = filters.sizes;
    
    return (
        <div className="border border-gray-300 py-2 px-7 hidden sm:block rounded-lg h-fit ">

            <div className="Filter flex items-center justify-between my-4">
                <h1 className="font-semibold text-lg">Filters</h1>
                <GiSettingsKnobs className="text-lg text-gray-600" />
            </div>

            <hr />

            <div className="Filter-text space-y-1 text-sm my-4">

                {Filter.map((item) => (
                    <div
                        key={item}
                        className="flex items-center justify-between px-3 py-2 rounded-md cursor-pointer hover:bg-gray-100 transition"
                    >
                        <span className="text-gray-600">{item}</span>
                        <FaChevronRight className="text-gray-400 text-xs" />
                    </div>
                ))}

            </div>

            <hr />

            <div className="price my-4">

                <div className="flex items-center justify-between my-4">
                    <h1 className="font-semibold text-lg">Price</h1>
                    <IoArrowUpSharp className="text-lg text-gray-600 cursor-pointer" />
                </div>

                <input
                    type="range"
                    min="0"
                    max="500"
                    className="w-full accent-black"
                />


                <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>$0</span>
                    <span>$500</span>
                </div>

            </div>

            <hr />

            <div className='color my-4'>
                <div className="flex items-center justify-between my-4">
                    <h1 className="font-semibold text-lg">Colors</h1>
                    <IoArrowUpSharp className="text-lg text-gray-600 cursor-pointer" />
                </div>
                <div className="flex flex-wrap gap-3">
                    {colors.map((color, index) => (
                        <div
                            key={index}
                            className="w-10 h-10 sm:w-11 sm:h-11 lg:w-12 lg:h-12 rounded-full cursor-pointer border"
                            style={{ backgroundColor: color }}
                        />
                    ))}
                </div>
            </div>

            <hr />

            <div className='size my-4'>

                <div className="flex items-center justify-between mb-3">
                    <h1 className="font-semibold text-lg">Size</h1>
                    <IoArrowUpSharp className="text-lg text-gray-600 cursor-pointer" />
                </div>

                <div className="flex flex-wrap gap-4">
                    {sizes.map((size) => (
                        <div
                            key={size}
                            className="min-w-[40px] text-center text-md border border-gray-300 rounded-full py-3 px-4 cursor-pointer bg-gray-100 "
                        >
                            {size}
                        </div>
                    ))}
                </div>

            </div>

            <hr />

            <div className='Dress-style my-4'>
                <div className="flex items-center justify-between mb-3">
                    <h1 className="font-semibold text-lg">Dress style</h1>
                    <IoArrowUpSharp className="text-lg text-gray-600 cursor-pointer" />
                </div>
                <div className="Filter-text space-y-1 text-sm my-4">

                    {DressStyle.map((item) => (
                        <div key={item}
                            className="flex items-center justify-between px-3 py-2 rounded-md cursor-pointer hover:bg-gray-100 transition"
                        >
                            <span className="text-gray-600">{item}</span>
                            <FaChevronRight className="text-gray-400 text-xs" />
                        </div>
                    ))}

                </div>
            </div>

            <div className='Apply'>
                <button className="w-full bg-black text-white py-2 rounded-full text-sm font-semibold hover:bg-gray-800 transition mb-4">
                    Apply Filters
                </button>
            </div>
        </div>
    )
}

export default Filter