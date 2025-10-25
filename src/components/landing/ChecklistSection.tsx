'use client';
import { CheckCircle2 } from 'lucide-react';

const checklistItems = [
    {
      text: 'Otimizador TRI Rápido: Diagnóstico em 5 minutos para saber quantos pontos a TRI está te roubando.',
    },
    {
      text: 'Método de Foco Personalizado: Guia de ação urgente para corrigir sua maior falha de estratégia.',
    },
    {
      text: 'Professor de Redação 24h (Gemini AI): Assistente de IA que fornece repertórios e argumentos na hora.',
    },
    {
      text: 'Comunidade Exclusiva no WhatsApp: Suporte imediato, prova social e dicas de última hora.',
    },
    {
      text: 'Guias de Estratégia de Prova: Conteúdo para gerenciar o tempo e a ansiedade no dia do ENEM.',
    },
    {
      text: 'ACADEMIA BÔNUS (SURPRESA): Acesso liberado ao nosso bônus de reta final com conteúdo exclusivo nos últimos 10 dias antes do ENEM.',
      isBonus: true,
    },
  ];
  
export default function ChecklistSection() {
    return (
      <section className="bg-secondary py-12 md:py-24">
        <div className="container mx-auto">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-headline text-3xl font-bold tracking-tight md:text-4xl">
              O Que Você Leva HOJE: Checklist de Benefícios Exclusivos
            </h2>
          </div>
          <div className="mx-auto mt-8 max-w-2xl">
            <div className="space-y-4">
              {checklistItems.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <CheckCircle2 className="mt-1 h-6 w-6 shrink-0 text-green-500" />
                  <div className="text-lg">
                    {item.isBonus ? (
                      <p>
                        <span className="font-bold">
                          ACADEMIA BÔNUS (SURPRESA):
                        </span>{' '}
                        Acesso liberado ao nosso bônus de reta final com conteúdo
                        exclusivo nos{' '}
                        <strong>últimos 10 dias antes do ENEM</strong>.
                      </p>
                    ) : (
                      <p>
                        <strong>{item.text.split(':')[0]}:</strong>
                        {item.text.split(':').slice(1).join(':')}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-8 text-center text-lg text-muted-foreground">
              Não perca mais tempo. Sua aprovação começa agora.
            </p>
          </div>
        </div>
      </section>
    );
  }
  