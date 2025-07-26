"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { FileText, Code, ShieldCheck } from "lucide-react" // Removed Star icon
import { cn } from "@/lib/utils"

export function Achievements() {
  const [activeCardId, setActiveCardId] = useState<string | null>(null)

  const achievements = [
    {
      id: "hackathon-sql",
      icon: Code,
      title: "SQL Achievement (Hackathon)",
      description: "Achieved proficiency in SQL during a hackathon project.",
      color: "bg-blue-50 border-blue-200 dark:bg-blue-900/20 dark:border-blue-700",
      iconColor: "text-blue-600 dark:text-blue-400",
    },
    {
      id: "hackathon-python",
      icon: Code,
      title: "Python Achievement (Hackathon)",
      description: "Demonstrated strong Python skills during a hackathon project.",
      color: "bg-green-50 border-green-200 dark:bg-green-900/20 dark:border-green-700",
      iconColor: "text-green-600 dark:text-green-400",
    },
    {
      id: "cybersecurity-coursera",
      icon: ShieldCheck,
      title: "Cybersecurity Certificate",
      organization: "Coursera",
      description: "Completed a comprehensive cybersecurity certification from Coursera.",
      color: "bg-purple-50 border-purple-200 dark:bg-purple-900/20 dark:border-purple-700",
      iconColor: "text-purple-600 dark:text-purple-400",
    },
    {
      id: "research-publication",
      icon: FileText,
      title: "Research Publication: Missing Child Identification System",
      description: "Published a research paper using Deep Learning and Multiclass SVM.",
      color: "bg-teal-50 border-teal-200 dark:bg-teal-900/20 dark:border-teal-700",
      iconColor: "text-teal-600 dark:text-teal-400",
    },
    // Removed "Academic Excellence" achievement
  ]

  const handleCardClick = (cardId: string) => {
    setActiveCardId(cardId === activeCardId ? null : cardId)
  }

  return (
    <section
      id="achievements"
      className="py-20 px-4 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Achievements
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Recognitions and milestones in my academic and professional journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement) => (
            <Card
              key={achievement.id}
              className={cn(
                `${achievement.color} border-2 text-center p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 cursor-pointer dark:bg-gray-800`,
                activeCardId === achievement.id && "ring-4 ring-blue-500 dark:ring-blue-400",
              )}
              onClick={() => handleCardClick(achievement.id)}
            >
              <CardContent className="pt-6">
                <div
                  className={`w-16 h-16 mx-auto mb-4 rounded-full bg-white dark:bg-gray-700 flex items-center justify-center shadow-sm`}
                >
                  <achievement.icon className={`w-8 h-8 ${achievement.iconColor}`} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 leading-tight">
                  {achievement.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">{achievement.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
