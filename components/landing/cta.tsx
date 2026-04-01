import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle } from "lucide-react"

export function CTA() {
  const benefits = [
    "Inscription gratuite en 2 minutes",
    "Pas de frais cachés",
    "Support disponible 24/7",
    "Compatible avec tous les téléphones"
  ]

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-foreground rounded-3xl p-8 lg:p-12 text-center relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/20 rounded-full blur-3xl" />
          
          <div className="relative">
            <h2 className="text-3xl sm:text-4xl font-bold text-background text-balance">
              Prêt à transformer votre activité ?
            </h2>
            <p className="mt-4 text-lg text-background/70 max-w-xl mx-auto">
              Rejoignez des centaines d{"'"}entrepreneurs qui utilisent déjà TrustPay 
              pour développer leur entreprise et accéder au crédit.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="gap-2 bg-background text-foreground hover:bg-background/90">
                <a href=".app"></a>Télécharger gratuitement
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" className="gap-2 border-background/10 text-background hover:bg-background/10">
                Parler à un conseiller
              </Button>
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-2 text-sm text-background/80">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  {benefit}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
