import { Header } from '../components/Header'
import { HeroSection } from '../components/HeroSection'
import { TrainingPrograms } from '../components/TrainingPrograms'
import { Footer } from '../components/Footer'
import { Separator } from '../components/ui/separator'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="animate-fade-in">
        <HeroSection />
        <Separator className="opacity-50" />
        <TrainingPrograms />
        <Separator className="opacity-50" />
      </main>
      <Footer />
    </>
  )
}