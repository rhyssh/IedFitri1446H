"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import Confetti from "@/components/confetti"

interface QuizProps {
  onComplete: () => void
}

interface Question {
  question: string
  options: string[]
  correctAnswer: number
}

export default function Quiz({ onComplete }: QuizProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [selectedOption, setSelectedOption] = useState<number | null>(null)
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null)
  const [showConfetti, setShowConfetti] = useState(false)

  const questions: Question[] = [
    {
      question: "What does Taqabbalallahu minna wa minkum mean?",
      options: [
        "Happy Eid Mubarak",
        "May Allah accept it from us and from you",
        "Peace be upon you",
        "Praise be to Allah",
      ],
      correctAnswer: 1,
    },
    {
      question: "How many rak'ahs are in the Eid prayer?",
      options: ["2 rak'ahs", "3 rak'ahs", "4 rak'ahs", "6 rak'ahs"],
      correctAnswer: 0,
    },
    {
      question: "What is a Sunnah act before performing Eid prayer?",
      options: [
        "Fasting before the prayer",
        "Taking a bath and wearing new clothes",
        "Reciting the entire Quran",
        "Staying silent until the prayer begins",
      ],
      correctAnswer: 1,
    },
  ]

  const currentQuestion = questions[currentQuestionIndex]

  const handleOptionSelect = (index: number) => {
    setSelectedOption(index)
  }

  const handleSubmit = () => {
    if (selectedOption === null) return

    const correct = selectedOption === currentQuestion.correctAnswer
    setIsCorrect(correct)

    if (correct) {
      setShowConfetti(true)
      setTimeout(() => {
        setShowConfetti(false)
        if (currentQuestionIndex < questions.length - 1) {
          setCurrentQuestionIndex(currentQuestionIndex + 1)
          setSelectedOption(null)
          setIsCorrect(null)
        } else {
          onComplete()
        }
      }, 2000)
    }
  }

  const handleRetry = () => {
    setSelectedOption(null)
    setIsCorrect(null)
  }

  return (
    <div className="rounded-xl bg-white/10 p-6 backdrop-blur-sm">
      <h2 className="mb-6 text-center text-2xl font-bold text-white">THR Quiz Challenge</h2>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentQuestionIndex}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          <div className="mb-6">
            <h3 className="mb-4 text-lg font-medium text-amber-100">{currentQuestion.question}</h3>

            <RadioGroup value={selectedOption?.toString()} className="space-y-3">
              {currentQuestion.options.map((option, index) => (
                <div
                  key={index}
                  className={`rounded-lg border border-white/20 p-3 transition-colors ${
                    selectedOption === index
                      ? "border-amber-300 bg-amber-500/20"
                      : "hover:border-white/40 hover:bg-white/5"
                  }`}
                  onClick={() => handleOptionSelect(index)}
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem
                      value={index.toString()}
                      id={`option-${index}`}
                      checked={selectedOption === index}
                    />
                    <Label htmlFor={`option-${index}`} className="w-full cursor-pointer text-white">
                      {option}
                    </Label>
                  </div>
                </div>
              ))}
            </RadioGroup>
          </div>

          {isCorrect === null ? (
            <Button
              className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-white hover:from-amber-600 hover:to-amber-700"
              onClick={handleSubmit}
              disabled={selectedOption === null}
            >
              Submit Answer
            </Button>
          ) : isCorrect ? (
            <div className="rounded-lg bg-green-500/20 p-4 text-center text-green-100">
              <p className="text-lg font-bold">Correct! 🎉</p>
              <p className="text-sm">
                {currentQuestionIndex < questions.length - 1 ? "Moving to next question..." : "Completing the quiz..."}
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              <div className="rounded-lg bg-red-500/20 p-4 text-center text-red-100">
                <p>That's not correct. Try again!</p>
              </div>
              <Button className="w-full bg-white/20 text-white hover:bg-white/30" onClick={handleRetry}>
                Retry
              </Button>
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      <div className="mt-6 flex justify-center">
        <div className="flex gap-2">
          {questions.map((_, index) => (
            <div
              key={index}
              className={`h-2 w-8 rounded-full ${
                index === currentQuestionIndex
                  ? "bg-amber-400"
                  : index < currentQuestionIndex
                    ? "bg-green-400"
                    : "bg-white/20"
              }`}
            />
          ))}
        </div>
      </div>

      {showConfetti && <Confetti />}
    </div>
  )
}

