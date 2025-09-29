import { Send } from "lucide-react";
import { useState } from "react";

export default function NewsletterPromotion() {
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    if (email) {
      console.log("Subscribed:", email);
      setEmail("");
      // Add your subscription logic here
    }
  };

  const handleKeyPress = (e: { key: string }) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Card - Special Deals */}
          <div className="relative overflow-hidden rounded-3xl shadow-xl h-80 group">
            {/* Background Image */}
            <img
              src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop"
              alt="Beach vacation"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-teal-800/50"></div>

            {/* Content */}
            <div className="relative z-10 h-full flex flex-col justify-center p-10 md:p-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Discover Special Deals!
              </h2>
              <p className="text-white text-lg mb-8 max-w-md">
                Make sure to check out these special promotions
              </p>
              <div>
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
                  See Tours
                </button>
              </div>
            </div>
          </div>

          {/* Right Card - Newsletter */}
          <div className="bg-gray-100 rounded-3xl shadow-xl p-10 md:p-12 flex flex-col justify-center">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Don't miss a thing
            </h2>
            <p className="text-gray-600 text-lg mb-3">
              Get update to special deals and exclusive offers.
            </p>
            <p className="text-gray-600 text-lg mb-8">
              Sign up to our newsletter!
            </p>

            {/* Newsletter Input */}
            <div className="relative">
              <div className="flex items-center bg-white rounded-full shadow-md overflow-hidden">
                <div className="pl-6 pr-4 flex items-center text-gray-400">
                  <Send size={20} />
                </div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Your Email Address"
                  className="flex-1 py-4 px-2 outline-none text-gray-700 placeholder-gray-400"
                />
                <button
                  onClick={handleSubmit}
                  className="bg-blue-500 w-[150px] h-[60px] rounded-full hover:bg-blue-600 text-white font-semibold transition-colors duration-300 uppercase text-sm"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
