import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Shield, Lock, Zap } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="h-screen w-screen overflow-hidden bg-linear-to-br from-blue-50 via-white to-purple-50 flex flex-col">
      {/* Navbar */}
      <header className="shrink-0 w-full px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xl sm:text-2xl lg:text-3xl font-bold gradient-text"
          >
            Auth10-tication
          </motion.h1>

          <motion.nav
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex gap-2 sm:gap-3 lg:gap-4 items-center"
          >
            <Link
              to="/auth/login"
              className="px-3 py-1.5 sm:px-4 sm:py-2 lg:px-5 lg:py-2.5 rounded-lg text-gray-700 hover:text-gray-900 font-medium transition-colors text-xs sm:text-sm lg:text-base"
            >
              Login
            </Link>
            <Link
              to="/auth/register"
              className="px-3 py-1.5 sm:px-4 sm:py-2 lg:px-5 lg:py-2.5 rounded-lg bg-linear-to-r from-blue-600 to-purple-600 text-white font-semibold hover:from-blue-700 hover:to-purple-700 shadow-md hover:shadow-lg transition-all duration-200 text-xs sm:text-sm lg:text-base"
            >
              Get Started
            </Link>
          </motion.nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8 min-h-0">
        <div className="max-w-5xl mx-auto text-center w-full h-full flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-3 sm:space-y-4 lg:space-y-6"
          >
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight">
              Secure Authentication
              <br />
              <span className="gradient-text">Made Simple</span>
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-600 max-w-2xl mx-auto px-2">
              A modern, secure, and user-friendly authentication system built for the future.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center pt-2 sm:pt-4">
              <Link
                to="/auth/register"
                className="px-5 py-2.5 sm:px-6 sm:py-3 lg:px-8 lg:py-4 rounded-lg bg-linear-to-r from-blue-600 to-purple-600 text-white font-semibold text-sm sm:text-base lg:text-lg hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-200 w-full sm:w-auto"
              >
                Get Started
              </Link>
              <Link
                to="/auth/login"
                className="px-5 py-2.5 sm:px-6 sm:py-3 lg:px-8 lg:py-4 rounded-lg bg-white text-gray-700 font-semibold text-sm sm:text-base lg:text-lg border-2 border-gray-200 hover:border-gray-300 shadow-md hover:shadow-lg transition-all duration-200 w-full sm:w-auto"
              >
                Sign In
              </Link>
            </div>
          </motion.div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 lg:gap-6 xl:gap-8 mt-4 sm:mt-6 lg:mt-8 xl:mt-12"
          >
            <div className="bg-white rounded-xl p-4 sm:p-5 lg:p-6 xl:p-8 shadow-lg border border-gray-100">
              <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-3 sm:mb-4 mx-auto">
                <Shield className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-blue-600" />
              </div>
              <h3 className="text-base sm:text-lg lg:text-xl xl:text-2xl font-bold text-gray-900 mb-1 sm:mb-2">Secure</h3>
              <p className="text-gray-600 text-xs sm:text-sm lg:text-base">
                Enterprise-grade security to protect your data
              </p>
            </div>

            <div className="bg-white rounded-xl p-4 sm:p-5 lg:p-6 xl:p-8 shadow-lg border border-gray-100">
              <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-purple-100 rounded-lg flex items-center justify-center mb-3 sm:mb-4 mx-auto">
                <Zap className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-purple-600" />
              </div>
              <h3 className="text-base sm:text-lg lg:text-xl xl:text-2xl font-bold text-gray-900 mb-1 sm:mb-2">Fast</h3>
              <p className="text-gray-600 text-xs sm:text-sm lg:text-base">
                Lightning-fast authentication with minimal latency
              </p>
            </div>

            <div className="bg-white rounded-xl p-4 sm:p-5 lg:p-6 xl:p-8 shadow-lg border border-gray-100">
              <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-green-100 rounded-lg flex items-center justify-center mb-3 sm:mb-4 mx-auto">
                <Lock className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-green-600" />
              </div>
              <h3 className="text-base sm:text-lg lg:text-xl xl:text-2xl font-bold text-gray-900 mb-1 sm:mb-2">Reliable</h3>
              <p className="text-gray-600 text-xs sm:text-sm lg:text-base">
                Trusted by thousands of users worldwide
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="flex-shrink-0 w-full px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 border-t border-gray-200 bg-white/50">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-600 text-xs sm:text-sm lg:text-base">
            © {new Date().getFullYear()} Auth10-tication. Built with passion 🚀
          </p>
        </div>
      </footer>
    </div>
  );
}
