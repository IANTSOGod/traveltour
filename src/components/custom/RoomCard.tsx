import type { Room } from "@/lib/interfaces/Room";
import { Bed, Star } from "lucide-react";

interface Roomcardprops {
  room: Room;
}

export default function RoomCard({ room }: Roomcardprops) {
  const fullStars = Math.floor(room.rating);
  const hasHalfStar = room.rating % 1 !== 0;

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      {/* Image */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={room.image}
          alt={room.title}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
        />
        {room.discount && (
          <div className="absolute top-4 right-4 bg-blue-500 text-white px-4 py-2 rounded-lg font-semibold text-sm">
            {room.discount}% OFF
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-3">{room.title}</h3>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-4">
          <div className="flex text-yellow-400">
            {[...Array(fullStars)].map((_, i) => (
              <Star key={i} size={18} className="fill-current" />
            ))}
            {hasHalfStar && (
              <div className="relative">
                <Star size={18} className="text-gray-300 fill-current" />
                <div className="absolute inset-0 overflow-hidden w-1/2">
                  <Star size={18} className="text-yellow-400 fill-current" />
                </div>
              </div>
            )}
            {[...Array(5 - Math.ceil(room.rating))].map((_, i) => (
              <Star
                key={`empty-${i}`}
                size={18}
                className="text-gray-300 fill-current"
              />
            ))}
          </div>
          <span className="text-sm text-gray-500">({room.reviews} Review)</span>
        </div>

        {/* Bed Type */}
        <div className="flex items-center gap-2 text-gray-600 mb-6">
          <Bed size={20} />
          <span>{room.bedType}</span>
        </div>

        {/* Price */}
        <div className="flex items-baseline gap-2">
          <span className="text-lg text-gray-600">From</span>
          {room.originalPrice && (
            <span className="text-lg text-gray-400 line-through">
              ${room.originalPrice}
            </span>
          )}
          <span className="text-3xl font-bold text-gray-900">
            ${room.price}
          </span>
        </div>
      </div>
    </div>
  );
}
