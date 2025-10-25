'use client';
import {
    Card,
    CardContent,
    CardHeader,
  } from '@/components/ui/card';
import { XCircle } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const pricingFeatures = [
    { feature: 'Otimizador TRI', price: 29.9 },
    { feature: 'Plano de Foco Personalizado', price: 19.9 },
    { feature: 'Professor Gemini AI Ilimitado', price: 19.9 },
    { feature: 'Comunidade Exclusiva no WhatsApp', price: 14.9 },
    { feature: 'Guias de Estratégia de Prova', price: 12.5 },
    { feature: 'Acesso Vitalício e Atualizações', price: 10.0 },
  ];

export default function PricingSection() {
    const totalValue = pricingFeatures.reduce((sum, item) => sum + item.price, 0);
  
    return (
      <section id="oferta" className="container mx-auto py-12 md:py-24">
        <div className="mx-auto max-w-lg">
          <Card className="border-2 border-accent shadow-2xl shadow-accent/20">
            <CardHeader className="p-8 text-center">
              <h2 className="font-headline text-3xl font-bold">
                Oferta de Lançamento
              </h2>
              <p className="text-muted-foreground">
                Acesso completo e vitalício por um pagamento único.
              </p>
            </CardHeader>
            <CardContent className="flex flex-col items-center gap-4 p-8 pt-0">
              <ul className="mt-4 w-full space-y-3 text-sm">
                {pricingFeatures.map(({ feature, price }) => (
                  <li key={feature} className="flex items-center justify-between">
                    <span className="text-muted-foreground">{feature}</span>
                    <span className="font-semibold text-red-500 line-through">
                      R$ {price.toFixed(2).replace('.', ',')}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="w-full border-t border-dashed border-border pt-4 text-right">
                <p className="text-sm font-semibold text-muted-foreground">
                  Valor total dos produtos:{' '}
                  <span className="font-bold text-red-500 line-through">
                    R$ {totalValue.toFixed(2).replace('.', ',')}
                  </span>
                </p>
              </div>
              <div className="mt-4 flex items-center justify-center gap-4">
                <XCircle className="h-8 w-8 text-red-500" />
                <p className="text-2xl font-bold text-red-500 line-through">
                  R$ 157,00
                </p>
              </div>
              <div className="text-center">
                <p className="text-sm text-muted-foreground">Por apenas:</p>
                <div className="text-center">
                  <span className="font-headline text-6xl font-bold text-green-600">
                    R$49
                  </span>
                  <span className="text-2xl font-bold text-green-600">,90</span>
                </div>
              </div>
              <p className="mt-4 text-center text-sm text-muted-foreground">
                Você pagaria R$ 157,00, mas hoje você paga R$ 49,90 por tempo
                limitado!
              </p>
            </CardContent>
            <div className="p-8 pt-0">
              <Link
                href="https://www.ggcheckout.com/checkout/v2/8cILlAcXtbv8zyveyols"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="h-14 w-full animate-pulse-slow bg-accent px-8 text-lg font-bold text-accent-foreground shadow-lg shadow-accent/20 transition-transform duration-300 hover:scale-105 hover:bg-accent/90"
                >
                  SIM! Quero salvar meus pontos e garantir a vaga!
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      </section>
    );
  }
  