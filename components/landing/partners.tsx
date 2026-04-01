export function Partners() {
  const mobilePartners = [
    { name: "MTN Money", color: "bg-yellow-500" },
    { name: "Moov Money", color: "bg-blue-600" },
    { name: "Wave", color: "bg-cyan-500" },
    { name: "Orange Money", color: "bg-orange-500" }
  ]

  const bankPartners = [
    "Bank of Africa",
    "Ecobank",
    "BSIC",
    "UBA",
    "NSIA Banque",
    "Orabank"
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-balance">
            Nos partenaires de confiance
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Intégré avec les principaux opérateurs Mobile Money et partenaire des grandes 
            banques et microfinances du Bénin.
          </p>
        </div>

        {/* Mobile Money Partners */}
        <div className="mb-12">
          <p className="text-center text-sm font-medium text-muted-foreground mb-6">
            Opérateurs Mobile Money
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            {mobilePartners.map((partner, index) => (
              <div 
                key={index}
                className="flex items-center gap-3 bg-card rounded-xl px-6 py-4 border border-border"
              >
                <div className={`w-10 h-10 ${partner.color} rounded-lg flex items-center justify-center text-white font-bold text-sm`}>
                  {partner.name.charAt(0)}
                </div>
                <span className="font-medium text-foreground">{partner.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bank Partners */}
        <div>
          <p className="text-center text-sm font-medium text-muted-foreground mb-6">
            Banques et Microfinances Partenaires
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {bankPartners.map((bank, index) => (
              <div 
                key={index}
                className="bg-card rounded-lg px-6 py-3 border border-border text-muted-foreground font-medium hover:border-primary/30 hover:text-foreground transition-colors"
              >
                {bank}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
