import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-black text-white relative overflow-hidden">

      {/* Animated gradient blobs */}
      <div className="absolute w-[500px] h-[500px] bg-[#8C0649]  blur-3xl rounded-full top-[-100px] left-[-100px] animate-pulse" />
      <div className="absolute w-[400px] h-[400px] bg-[#8C0649]  blur-3xl rounded-full bottom-[-100px] right-[-100px] animate-pulse" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-3xl px-4 z-10"
      >
        <h1 className="text-5xl md:text-6xl font-bold leading-tight">
           ISHA'S CREATIVE <span className="text-primary"> Premium Yarns & Crafting </span> Tools Await!
        </h1>

        <p className="py-6 text-gray-400 text-lg">
          Discover high-quality yarns, knitting/crochet tools, and craft accessories to bring your ideas to life.
        </p>

        <div className="flex gap-4 justify-center">
          <button className="btn btn-primary">Shop Quality Now 🛒  </button>
          
        </div>
      </motion.div>
    </section>
  );
}