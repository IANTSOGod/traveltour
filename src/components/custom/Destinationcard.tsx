import type { Destinationresponse } from "@/lib/interfaces/backendresponse/Destinationresponse";

interface DestinationCardProps {
  destination: Destinationresponse;
}

export default function Destinationcard({ destination }: DestinationCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer h-80">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={destination.has_img.url}
          alt={destination.title}
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
            {destination.has_tour.length} tours
          </span>
        </div>

        {/* Destination Name */}
        <div className="self-start">
          <h3 className="text-white text-2xl font-bold">{destination.title}</h3>
        </div>
      </div>

      {/* Hover Overlay with Description */}
      <div className="absolute z-10 inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
        <img
          src={destination.has_img.url}
          alt={destination.title}
          className="w-full h-full object-cover scale-110 transition-transform duration-700"
        />
        <div className="absolute text-center text-white">
          <h3 className="text-2xl font-bold mb-3">{destination.title}</h3>
          <p className="text-blue-100 text-sm leading-relaxed">
            {destination.description}
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
