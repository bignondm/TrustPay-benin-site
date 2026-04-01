"use client"

import { useState } from "react"
import { Calendar, TrendingUp, TrendingDown, BarChart3, PieChart, Download } from "lucide-react"
import { Button } from "@/components/ui/button"

type Period = "jour" | "semaine" | "mois" | "annee"

export function Reports() {
  const [activePeriod, setActivePeriod] = useState<Period>("mois")

  const periods: { key: Period; label: string }[] = [
    { key: "jour", label: "Journalier" },
    { key: "semaine", label: "Hebdomadaire" },
    { key: "mois", label: "Mensuel" },
    { key: "annee", label: "Annuel" }
  ]

  const reportData: Record<Period, { revenus: string; depenses: string; benefice: string; transactions: string; evolution: string }> = {
    jour: {
      revenus: "125.000 FCFA",
      depenses: "45.000 FCFA",
      benefice: "80.000 FCFA",
      transactions: "23",
      evolution: "+12%"
    },
    semaine: {
      revenus: "875.000 FCFA",
      depenses: "315.000 FCFA",
      benefice: "560.000 FCFA",
      transactions: "156",
      evolution: "+18%"
    },
    mois: {
      revenus: "3.500.000 FCFA",
      depenses: "1.250.000 FCFA",
      benefice: "2.250.000 FCFA",
      transactions: "642",
      evolution: "+25%"
    },
    annee: {
      revenus: "42.000.000 FCFA",
      depenses: "15.000.000 FCFA",
      benefice: "27.000.000 FCFA",
      transactions: "7.704",
      evolution: "+45%"
    }
  }

  const currentData = reportData[activePeriod]

  return (
    <section id="rapports" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 rounded-full text-accent-foreground text-sm font-medium mb-4">
            <BarChart3 className="w-4 h-4" />
            Rapports financiers
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-balance">
            Suivez votre activité en temps réel
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Des bilans automatiques journaliers, hebdomadaires, mensuels et annuels 
            pour une visibilité complète sur vos finances.
          </p>
        </div>

        <div className="bg-card rounded-2xl border border-border overflow-hidden shadow-lg">
          {/* Period Tabs */}
          <div className="flex flex-wrap border-b border-border">
            {periods.map((period) => (
              <button
                key={period.key}
                onClick={() => setActivePeriod(period.key)}
                className={`flex-1 min-w-30 py-4 px-6 text-sm font-medium transition-colors ${
                  activePeriod === period.key
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                {period.label}
              </button>
            ))}
          </div>

          {/* Report Content */}
          <div className="p-6 lg:p-8">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
              <div className="flex items-center gap-3 mb-4 lg:mb-0">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Période sélectionnée</p>
                  <p className="font-semibold text-foreground">
                    {activePeriod === "jour" && "Aujourd'hui"}
                    {activePeriod === "semaine" && "Cette semaine"}
                    {activePeriod === "mois" && "Ce mois"}
                    {activePeriod === "annee" && "Cette année"}
                  </p>
                </div>
              </div>
              <Button variant="outline" className="gap-2">
                <Download className="w-4 h-4" />
                Télécharger le rapport
              </Button>
            </div>

            {/* Stats Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="bg-secondary rounded-xl p-6">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm text-muted-foreground">Revenus</p>
                  <TrendingUp className="w-4 h-4 text-primary" />
                </div>
                <p className="text-2xl font-bold text-foreground">{currentData.revenus}</p>
                <p className="text-sm text-primary mt-1">{currentData.evolution} vs période précédente</p>
              </div>

              <div className="bg-secondary rounded-xl p-6">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm text-muted-foreground">Dépenses</p>
                  <TrendingDown className="w-4 h-4 text-destructive" />
                </div>
                <p className="text-2xl font-bold text-foreground">{currentData.depenses}</p>
                <p className="text-sm text-muted-foreground mt-1">Charges opérationnelles</p>
              </div>

              <div className="bg-secondary rounded-xl p-6">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm text-muted-foreground">Bénéfice net</p>
                  <PieChart className="w-4 h-4 text-accent" />
                </div>
                <p className="text-2xl font-bold text-primary">{currentData.benefice}</p>
                <p className="text-sm text-muted-foreground mt-1">Après déduction des charges</p>
              </div>

              <div className="bg-secondary rounded-xl p-6">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm text-muted-foreground">Transactions</p>
                  <BarChart3 className="w-4 h-4 text-primary" />
                </div>
                <p className="text-2xl font-bold text-foreground">{currentData.transactions}</p>
                <p className="text-sm text-muted-foreground mt-1">Paiements reçus</p>
              </div>
            </div>

            {/* Visual Chart Placeholder */}
            <div className="bg-secondary rounded-xl p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-semibold text-foreground">Évolution des revenus</h3>
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-primary rounded-full" />
                    <span className="text-muted-foreground">Revenus</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-accent rounded-full" />
                    <span className="text-muted-foreground">Dépenses</span>
                  </div>
                </div>
              </div>
              
              {/* Simple Bar Chart Visualization */}
              <div className="h-48 flex items-end gap-2">
                {[65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88, 82].map((height, i) => (
                  <div key={i} className="flex-1 flex flex-col gap-1">
                    <div 
                      className="bg-primary rounded-t transition-all hover:bg-primary/80"
                      style={{ height: `${height}%` }}
                    />
                    <div 
                      className="bg-accent/50 rounded-t"
                      style={{ height: `${height * 0.35}%` }}
                    />
                  </div>
                ))}
              </div>
              <div className="flex justify-between mt-4 text-xs text-muted-foreground">
                <span>Jan</span>
                <span>Fév</span>
                <span>Mar</span>
                <span>Avr</span>
                <span>Mai</span>
                <span>Jun</span>
                <span>Jul</span>
                <span>Aoû</span>
                <span>Sep</span>
                <span>Oct</span>
                <span>Nov</span>
                <span>Déc</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
