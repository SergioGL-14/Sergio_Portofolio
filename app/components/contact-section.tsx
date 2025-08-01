
'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { useState } from 'react'
import { toast } from 'sonner'
import { 
  Mail, 
  MapPin, 
  Github, 
  Linkedin, 
  Send,
  Download,
  Globe,
  Phone
} from 'lucide-react'

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'Sergio.Catoira@hotmail.com',
    href: 'mailto:Sergio.Catoira@hotmail.com',
    description: 'Contacto profesional directo'
  },
  {
    icon: MapPin,
    label: 'Ubicación',
    value: 'Santiago de Compostela, España',
    href: null,
    description: 'Disponible para trabajo remoto y presencial'
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'SergioGL-14',
    href: 'https://github.com/SergioGL-14',
    description: 'Repositorio de proyectos y código'
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'sergio-gómez-lajos',
    href: 'https://www.linkedin.com/in/sergio-gómez-lajos',
    description: 'Perfil profesional completo'
  }
]

export function ContactSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Por favor, completa todos los campos obligatorios')
      return
    }

    setIsSubmitting(true)

    try {
      // Simulate form submission - In a real app, this would send to a backend
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      toast.success('¡Mensaje enviado correctamente! Te responderé pronto.')
      setFormData({ name: '', email: '', subject: '', message: '' })
    } catch (error) {
      toast.error('Error al enviar el mensaje. Por favor, intenta de nuevo.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Sergio Gómez Lajos - Portfolio Profesional',
          text: 'Conoce el portfolio profesional de Sergio Gómez Lajos, especialista en automatización IT y sistemas',
          url: window.location.href
        })
      } catch (error) {
        // Fallback to copy to clipboard
        navigator.clipboard.writeText(window.location.href)
        toast.success('Enlace copiado al portapapeles')
      }
    } else {
      // Fallback for browsers that don't support Web Share API
      navigator.clipboard.writeText(window.location.href)
      toast.success('Enlace copiado al portapapeles')
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
    toast.success('Descargando CV...')
  }

  return (
    <section id="contact" className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'url(https://slidescorner.com/wp-content/uploads/2025/05/Blue-Gradients-Professional-PPT-Background-for-PowerPoint-Google-Slides-or-Wallpaper-by-SlidesCorner.com_-1024x576.jpg)',
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
            Contacto
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            ¿Interesado en colaborar o tienes alguna consulta? No dudes en contactarme
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Información de Contacto
              </h3>
              <div className="space-y-4">
                {contactInfo.map((item, index) => {
                  const Icon = item.icon
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                    >
                      <Card className="p-4 border-none shadow-md hover:shadow-lg transition-all duration-300 card-hover">
                        <div className="flex items-start space-x-4">
                          <div className="p-3 bg-blue-100 rounded-lg">
                            <Icon className="w-5 h-5 text-blue-600" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-medium text-gray-900 mb-1">
                              {item.label}
                            </h4>
                            {item.href ? (
                              <a
                                href={item.href}
                                target={item.href.startsWith('http') ? '_blank' : undefined}
                                rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                className="text-blue-600 hover:text-blue-700 font-medium transition-colors"
                              >
                                {item.value}
                              </a>
                            ) : (
                              <span className="text-gray-700 font-medium">
                                {item.value}
                              </span>
                            )}
                            <p className="text-sm text-gray-500 mt-1">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      </Card>
                    </motion.div>
                  )
                })}
              </div>
            </div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="space-y-4"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Button
                  onClick={downloadCV}
                  className="bg-blue-600 hover:bg-blue-700 text-white w-full"
                  size="lg"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Descargar CV
                </Button>
                <Button
                  onClick={handleShare}
                  variant="outline"
                  className="border-blue-600 text-blue-600 hover:bg-blue-50 w-full"
                  size="lg"
                >
                  <Globe className="w-5 h-5 mr-2" />
                  Compartir Portfolio
                </Button>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <Card className="border-none shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl">Enviar Mensaje</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Nombre *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Tu nombre completo"
                        required
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="tu.email@ejemplo.com"
                        required
                        className="w-full"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Asunto
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="Asunto del mensaje"
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Mensaje *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Escribe tu mensaje aquí..."
                      required
                      rows={5}
                      className="w-full resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                    size="lg"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 mr-2 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Enviar Mensaje
                      </>
                    )}
                  </Button>

                  <p className="text-xs text-gray-500 text-center">
                    También puedes contactarme directamente en{' '}
                    <a 
                      href="mailto:Sergio.Catoira@hotmail.com" 
                      className="text-blue-600 hover:text-blue-700"
                    >
                      Sergio.Catoira@hotmail.com
                    </a>
                  </p>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.8 }}
          className="text-center mt-16 pt-8 border-t border-gray-200"
        >
          <p className="text-gray-600">
            © 2024 Sergio Gómez Lajos. Portfolio profesional desarrollado con Next.js y Tailwind CSS.
          </p>
          <p className="text-sm text-gray-500 mt-2">
            "GETTING WORK DONE" - Automatización IT • Administración de Sistemas • Desarrollo de Herramientas
          </p>
        </motion.div>
      </div>
    </section>
  )
}
