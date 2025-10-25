'use client';

import { ShieldCheck } from 'lucide-react';

export default function GuaranteeSection() {
    return (
      <section className="bg-primary py-12 text-primary-foreground md:py-20">
        <div className="container mx-auto flex max-w-4xl flex-col items-center gap-6 text-center md:flex-row md:gap-12 md:text-left">
          <div>
            <ShieldCheck className="mx-auto h-32 w-32 text-accent" />
          </div>
          <div>
            <h2 className="font-headline text-3xl font-bold">Garantia de 7 Dias</h2>
            <p className="mt-4 text-lg text-primary-foreground/80">
              Seu risco é zero. Se por qualquer motivo você não gostar do material ou achar que não é para você, basta pedir o reembolso em até 7 dias e devolveremos 100% do seu dinheiro. Sem burocracia, sem perguntas.
            </p>
          </div>
        </div>
      </section>
    );
  }
  