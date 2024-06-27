import { Toaster } from '@/components/ui/toaster'
import { ThemeProvider } from '@/contexts/ThemeContext'
import { cn } from '@/lib/utils'
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import './loading.css'

const fontSans = Inter({ subsets: ['latin'], variable: '--font-sans' })

export const metadata: Metadata = {
  title: '',
  description: '',
  keywords: '',
  robots: 'index, follow',
  icons: [
    {
      rel: 'icon',
      type: 'image/png',
      url: '/favicon.png',
      sizes: '128x128',
    },
    {
      rel: 'apple-touch-icon',
      type: 'image/png',
      url: '/favicon.png',
      sizes: '128x128',
    },
  ],
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  interactiveWidget: 'resizes-visual',
  viewportFit: 'contain',
  colorScheme: 'dark light',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'blue' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt">
      <body
        className={cn(
          'bg-background font-sans antialiased bg-gradient-primary bg-cover bg-center bg-no-repeat bg-fixed',
          fontSans.variable
        )}
      >
        <div className="w-full h-full backdrop-blur">
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={true} disableTransitionOnChange={true}>
            {children}
          </ThemeProvider>
        </div>
        <Toaster />
      </body>
    </html>
  )
}
