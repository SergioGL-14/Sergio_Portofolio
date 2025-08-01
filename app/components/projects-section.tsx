
'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { 
  ExternalLink, 
  Github, 
  Terminal, 
  Database, 
  Network, 
  Shield,
  FileText,
  Users
} from 'lucide-react'
import Image from 'next/image'

const projects = [
  {
    title: 'Tech-Codex',
    description: 'Aplicación desktop multiplataforma desarrollada en Python con PyQt6. Toolkit integral para técnicos IT que incluye agregador RSS, consejos diarios, repositorio de comandos e integración con servicios en la nube.',
    icon: Database,
    technologies: ['Python 3.10+', 'PyQt6', 'SQLite', 'GitHub API', 'Google Drive API'],
    features: [
      'Diarios de desarrollo integrados',
      'Seguimiento de incidencias',
      'Documentación local centralizada',
      'Integraciones con GitHub y OneDrive'
    ],
    github: 'https://github.com/SergioGL-14/Tech-Codex',
    image: 'https://docs.oracle.com/cd/E19683-01/816-0284/images/SGVDenv.tiff.gif',
    status: 'Activo'
  },
  {
    title: 'DNSFixer',
    description: 'Herramienta especializada en PowerShell con interfaz gráfica para diagnóstico y reparación de problemas DNS. Permite análisis remoto y local con capacidades de limpieza de caché y registro forzado.',
    icon: Network,
    technologies: ['PowerShell', 'Windows Forms', 'PsExec', 'DNS Management'],
    features: [
      'Diagnóstico DNS remoto y local',
      'Limpieza automática de caché DNS',
      'Verificación de TTL y registros',
      'Limpieza de registros obsoletos'
    ],
    github: 'https://github.com/SergioGL-14/DNSFixer',
    image: 'https://docs.oracle.com/cd/E19683-01/816-0284/images/SGVDenv.tiff.gif',
    status: 'Activo'
  },
  {
    title: 'GhostHunter',
    description: 'Utilidad avanzada para detección y eliminación de perfiles de usuario "fantasma" en sistemas Windows. Incluye escaneo remoto, clasificación automática y limpieza segura del registro.',
    icon: Shield,
    technologies: ['PowerShell', 'WinForms', 'Registry Management', 'PsExec'],
    features: [
      'Escaneo remoto de múltiples sistemas',
      'Clasificación automática de perfiles',
      'Limpieza segura del registro',
      'Múltiples capas de verificación'
    ],
    github: 'https://github.com/SergioGL-14/GhostHunter',
    image: 'https://docs.oracle.com/cd/E19683-01/816-0284/images/SGVDenv.tiff.gif',
    status: 'Activo'
  },
  {
    title: 'Report-Event-Viewer',
    description: 'Analizador de logs de Windows desarrollado en Python que procesa eventos del sistema, aplicaciones y seguridad con capacidades de filtrado y exportación a CSV.',
    icon: FileText,
    technologies: ['Python', 'Windows Event Logs', 'CSV Export', 'Remote Analysis'],
    features: [
      'Análisis de logs remotos',
      'Filtrado por palabras clave e IDs',
      'Exportación a CSV',
      'Soporte para múltiples tipos de log'
    ],
    github: 'https://github.com/SergioGL-14/Report-Event-Viewer',
    image: 'https://docs.oracle.com/cd/E19683-01/816-0284/images/SGVDenv.tiff.gif',
    status: 'Completado'
  },
  {
    title: 'Reduce_Split_Files',
    description: 'Herramienta automática de compresión que reduce archivos PDF e imágenes por debajo de 1MB. Interfaz drag-and-drop con división inteligente de PDFs y optimización de calidad.',
    icon: FileText,
    technologies: ['Python', 'PDF Processing', 'Image Optimization', 'Drag & Drop UI'],
    features: [
      'Interfaz drag-and-drop intuitiva',
      'División inteligente de PDFs',
      'Optimización automática de calidad',
      'Ejecutable portable personalizado'
    ],
    github: 'https://github.com/SergioGL-14/Reduce_Split_Files',
    image: 'https://docs.oracle.com/cd/E19683-01/816-0284/images/SGVDenv.tiff.gif',
    status: 'Completado'
  },
  {
    title: 'UserScanCS',
    description: 'Escáner especializado para centros sanitarios que realiza análisis paralelo de múltiples equipos en unidades organizativas con integración a Active Directory.',
    icon: Users,
    technologies: ['PowerShell', 'Active Directory', 'PsExec', 'Healthcare Systems'],
    features: [
      'Escaneo paralelo de múltiples equipos',
      'Integración con Active Directory',
      'Exportación CSV/TXT',
      'Diseñado para SERGAS (sanidad gallega)'
    ],
    github: 'https://github.com/SergioGL-14/UserScanCS',
    image: 'https://docs.oracle.com/cd/E19683-01/816-0284/images/SGVDenv.tiff.gif',
    status: 'Activo'
  }
]

export function ProjectsSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Activo':
        return 'bg-green-100 text-green-800'
      case 'Completado':
        return 'bg-blue-100 text-blue-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Proyectos Destacados
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Herramientas desarrolladas para automatización IT y resolución de problemas técnicos en entornos corporativos
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.8 }}
              >
                <Card className="h-full card-hover border-none shadow-lg hover:shadow-xl transition-all duration-300">
                  {/* Project Image */}
                  <div className="relative h-48 bg-gray-200 overflow-hidden rounded-t-lg">
                    <Image
                      src={project.image}
                      alt={`${project.title} preview`}
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-105"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge className={`${getStatusColor(project.status)} text-xs`}>
                        {project.status}
                      </Badge>
                    </div>
                  </div>

                  <CardHeader className="pb-4">
                    <CardTitle className="flex items-center space-x-3 text-lg">
                      <div className="p-2 bg-blue-100 rounded-lg">
                        <Icon className="w-5 h-5 text-blue-600" />
                      </div>
                      <span>{project.title}</span>
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="space-y-2">
                      <h4 className="font-medium text-gray-900 text-sm">Tecnologías:</h4>
                      <div className="flex flex-wrap gap-1">
                        {project.technologies.map((tech, techIndex) => (
                          <Badge
                            key={techIndex}
                            variant="secondary"
                            className="text-xs bg-gray-100 text-gray-700"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Features */}
                    <div className="space-y-2">
                      <h4 className="font-medium text-gray-900 text-sm">Características:</h4>
                      <ul className="space-y-1">
                        {project.features.slice(0, 3).map((feature, featureIndex) => (
                          <li key={featureIndex} className="text-xs text-gray-600 flex items-start">
                            <span className="w-1 h-1 bg-blue-600 rounded-full mt-2 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Action Buttons */}
                    <div className="pt-4 flex space-x-2">
                      <Button
                        size="sm"
                        onClick={() => window.open(project.github, '_blank')}
                        className="flex-1 bg-gray-900 hover:bg-gray-800 text-white"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Código
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => window.open(project.github, '_blank')}
                        className="flex-1 border-blue-600 text-blue-600 hover:bg-blue-50"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Ver más
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 mb-6">
            ¿Interesado en conocer más detalles sobre algún proyecto?
          </p>
          <Button
            onClick={() => window.open('https://github.com/SergioGL-14', '_blank')}
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white"
          >
            <Github className="w-5 h-5 mr-2" />
            Ver todos los proyectos en GitHub
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
