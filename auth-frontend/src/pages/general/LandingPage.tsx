import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div className="bg-black text-white h-screen flex flex-col font-sans overflow-y-scroll no-scrollbar">
      {/* Navbar */}
      <header className="flex justify-between items-center px-4 md:px-8 py-4 md:py-6 border-b border-gray-700">
        <motion.h1
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-lg md:text-3xl font-extrabold tracking-wide text-yellow drop-shadow-lg"
        >
          Auth10-tication
        </motion.h1>

        <motion.nav
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex gap-3 md:gap-6 items-center"
        >
          <Link
            to="/auth/login"
            className="px-3 py-1 md:px-4 md:py-2 rounded-lg border border-yellow text-yellow hover:bg-yellow hover:text-black transition"
          >
            Login
          </Link>
          <Link
            to="/auth/register"
            className="px-3 py-1 md:px-4 md:py-2 rounded-lg bg-yellow text-black bg-white hover:opacity-90 transition"
          >
            Register
          </Link>
        </motion.nav>
      </header>

      {/* Hero Section */}
      <section className="flex flex-1 flex-col md:flex-row items-center justify-center px-8 py-20 gap-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 space-y-6 text-center"
        >
          <h2 className="text-5xl md:text-6xl font-extrabold leading-tight">
            Auth10-tication
          </h2>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-primary py-6 text-center text-gray-500 border-t border-gray-700">
        © {new Date().getFullYear()} Auth10-tication. Built with passion 🚀
      </footer>
    </div>
  );
}
