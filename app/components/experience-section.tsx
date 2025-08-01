
'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  Calendar, 
  MapPin, 
  Building, 
  CheckCircle, 
  TrendingUp,
  Users,
  Zap
} from 'lucide-react'

const experience = {
  company: 'Indra',
  position: 'Técnico en Soporte y Administración de Sistemas',
  duration: 'Enero 2023 – Actualidad',
  location: 'Santiago de Compostela, España',
  type: 'Tiempo Completo',
  description: 'Especialista en automatización IT y soporte técnico de nivel 2, enfocado en el desarrollo de herramientas personalizadas para optimización de procesos y resolución eficiente de incidencias.',
  responsibilities: [
    'Automatización de tareas administrativas y técnicas usando PowerShell y Python',
    'Diagnóstico y resolución de incidencias complejas en sistemas Windows',
    'Desarrollo de herramientas internas para optimización de procesos',
    'Soporte técnico especializado a usuarios y sistemas críticos',
    'Análisis detallado de logs y eventos del sistema',
    'Implementación de mejoras continuas en procesos operativos',
    'Gestión remota de sistemas y perfiles de usuario',
    'Mantenimiento de infraestructura de red y servicios DNS'
  ],
  achievements: [
    'Desarrollo de 6+ herramientas de automatización adoptadas en producción',
    'Reducción del 40% en tiempo de resolución de incidencias DNS',
    'Implementación de procesos automatizados que ahorran 15+ horas semanales',
    'Especialización en entornos sanitarios críticos (SERGAS)'
  ],
  technologies: [
    'PowerShell', 'Python', 'Windows Server', 'Active Directory', 
    'DNS Management', 'SQLite', 'PsExec', 'Windows Forms',
    'PyQt6', 'Git', 'Registry Management', 'Event Viewer'
  ]
}

const additionalInfo = [
  {
    title: 'Enfoque de Trabajo',
    icon: Zap,
    description: 'Filosofía "GETTING WORK DONE" - Orientado a resultados prácticos y soluciones eficientes que resuelvan problemas reales del día a día técnico.',
    color: 'bg-blue-100 text-blue-600'
  },
  {
    title: 'Especialización',
    icon: Users,
    description: 'Experiencia especializada en entornos sanitarios críticos, desarrollando herramientas específicas para el sistema de salud gallego (SERGAS).',
    color: 'bg-green-100 text-green-600'
  },
  {
    title: 'Mejora Continua',
    icon: TrendingUp,
    description: 'Constante desarrollo de nuevas herramientas y optimización de procesos existentes, adaptándose a las necesidades cambiantes del entorno técnico.',
    color: 'bg-purple-100 text-purple-600'
  }
]

export function ExperienceSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Experiencia Profesional
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Trayectoria profesional especializada en automatización IT y administración de sistemas en entornos críticos
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Experience Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="lg:col-span-2"
          >
            <Card className="h-full border-none shadow-lg">
              <CardHeader className="pb-6">
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <CardTitle className="text-2xl text-gray-900">
                      {experience.position}
                    </CardTitle>
                    <div className="flex items-center space-x-4 text-gray-500">
                      <div className="flex items-center space-x-2">
                        <Building className="w-4 h-4" />
                        <span className="font-medium">{experience.company}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4" />
                        <span>{experience.location}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2 text-blue-600">
                      <Calendar className="w-4 h-4" />
                      <span className="font-medium">{experience.duration}</span>
                    </div>
                  </div>
                  <Badge className="bg-green-100 text-green-800">
                    {experience.type}
                  </Badge>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <p className="text-gray-600 leading-relaxed">
                  {experience.description}
                </p>

                {/* Responsibilities */}
                <div className="space-y-3">
                  <h3 className="font-semibold text-gray-900">Responsabilidades Principales:</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {experience.responsibilities.map((resp, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                        className="flex items-start space-x-2"
                      >
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{resp}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div className="space-y-3">
                  <h3 className="font-semibold text-gray-900">Tecnologías Utilizadas:</h3>
                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={inView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: 0.6 + index * 0.05, duration: 0.4 }}
                      >
                        <Badge
                          variant="secondary"
                          className="bg-blue-50 text-blue-700 text-xs"
                        >
                          {tech}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Sidebar with achievements and additional info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="space-y-6"
          >
            {/* Achievements */}
            <Card className="border-none shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg flex items-center space-x-2">
                  <TrendingUp className="w-5 h-5 text-green-600" />
                  <span>Logros Destacados</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {experience.achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.6 + index * 0.1, duration: 0.6 }}
                    className="flex items-start space-x-2"
                  >
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-600">{achievement}</span>
                  </motion.div>
                ))}
              </CardContent>
            </Card>

            {/* Additional Information */}
            {additionalInfo.map((info, index) => {
              const Icon = info.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.8 + index * 0.2, duration: 0.6 }}
                >
                  <Card className="border-none shadow-lg card-hover">
                    <CardContent className="p-4">
                      <div className="flex items-start space-x-3">
                        <div className={`p-2 rounded-lg ${info.color}`}>
                          <Icon className="w-4 h-4" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-medium text-gray-900 mb-2">
                            {info.title}
                          </h3>
                          <p className="text-xs text-gray-600 leading-relaxed">
                            {info.description}
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
