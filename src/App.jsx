import FAQ from './components/FAQ'
import Features from './components/Features'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import Integrations from './components/Integrations'
import Navbar from './components/Navbar'
import Pricing from './components/Pricing'
import ProblemSolution from './components/ProblemSolution'
import Testimonials from './components/Testimonials'

export default function App() {
  return (
    <div className="noise relative overflow-x-clip bg-ink font-sans text-snow antialiased">
      <Navbar />
      <main>
        <Hero />
        <ProblemSolution />
        <Features />
        <HowItWorks />
        <Integrations />
        <Pricing />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
