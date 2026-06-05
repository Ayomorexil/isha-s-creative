import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "../../assets/logo.png";

export default function Navbar() {
  return (
    <div className="fixed w-full z-50 backdrop-blur-lg bg-black/30 border-b border-white/10 px-6 py-4 flex justify-between items-center text-white">

      {/* Animated Logo */}
      <Link to="/" className="flex items-center gap-2">
        <motion.img
          src={logo}
          alt="Isha's Creative"
          className="h-10 w-auto object-contain"
          
          initial={{ opacity: 0, scale: 0.8, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}

          whileHover={{ scale: 1.1 }}
        />
      </Link>

      {/* Menu */}
      <div className="hidden md:flex gap-8 items-center">
        <Link to="/" className="hover:text-primary transition">Home</Link>
        <Link to="/services" className="hover:text-primary transition">Services</Link>
        <Link to="/work" className="hover:text-primary transition">Work</Link>
        <Link to="/contact" className="hover:text-primary transition">Contact</Link>
      </div>

      {/* Button */}
      <Link to="/contact">
        <button className="btn btn-primary btn-sm">
          Hire Us
        </button>
      </Link>
    </div>
  );
}