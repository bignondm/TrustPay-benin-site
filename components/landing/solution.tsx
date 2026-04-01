import { QrCode, Database, Calculator, BadgeCheck, ArrowRight } from "lucide-react"

export function Solution() {
  const steps = [
    {
      number: "01",
      icon: QrCode,
      title: "Recevez des paiements",
      description: "Acceptez les paiements par QR code et Mobile Money (MTN, Moov, Wave) directement sur votre téléphone."
    },
    {
      number: "02",
      icon: Database,
      title: "Enregistrement automatique",
      description: "Chaque transaction est automatiquement enregistrée et sécurisée dans votre compte."
    },
    {
      number: "03",
      icon: Calculator,
      title: "Score financier calculé",
      description: "Notre algorithme analyse vos données et calcule votre score de crédit en temps réel."
    },
    {
      number: "04",
      icon: BadgeCheck,
      title: "Accès aux crédits",
      description: "Présentez votre score aux banques et microfinances pour obtenir des prêts rapidement."
    }
  ]

  return (
    <section id="comment-ca-marche" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
            <BadgeCheck className="w-4 h-4" />
            La solution
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-balance">
            Comment TrustPay vous aide à accéder au crédit
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Un processus simple en 4 étapes pour transformer vos paiements quotidiens 
            en opportunités de financement.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              <div className="bg-card rounded-2xl p-6 border border-border hover:border-primary/50 hover:shadow-lg transition-all h-full">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-4xl font-bold text-primary/20">{step.number}</span>
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <step.icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
              </div>
              
              {/* Arrow between steps */}
              {index < steps.length - 1 && (
                <div className="hidden lg:flex absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                  <ArrowRight className="w-6 h-6 text-primary/30" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
