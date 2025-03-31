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

export default function Home() {
  const [stage, setStage] = useState<"letter" | "greeting" | "quiz" | "reward">("letter")
  const [audioEnabled, setAudioEnabled] = useState(true)

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

      {audioEnabled && <AudioPlayer />}
    </main>
  )
}

