
'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Home, User, Code, Briefcase, Mail, Download } from 'lucide-react'
import { Button } from '@/components/ui/button'

const navItems = [
  { id: 'home', label: 'Inicio', icon: Home },
  { id: 'about', label: 'Sobre mí', icon: User },
  { id: 'skills', label: 'Habilidades', icon: Code },
  { id: 'projects', label: 'Proyectos', icon: Code },
  { id: 'experience', label: 'Experiencia', icon: Briefcase },
  { id: 'contact', label: 'Contacto', icon: Mail },
]

export function Navigation() {
  const [activeSection, setActiveSection] = useState('home')
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      
      const sections = navItems.map(item => item.id)
      const currentSection = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      
      if (currentSection) {
        setActiveSection(currentSection)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const downloadCV = () => {
    // Create a temporary link to download CV
    const link = document.createElement('a')
    link.href = '/cv-sergio-gomez-lajos.pdf'
    link.download = 'CV-Sergio-Gomez-Lajos.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md shadow-lg border-b border-gray-200'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center space-x-2"
          >
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">SGL</span>
            </div>
            <span className="font-semibold text-gray-900">
              Sergio Gómez Lajos
            </span>
          </motion.div>

          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon
              return (
                <Button
                  key={item.id}
                  variant={activeSection === item.id ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => scrollToSection(item.id)}
                  className={`flex items-center space-x-2 transition-all ${
                    activeSection === item.id
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-600 hover:text-blue-600'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </Button>
              )
            })}
            
            <Button
              onClick={downloadCV}
              className="ml-4 bg-blue-600 text-white hover:bg-blue-700 flex items-center space-x-2"
              size="sm"
            >
              <Download className="w-4 h-4" />
              <span>Descargar CV</span>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              onClick={downloadCV}
              size="sm"
              className="bg-blue-600 text-white hover:bg-blue-700"
            >
              <Download className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}
