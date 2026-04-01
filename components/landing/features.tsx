import { 
  QrCode, 
  Smartphone, 
  Shield, 
  BarChart3, 
  Clock, 
  Play, 
  Banknote,
  Bell
} from "lucide-react"

export function Features() {
  const features = [
    {
      icon: QrCode,
      title: "Paiement QR Code",
      description: "Générez votre QR code unique et recevez des paiements instantanément."
    },
    {
      icon: Smartphone,
      title: "Mobile Money intégré",
      description: "Compatible avec MTN Money, Moov Money et Celtis Bénin."
    },
    {
      icon: Shield,
      title: "Sécurité maximale",
      description: "Toutes les transactions sont chiffrées et sécurisées bout à bout."
    },
    {
      icon: BarChart3,
      title: "Tableaux de bord",
      description: "Visualisez vos performances en temps réel avec des graphiques clairs."
    },
    {
      icon: Clock,
      title: "Historique complet",
      description: "Accédez à l'historique de toutes vos transactions à tout moment."
    },
    {
      icon: Play,
      title: "Saisie vocal",
      description: "TrustPay intègre une fonctionnalité de saisie vocale permettant à l’utilisateur de parler au lieu d’écrire."
    },
    {
      icon: Banknote,
      title: "Score de crédit",
      description: "Algorithme intelligent qui calcule votre solvabilité automatiquement."
    },
    {
      icon: Bell,
      title: "Notifications",
      description: "Recevez des alertes instantanées pour chaque transaction."
    }
  ]

  return (
    <section id="fonctionnalites" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-balance">
            Tout ce dont vous avez besoin
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Une suite complète d{"'"}outils pour gérer vos paiements et construire votre réputation financière.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-card rounded-xl p-6 border border-border hover:border-primary/30 hover:shadow-md transition-all group"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
