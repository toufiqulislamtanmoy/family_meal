"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="bg-white shadow-xl rounded-3xl p-10 w-full max-w-md text-center flex flex-col items-center"
      >
        <h1 className="text-3xl font-bold text-blue-700 mb-4 tracking-tight">
          Welcome to Family Meal
        </h1>
        <p className="text-gray-600 mb-8">
          Track deposits and expenses effortlessly with your friends and family.
          Keep everything organized in one place.
        </p>

        <div className="flex flex-col gap-4 w-full">
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            <Link
              href="/login"
              className="block w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition shadow-md"
            >
              Login
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            <Link
              href="/register"
              className="block w-full border border-blue-600 text-blue-600 py-3 rounded-xl hover:bg-blue-100 transition shadow-sm"
            >
              Register
            </Link>
          </motion.div>
        </div>

        <p className="text-gray-400 text-sm mt-6">
          &copy; 2025 Family Meal - TiT. All rights reserved.
        </p>
      </motion.div>
    </div>
  );
}
