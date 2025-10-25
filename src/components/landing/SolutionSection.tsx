'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Target, ListChecks, BrainCircuit, Crown } from 'lucide-react';

const solutionPillars = [
    {
      icon: Target,
      title: 'Otimizador TRI',
      description:
        'Nossa ferramenta analisa seu desempenho para criar uma estratégia de prova que maximiza sua nota TRI, focando em coerência.',
    },
    {
      icon: ListChecks,
      title: 'Plano de Foco',
      description:
        'Receba um plano de estudos personalizado, que direciona seu tempo para as matérias e tópicos com maior potencial de ganho de nota.',
    },
    {
      icon: BrainCircuit,
      title: 'Professor Gemini AI',
      description:
        'Tire dúvidas 24/7 com nosso tutor de IA treinado especificamente na metodologia TRI e nos conteúdos do ENEM.',
    },
    {
      icon: Crown,
      title: 'Comunidade no WhatsApp',
      description:
        'Conecte-se com outros estudantes de alto desempenho, troque estratégias e mantenha a motivação em nosso grupo exclusivo.',
    },
  ];

export default function SolutionSection() {
    return (
      <section className="container mx-auto py-12 md:py-24">
        <div className="mb-12 text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight md:text-4xl">
            A Solução Completa Para Sua Aprovação
          </h2>
          <p className="mt-2 text-lg text-muted-foreground">
            Os 4 pilares do Protocolo Elite que vão garantir sua nota máxima.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {solutionPillars.map((pillar) => (
            <Card
              key={pillar.title}
              className="transform-gpu border-border/80 bg-card transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10"
            >
              <CardHeader className="items-center text-center">
                <div className="mb-4 rounded-full bg-accent/10 p-4">
                  <pillar.icon className="h-8 w-8 text-accent" />
                </div>
                <CardTitle className="font-headline text-xl">
                  {pillar.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center text-muted-foreground">
                {pillar.description}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    );
  }
  