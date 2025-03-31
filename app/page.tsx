"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Letter from "@/components/letter"
import Greeting from "@/components/greeting"
import ActionButtons from "@/components/action-buttons"
import Quiz from "@/components/quiz"
import Reward from "@/components/reward"
import BackgroundElements from "@/components/background-elements"
import AudioPlayer from "@/components/audio-player"
import Link from "next/link"

export default function Home() {
  const [stage, setStage] = useState<"letter" | "greeting" | "quiz" | "reward">("letter")
  const [audioEnabled, setAudioEnabled] = useState(false)

  const handleLetterClick = () => {
    setStage("greeting")
  }

  const handleActionChoice = (choice: "end" | "quiz") => {
    if (choice === "end") {
      setStage("letter")
    } else {
      setStage("quiz")
    }
  }

  const handleQuizComplete = () => {
    setStage("reward")
  }

  const handleRestart = () => {
    setStage("letter")
  }

  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-green-900 to-green-700 text-white">
      <BackgroundElements />

      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center p-4">
        <AnimatePresence mode="wait">
          {stage === "letter" && (
            <motion.div
              key="letter"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="w-full max-w-md"
            >
              <Letter onClick={handleLetterClick} />
            </motion.div>
          )}

          {stage === "greeting" && (
            <motion.div
              key="greeting"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="w-full max-w-md"
            >
              <Greeting />
              <ActionButtons onChoice={handleActionChoice} />
            </motion.div>
          )}

          {stage === "quiz" && (
            <motion.div
              key="quiz"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5 }}
              className="w-full max-w-md"
            >
              <Quiz onComplete={handleQuizComplete} />
            </motion.div>
          )}

          {stage === "reward" && (
            <motion.div
              key="reward"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5 }}
              className="w-full max-w-md"
            >
              <Reward onRestart={handleRestart} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <button
        onClick={() => setAudioEnabled(!audioEnabled)}
        className="absolute bottom-4 right-4 z-20 rounded-full bg-white/20 p-2 text-white backdrop-blur-sm transition-all hover:bg-white/30"
        aria-label={audioEnabled ? "Mute audio" : "Enable audio"}
      >
        {audioEnabled ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
            <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
            <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
            <line x1="23" y1="9" x2="17" y2="15" />
            <line x1="17" y1="9" x2="23" y2="15" />
          </svg>
        )}
      </button>

      <Link
        href="https://www.linkedin.com/in/reiki-aziz/"
        target="_blank"
        className="absolute bottom-4 left-4 z-20 flex items-center rounded-full bg-white/20 px-4 py-2 text-white backdrop-blur-sm transition-all hover:bg-white/30 hover:text-amber-200"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="mr-2"
        >
          <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 00.1.4V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
        </svg>
        <span className="font-medium">LinkedIn</span>
      </Link>

      {audioEnabled && <AudioPlayer />}
    </main>
  )
}

