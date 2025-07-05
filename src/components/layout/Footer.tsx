
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Heart } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-charcoal dark:bg-gray-900 text-white py-12 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-cool rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">PG</span>
              </div>
              <span className="font-bold text-xl">FindMyPG</span>
            </div>
            <p className="text-gray-300 dark:text-gray-400">
              Your trusted platform for finding safe, comfortable, and affordable PG accommodations.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-8 h-8 bg-gray-700 dark:bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-gray-700 dark:bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-gray-700 dark:bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/explore" className="text-gray-300 dark:text-gray-400 hover:text-white transition-colors">
                  Find PG
                </Link>
              </li>
              <li>
                <Link to="/partner" className="text-gray-300 dark:text-gray-400 hover:text-white transition-colors">
                  List Property
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 dark:text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-300 dark:text-gray-400 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-gray-300 dark:text-gray-400 hover:text-white transition-colors">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/help-center" className="text-gray-300 dark:text-gray-400 hover:text-white transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link to="/contact-us" className="text-gray-300 dark:text-gray-400 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-300 dark:text-gray-400 hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/safety-information" className="text-gray-300 dark:text-gray-400 hover:text-white transition-colors">
                  Safety Information
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 dark:text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 dark:text-gray-400 hover:text-white transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 dark:text-gray-400 hover:text-white transition-colors">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 dark:border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-300 dark:text-gray-400">
            © 2024 FindMyPG. Made with <Heart className="inline w-4 h-4 text-red-500 mx-1" /> for better living.
          </p>
        </div>
      </div>
    </footer>
  );
};
