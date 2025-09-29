import type { Destination } from "@/lib/interfaces/Destination";

interface DestinationCardProps {
  destination: Destination;
}

export default function Destinationcard({ destination }: DestinationCardProps) {
  return (
    <div
      key={destination.id}
      className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer h-80"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={destination.image}
          alt={destination.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-between p-6">
        {/* Tours Badge - Top Right */}
        <div className="self-end">
          <span className="bg-blue-400 text-white px-3 py-1 rounded-full text-sm font-medium">
            {destination.tours} tours
          </span>
        </div>

        {/* Destination Name */}
        <div className="self-start">
          <h3 className="text-white text-2xl font-bold">{destination.name}</h3>
        </div>
      </div>

      {/* Hover Overlay with Description */}
      <div className="absolute z-10 inset-0 bg-blue-500 bg-opacity-90 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center p-6">
        <div className="text-center text-white">
          <h3 className="text-2xl font-bold mb-3">{destination.name}</h3>
          <p className="text-blue-100 text-sm leading-relaxed">
            Discover amazing places and unique experiences in {destination.name}
            . Book your next adventure with exclusive deals and expert guides.
          </p>
          <div className="mt-4">
            <span className="bg-blue-400 bg-opacity-20 text-white px-4 py-2 rounded-full text-sm font-medium">
              View all
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
