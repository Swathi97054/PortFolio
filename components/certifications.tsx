"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Award } from "lucide-react" // Reverted to only Award icon
import { cn } from "@/lib/utils"

export function Certifications() {
  const [activeCardId, setActiveCardId] = useState<string | null>(null)

  const certifications = [
    {
      id: "ai-learnwik",
      title: "Industrial Training in Artificial Intelligence",
      organization: "Learnwik",
      color: "bg-blue-50 border-blue-200 dark:bg-blue-900/20 dark:border-blue-700",
      iconColor: "text-blue-600 dark:text-blue-400",
    },
    {
      id: "ml-fundamentals",
      title: "Machine Learning Fundamentals",
      organization: "Online Course",
      color: "bg-green-50 border-green-200 dark:bg-green-900/20 dark:border-green-700",
      iconColor: "text-green-600 dark:text-green-400",
    },
    {
      id: "dl-specialization",
      title: "Deep Learning Specialization",
      organization: "Coursera",
      color: "bg-orange-50 border-orange-200 dark:bg-orange-900/20 dark:border-orange-700",
      iconColor: "text-orange-600 dark:text-orange-400",
    },
    {
      id: "python-programming",
      title: "Python Programming",
      organization: "Programming Course",
      color: "bg-purple-50 border-purple-200 dark:bg-purple-900/20 dark:border-purple-700",
      iconColor: "text-purple-600 dark:text-purple-400",
    },
    {
      id: "data-science",
      title: "Data Science Fundamentals",
      organization: "Online Platform",
      color: "bg-pink-50 border-pink-200 dark:bg-pink-900/20 dark:border-pink-700",
      iconColor: "text-pink-600 dark:text-pink-400",
    },
    {
      id: "cv-basics",
      title: "Computer Vision Basics",
      organization: "AI Course",
      color: "bg-indigo-50 border-indigo-200 dark:bg-indigo-900/20 dark:border-indigo-700",
      iconColor: "text-indigo-600 dark:text-indigo-400",
    },
  ]

  const handleCardClick = (cardId: string) => {
    setActiveCardId(cardId === activeCardId ? null : cardId)
  }

  return (
    <section id="certifications" className="py-20 px-4 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-4">
            Certifications
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Professional certifications and training programs completed
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert) => (
            <Card
              key={cert.id}
              className={cn(
                `${cert.color} border-2 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 cursor-pointer dark:bg-gray-800`,
                activeCardId === cert.id && "ring-4 ring-blue-500 dark:ring-blue-400",
              )}
              onClick={() => handleCardClick(cert.id)}
            >
              <CardContent className="p-6 text-center">
                <div
                  className={`w-16 h-16 mx-auto mb-4 rounded-full bg-white dark:bg-gray-700 flex items-center justify-center shadow-sm`}
                >
                  <Award className={`w-8 h-8 ${cert.iconColor}`} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 leading-tight">{cert.title}</h3>
                <p className={`text-sm font-medium ${cert.iconColor}`}>{cert.organization}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
