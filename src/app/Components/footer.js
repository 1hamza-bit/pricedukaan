import { Facebook, Twitter, Instagram, Linkedin, ArrowRight, Send } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-10">
      <div className="w-4/5 mx-auto px-4 lg:px-8">
        {/* Footer Links */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
          {/* Our Policies */}
          <div>
            <h3 className="font-semibold mb-4">Our Policies</h3>
            <ul className="space-y-3 text-md text-gray-300">
              <li><a href="#">Return</a></li>
              <li><a href="#">Delivery Policy</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Payment Policy</a></li>
              <li><a href="#">Terms & Condition</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-3 text-md text-gray-300">
              <li><a href="#">Send Us Inquiry</a></li>
              <li><a href="#">Import Inquiry</a></li>
            </ul>
          </div>

          {/* Account */}
          <div>
            <h3 className="font-semibold mb-4">Account</h3>
            <ul className="space-y-3 text-md text-gray-300">
              <li><a href="#">My Account</a></li>
              <li><a href="#">Login / Register</a></li>
              <li><a href="#">Cart</a></li>
              <li><a href="#">Wishlist</a></li>
              <li><a href="#">Shop</a></li>
            </ul>
          </div>

          {/* Quick Link */}
          <div>
            <h3 className="font-semibold mb-4">Quick Link</h3>
            <ul className="space-y-3 text-md text-gray-300">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Brands</a></li>
              <li><a href="#">FAQ’s</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold mb-4">Newsletter</h3>
            <p className="text-md text-gray-300 mb-4">Get 10% off your first order</p>
            <div className="relative flex-1 ">
            <input
              type="text"
              placeholder="Enter Your Email"
              className="w-full  bg-black border border-gray-300 px-4 py-3 rounded-r-md outline-none pr-10"
            />
            <Send className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white" size={20} />
          </div>
            <div className="flex space-x-4 mt-4">
              <a href="#"><Facebook className="text-white" size={20} /></a>
              <a href="#"><Twitter className="text-white" size={20} /></a>
              <a href="#"><Instagram className="text-white" size={20} /></a>
              <a href="#"><Linkedin className="text-white" size={20} /></a>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-10 border-t border-gray-700 pt-4 text-center text-md flex flex-col sm:flex-row justify-between items-center text-gray-500">
          <p>© Copyright W11 Solutions 2024. All rights reserved</p>
          <div className="flex justify-center items-start ">
            <img src="/payments.png" alt="Payment methods" className="h-12" />
          </div>
        </div>
      </div>
    </footer>
  );
}
