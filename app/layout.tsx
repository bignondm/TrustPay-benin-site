import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { QrCode } from "lucide-react"

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'TrustPay - Paiement QR Code pour PME en Afrique',
  description: 'Solution de paiement par QR code et Mobile Money pour les PME africaines. Créez votre historique financier et accédez aux crédits bancaires.',
  icons: {
    icon: [
      {
        url: '/ico.jpeg',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/ico.jpeg',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/ico.jpeg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-ico.jpg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
