
'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { 
  Terminal, 
  Database, 
  Settings, 
  Network, 
  Shield, 
  Code,
  Server,
  Monitor
} from 'lucide-react'

const skillCategories = [
  {
    title: 'Lenguajes de Programación',
    icon: Code,
    skills: [
      { name: 'PowerShell', level: 95, description: 'Scripting avanzado y automatización' },
      { name: 'Python 3.10+', level: 90, description: 'Aplicaciones desktop con PyQt6' },
      { name: 'SQL/SQLite', level: 85, description: 'Gestión de bases de datos' },
      { name: 'Batch Scripts', level: 80, description: 'Automatización Windows legacy' }
    ]
  },
  {
    title: 'Administración de Sistemas',
    icon: Server,
    skills: [
      { name: 'Windows Server', level: 90, description: 'Administración y configuración' },
      { name: 'Active Directory', level: 85, description: 'Gestión de usuarios y políticas' },
      { name: 'DNS Management', level: 88, description: 'Diagnóstico y resolución' },
      { name: 'Registry Editing', level: 82, description: 'Modificaciones avanzadas del registro' }
    ]
  },
  {
    title: 'Herramientas y Tecnologías',
    icon: Settings,
    skills: [
      { name: 'Git/GitHub', level: 85, description: 'Control de versiones y colaboración' },
      { name: 'PyQt6/QtWebEngine', level: 88, description: 'Desarrollo de interfaces gráficas' },
      { name: 'Windows Forms (.NET)', level: 80, description: 'Aplicaciones Windows nativas' },
      { name: 'PsExec', level: 90, description: 'Ejecución remota de comandos' }
    ]
  },
  {
    title: 'Especialidades Técnicas',
    icon: Shield,
    skills: [
      { name: 'Automatización IT', level: 95, description: 'Desarrollo de herramientas personalizadas' },
      { name: 'Diagnóstico de Redes', level: 88, description: 'Resolución de problemas de conectividad' },
      { name: 'Análisis de Logs', level: 85, description: 'Windows Event Viewer y sistemas' },
      { name: 'Soporte Remoto', level: 90, description: 'Gestión y resolución remota' }
    ]
  }
]

const certifications = [
  { name: 'Técnico en Sistemas Microinformáticos y Redes', org: 'Formación Profesional' },
  { name: 'Especialización en PowerShell', org: 'Autodidacta/Práctica Profesional' },
  { name: 'Python Desktop Development', org: 'Autodidacta/Proyectos Personales' }
]

const languages = [
  { name: 'Español', level: 'Nativo' },
  { name: 'Gallego', level: 'Nativo' },
  { name: 'Inglés', level: 'Técnico' }
]

export function SkillsSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <section id="skills" className="py-20 bg-white">
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'url(https://slidescorner.com/wp-content/uploads/2025/02/Blue-Technology-Background-for-Powerpoint-PPT-and-Google-Slides-IA-by-SlidesCorner.com_.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      />
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Habilidades Técnicas
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Expertise especializado en automatización IT, administración de sistemas y desarrollo de herramientas técnicas
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => {
            const Icon = category.icon
            return (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: categoryIndex * 0.2, duration: 0.8 }}
              >
                <Card className="h-full card-hover border-none shadow-lg">
                  <CardHeader className="pb-4">
                    <CardTitle className="flex items-center space-x-3 text-lg">
                      <div className="p-2 bg-blue-100 rounded-lg">
                        <Icon className="w-5 h-5 text-blue-600" />
                      </div>
                      <span>{category.title}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: (categoryIndex * 0.2) + (skillIndex * 0.1), duration: 0.6 }}
                        className="space-y-2"
                      >
                        <div className="flex justify-between items-center">
                          <span className="font-medium text-gray-900">{skill.name}</span>
                          <span className="text-sm text-gray-500">{skill.level}%</span>
                        </div>
                        <Progress value={skill.level} className="h-2" />
                        <p className="text-xs text-gray-600">{skill.description}</p>
                      </motion.div>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>

        {/* Additional Information Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <Card className="card-hover border-none shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <Monitor className="w-5 h-5 text-green-600" />
                  </div>
                  <span>Formación y Certificaciones</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 1 + index * 0.1, duration: 0.6 }}
                    className="space-y-1"
                  >
                    <h4 className="font-medium text-gray-900">{cert.name}</h4>
                    <p className="text-sm text-gray-600">{cert.org}</p>
                  </motion.div>
                ))}
              </CardContent>
            </Card>
          </motion.div>

          {/* Languages */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <Card className="card-hover border-none shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <div className="p-2 bg-purple-100 rounded-lg">
                    <Network className="w-5 h-5 text-purple-600" />
                  </div>
                  <span>Idiomas</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {languages.map((lang, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 1 + index * 0.1, duration: 0.6 }}
                    className="flex justify-between items-center"
                  >
                    <span className="font-medium text-gray-900">{lang.name}</span>
                    <Badge variant="outline" className="text-xs">
                      {lang.level}
                    </Badge>
                  </motion.div>
                ))}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
