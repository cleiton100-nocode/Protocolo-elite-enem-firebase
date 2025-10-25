'use client';
import { MessageCircle } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function ObjectionHandlingSection() {
    const whatsappUrl = "https://api.whatsapp.com/send/?phone=5511958376268&text=Ol%C3%A1%2C+vim+pelo+bot%C3%A3o+do+site+e+quero+mais+informa%C3%A7%C3%B5es.&type=phone_number&app_absent=0";
    return (
      <section className="bg-secondary py-12 md:py-20">
        <div className="container mx-auto max-w-3xl text-center">
          <MessageCircle className="mx-auto h-12 w-12 text-accent" />
          <h2 className="mt-4 font-headline text-3xl font-bold">Ainda tem dúvidas?</h2>
          <p className="mt-2 text-lg text-muted-foreground">
            Não consegue encontrar a resposta que procura? Nosso time está pronto para ajudar.
          </p>
          <div className="mt-6">
            <Link href={whatsappUrl} target="_blank">
              <Button size="lg" variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                FALE COM A GENTE
              </Button>
            </Link>
          </div>
        </div>
      </section>
    );
  }
  