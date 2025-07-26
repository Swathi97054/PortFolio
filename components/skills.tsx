"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { cn } from "@/lib/utils"

export function Skills() {
  const [activeCategory, setActiveCategory] = useState("AI/ML")
  const [activeSkillCardId, setActiveSkillCardId] = useState<string | null>(null)

  const skillCategories = [
    {
      name: "AI/ML",
      skills: [
        { id: "machine-learning", name: "Machine Learning", level: 95 }, // Changed from Python
        { id: "deep-learning", name: "Deep Learning", level: 90 },
        { id: "neural-networks", name: "Neural Networks", level: 90 },
        { id: "computer-vision", name: "Computer Vision", level: 85 },
        { id: "nlp", name: "Natural Language Processing", level: 85 },
      ],
    },
    {
      name: "Backend",
      skills: [
        { id: "python-backend", name: "Python", level: 85 }, // Added Python
        { id: "c-lang", name: "C", level: 75 }, // Added C
        { id: "java", name: "Java", level: 70 }, // Added Java
        { id: "sql", name: "SQL", level: 80 },
      ],
    },
    {
      name: "Frontend",
      skills: [
        { id: "html5", name: "HTML5", level: 85 }, // Updated to 85
        { id: "css", name: "CSS", level: 80 }, // Updated to 80
        { id: "javascript", name: "JavaScript", level: 70 },
        // Removed React
      ],
    },
    {
      name: "Libraries & Tools",
      skills: [
        { id: "tensorflow", name: "TensorFlow", level: 90 },
        { id: "keras", name: "Keras", level: 90 },
        { id: "scikit-learn", name: "Scikit-learn", level: 95 },
        { id: "pandas", name: "Pandas", level: 95 },
        { id: "numpy", name: "NumPy", level: 95 },
        { id: "jupyter", name: "Jupyter Notebook", level: 90 },
        { id: "git", name: "Git & GitHub", level: 85 },
        { id: "cursor", name: "Cursor", level: 70 }, // Added Cursor
      ],
    },
  ]

  const handleSkillCardClick = (skillId: string) => {
    setActiveSkillCardId(skillId === activeSkillCardId ? null : skillId)
  }

  const currentSkills = skillCategories.find((cat) => cat.name === activeCategory)?.skills || []

  return (
    <section
      id="skills"
      className="py-20 px-4 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Skills & Expertise
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Comprehensive technical skills in AI, machine learning, and software development
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center mb-12">
          <div className="flex space-x-2 p-1 rounded-lg bg-gray-100 dark:bg-gray-800">
            {skillCategories.map((category) => (
              <button
                key={category.name}
                onClick={() => setActiveCategory(category.name)}
                className={cn(
                  "px-6 py-2 rounded-md text-base font-medium transition-colors duration-200",
                  activeCategory === category.name
                    ? "bg-gray-900 text-white dark:bg-gray-700 dark:text-white"
                    : "text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700",
                )}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentSkills.map((skill) => (
            <Card
              key={skill.id}
              className={cn(
                "p-6 hover:shadow-lg transition-all duration-300 cursor-pointer dark:bg-gray-800 dark:border-gray-700",
                activeSkillCardId === skill.id && "ring-4 ring-blue-500 dark:ring-blue-400",
              )}
              onClick={() => handleSkillCardClick(skill.id)}
            >
              <CardContent className="p-0">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-lg font-medium text-gray-700 dark:text-gray-200">{skill.name}</span>
                  <span className="text-base text-gray-500 dark:text-gray-400">{skill.level}%</span>
                </div>
                <Progress value={skill.level} className="h-2 bg-gray-200 dark:bg-gray-700" />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
