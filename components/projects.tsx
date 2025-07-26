"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Zap } from "lucide-react"
import { cn } from "@/lib/utils"

interface Project {
  id: string
  title: string
  category: string
  description: string
  technologies: string[]
  accuracy: string
  highlights: string[]
  image: string
  codeLink?: string // This will be the GitHub URL
  demoLink?: string
  bgColor: string
  borderColor: string
}

export function Projects() {
  const [activeCardId, setActiveCardId] = useState<string | null>(null)

  const projects: Project[] = [
    {
      id: "fake-news",
      title: "Fake News Detection Analysis",
      category: "Deep Learning",
      description:
        "Advanced deep learning system for identifying fake news articles using LSTM networks. Achieved exceptional 99.3% accuracy through sophisticated neural network architecture.",
      technologies: ["Python", "TensorFlow", "Keras", "LSTM", "Pandas", "NumPy", "Scikit-learn"],
      accuracy: "99.3%",
      highlights: [
        "Implemented LSTM neural network architecture",
        "Processed Kaggle's 'Fake and real news' dataset",
        "Achieved 99.3% accuracy in just 5 training epochs",
        "Advanced text preprocessing and feature extraction",
      ],
      image: "/images/fake-news.png",
      codeLink: "https://github.com/Swathi97054/Fake-News-detection-with-DL", // Placeholder GitHub URL
      demoLink: "#",
      bgColor: "bg-gradient-to-br from-purple-50 to-pink-100 dark:from-purple-900/20 dark:to-pink-900/20",
      borderColor: "border-purple-200 dark:border-purple-700",
    },
    {
      id: "language-detection",
      title: "Language Detection System",
      category: "Machine Learning",
      description:
        "Intelligent language detection model using Multinomial Naïve Bayes algorithm for text classification with perfect accuracy across multiple languages.",
      technologies: ["Python", "Scikit-learn", "Multinomial Naïve Bayes", "NLP", "Text Processing"],
      accuracy: "100%",
      highlights: [
        "Perfect 100% accuracy in language detection",
        "Multinomial Naïve Bayes implementation",
        "Robust text classification pipeline",
        "Multi-language support and processing",
      ],
      image: "/images/language-detection.png",
      codeLink: "https://github.com/Swathi97054/Language-Detection-With-ML", // Placeholder GitHub URL
      demoLink: "#",
      bgColor: "bg-gradient-to-br from-blue-50 to-cyan-100 dark:from-blue-900/20 dark:to-cyan-900/20",
      borderColor: "border-blue-200 dark:border-blue-700",
    },
    {
      id: "qr-code",
      title: "QR Code Generator",
      category: "Python Development",
      description:
        "Versatile QR code generation system capable of encoding various data types including URLs, text, and images into high-quality QR codes.",
      technologies: ["Python", "qrcode", "IPython", "Image Processing"],
      accuracy: "Production Ready",
      highlights: [
        "Multi-format data encoding support",
        "High-quality QR code image generation",
        "User-friendly interface design",
        "Efficient image processing pipeline",
      ],
      image: "/images/qr-code.png",
      codeLink: "https://github.com/Swathi97054/QR-Code", // Placeholder GitHub URL
      demoLink: "#",
      bgColor: "bg-gradient-to-br from-orange-50 to-red-100 dark:from-orange-900/20 dark:to-red-900/20",
      borderColor: "border-orange-200 dark:border-orange-700",
    },
  ]

  const handleCardClick = (projectId: string) => {
    setActiveCardId(projectId === activeCardId ? null : projectId)
  }

  return (
    <section id="projects" className="py-20 px-4 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Showcasing innovative AI and machine learning solutions with exceptional performance metrics
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.id}
              className={cn(
                `${project.bgColor} ${project.borderColor} border-2 overflow-hidden rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700 hover:shadow-xl transition-all duration-300 cursor-pointer`,
                activeCardId === project.id && "ring-4 ring-blue-500 dark:ring-blue-400 transform scale-[1.01]",
              )}
              onClick={() => handleCardClick(project.id)}
            >
              <div className="relative w-full h-48 overflow-hidden group">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 space-y-2">
                  <div className="flex flex-wrap justify-center gap-2 mb-2">
                    {project.technologies.slice(0, 3).map((tech, idx) => (
                      <Badge key={idx} className="bg-blue-500 text-white text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge className="bg-blue-500 text-white text-xs">+{project.technologies.length - 3}</Badge>
                    )}
                  </div>
                  <div className="flex gap-2">
                    {project.codeLink && (
                      <Button
                        variant="secondary"
                        size="sm"
                        className="flex items-center gap-1 text-xs"
                        asChild // Make the button act as a link
                      >
                        <a href={project.codeLink} target="_blank" rel="noopener noreferrer">
                          <Github className="w-3 h-3" /> Code
                        </a>
                      </Button>
                    )}
                    {project.demoLink && (
                      <Button variant="secondary" size="sm" className="flex items-center gap-1 text-xs">
                        <ExternalLink className="w-3 h-3" /> Demo
                      </Button>
                    )}
                  </div>
                  <Badge className="bg-green-500 text-white text-sm mt-2">
                    <Zap className="w-3 h-3 mr-1" /> {project.accuracy}
                  </Badge>
                </div>
              </div>
              <CardHeader className="p-4 pb-2">
                <CardTitle className="text-xl text-gray-900 dark:text-white mb-1">{project.title}</CardTitle>
                <Badge variant="secondary" className="w-fit text-xs dark:bg-gray-700 dark:text-gray-200">
                  {project.category}
                </Badge>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">{project.description}</p>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Key Highlights:</h4>
                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  {project.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-blue-600 dark:bg-blue-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
