import { XCircle, DollarSign, FileQuestion, Building2 } from "lucide-react"

export function Problem() {
  const problems = [
    {
      icon: DollarSign,
      title: "Paiements en cash uniquement",
      description: "80% des PME africaines reçoivent leurs revenus en espèces, sans trace numérique."
    },
    {
      icon: FileQuestion,
      title: "Aucun historique financier",
      description: "Sans enregistrement des transactions, impossible de prouver la santé de votre entreprise."
    },
    {
      icon: Building2,
      title: "Refus de crédit bancaire",
      description: "Les banques rejettent 70% des demandes de prêt des PME par manque de données financières."
    }
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-foreground">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-destructive/10 rounded-full text-destructive text-sm font-medium mb-4">
            <XCircle className="w-4 h-4" />
            Le problème
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-background text-balance">
            Les PME africaines sont exclues du système financier
          </h2>
          <p className="mt-4 text-lg text-background/70 max-w-2xl mx-auto">
            Sans historique financier numérique, les entrepreneurs ne peuvent pas accéder aux 
            financements nécessaires pour développer leur activité.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <div 
              key={index} 
              className="bg-background/5 backdrop-blur-sm rounded-2xl p-8 border border-background/10 hover:border-background/20 transition-colors"
            >
              <div className="w-14 h-14 bg-destructive/20 rounded-xl flex items-center justify-center mb-6">
                <problem.icon className="w-7 h-7 text-destructive" />
              </div>
              <h3 className="text-xl font-semibold text-background mb-3">{problem.title}</h3>
              <p className="text-background/70 leading-relaxed">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
