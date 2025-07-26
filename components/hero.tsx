"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Download, ExternalLink } from "lucide-react"

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const headerHeight = 80
      const elementPosition = element.offsetTop - headerHeight
      window.scrollTo({ top: elementPosition, behavior: "smooth" })
    }
  }

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 py-20 pt-24 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
                Hi, I'm{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-red-500 whitespace-nowrap">
                  Koduri Venkata Swathi
                </span>
              </h1>
              <h2 className="text-2xl md:text-3xl text-blue-600 dark:text-blue-400 font-semibold mb-6">
                AI & Machine Learning Engineer
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-xl">
                Motivated recent graduate in artificial intelligence and machine learning, eager to leverage strong
                programming skills and analytical abilities in challenging roles that foster professional growth and
                contribute to cutting-edge AI solutions.
              </p>
            </div>

            <div className="flex flex-row items-center gap-3 flex-wrap">
              <Button
                variant="outline"
                size="sm"
                className="flex items-center gap-2 bg-transparent whitespace-nowrap"
                asChild
              >
                <a href="https://github.com/Swathi97054" target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4" />
                  GitHub
                  <ExternalLink className="w-3 h-3" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="flex items-center gap-2 bg-transparent whitespace-nowrap"
                asChild
              >
                <a
                  href="https://www.linkedin.com/in/venkata-swathi-koduri-74726a299"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                  <ExternalLink className="w-3 h-3" />
                </a>
              </Button>
              <Button size="sm" className="flex items-center gap-2 whitespace-nowrap" asChild>
                <a href="/resume.pdf" download="Koduri_Venkata_Swathi_Resume.pdf">
                  <Download className="w-4 h-4" />
                  Download Resume
                </a>
              </Button>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700" onClick={() => scrollToSection("projects")}>
                View My Work
              </Button>
              <Button variant="outline" size="lg" onClick={() => scrollToSection("contact")}>
                Get In Touch
              </Button>
            </div>
          </div>

          {/* Right Side - Photo */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Background decoration */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-3xl opacity-20 scale-110"></div>

              {/* Photo container */}
              <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-8 border-white dark:border-gray-800 shadow-2xl">
                <img
                  src="/images/swathi-photo.jpeg"
                  alt="Koduri Venkata Swathi"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">4+</div>
            <div className="text-gray-600 dark:text-gray-400 text-sm">Projects Completed</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">99.3%</div>
            <div className="text-gray-600 dark:text-gray-400 text-sm">Best Accuracy</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">0</div>
            <div className="text-gray-600 dark:text-gray-400 text-sm">Years Experience</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">10+</div>
            <div className="text-gray-600 dark:text-gray-400 text-sm">Technologies</div>
          </div>
        </div>
      </div>
    </section>
  )
}
