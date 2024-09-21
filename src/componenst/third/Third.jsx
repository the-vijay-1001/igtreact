import React, { useState } from 'react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'

const tutorialSlides = [
    {
        id: 1,
        image: "https://img.freepik.com/free-photo/female-hand-typing-keyboard-laptop_1150-15742.jpg",
        title: "Convert your web layout theming easily with sketch zeplin extension",
        reviews: 392,
        students: 1037
    },
    {
        id: 2,
        image: "https://freerangestock.com/sample/40506/at-work-on-laptop.jpg",
        title: "Create multiple artboard by using figma prototyping development",
        reviews: 524,
        students: 3532
    },
    {
        id: 3,
        image: "https://www.techadvisor.com/wp-content/uploads/2022/06/laptop_work_garden_lifestyle_4.jpg?quality=50&strip=all",
        title: "How to work with prototype design with adobe xd featuring tools",
        reviews: 792,
        students: 2538
    }
]

export default function TutorialSlider() {
    const [currentSlide, setCurrentSlide] = useState(0)

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % tutorialSlides.length)
    }

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + tutorialSlides.length) % tutorialSlides.length)
    }

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
            <h1 className="text-xl font-bold mb-4 flex justify-center">Tutorials that people love most</h1>
            <div className="flex justify-center">
                <div className="w-1/2">
                    <div className="relative border-2 rounded-lg overflow-hidden w-96">
                        <div className="absolute top-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full z-10">
                            Free tutorial
                        </div>
                        <div className="relative h-48 overflow-hidden">
                            <img
                                src={tutorialSlides[currentSlide].image}
                                alt="Tutorial"
                                className="w-full object-cover absolute -top-4"
                            />
                        </div>
                        <div className="p-4">
                            <div className="flex items-center mb-2">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                                ))}
                                <span className="ml-2 text-sm text-gray-600">
                                    ({tutorialSlides[currentSlide].reviews} reviews)
                                </span>
                            </div>
                            <h3 className="font-semibold text-lg mb-2">
                                {tutorialSlides[currentSlide].title}
                            </h3>
                            <p className="text-sm text-gray-600">
                                {tutorialSlides[currentSlide].students} students watched
                            </p>
                        </div>
                        <div className="absolute bottom-2 right-2">
                            <ChevronRight className="w-6 h-6 text-red-500" />
                        </div>
                        <button
                            onClick={prevSlide}
                            className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white rounded-full p-1 shadow-md"
                        >
                            <ChevronLeft className="w-6 h-6 text-gray-600" />
                        </button>
                        <button
                            onClick={nextSlide}
                            className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white rounded-full p-1 shadow-md"
                        >
                            <ChevronRight className="w-6 h-6 text-gray-600" />
                        </button>
                    </div>
                </div>
                <div className="w-1/3">
                    <h2 className="text-2xl font-bold mb-4">
                        More than thousand of free tutorial upload every weeks
                    </h2>
                    <p className="text-gray-600 mb-4">
                        Get your tests delivered at let home collect sample from the victory of the managements that supplies best design system guidelines ever. Get your tests delivered at let home collect sample.
                    </p>
                    <a href="#" className="text-orange-500 font-semibold hover:underline">
                        Explore details
                    </a>
                </div>
            </div>
        </div>
    )
}