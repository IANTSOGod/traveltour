import { Facebook, Instagram, Music, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Travel Tour Section */}
          <div>
            <h3 className="text-2xl flex flex-row gap-x-0">
              <p>Travel</p>
              <p className="text-blue-400">tour</p>
            </h3>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Contact</h3>
            <div className="space-y-3 text-neutral-400">
              <p>
                <span className="font-semibold">T:</span> 1-634-567-34
              </p>
              <p>
                <span className="font-semibold">E:</span>{" "}
                contact@traveltourtheme.co
              </p>
            </div>
            <div className="flex gap-4 mt-6">
              <a
                href="#"
                className="w-10 h-10 bg-neutral-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-neutral-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-neutral-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
                aria-label="Pinterest"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-neutral-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
                aria-label="TikTok"
              >
                <Music size={18} />
              </a>
            </div>
          </div>

          {/* Useful Links Section */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Useful Links</h3>
            <ul className="space-y-3 text-neutral-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Travel Blog & Tips
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Working With Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Be Our Partner
                </a>
              </li>
            </ul>
          </div>

          {/* Payment Section */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Pay Safely With Us</h3>
            <p className="text-neutral-400 mb-6 text-sm">
              The payment is encrypted and transmitted securely with an SSL
              protocol.
            </p>
            <div className="flex gap-3 flex-wrap">
              <div className="bg-white rounded px-3 py-2">
                <span className="text-blue-600 font-bold text-xs">PayPal</span>
              </div>
              <div className="bg-white rounded px-3 py-2">
                <span className="text-blue-800 font-bold text-xs">VISA</span>
              </div>
              <div className="bg-white rounded px-3 py-2 flex items-center gap-1">
                <div className="w-3 h-3 bg-red-600 rounded-full"></div>
                <div className="w-3 h-3 bg-orange-500 rounded-full -ml-2"></div>
              </div>
              <div className="bg-white rounded px-3 py-2">
                <span className="text-blue-700 font-bold text-xs">AMEX</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-neutral-800">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <nav className="flex gap-6 text-sm text-neutral-400">
              <a href="#" className="hover:text-white transition-colors">
                Home
              </a>
              <a href="#" className="hover:text-white transition-colors">
                About
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Blog
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Contact
              </a>
            </nav>
            <p className="text-sm text-neutral-400">
              Copyright © 2025 GoodLayers. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
