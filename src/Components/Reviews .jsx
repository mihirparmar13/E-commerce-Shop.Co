import { FaCheckCircle } from 'react-icons/fa'
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri'
import { customerReviews } from '../data.js'

function Reviews() {
    return (
        <div className='Our-Happy-Customers  py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8'>
            <div className='container mx-auto'>

                <div className='Header flex justify-between items-center'>
                    <h2 className='text-[40px] font-bold text-black leading-[55px] sm:text-[39px]' style={{ fontFamily: "Integral CF" }}>
                        OUR HAPPY CUSTOMERS
                    </h2>
                    <div className='slider-Arrow flex  gap-2 :mt-12'>
                        <a href="">
                            <RiArrowLeftSLine size={30} />
                        </a>
                        <a href="">
                            <RiArrowRightSLine size={30} />
                        </a>
                    </div>
                </div>

                <div className="customer-Reviews grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-8">
                    {customerReviews.map((review, index) => (
                        <div key={review.id} className={`review border border-gray-400 rounded-[12px] p-6 h-full ${index > 0 ? (index === 1 ? 'hidden sm:block' : 'hidden lg:block') : ''}`}>
                            <div className="text-yellow-400 text-[25px] sm:text-[22px] md:text-[25px]">
                                {'★'.repeat(review.rating) + '☆'.repeat(5 - review.rating)}
                            </div>

                            <div className='flex items-center gap-2 mt-4'>
                                <h3 className="text-gray-800 text-[16px] sm:text-[18px] md:text-[20px] font-bold ">
                                    {review.name}
                                </h3>
                                <FaCheckCircle size={18} />
                            </div>

                            <p className="text-gray-800 text-[14px] sm:text-[15px] md:text-[16px] leading-relaxed mt-3">
                                "{review.review}"
                            </p>

                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}

export default Reviews 