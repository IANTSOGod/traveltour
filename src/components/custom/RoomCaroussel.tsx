import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ArrowRight } from "lucide-react";
import RoomCard from "./RoomCard";

const rooms = [
  {
    id: 1,
    title: "Luxury Suite",
    image:
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&h=600&fit=crop",
    rating: 5,
    reviews: 1,
    bedType: "King Beds",
    price: 90,
    originalPrice: null,
    discount: null,
  },
  {
    id: 2,
    title: "Standard Deluxe",
    image:
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&h=600&fit=crop",
    rating: 4.5,
    reviews: 1,
    bedType: "King Beds",
    price: 75,
    originalPrice: 90,
    discount: 17,
  },
  {
    id: 3,
    title: "The Penthouse",
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&h=600&fit=crop",
    rating: 5,
    reviews: 1,
    bedType: "King Beds",
    price: 200,
    originalPrice: null,
    discount: null,
  },
  {
    id: 4,
    title: "Grand Suite Room",
    image:
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&h=600&fit=crop",
    rating: 5,
    reviews: 1,
    bedType: "Double Beds",
    price: 150,
    originalPrice: 120,
    discount: 20,
  },
];

export default function HotelRoomsCarousel() {
  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="container mx-auto max-w-7xl">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          Hotel <span className="text-blue-500">Rooms</span>
        </h2>

        {/* Carousel */}
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {rooms.map((room, index) => (
              <CarouselItem
                key={room.id}
                className="pl-4 md:basis-1/2 lg:basis-1/3"
              >
                <RoomCard room={room} key={index} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-0 -translate-x-12 bg-white hover:bg-gray-100" />
          <CarouselNext className="right-0 translate-x-12 bg-white hover:bg-gray-100" />
        </Carousel>

        {/* View All Link */}
        <div className="flex justify-center mt-12">
          <button className="flex items-center gap-2 text-gray-700 hover:text-blue-500 font-medium transition-colors duration-200 border-b-2 border-gray-300 hover:border-blue-500 pb-2">
            View all rooms
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
