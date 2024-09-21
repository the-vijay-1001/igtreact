import axios from 'axios'
import { Star, ChevronRight } from 'lucide-react'
import { useEffect, useState } from 'react'

// const tutorialData = [
//     {
//         image: 'https://t3.ftcdn.net/jpg/08/63/37/28/360_F_863372893_sf8eFnBQpkdVaPHI8lxcKSvFy5pD58bm.jpg',
//         rating: 5.0,
//         reviews: 792,
//         title: 'How to work with prototype design with adobe xd featuring tools',
//         views: 2538
//     },
//     {
//         image: 'https://www.shutterstock.com/image-photo/woman-using-mouse-keyboard-streaming-260nw-2198261291.jpg',
//         rating: 4.5,
//         reviews: 524,
//         title: 'Create multiple artboard by using figma prototyping tools development',
//         views: 3532
//     },
//     {
//         image: 'https://t3.ftcdn.net/jpg/08/63/37/28/360_F_863372893_sf8eFnBQpkdVaPHI8lxcKSvFy5pD58bm.jpg',
//         rating: 5.0,
//         reviews: 392,
//         title: 'Convert your web layout theming easily with sketch zeplin extension',
//         views: 1037
//     },
//     {
//         image: 'https://www.shutterstock.com/image-photo/woman-using-mouse-keyboard-streaming-260nw-2198261291.jpg',
//         rating: 5.0,
//         reviews: 392,
//         title: 'Convert your web layout theming easily with sketch zeplin extension',
//         views: 1037
//     }
// ]

export default function TutorialCards() {
    const [tutorialData, setTutorialData] = useState([]);
    const getReviewList = async () => {
        const result = await axios.post("http://localhost:3000/review/list", { token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RAZ21haWwuY29tIiwiaWF0IjoxNzI2OTA2NjA0fQ.BgcVgH_THf1ZbmcHox9OURdxN7vGgySNF8JYrVxB3ZA" })
        if (result) {
            setTutorialData(result?.data?.data)
            console.log(result?.data?.data)
        }
    }
    useEffect(() => {
        getReviewList()
    }, [])
    console.log(tutorialData)
    return (
        <div className="container mx-auto px-4 py-8">
            <h2 className="text-2xl font-bold text-center mb-8 text-gray-800">Tutorials that people love most</h2>
            <div className="flex flex-nowrap overflow-x-auto space-x-6 pb-4">
                {tutorialData.map((tutorial, index) => (
                    <div key={index} className="flex-none w-full sm:w-1/2 md:w-1/3 bg-white rounded-lg shadow-md overflow-hidden">
                        <div className="relative h-48">
                            <div class="play-button"></div>
                            <img
                                className='h-full w-full'
                                src={tutorial.image}
                                alt={tutorial.title}
                                layout="fill"
                            // objectFit="cover"
                            />
                        </div>
                        <div className="p-4">
                            <div className="flex items-center mb-2">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className={`w-4 h-4 ${i < true ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                                ))}
                                <span className="ml-2 text-sm text-gray-600">{tutorial.stars} ({tutorial.reviews} reviews)</span>
                            </div>
                            <h3 className="font-semibold text-gray-800 mb-2">{tutorial.title}</h3>
                            <p className="text-sm text-gray-600">{tutorial.studentsWatched} students watched</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex justify-end mt-4">
                <button className="text-blue-600 flex items-center">
                    See all <ChevronRight className="w-4 h-4 ml-1" />
                </button>
            </div>
        </div>
    )
}