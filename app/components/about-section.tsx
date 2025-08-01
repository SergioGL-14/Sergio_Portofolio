
'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { MapPin, Target, Zap, Users } from 'lucide-react'

const highlights = [
  {
    icon: Target,
    title: 'Enfoque en Resultados',
    description: 'Filosofía "GETTING WORK DONE" - Orientado a soluciones prácticas y eficientes'
  },
  {
    icon: Zap,
    title: 'Automatización Avanzada',
    description: 'Desarrollo de herramientas personalizadas con PowerShell y Python'
  },
  {
    icon: Users,
    title: 'Soporte Especializado',
    description: 'Experiencia en entornos sanitarios y corporativos críticos'
  }
]

export function AboutSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Sobre mí
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Técnico especializado en automatización IT y administración de sistemas con experiencia 
            en desarrollo de herramientas innovadoras para optimizar procesos técnicos.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Main Description */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="space-y-6"
          >
            <Card className="p-6 border-none shadow-lg">
              <CardContent className="p-0 space-y-4">
                <div className="flex items-center space-x-3 text-blue-600">
                  <MapPin className="w-5 h-5" />
                  <span className="font-semibold">Santiago de Compostela, España</span>
                </div>
                
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    Profesional de IT con especialización en <strong>automatización de procesos</strong> y 
                    <strong> administración de sistemas Windows</strong>. Mi enfoque se centra en desarrollar 
                    soluciones tecnológicas que mejoren la eficiencia operativa y reduzcan la carga de trabajo manual.
                  </p>
                  
                  <p>
                    Con experiencia en entornos críticos como el sistema sanitario gallego (SERGAS), he desarrollado 
                    herramientas especializadas para diagnóstico de redes, gestión de perfiles de usuario y 
                    automatización de tareas administrativas.
                  </p>
                  
                  <p>
                    Mi filosofía profesional se resume en <strong>"GETTING WORK DONE"</strong> - crear soluciones 
                    prácticas y efectivas que resuelvan problemas reales del día a día técnico.
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 pt-4">
                  <Badge variant="secondary" className="bg-blue-100 text-blue-800">PowerShell</Badge>
                  <Badge variant="secondary" className="bg-blue-100 text-blue-800">Python</Badge>
                  <Badge variant="secondary" className="bg-blue-100 text-blue-800">Automatización</Badge>
                  <Badge variant="secondary" className="bg-blue-100 text-blue-800">Sistemas Windows</Badge>
                  <Badge variant="secondary" className="bg-blue-100 text-blue-800">Active Directory</Badge>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Right Column - Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="space-y-6"
          >
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6 + index * 0.2, duration: 0.6 }}
                >
                  <Card className="p-6 card-hover border-none shadow-lg hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-0">
                      <div className="flex items-start space-x-4">
                        <div className="p-3 bg-blue-100 rounded-lg">
                          <Icon className="w-6 h-6 text-blue-600" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">
                            {highlight.title}
                          </h3>
                          <p className="text-gray-600 text-sm leading-relaxed">
                            {highlight.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
