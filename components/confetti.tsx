"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function Confetti() {
  const [particles, setParticles] = useState<
    Array<{
      id: number
      x: number
      y: number
      size: number
      color: string
      rotation: number
    }>
  >([])

  useEffect(() => {
    const colors = ["#FFD700", "#4CAF50", "#FF9800", "#E91E63", "#2196F3"]
    const newParticles = []

    for (let i = 0; i < 50; i++) {
      newParticles.push({
        id: i,
        x: 50 + (Math.random() - 0.5) * 30,
        y: 0,
        size: 5 + Math.random() * 10,
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: Math.random() * 360,
      })
    }

    setParticles(newParticles)
  }, [])

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            backgroundColor: particle.color,
            borderRadius: Math.random() > 0.5 ? "50%" : "0%",
          }}
          initial={{ y: "0%", x: `${particle.x}%`, rotate: 0 }}
          animate={{
            y: "100%",
            x: `${particle.x + (Math.random() - 0.5) * 20}%`,
            rotate: particle.rotation,
          }}
          transition={{
            duration: 2 + Math.random() * 2,
            ease: "easeOut",
          }}
        />
      ))}
    </div>
  )
}

