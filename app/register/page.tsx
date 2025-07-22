import { RegistrationForm } from '@/components/RegistrationForm';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-16 bg-muted/50">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center">
            <div className="text-center mb-12 max-w-3xl">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">Register Your Interest</h1>
              <p className="text-lg text-muted-foreground mb-8">
                Fill out the form below and we'll get back to you with more information about our training programs.
              </p>
            </div>
            <div className="w-full max-w-2xl">
              <RegistrationForm />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
