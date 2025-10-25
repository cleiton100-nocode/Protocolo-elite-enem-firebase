'use client';

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from '@/components/ui/accordion';

  const faqItems = [
    {
      question: 'O Plano de Foco é um curso em vídeo?',
      answer:
        'Não, é um Método de ação urgente, focado em alta performance. É um guia em PDF de ação rápida e objetiva, projetado para ser consumido em menos de uma hora. Ele te dá o caminho exato do que estudar, sem enrolação.',
    },
    {
      question: 'Preciso de acertos reais para usar o Otimizador TRI?',
      answer:
        'Não. Você pode simular acertos de qualquer prova ou simulado para receber um diagnóstico preciso da sua coerência e um plano de estudos para maximizar sua nota.',
    },
    {
      question: 'A Comunidade no WhatsApp é vitalícia?',
      answer:
        'Você terá acesso à comunidade de alto desempenho até o dia da prova do ENEM deste ano, garantindo suporte e networking durante toda a sua preparação final.',
    },
    {
      question: 'Como funciona o Professor Gemini AI?',
      answer:
        'É um assistente de IA treinado para tirar suas dúvidas sobre o conteúdo do ENEM e a metodologia TRI. Ele está disponível 24/7 para te ajudar a superar qualquer dificuldade.',
    },
    {
      question: 'Qual é a Garantia?',
      answer:
        'Oferecemos uma garantia incondicional de 7 dias. Se por qualquer motivo você não estiver satisfeito com o Protocolo Elite, basta nos enviar um e-mail e devolveremos 100% do seu investimento.',
    },
  ];

export default function FAQSection() {
    return (
      <section className="py-12 md:py-24">
        <div className="container mx-auto">
          <div className="mb-12 text-center">
            <h2 className="font-headline text-3xl font-bold tracking-tight md:text-4xl">
              Perguntas Frequentes
            </h2>
            <p className="mt-2 text-lg text-muted-foreground">
              Ainda tem dúvidas? A gente te ajuda a esclarecer tudo.
            </p>
          </div>
          <div className="mx-auto max-w-3xl">
            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground">
                    <div dangerouslySetInnerHTML={{ __html: item.answer }} />
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    );
  }
  