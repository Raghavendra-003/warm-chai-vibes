import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-screen flex flex-col justify-center items-center bg-gradient-to-r from-gray-900 via-black to-gray-800 text-white">
      <motion.h1
        className="text-6xl md:text-7xl font-extrabold mb-6 text-center tracking-wide"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Welcome to <span className="text-yellow-400">Warm Chai Vibes</span>
      </motion.h1>
      <motion.p
        className="text-lg md:text-2xl mb-8 text-gray-300 max-w-xl text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        A premium experience where taste meets tradition 🍵
      </motion.p>
      <motion.button
        className="px-8 py-3 bg-yellow-500 rounded-full text-black font-semibold shadow-lg hover:bg-yellow-400 hover:scale-105 transition"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        Explore Menu
      </motion.button>
    </section>
  );
}
