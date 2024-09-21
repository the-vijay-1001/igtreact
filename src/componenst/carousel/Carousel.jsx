import { Star, Play, ChevronDown } from "lucide-react";

export default function CarouselPage() {
    return (
        <div className="max-w-4xl mx-auto p-6 font-sans">
            <h2 className="text-3xl font-bold text-center mb-8">Popular Designing Course</h2>
            <div className="space-y-6">
                <CourseItem
                    title="Professional graphic design tutorial full course with exercise file"
                    rating={5}
                    reviews={392}
                    students={2538}
                    description="Get your tutorials delivered at home, collect samples from the victory of the managements."
                    videoClasses={7}
                    duration={4}
                />
                <CourseItem
                    title="Become ultimate Photoshop expert within 30 days"
                    rating={4}
                    reviews={392}
                    students={2538}
                    description="Learn the secrets to mastering Photoshop in just 30 days."
                    videoClasses={7}
                    duration={4}
                    features={[
                        "How to reduce file pixel dimensions without losing quality",
                        "How to make logos pixel perfect with different extensions",
                        "Create vector files from rasterized layer styles",
                        "Make color gradients with Photoshop built-in tools"
                    ]}
                />
                <CourseItem
                    title="After Effects animation tutorial with Photoshop documents"
                    rating={3}
                    reviews={392}
                    students={2538}
                    description="Create stunning animations using After Effects and Photoshop."
                    videoClasses={7}
                    duration={4}
                />
                <CourseItem
                    title="Adobe Illustrator vector art design mockup"
                    rating={4}
                    reviews={392}
                    students={2538}
                    description="Master vector art design with Adobe Illustrator."
                    videoClasses={7}
                    duration={4}
                />
            </div>
        </div>
    );
}

function CourseItem({ title, rating, reviews, students, description, videoClasses, duration, features }) {
    return (
        <div className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow">
            <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                <Play className="w-6 h-6 text-orange-500" />
            </div>
            <div className="flex-grow">
                <div className="flex items-center space-x-2 mb-1">
                    {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                    ))}
                    <span className="text-sm text-gray-600">{rating}.0 ({reviews} reviews)</span>
                    <span className="text-sm text-gray-600">•</span>
                    <span className="text-sm text-gray-600">{students} students watched</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">{title}</h3>
                <p className="text-sm text-gray-600 mb-2">{description}</p>
                {features && (
                    <ul className="grid grid-cols-2 gap-2 mb-2">
                        {features.map((feature, index) => (
                            <li key={index} className="flex items-center text-sm text-gray-600">
                                <svg className="w-4 h-4 mr-2 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                {feature}
                            </li>
                        ))}
                    </ul>
                )}
                <div className="flex items-center justify-between">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                        {videoClasses} Video Classes • {duration} hrs
                    </span>
                    <button className="text-blue-600 hover:text-blue-800">
                        <ChevronDown className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </div>
    );
}
