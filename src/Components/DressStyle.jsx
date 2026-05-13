import React from 'react'
import { dressStyleFrames } from '../data.js'

function DressStyle() {
    const Frame = dressStyleFrames;
    return (
        <div className='Browser-By-Dress-Style container mx-auto py-8 px-4 sm:px-4 md:px-4'>
            <div className='bg-[#F0F0F0] rounded-[12px] py-14 '>

                <div className='header flex justify-center px-4 sm:px-6 md:px-8 mb-8'>
                    <h1
                        className="text-[28px] sm:text-[36px] md:text-[48px] lg:text-[64px] 
                        leading-[32px] sm:leading-[40px] md:leading-[50px] lg:leading-[55px] 
                        font-bold text-black text-center"
                        style={{ fontFamily: "Integral CF" }}
                    >
                        BROWSE BY DRESS STYLE
                    </h1>
                </div>

                <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8 ">
                    <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 pt-8">

                        <div className="relative sm:col-span-5">
                            <img src={Frame[0].img} alt={Frame[0].title}
                                className="rounded-[12px] w-full h-[220px] sm:h-[260px] md:h-[300px] object-cover"
                            />
                            <span className="text-[18px] sm:text-[20px] md:text-[25px] font-bold text-gray-800 absolute top-6 left-6 md:top-10 md:left-10">
                                {Frame[0].title}
                            </span>
                        </div>


                        <div className="relative sm:col-span-7">
                            <img src={Frame[1].img} alt={Frame[1].title}
                                className="rounded-[12px] w-full h-[220px] sm:h-[260px] md:h-[300px] object-cover"
                            />
                            <span className="text-[18px] sm:text-[20px] md:text-[25px] font-bold text-gray-800 absolute top-6 left-6 md:top-10 md:left-10">
                                {Frame[1].title}
                            </span>
                        </div>


                        <div className="relative sm:col-span-7">
                            <img src={Frame[2].img} alt={Frame[2].title}
                                className="rounded-[12px] w-full h-[220px] sm:h-[260px] md:h-[300px] object-cover"
                            />
                            <span className="text-[18px] sm:text-[20px] md:text-[25px] font-bold text-gray-800 absolute top-6 left-6 md:top-10 md:left-10">
                                {Frame[2].title}
                            </span>
                        </div>


                        <div className="relative sm:col-span-5">
                            <img src={Frame[3].img} alt={Frame[3].title}
                                className="rounded-[12px] w-full h-[220px] sm:h-[260px] md:h-[300px] object-cover"
                            />
                            <span className="text-[18px] sm:text-[20px] md:text-[25px] font-bold text-gray-800 absolute top-6 left-6 md:top-10 md:left-10">
                                {Frame[3].title}
                            </span>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default DressStyle