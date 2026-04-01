import Link from "next/link"
import { QrCode, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export function Footer() {
  const links = {
    produit: [
      { label: "Fonctionnalités", href: "#fonctionnalites" },
      { label: "Comment ça marche", href: "#comment-ca-marche" },
      { label: "Tarifs", href: "#tarifs" },
      { label: "API", href: "#api" }
    ],
    entreprise: [
      { label: "À propos", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Carrières", href: "#" },
      { label: "Partenaires", href: "#" }
    ],
    legal: [
      { label: "Conditions d'utilisation", href: "#" },
      { label: "Politique de confidentialité", href: "#" },
      { label: "Mentions légales", href: "#" }
    ]
  }

  return (
    <footer className="bg-foreground pt-16 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 pb-12 border-b border-background/10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                <QrCode className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-background">TrustPay</span>
            </Link>
            <p className="text-background/70 max-w-sm mb-6">
              La solution de paiement QR code qui aide les PME africaines à créer 
              leur historique financier et accéder aux crédits bancaires.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-background/70">
                <Mail className="w-5 h-5" />
                <span>contact@TrustPay.bj</span>
              </div>
              <div className="flex items-center gap-3 text-background/70">
                <Phone className="w-5 h-5" />
                <span>+229 40 59 07 95</span>
              </div>
              <div className="flex items-center gap-3 text-background/70">
                <MapPin className="w-5 h-5" />
                <span>Cotonou, Bénin</span>
              </div>
            </div>
          </div>

          {/* Produit */}
          <div>
            <h3 className="font-semibold text-background mb-4">Produit</h3>
            <ul className="space-y-3">
              {links.produit.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-background/70 hover:text-background transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Entreprise */}
          <div>
            <h3 className="font-semibold text-background mb-4">Entreprise</h3>
            <ul className="space-y-3">
              {links.entreprise.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-background/70 hover:text-background transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-background mb-4">Légal</h3>
            <ul className="space-y-3">
              {links.legal.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-background/70 hover:text-background transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-background/50">
            © 2026 TrustPay. Tous droits réservés.
          </p>
          <div className="flex items-center gap-4">
            <Link href="#" className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center text-background/70 hover:bg-background/20 hover:text-background transition-colors">
              <Facebook className="w-5 h-5" />
            </Link>
            <Link href="#" className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center text-background/70 hover:bg-background/20 hover:text-background transition-colors">
              <Twitter className="w-5 h-5" />
            </Link>
            <Link href="#" className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center text-background/70 hover:bg-background/20 hover:text-background transition-colors">
              <Instagram className="w-5 h-5" />
            </Link>
            <Link href="#" className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center text-background/70 hover:bg-background/20 hover:text-background transition-colors">
              <Linkedin className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
