import { Header } from "@/components/landing/header"
import { Hero } from "@/components/landing/hero"
import { Problem } from "@/components/landing/problem"
import { Solution } from "@/components/landing/solution"
import { Features } from "@/components/landing/features"
import { Reports } from "@/components/landing/reports"
import { Score } from "@/components/landing/score"
import { Partners } from "@/components/landing/partners"
import { Testimonials } from "@/components/landing/testimonials"
import { CTA } from "@/components/landing/cta"
import  IMF  from "@/components/landing/imf"
import { Footer } from "@/components/landing/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Problem />
      <Solution />
      <Features />
      <Reports />
      <Score />
      <Partners />
      <Testimonials />
      <CTA />
      <IMF />
      <Footer />
    </main>
  )
}
