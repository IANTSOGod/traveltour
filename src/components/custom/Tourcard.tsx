import type { Tour } from "@/lib/interfaces/Tour";
import { Star } from "lucide-react";
import { CarouselItem } from "../ui/carousel";

interface TourcardProps {
  tour: Tour;
}

export default function Tourcard({ tour }: TourcardProps) {
  return (
    <CarouselItem
      key={tour.id}
      className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3"
    >
      <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer h-96">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={tour.image}
            alt={tour.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent group-hover:opacity-0 transition-opacity duration-500"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col justify-between p-6 group-hover:opacity-0 transition-opacity duration-300">
          {/* Badge */}
          {tour.badge && (
            <div className="self-end">
              <span
                className={`${tour.badgeColor} text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg`}
              >
                {tour.badge}
              </span>
            </div>
          )}

          {/* Tour Title */}
          <div className="self-start">
            <h3 className="text-white text-xl md:text-2xl font-bold leading-tight transition-colors duration-300">
              {tour.title}
            </h3>
          </div>
        </div>

        {/* Hover Effect */}
        <div className="absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 w-full h-full">
          <img
            src={tour.image}
            alt={tour.title}
            className="w-full h-full object-cover scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-all duration-500"></div>
          <div className="absolute inset-0 flex flex-col items-start justify-end p-10 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
            <div className="text-white font-bold mb-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
              <p className="text-xl">{tour.title}</p>
              <p>5 nights,2 day </p>
            </div>
            <div className="flex flex-row gap-x-30 items-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-150">
              <div className="flex flex-row text-yellow-300">
                <Star className="fill-current" />
                <Star className="fill-current" />
                <Star className="fill-current" />
                <p>(3 review)</p>
              </div>
              <div className="text-2xl text-white font-bold">$50</div>
            </div>
          </div>
        </div>
      </div>
    </CarouselItem>
  );
}
