
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "sonner"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Sergio Gómez Lajos - IT Systems Administrator & Automation Specialist',
  description: 'Professional portfolio of Sergio Gómez Lajos, specialized in IT automation, PowerShell, Python, and systems administration. Based in Santiago de Compostela, Spain.',
  keywords: ['IT Support', 'Systems Administration', 'PowerShell', 'Python', 'Automation', 'Technical Support', 'DNS', 'Windows'],
  authors: [{ name: 'Sergio Gómez Lajos' }],
  creator: 'Sergio Gómez Lajos',
  openGraph: {
    title: 'Sergio Gómez Lajos - IT Systems Administrator',
    description: 'Professional IT specialist focused on automation and systems administration',
    type: 'website',
    locale: 'es_ES',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster position="top-right" />
        </ThemeProvider>
      </body>
    </html>
  )
}
