"use client"

import { useState } from "react"
import { motion } from "framer-motion"

interface LetterProps {
  onClick: () => void
}

export default function Letter({ onClick }: LetterProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className="flex flex-col items-center justify-center">
      <motion.div
        className="relative cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={onClick}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
      >
        <motion.div
          className="relative h-64 w-48 rounded-lg bg-gradient-to-br from-amber-100 to-amber-50 p-6 shadow-lg"
          animate={{
            boxShadow: isHovered ? "0 0 25px 5px rgba(255, 215, 0, 0.5)" : "0 5px 15px rgba(0, 0, 0, 0.1)",
          }}
        >
          {/* Decorative elements */}
          <div className="absolute inset-0 overflow-hidden rounded-lg">
            <div className="absolute -right-6 -top-6 h-16 w-16 rounded-full bg-green-500/20" />
            <div className="absolute -bottom-6 -left-6 h-16 w-16 rounded-full bg-green-500/20" />
            <div className="absolute left-1/2 top-6 h-8 w-8 -translate-x-1/2 rounded-full bg-green-500/20" />
          </div>

          {/* Seal */}
          <div className="absolute left-1/2 top-6 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full bg-green-700 shadow-md">
            <div className="h-10 w-10 rounded-full border-2 border-dashed border-amber-200" />
          </div>

          {/* Letter content */}
          <div className="mt-16 flex flex-col items-center">
            <div className="h-2 w-16 bg-gray-300" />
            <div className="mt-2 h-2 w-24 bg-gray-300" />
            <div className="mt-2 h-2 w-20 bg-gray-300" />
            <div className="mt-2 h-2 w-24 bg-gray-300" />
            <div className="mt-2 h-2 w-16 bg-gray-300" />
          </div>

          {/* Ketupat decoration */}
          <div className="absolute bottom-4 right-4 h-10 w-10 rotate-45 bg-green-600">
            <div className="absolute inset-1 bg-amber-100" />
          </div>
        </motion.div>

        {/* Glow effect */}
        <motion.div
          className="absolute inset-0 rounded-lg bg-amber-400 opacity-0 blur-xl"
          animate={{
            opacity: isHovered ? 0.3 : 0,
          }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>

      <motion.p
        className="mt-6 text-center font-medium text-amber-100"
        animate={{
          y: [0, -5, 0],
        }}
        transition={{
          duration: 2,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      >
        Click to open the Eid Mubarak letter
      </motion.p>
    </div>
  )
}

