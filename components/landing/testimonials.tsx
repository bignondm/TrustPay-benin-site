import { Star, Quote } from "lucide-react"

export function Testimonials() {
  const testimonials = [
    {
      name: "Kofi Mensah",
      role: "Propriétaire de boutique, Cotonou",
      content: "Grâce à TrustPay, j'ai pu obtenir mon premier crédit bancaire de 2 millions FCFA. Avant, toutes mes demandes étaient refusées car je n'avais aucun justificatif.",
      rating: 5,
      amount: "2.000.000 FCFA obtenu"
    },
    {
      name: "Aminata Diallo",
      role: "Restauratrice, Porto-Novo",
      content: "Les rapports automatiques me permettent de voir exactement combien je gagne chaque jour. J'ai même pu identifier mes heures les plus rentables !",
      rating: 5,
      amount: "Score de 820/900"
    },
    {
      name: "Ibrahim Sow",
      role: "Commerçant, Parakou",
      content: "Mes clients adorent payer par QR code. C'est rapide, sécurisé, et je n'ai plus de problèmes de monnaie. Mon chiffre d'affaires a augmenté de 30%.",
      rating: 5,
      amount: "+30% de revenus"
    }
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-balance">
            Ils ont transformé leur activité avec TrustPay
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Découvrez comment des entrepreneurs comme vous utilisent TrustPay 
            pour développer leur entreprise.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-card rounded-2xl p-8 border border-border hover:shadow-lg transition-shadow relative"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-primary/20" />
              
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>

              {/* Content */}
              <p className="text-foreground leading-relaxed mb-6">
                {`"`}{testimonial.content}{`"`}
              </p>

              {/* Result Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full text-primary text-sm font-medium mb-6">
                {testimonial.amount}
              </div>

              {/* Author */}
              <div className="flex items-center gap-4 pt-6 border-t border-border">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-lg font-bold text-primary">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
