"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Confetti from "@/components/confetti"

interface RewardProps {
  onRestart: () => void
}

export default function Reward({ onRestart }: RewardProps) {
  const [showConfetti, setShowConfetti] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowConfetti(false)
    }, 5000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="relative rounded-xl bg-white/10 p-6 backdrop-blur-sm">
      <motion.div
        className="mb-6 flex flex-col items-center"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <div className="mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-amber-500/30">
          <div className="h-16 w-16 rounded-full bg-amber-500/50 p-4">
            <div className="h-full w-full rounded-full bg-amber-500" />
          </div>
        </div>

        <h2 className="mb-2 text-center text-2xl font-bold text-white">Congratulations! 🎉</h2>
        <p className="text-center text-amber-100">You have earned your THR</p>
      </motion.div>

      <motion.div
        className="mb-8 flex justify-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <div className="relative h-32 w-48 overflow-hidden rounded-lg bg-gradient-to-br from-amber-500 to-amber-600 p-4 shadow-lg">
          <div className="absolute -right-4 -top-4 h-16 w-16 rounded-full bg-amber-400/30" />
          <div className="absolute -bottom-4 -left-4 h-16 w-16 rounded-full bg-amber-400/30" />

          <div className="relative flex h-full flex-col items-center justify-center">
            <div className="mb-2 text-xs font-medium uppercase tracking-wider text-amber-200">Special Gift</div>
            <div className="text-center text-xl font-bold text-white">THR Voucher</div>
            <div className="mt-2 text-center text-xs text-amber-100">Tap to claim your special Eid gift</div>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="flex flex-col gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <Button
          className="bg-gradient-to-r from-amber-500 to-amber-600 text-white hover:from-amber-600 hover:to-amber-700"
          onClick={() => window.open("https://app.shopeepay.co.id/u/PRTdtVMaesip3rfg7ztYV", "_blank")}
        >
          Claim THR Now!
        </Button>

        <Button
          variant="outline"
          className="border-amber-200 bg-transparent text-amber-100 hover:bg-amber-200/10 hover:text-amber-50"
          onClick={onRestart}
        >
          Back to Start
        </Button>
      </motion.div>

      {showConfetti && <Confetti />}
    </div>
  )
}

