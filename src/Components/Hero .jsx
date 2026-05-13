import { heroImg } from '../assets/index.js'
import { heroData, brandLogos } from '../data.js'

function Hero() {
    return (
        <div>
            <div className='hero-section' >
                <div className='bg-[#F2F0F1] '>
                    <div className='container mx-auto grid grid-cols-1 md:grid-cols-2'>


                        <div className='left-section  flex items-center '>
                            <div className='flex flex-col  gap-6 px-4 md:text-left max-w-[600px]'>
                                <h1 className="lg-w-[577px]  text-[64px]  sm:text-[45px] md:text-[36px] lg:text-[64px]   leading-[55px] font-bold text-black"
                                    style={{ fontFamily: "Integral CF" }}           >
                                    {heroData.title}
                                </h1>

                                <p className="lg-w-[545px] lg:w-[auto] sm:text-[14px] sm:text-[15px] md:text-[16px] leading-[22px] text-black/60"
                                    style={{ fontFamily: "Satoshi" }}>
                                    {heroData.description}
                                </p>
                                <button
                                    className="bg-black text-white sm:w-[210px] h-[48px] sm:h-[52px] px-[54px] py-[16px] rounded-full text-sm font-medium "
                                    style={{ fontFamily: "Satoshi" }}
                                >
                                    {heroData.buttonText}
                                </button>

                                <div className="flex flex-wrap lg:flex-nowrap 
                                     justify-center items-center 
                                     gap-6 sm:gap-8 text-center sm:text-left">

                                    {heroData.stats.map((stat, index) => (
                                        <div key={index} className={`px-4 ${index > 0 ? 'lg:border-l border-gray-300' : ''}`}>
                                            <span className="text-[28px] sm:text-[32px] md:text-[40px] font-bold">{stat.number}</span>
                                            <p className="text-[14px] sm:text-[16px]">{stat.label}</p>
                                        </div>
                                    ))}

                                </div>
                            </div>
                        </div>

                        <div className='right-section'>

                            <img
                                src={heroImg}
                                alt="Hero"
                                className="w-full h-auto object-contain"
                            />

                        </div>

                    </div>
                </div>
                <div className="slider-section bg-black py-6 sm:py-8">

                    <div className="container mx-auto px-4">

                        <div className="flex flex-wrap items-center justify-center lg:justify-between gap-6 sm:gap-10">

                            {brandLogos.map((logo, index) => (
                                <img
                                    key={index}
                                    src={logo}
                                    alt={`brand-${index + 1}`}
                                    className="h-5 sm:h-7 md:h-8 lg:h-10 object-contain"
                                />
                            ))}

                        </div>

                    </div>

                </div>
            </div>
        </div>




    )
}

export default Hero













