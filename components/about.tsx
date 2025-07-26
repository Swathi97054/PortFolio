"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Brain, Code, Database, TrendingUp } from "lucide-react"
import { cn } from "@/lib/utils"

export function About() {
  const [activeCardId, setActiveCardId] = useState<string | null>(null)

  const highlights = [
    {
      id: "ai-ml",
      icon: Brain,
      title: "AI & Machine Learning",
      description: "Specialized in deep learning, neural networks, and advanced ML algorithms",
      bgColor: "bg-gradient-to-br from-purple-50 to-pink-100 dark:from-purple-900/20 dark:to-pink-900/20",
      iconColor: "text-purple-600 dark:text-purple-400",
      borderColor: "border-purple-200 dark:border-purple-700",
    },
    {
      id: "programming",
      icon: Code,
      title: "Programming Excellence",
      description: "Proficient in Python, TensorFlow, Keras, and modern ML frameworks",
      bgColor: "bg-gradient-to-br from-blue-50 to-cyan-100 dark:from-blue-900/20 dark:to-cyan-900/20",
      iconColor: "text-blue-600 dark:text-blue-400",
      borderColor: "border-blue-200 dark:border-blue-700",
    },
    {
      id: "data-analysis",
      icon: Database,
      title: "Data Analysis",
      description: "Expert in data preprocessing, feature engineering, and statistical analysis",
      bgColor: "bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-900/20 dark:to-emerald-900/20",
      iconColor: "text-green-600 dark:text-green-400",
      borderColor: "border-green-200 dark:border-green-700",
    },
    {
      id: "performance",
      icon: TrendingUp,
      title: "High Performance",
      description: "Consistently achieving 99%+ accuracy in machine learning projects",
      bgColor: "bg-gradient-to-br from-orange-50 to-red-100 dark:from-orange-900/20 dark:to-red-900/20",
      iconColor: "text-orange-600 dark:text-orange-400",
      borderColor: "border-orange-200 dark:border-orange-700",
    },
  ]

  const handleCardClick = (cardId: string) => {
    setActiveCardId(cardId === activeCardId ? null : cardId)
  }

  return (
    <section id="about" className="py-20 px-4 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            About Me
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-4xl mx-auto text-justify mb-4">
            {/* Increased max-w to max-w-4xl and added text-justify */}
            Passionate about transforming data into intelligent solutions through cutting-edge artificial intelligence
            and machine learning technologies.
          </p>
          {/* Career Objective content moved here, also with max-w-4xl and text-justify */}
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-4xl mx-auto text-justify mb-12">
            To secure a challenging position in a dynamic organization where I can apply my strong programming skills,
            analytical abilities, and passion for artificial intelligence and machine learning to develop innovative
            solutions and contribute to cutting-edge technological advancements. Eager to learn and grow in a
            collaborative environment.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item) => (
            <Card
              key={item.id}
              className={cn(
                `${item.bgColor} ${item.borderColor} border-2 text-center p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer dark:bg-gray-800`,
                activeCardId === item.id && "ring-4 ring-blue-500 dark:ring-blue-400",
              )}
              onClick={() => handleCardClick(item.id)}
            >
              <CardContent className="pt-6">
                <div
                  className={`w-16 h-16 mx-auto mb-4 rounded-full bg-white dark:bg-gray-700 flex items-center justify-center shadow-lg`}
                >
                  <item.icon className={`w-8 h-8 ${item.iconColor}`} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
