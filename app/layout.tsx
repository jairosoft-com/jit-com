import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../styles/globals.css'
import { ThemeProvider } from '../components/ThemeProvider'
import { TooltipProvider } from '../components/ui/tooltip'
import { Toaster } from '../components/ui/sonner'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'JIT.com - Just-in-Time Learning Platform',
  description: 'Professional training programs and educational resources for modern developers and IT professionals.',
  keywords: ['training', 'education', 'programming', 'web development', 'IT', 'courses'],
  authors: [{ name: 'JIT.com Team' }],
  creator: 'JIT.com',
  publisher: 'JIT.com',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://jit.com',
    title: 'JIT.com - Just-in-Time Learning Platform',
    description: 'Professional training programs and educational resources for modern developers and IT professionals.',
    siteName: 'JIT.com',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JIT.com - Just-in-Time Learning Platform',
    description: 'Professional training programs and educational resources for modern developers and IT professionals.',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider
          defaultTheme="system"
          storageKey="jit-ui-theme"
        >
          <TooltipProvider>
            <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
              {children}
              <Toaster />
            </div>
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}