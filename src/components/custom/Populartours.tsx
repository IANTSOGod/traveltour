import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Tourcard from "./Tourcard";

export default function PopularTours() {
  const navigate = useNavigate();
  const tours = [
    {
      id: 1,
      title: "Austria - 6 Days in Vienna, Hallstatt",
      image:
        "https://images.unsplash.com/photo-1527838832700-5059252407fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      badge: "Special Offer",
      badgeColor: "bg-blue-500",
    },
    {
      id: 2,
      title: "Argentina - Great Diving Trip",
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      badge: null,
      badgeColor: "",
    },
    {
      id: 3,
      title: "India - Mumbai, New Delhi",
      image:
        "https://images.unsplash.com/photo-1564507592333-c60657eea523?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      badge: "25% Off",
      badgeColor: "bg-blue-500",
    },
    {
      id: 4,
      title: "Japan - Tokyo, Kyoto Adventure",
      image:
        "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      badge: "New",
      badgeColor: "bg-green-500",
    },
    {
      id: 5,
      title: "Morocco - Sahara Desert Experience",
      image:
        "https://images.unsplash.com/photo-1539650116574-75c0c6d73a0e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      badge: "Hot Deal",
      badgeColor: "bg-red-500",
    },
    {
      id: 6,
      title: "Thailand - Island Hopping",
      image:
        "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      badge: "Popular",
      badgeColor: "bg-orange-500",
    },
  ];

  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            Popular <span className="text-blue-500">Tours</span>
          </h2>
        </div>

        {/* Carousel */}
        <div className="relative">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {tours.map((tour, index) => (
                <Tourcard tour={tour} key={index}></Tourcard>
              ))}
            </CarouselContent>

            {/* Navigation Buttons */}
            <CarouselPrevious className="absolute -left-12 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg" />
            <CarouselNext className="absolute -right-12 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg" />
          </Carousel>
        </div>

        {/* See More Button */}
        <div className="flex justify-center mt-12">
          <button
            className="flex items-center gap-2 text-gray-700 hover:text-blue-500 font-medium transition-colors duration-200 border-b-2 border-gray-300 hover:border-blue-500 pb-2"
            onClick={() => {
              navigate("/tourlist");
            }}
          >
            See More
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
