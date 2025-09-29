import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search } from "lucide-react";
import { useState } from "react";

export default function Hero() {
  const [keywords, setKeywords] = useState("");
  const [destination, setDestination] = useState("");
  const [duration, setDuration] = useState("");

  return (
    <div className="min-h-screen bg-gray-50 px-4 md:px-8 lg:px-16 py-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          <div className="space-y-6 lg:space-y-8 lg:pt-16">
            <div className="inline-block">
              <span className="bg-green-100 text-green-600 px-4 py-2 rounded-full text-sm font-medium">
                Book With Us!
              </span>
            </div>

            <div className="space-y-2">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Find Next Place
              </h1>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                To <span className="text-blue-500">Visit</span>
              </h1>
            </div>

            <div className="space-y-2 text-gray-600 text-lg">
              <p>Discover amazing places at exclusive deals.</p>
              <p>Eat, Shop, Visit interesting places around the world.</p>
            </div>
          </div>

          <div className="relative lg:h-[700px] h-[500px]">
            <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
                alt="Beautiful mountain lake landscape"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>
        </div>

        <div className="absolute -mt-[200px] z-10 lg:mx-0 ">
          <div className="bg-white rounded-2xl shadow-2xl max-w-4xl overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-x-8 items-end ">
              <div className="space-y-2 p-8">
                <Label
                  htmlFor="keywords"
                  className="text-sm font-medium text-gray-700"
                >
                  Keywords
                </Label>
                <Input
                  id="keywords"
                  placeholder="Type Your Keywords"
                  value={keywords}
                  onChange={(e) => setKeywords(e.target.value)}
                  className="border-gray-200 focus:border-blue-500 focus:ring-blue-500 w-[200px]"
                />
              </div>

              <div className="space-y-2 p-8">
                <Label
                  htmlFor="destination"
                  className="text-sm font-medium text-gray-700"
                >
                  Destination
                </Label>
                <Select value={destination} onValueChange={setDestination}>
                  <SelectTrigger className="border-gray-200 focus:border-blue-500 focus:ring-blue-500 h-12 w-[200px]">
                    <SelectValue placeholder="Any" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="any">Any</SelectItem>
                    <SelectItem value="europe">Europe</SelectItem>
                    <SelectItem value="asia">Asia</SelectItem>
                    <SelectItem value="america">America</SelectItem>
                    <SelectItem value="africa">Africa</SelectItem>
                    <SelectItem value="oceania">Oceania</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2 p-8">
                <Label
                  htmlFor="duration"
                  className="text-sm font-medium text-gray-700"
                >
                  Duration
                </Label>
                <Select value={duration} onValueChange={setDuration}>
                  <SelectTrigger className="border-gray-200 focus:border-blue-500 w-[200px] focus:ring-blue-500 h-12">
                    <SelectValue placeholder="Any" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="any">Any</SelectItem>
                    <SelectItem value="1-3">1-3 days</SelectItem>
                    <SelectItem value="4-7">4-7 days</SelectItem>
                    <SelectItem value="1-2weeks">1-2 weeks</SelectItem>
                    <SelectItem value="3-4weeks">3-4 weeks</SelectItem>
                    <SelectItem value="1month+">1 month+</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="ml-5 flex flex-col justify-center align-center items-center bg-blue-400 w-full h-full gap-x-2 text-white cursor-pointer">
                <Search className="w-5 h-5" />
                <p>Search Now</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
