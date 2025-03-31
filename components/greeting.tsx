"use client"

import { motion } from "framer-motion"

export default function Greeting() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <motion.div
      className="rounded-xl bg-white/10 p-6 backdrop-blur-sm"
      variants={container}
      initial="hidden"
      animate="show"
    >
      <motion.div className="mb-6 flex flex-col items-center" variants={item}>
        <div className="mb-4 flex items-center justify-center">
          <div className="h-10 w-10 rotate-45 bg-green-600">
            <div className="absolute inset-1 bg-amber-100" />
          </div>
        </div>
        <h1 className="text-center font-arabic text-3xl font-bold text-amber-200">تَقَبَّلَ اللهُ مِنَّا وَمِنْكُم</h1>
        <p className="mt-2 text-center text-sm text-amber-100">Taqabbalallahu minna wa minkum</p>
      </motion.div>

      <motion.div className="mb-6 text-center" variants={item}>
        <h2 className="mb-2 text-2xl font-bold text-white">Eid Mubarak 1446 H!</h2>
        <p className="text-amber-100">
          May Allah grant us blessings, happiness, and abundant sustenance. Please forgive me for any mistakes, and may
          you have a joyous celebration.
        </p>
      </motion.div>

      <motion.div className="flex justify-center" variants={item}>
        <div className="h-px w-24 bg-gradient-to-r from-transparent via-amber-200 to-transparent" />
      </motion.div>
    </motion.div>
  )
}

