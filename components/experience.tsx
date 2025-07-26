"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Building, Star, CheckCircle } from "lucide-react"
import { cn } from "@/lib/utils"

export function Experience() {
  const [activeCardId, setActiveCardId] = useState<string | null>(null)

  const experiences = [
    {
      id: "learnwik-internship",
      title: "Artificial Intelligence Intern",
      company: "Learnwik",
      duration: "February 2023 - April 2023",
      location: "Remote",
      type: "Internship",
      description:
        "Completed comprehensive industrial training on artificial intelligence, covering key concepts and practical applications of AI technologies in real-world scenarios.",
      achievements: [
        "Gained hands-on experience in machine learning and computer vision applications",
        "Worked on face recognition systems and smart car technologies implementation",
        "Developed practical skills in AI model deployment and optimization",
        "Completed advanced training modules in deep learning frameworks and neural networks",
        "Collaborated on AI projects focusing on innovative solutions for industry challenges",
      ],
      technologies: [
        "Python",
        "Machine Learning",
        "Computer Vision",
        "Face Recognition",
        "Deep Learning",
        "AI Applications",
      ],
      bgColor: "bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20",
      borderColor: "border-blue-200 dark:border-blue-700",
      iconBg: "bg-blue-500",
    },
  ]

  const handleCardClick = (cardId: string) => {
    setActiveCardId(cardId === activeCardId ? null : cardId)
  }

  return (
    <section
      id="experience"
      className="py-20 px-4 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Professional Experience
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Building expertise through hands-on experience in artificial intelligence and machine learning technologies
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp) => (
            <Card
              key={exp.id}
              className={cn(
                `${exp.bgColor} ${exp.borderColor} border-2 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer dark:bg-gray-800`,
                activeCardId === exp.id && "ring-4 ring-blue-500 dark:ring-blue-400",
              )}
              onClick={() => handleCardClick(exp.id)}
            >
              <CardHeader className="pb-4">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                  <div className="flex items-start gap-4">
                    <div
                      className={`${exp.iconBg} w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0`}
                    >
                      <Building className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl text-gray-900 dark:text-white mb-2">{exp.title}</CardTitle>
                      <div className="flex items-center gap-2 text-blue-700 dark:text-blue-400 font-semibold text-lg mb-2">
                        <Building className="w-5 h-5" />
                        {exp.company}
                      </div>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          {exp.duration}
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          {exp.location}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start lg:items-end gap-2">
                    <Badge className="bg-green-100 text-green-800 border-green-300 hover:bg-green-200 dark:bg-green-900/20 dark:text-green-400 dark:border-green-700">
                      <Star className="w-3 h-3 mr-1" />
                      {exp.type}
                    </Badge>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-base">{exp.description}</p>

                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
                    Key Achievements & Learning:
                  </h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start text-gray-700 dark:text-gray-300">
                        <span className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span className="text-sm leading-relaxed">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Technologies & Skills:</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, idx) => (
                      <Badge
                        key={idx}
                        variant="outline"
                        className="text-xs bg-white/50 border-blue-300 text-blue-700 hover:bg-blue-50 dark:bg-gray-700 dark:border-blue-700 dark:text-blue-400"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Timeline decoration */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-md border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
            <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
            <span className="text-sm text-gray-600 dark:text-gray-400 font-medium">
              Professional Journey Continues...
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
