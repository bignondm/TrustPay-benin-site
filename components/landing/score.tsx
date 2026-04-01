import { CheckCircle, TrendingUp, Shield, Building2 } from "lucide-react"

export function Score() {
  const scoreFactors = [
    { label: "Régularité des revenus", value: 92, color: "bg-primary" },
    { label: "Volume de transactions", value: 85, color: "bg-primary" },
    { label: "Ancienneté du compte", value: 78, color: "bg-accent" },
    { label: "Diversité des clients", value: 88, color: "bg-primary" }
  ]

  const benefits = [
    {
      icon: TrendingUp,
      title: "Score mis à jour en temps réel",
      description: "Chaque transaction améliore automatiquement votre score financier."
    },
    {
      icon: Shield,
      title: "Données certifiées",
      description: "Vos informations sont vérifiées et certifiées pour les institutions financières."
    },
    {
      icon: Building2,
      title: "Partenaires bancaires",
      description: "Plus de 15 banques et microfinances utilisent notre système de scoring."
    }
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Score Visualization */}
          <div className="order-2 lg:order-1">
            <div className="bg-background rounded-3xl p-8 shadow-2xl">
              {/* Score Circle */}
              <div className="flex justify-center mb-8">
                <div className="relative w-48 h-48">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle
                      cx="96"
                      cy="96"
                      r="88"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="12"
                      className="text-muted"
                    />
                    <circle
                      cx="96"
                      cy="96"
                      r="88"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="12"
                      strokeLinecap="round"
                      strokeDasharray="553"
                      strokeDashoffset="83"
                      className="text-primary"
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-5xl font-bold text-foreground">750</span>
                    <span className="text-sm text-muted-foreground">sur 900</span>
                  </div>
                </div>
              </div>

              {/* Score Grade */}
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="font-semibold text-primary">Excellent - Grade A+</span>
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  Vous êtes éligible aux meilleurs taux de crédit
                </p>
              </div>

              {/* Score Factors */}
              <div className="space-y-4">
                {scoreFactors.map((factor, index) => (
                  <div key={index}>
                    <div className="flex items-center justify-between text-sm mb-1">
                      <span className="text-muted-foreground">{factor.label}</span>
                      <span className="font-medium text-foreground">{factor.value}%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div 
                        className={`h-full ${factor.color} rounded-full transition-all`}
                        style={{ width: `${factor.value}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2 text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground text-balance">
              Votre score financier, votre passeport vers le crédit
            </h2>
            <p className="mt-4 text-lg text-primary-foreground/80 leading-relaxed">
              Notre algorithme analyse vos transactions pour calculer un score de crédit 
              reconnu par les institutions financières. Plus vous utilisez TrustPay, 
              plus votre score s{"'"}améliore.
            </p>

            <div className="mt-8 space-y-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-4 text-left">
                  <div className="w-12 h-12 bg-primary-foreground/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary-foreground">{benefit.title}</h3>
                    <p className="text-sm text-primary-foreground/70 mt-1">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
