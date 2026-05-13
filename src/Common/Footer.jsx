import { FaCcApplePay, FaCcPaypal, FaCcVisa, FaFacebook, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa'


const Footer = () => {
    return (
        <div className='footer bg-[#F0F0F0] py-8'>
            <div className='container mx-auto '>

                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 '>
                    <div className='col-span-1 pr-4 px-4'>
                        <h1 className='text-3xl font-bold text-gray-800 mb-4' style={{ fontFamily: "Integral CF", }}>SHOP.CO</h1>
                        <p className='text-gray-600 text-[16px] sm:text-[15px] md:text-[16px] leading-relaxed mb-4 max-w-[300px]'>
                            We have clothes that suits your style and which you’re proud to wear. From women to men.
                        </p>
                        <div className='flex space-x-4'>

                            <FaTwitter size={20} />
                            <FaFacebook size={20} />
                            <FaInstagram size={20} />
                            <FaGithub size={20} />
                        </div>
                    </div>
                    <div className='px-4'>
                        <h1 className='text-[#000000] text-[16px] sm:text-[18px] md:text-[20px]  mb-4 tracking-wider'>COMPANY</h1>
                        <ul className='space-y-2'>
                            <li><a href='#' className='text-gray-600 hover:text-gray-800'>About Us</a></li>
                            <li><a href='#' className='text-gray-600 hover:text-gray-800'>Feature</a></li>
                            <li><a href='#' className='text-gray-600 hover:text-gray-800'>Works </a></li>
                            <li><a href='#' className='text-gray-600 hover:text-gray-800'>Career </a></li>
                        </ul>
                    </div>
                    <div className='px-4'>
                        <h1 className='text-[#000000] text-[16px] sm:text-[18px] md:text-[20px]  mb-4 tracking-wide'>HELP</h1>
                        <ul className='space-y-2'>
                            <li><a href='#' className='text-gray-600 hover:text-gray-800'>Customer Support</a></li>
                            <li><a href='#' className='text-gray-600 hover:text-gray-800'>Delivery Details</a></li>
                            <li><a href='#' className='text-gray-600 hover:text-gray-800'>Term & Conditions </a></li>
                            <li><a href='#' className='text-gray-600 hover:text-gray-800'>Privacy Policy </a></li>
                        </ul>
                    </div>
                    <div className='px-4'>
                        <h1 className='text-[#000000] text-[16px] sm:text-[18px] md:text-[20px]  mb-4 tracking-wide'>FAQ</h1>
                        <ul className='space-y-2'>
                            <li><a href='#' className='text-gray-600 hover:text-gray-800'>Account</a></li>
                            <li><a href='#' className='text-gray-600 hover:text-gray-800'>Manage Delivery</a></li>
                            <li><a href='#' className='text-gray-600 hover:text-gray-800'>Orders </a></li>
                            <li><a href='#' className='text-gray-600 hover:text-gray-800'>Payments </a></li>
                        </ul>
                    </div>
                    <div className='px-4'>
                        <h1 className='text-[#000000] text-[16px] sm:text-[18px] md:text-[20px]  mb-4 tracking-wide'>RESOURCES</h1>
                        <ul className='space-y-2'>
                            <li><a href='#' className='text-gray-600 hover:text-gray-800'>Free eBooks</a></li>
                            <li><a href='#' className='text-gray-600 hover:text-gray-800'>Development Tutorials</a></li>
                            <li><a href='#' className='text-gray-600 hover:text-gray-800'>How to- Blog </a></li>
                            <li><a href='#' className='text-gray-600 hover:text-gray-800'>Youtube Playlist </a></li>
                        </ul>
                    </div>


                </div>
                <div className="section-closer pt-10 sm:pt-16 md:pt-20 px-4 sm:px-6 md:px-8">
                    <div className="max-w-conainer mx-auto">
                        <div className="border-t border-gray-300"></div>
                    </div>
                </div>
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-6">


                    <p className='text-center sm:text-left text-gray-600 text-[14px] sm:text-[15px] md:text-[16px]'>
                        &copy; 2024 Shop.co. All rights reserved.
                    </p>


                    <div className='flex flex-wrap justify-center sm:justify-end items-center gap-3'>
                        <FaCcVisa size={32} className="text-blue-600" />
                        <FaCcPaypal size={32} className="text-blue-500" />
                        <FaCcApplePay size={32} className="text-black" />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Footer