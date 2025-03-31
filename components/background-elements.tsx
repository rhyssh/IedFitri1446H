"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function BackgroundElements() {
  const [elements, setElements] = useState<
    Array<{ id: number; x: number; y: number; size: number; rotation: number; type: "ketupat" | "star" | "moon" }>
  >([])

  useEffect(() => {
    // Generate random background elements
    const newElements = []

    // Generate ketupat elements
    for (let i = 0; i < 8; i++) {
      newElements.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: 20 + Math.random() * 30,
        rotation: Math.random() * 360,
        type: "ketupat" as const,
      })
    }

    // Generate star elements
    for (let i = 0; i < 15; i++) {
      newElements.push({
        id: i + 100,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: 5 + Math.random() * 10,
        rotation: Math.random() * 360,
        type: "star" as const,
      })
    }

    // Generate moon elements
    for (let i = 0; i < 3; i++) {
      newElements.push({
        id: i + 200,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: 30 + Math.random() * 20,
        rotation: Math.random() * 360,
        type: "moon" as const,
      })
    }

    setElements(newElements)
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden">
      {elements.map((element) => (
        <motion.div
          key={element.id}
          className="absolute opacity-10"
          style={{
            left: `${element.x}%`,
            top: `${element.y}%`,
            width: `${element.size}px`,
            height: `${element.size}px`,
          }}
          animate={{
            y: [0, -10, 0],
            opacity: [0.05, 0.15, 0.05],
            rotate: element.rotation,
          }}
          transition={{
            duration: 5 + Math.random() * 5,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            delay: Math.random() * 5,
          }}
        >
          {element.type === "ketupat" && <div className="h-full w-full rotate-45 bg-amber-200" />}

          {element.type === "star" && (
            <div className="h-full w-full">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                  fill="currentColor"
                  className="text-amber-200"
                />
              </svg>
            </div>
          )}

          {element.type === "moon" && (
            <div className="h-full w-full">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
                  fill="currentColor"
                  className="text-amber-200"
                />
              </svg>
            </div>
          )}
        </motion.div>
      ))}
    </div>
  )
}

