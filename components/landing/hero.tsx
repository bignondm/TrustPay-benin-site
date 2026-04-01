import { Button } from "@/components/ui/button"
import { ArrowRight, QrCode, Smartphone, TrendingUp } from "lucide-react"

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              Nouveau au Bénin
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
              Transformez vos paiements en{" "}
              <span className="text-primary">historique financier</span>
            </h1>
            
            <p className="mt-6 text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed">
              La solution de paiement QR code et Mobile Money qui aide les PME africaines 
              à créer leur historique financier et accéder aux crédits bancaires.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="gap-2">
                Télécharger gratuitement
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" className="gap-2">
                Voir la démo
              </Button>
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-3 gap-8">
              <div>
                <p className="text-3xl font-bold text-foreground">500+</p>
                <p className="text-sm text-muted-foreground">Commerçants actifs</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-foreground">2M+</p>
                <p className="text-sm text-muted-foreground">Transactions</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-foreground">98%</p>
                <p className="text-sm text-muted-foreground">Satisfaction</p>
              </div>
            </div>
          </div>

          {/* Phone Mockup */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Main Phone */}
              <div className="relative w-72 h-[580px] bg-foreground rounded-[3rem] p-3 shadow-2xl">
                <div className="w-full h-full bg-card rounded-[2.5rem] overflow-hidden">
                  {/* Status Bar */}
                  <div className="flex items-center justify-between px-6 py-3 bg-primary">
                    <span className="text-xs text-primary-foreground font-medium">9:41</span>
                    <div className="flex items-center gap-1">
                      <div className="w-4 h-4 rounded-full bg-primary-foreground/20" />
                      <div className="w-4 h-4 rounded-full bg-primary-foreground/20" />
                    </div>
                  </div>
                  
                  {/* App Content */}
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <p className="text-xs text-muted-foreground">Solde disponible</p>
                        <p className="text-2xl font-bold text-foreground">2.450.000 FCFA</p>
                      </div>
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                        <TrendingUp className="w-5 h-5 text-primary" />
                      </div>
                    </div>

                    {/* QR Code */}
                    <div className="bg-secondary rounded-2xl p-6 mb-4">
                      <div className="w-full aspect-square bg-card rounded-xl flex items-center justify-center border-2 border-dashed border-border">
                        <QrCode className="w-32 h-32 text-foreground" />
                      </div>
                      <p className="text-center text-sm text-muted-foreground mt-3">Scannez pour payer</p>
                    </div>

                    {/* Score */}
                    <div className="bg-primary/10 rounded-2xl p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-xs text-muted-foreground">Score Financier</p>
                          <p className="text-xl font-bold text-primary">750 / 900</p>
                        </div>
                        <div className="w-12 h-12 rounded-full border-4 border-primary flex items-center justify-center">
                          <span className="text-xs font-bold text-primary">A+</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Cards */}
              <div className="absolute -left-16 top-20 bg-card rounded-xl p-4 shadow-lg border border-border animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center">
                    <Smartphone className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">Mobile Money</p>
                    <p className="text-xs text-muted-foreground">+25.000 FCFA</p>
                  </div>
                </div>
              </div>

              <div className="absolute -right-8 bottom-32 bg-card rounded-xl p-4 shadow-lg border border-border animate-float-delayed">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">Crédit approuvé</p>
                    <p className="text-xs text-muted-foreground">500.000 FCFA</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
