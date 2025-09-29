import { Star } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    id: 1,
    name: "Brittany Clark",
    location: "San Francisco",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
    rating: 5,
    text: "The tours in this website are great. I had been really enjoy with my family! The team is very professional and taking care of the customers. Will surely recommend to my freind to join this company!",
  },
  {
    id: 2,
    name: "Frances Hill",
    location: "San Francisco",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
    rating: 5,
    text: "The tours in this website are great. I had been really enjoy with my family! The team is very professional and taking care of the customers. Will surely recommend to my freind to join this company!",
  },
  {
    id: 3,
    name: "Jennth Norz",
    location: "New York City",
    image:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=150&h=150&fit=crop",
    rating: 5,
    text: "The tours in this website are great. I had been really enjoy with my family! The team is very professional and taking care of the customers. Will surely recommend to my freind to join this company!",
  },
  {
    id: 4,
    name: "Michael Johnson",
    location: "Los Angeles",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
    rating: 5,
    text: "Amazing experience! The tour guides were knowledgeable and friendly. Everything was well organized and exceeded our expectations. Highly recommended!",
  },
];

export default function CustomerTestimonials() {
  const [currentIndex, setCurrentIndex] = useState<number>(1);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="bg-gray-100 py-16 px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-12">
          What our customers are
          <br />
          saying about us
        </h2>

        {/* Testimonials Container */}
        <div className="relative min-h-[400px] flex items-center justify-center">
          {/* Side Cards (visible on larger screens) */}
          <div className="hidden lg:flex absolute left-0 w-full justify-between items-center pointer-events-none">
            {/* Left Card */}
            {currentIndex > 0 && (
              <div className="bg-white rounded-2xl shadow-lg p-6 w-80 opacity-60 scale-90 transform -translate-x-8">
                <div className="flex items-start gap-4 mb-4">
                  <img
                    src={testimonials[currentIndex - 1].image}
                    alt={testimonials[currentIndex - 1].name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900">
                      {testimonials[currentIndex - 1].name}
                    </h3>
                    <p className="text-sm text-gray-400">
                      {testimonials[currentIndex - 1].location}
                    </p>
                  </div>
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} className="fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 text-sm line-clamp-4">
                  {testimonials[currentIndex - 1].text}
                </p>
              </div>
            )}

            {/* Right Card */}
            {currentIndex < testimonials.length - 1 && (
              <div className="bg-white rounded-2xl shadow-lg p-6 w-80 opacity-60 scale-90 transform translate-x-8">
                <div className="flex items-start gap-4 mb-4">
                  <img
                    src={testimonials[currentIndex + 1].image}
                    alt={testimonials[currentIndex + 1].name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900">
                      {testimonials[currentIndex + 1].name}
                    </h3>
                    <p className="text-sm text-gray-400">
                      {testimonials[currentIndex + 1].location}
                    </p>
                  </div>
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} className="fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 text-sm line-clamp-4">
                  {testimonials[currentIndex + 1].text}
                </p>
              </div>
            )}
          </div>

          {/* Center Card (Main) */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 w-full max-w-2xl relative z-10 transition-all duration-500">
            <div className="flex flex-col md:flex-row items-start gap-6 mb-6">
              <img
                src={currentTestimonial.image}
                alt={currentTestimonial.name}
                className="w-20 h-20 rounded-full object-cover"
              />
              <div className="flex-1">
                <h3 className="font-bold text-xl text-gray-900 mb-1">
                  {currentTestimonial.name}
                </h3>
                <p className="text-gray-400 mb-4">
                  {currentTestimonial.location}
                </p>
                <p className="text-gray-700 leading-relaxed">
                  {currentTestimonial.text}
                </p>
              </div>
              <div className="flex text-yellow-400">
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <Star key={i} size={20} className="fill-current" />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-3 mt-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-blue-500 w-8"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
