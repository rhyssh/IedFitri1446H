"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

interface ActionButtonsProps {
  onChoice: (choice: "end" | "quiz") => void
}

export default function ActionButtons({ onChoice }: ActionButtonsProps) {
  return (
    <motion.div
      className="mt-6 flex flex-col gap-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6 }}
    >
      <Button
        variant="outline"
        className="border-amber-200 bg-transparent text-amber-100 hover:bg-amber-200/10 hover:text-amber-50"
        onClick={() => onChoice("end")}
      >
        Thank You, Waiyyakum
      </Button>

      <Button
        className="bg-gradient-to-r from-amber-500 to-amber-600 text-white hover:from-amber-600 hover:to-amber-700"
        onClick={() => onChoice("quiz")}
      >
        Claim Your THR!
      </Button>
    </motion.div>
  )
}

