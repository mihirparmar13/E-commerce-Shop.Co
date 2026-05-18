import {
    Product1,
    Product2,
    Product3,
    Product4,
    TopSelling1,
    TopSelling2,
    TopSelling3,
    TopSelling4,
    Men1,
    Men2,
    Men3,
    Men4,
    Frame1,
    Frame2,
    Frame3,
    Frame4,
    detailsProduct1,
    detailsProduct2,
    detailsProduct3,
    detailsProduct4,
    slide1,
    slide2,
    slide3,
    slide4,
    slide5
} from './assets/index.js'

export const products = {
    newArrivals: [
        {
            id: 1,
            title: 'T-shirt with Tape Details',
            price: '$120',
            rating: '4.5/5',
            img: Product1
        },
        {
            id: 2,
            title: 'SKINNY FIT JEANS',
            price: '$240',
            discount: '$260',
            off: '-20%',
            rating: '3.5/5',
            img: Product2
        },
        {
            id: 3,
            title: 'CHECKERED SHIRT',
            price: '$120',
            rating: '4.5/5',
            img: Product3
        },
        {
            id: 4,
            title: 'SLEEVE STRIPED T-SHIRT',
            price: '$130',
            discount: '$160',
            off: '-30%',
            rating: '4.5/5',
            img: Product4
        },


    ],
    topSelling: [
        {
            id: 5,
            title: 'VERTICAL STRIPED SHIRT',
            price: '$212',
            discount: '$232',
            off: '-20%',
            rating: '5.0/5',
            img: TopSelling1
        },
        {
            id: 6,
            title: 'COURAGE GRAPHIC T-SHIRT',
            price: '$145',
            rating: '4.0/5',
            img: TopSelling2
        },
        {
            id:7,
            title: 'LOOSE FIT BERMUDA SHORTS',
            price: '$80',
            rating: '3.0/5',
            img: TopSelling3
        },
        {
            id: 8,
            title: 'FADED SKINNY JEANS',
            price: '$210',
            rating: '4.5/5',
            img: TopSelling4
        }
    ],
    casual: [
        {
            id: 9,
            title: 'Gradient Graphic T-shirt',
            price: '$145',
            rating: '3.5/5',
            img: detailsProduct2
        },
        {
            id: 10,
            title: 'Polo with Tipping Details',
            price: '$180',
            rating: '4.5/5',
            img: detailsProduct3
        },
        {
            id: 11,
            title: 'Black Striped T-shirt',
            price: '$120',
            discount: '$150',
            off: '-30%',
            rating: '4.5/5',
            img: detailsProduct4
        },
        {
            id: 12,
            title: 'SIMPLE T-SHIRT',
            price: '$130',
            rating: '4.2/5',
            img: Product4
        }
    ],
    details: [
        {
            id: 13,
            title: 'Polo with Contrast Trims',
            price: '$212',
            discount: '$242',
            off: '-20%',
            rating: '4.5/5',
            img: detailsProduct1
        },
        {
            id: 14,
            title: 'Gradient Graphic T-shirt',
            price: '$145',
            rating: '3.5/5',
            img: detailsProduct2
        },
        {
            id: 15,
            title: 'Polo with Tipping Details',
            price: '$180',
            rating: '4.5/5',
            img: detailsProduct3
        },
        {
            id: 16,
            title: 'Black Striped T-shirt',
            price: '$120',
            discount: '$150',
            off: '-30%',
            rating: '4.5/5',
            img: detailsProduct4
        }
    ],
    Men: [
        {
            id: 16,
            title: 'The Cloud Relaxed Cardigan',
            price: '$132',
            discount: '$188',
            off: '-30%',
            rating: '4.5/5',
            img: Men1
        },
        {
            id: 17,
            title: 'The Wool Flannel Pant',
            price: '$97',
            discount: '$138',
            off: '-30%',
            rating: '3.5/5',
            img: Men3
        },
        {
            id: 18,
            title: 'The Organic Cotton Long-Sleeve Turtleneck',
            price: '$35',
            discount: '$50',
            off: '-30%',
            rating: '3.5/5',
            img: Men2
        },
        {
            id: 19,
            title: 'The Wool Flannel Pant',
            price: '$97',
            discount: '$138',
            off: '-30%',
            rating: '3.5/5',
            img: Men4
        }
    ],
    Girls: [
        {
            id: 20,
            title: 'The Floral Summer Dress',
            price: '$89',
            discount: '$120',
            off: '-25%',
            rating: '4.8/5',
            img: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f'
        },
        {
            id: 21,
            title: 'The Oversized Pink Hoodie',
            price: '$76',
            discount: '$110',
            off: '-30%',
            rating: '4.6/5',
            img: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b'
        },
        {
            id: 22,
            title: 'The Elegant Satin Skirt',
            price: '$58',
            discount: '$82',
            off: '-29%',
            rating: '4.4/5',
            img: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c'
        },
        {
            id: 23,
            title: 'The Casual Denim Jacket',
            price: '$105',
            discount: '$145',
            off: '-28%',
            rating: '4.7/5',
            img: 'https://images.unsplash.com/photo-1483985988355-763728e1935b'
        }
    ]
}


export const filters = {
    categories: ['T-shirts', 'Shorts', 'Shirts', 'Hoodie', 'Jeans'],
    dressStyles: ['Casual', 'Formal', 'Party', 'Gym'],
    colors: [
        '#00C12B',
        '#F50606',
        '#F5DD06',
        '#F57906',
        '#06CAF5',
        '#063AF5',
        '#7D06F5',
        '#F506A4',
        '#FFFFFF',
        '#000000'
    ],
    sizes: ['XX-Small', 'X-Small', 'Small', 'Medium', 'Large', 'X-Large', 'XX-Large', '3X-Large', '4X-Large']
}

export const heroData = {
    title: 'FIND CLOTHES THAT MATCHES YOUR STYLE',
    description:
        'Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.',
    buttonText: 'Shop Now',
    stats: [
        { number: '200+', label: 'International Brands' },
        { number: '2,000+', label: 'High-Quality Products' },
        { number: '30,000+', label: 'Happy Customers' }
    ]
}

export const brandLogos = [slide1, slide2, slide3, slide4, slide5]

export const dressStyleFrames = [
    { id: 1, img: Frame1, title: 'Casual' },
    { id: 2, img: Frame2, title: 'Formal' },
    { id: 3, img: Frame3, title: 'Party' },
    { id: 4, img: Frame4, title: 'Gym' }
]

export const customerReviews = [
    {
        id: 1,
        name: 'Sarah M.',
        rating: 4,
        review:
            "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
        date: 'Posted on August 14, 2023'
    },
    {
        id: 2,
        name: 'Alex K.',
        rating: 4,
        review:
            "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
        date: 'Posted on August 15, 2023'
    },
    {
        id: 3,
        name: 'James L.',
        rating: 4,
        review:
            "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
        date: 'Posted on August 16, 2023'
    }
]
