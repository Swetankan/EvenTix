import { Link } from "react-router-dom";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-slate-900 to-slate-800 text-white mt-16">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-teal-500 rounded-xl flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
                EvenTix
              </h3>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed mb-6">
              Your premier destination for discovering and booking amazing
              events. From concerts to conferences, we make event booking simple
              and secure.
            </p>

            {/* Social Links */}
            <div className="flex gap-4">
              {/* Facebook, Twitter, Instagram, LinkedIn Buttons */}
              {/* Use same icons and styling as original Footer */}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/events"
                  className="text-slate-300 hover:text-white hover:translate-x-1 transition-all duration-200 flex items-center gap-2"
                >
                  Browse Events
                </Link>
              </li>
              <li>
                <Link
                  to="/profile"
                  className="text-slate-300 hover:text-white hover:translate-x-1 transition-all duration-200 flex items-center gap-2"
                >
                  My Account
                </Link>
              </li>
              <li>
                <Link
                  to="/organizer"
                  className="text-slate-300 hover:text-white hover:translate-x-1 transition-all duration-200 flex items-center gap-2"
                >
                  Create Event
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Support</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-slate-300 hover:text-white flex items-center gap-2">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-300 hover:text-white flex items-center gap-2">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-300 hover:text-white flex items-center gap-2">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-300 hover:text-white flex items-center gap-2">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">
              Get in Touch
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-slate-700 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-slate-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                </div>
                <p className="text-slate-300 text-sm">
                  456 Patna Street<br/>
                  Patna, Bihar 800001<br/>
                  India
                </p>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-slate-700 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-slate-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"/>
                  </svg>
                </div>
                <a href="mailto:hello@eventix.com"
                   className="text-slate-300 hover:text-white text-sm">
                  hello@eventix.com
                </a>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-slate-700 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-slate-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                  </svg>
                </div>
                <a href="tel:+915554443333"
                   className="text-slate-300 hover:text-white text-sm">
                  +91 555 444 3333
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-white/30">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-slate-400 text-sm">
              <span>&copy; {currentYear}</span>
              <span className="font-bold bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
                EvenTix
              </span>
              <span>All rights reserved.</span>
            </div>

            <div className="flex items-center gap-6 text-sm">
              <Link to="#" className="text-slate-400 hover:text-white transition-colors">Privacy Policy</Link>
              <Link to="#" className="text-slate-400 hover:text-white transition-colors">Cookie Policy</Link>
              <Link to="#" className="text-slate-400 hover:text-white transition-colors">Refund Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
);
}
