import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Destinationcard from "./Destinationcard";

export default function TopDestinations() {
  const navigate = useNavigate();
  const destinations = [
    {
      id: 1,
      name: "Western Europe",
      tours: 3,
      image:
        "https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    },
    {
      id: 2,
      name: "South Africa",
      tours: 2,
      image:
        "https://images.unsplash.com/photo-1484318571209-661cf29a69ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    },
    {
      id: 3,
      name: "Scandinavia",
      tours: 2,
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    },
    {
      id: 4,
      name: "Egypt",
      tours: 3,
      image:
        "https://images.unsplash.com/photo-1539650116574-75c0c6d73a0e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    },
    {
      id: 5,
      name: "Asia",
      tours: 5,
      image:
        "https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    },
    {
      id: 6,
      name: "America",
      tours: 4,
      image:
        "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    },
  ];

  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Top <span className="text-blue-500">Destinations</span>
          </h2>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            Explore our top destinations voted by more than 100,000+
            <br />
            customers around the world.
          </p>

          {/* All Destinations Link */}
          <div className="flex justify-center">
            <button
              onClick={() => {
                navigate("/destination");
              }}
              className="cursor-pointer flex items-center gap-2 text-gray-700 hover:text-blue-500 font-medium transition-colors duration-200 border-b-2 border-gray-300 hover:border-blue-500 pb-2"
            >
              All Destinations
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map((destination,index) => (
            <Destinationcard destination={destination} key={index}></Destinationcard>
          ))}
        </div>
      </div>
    </section>
  );
}
