'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Star } from 'lucide-react';


const getTestimonialAvatar = (id: number) =>
  PlaceHolderImages.find((img) => img.id === `testimonial-avatar-${id}`);

const testimonials = [
    {
      id: 1,
      name: 'Júlia S.',
      role: 'Aprovada em Medicina',
      text: 'O Protocolo Elite foi um divisor de águas. Minha nota TRI subiu mais de 120 pontos em 3 meses. Finalmente entendi o jogo do ENEM!',
    },
    {
      id: 2,
      name: 'Lucas M.',
      role: 'Aprovado em Engenharia',
      text: 'Eu estudava muito, mas minha nota não saía do lugar. O otimizador TRI me mostrou exatamente onde eu estava errando. Recomendo demais!',
    },
    {
      id: 3,
      name: 'Mariana P.',
      role: 'Aprovada em Direito',
      text: 'A comunidade e o Professor Gemini foram essenciais. Ter com quem tirar dúvidas e compartilhar a jornada fez toda a diferença.',
    },
  ];

export default function AuthoritySection() {
    return (
      <section className="bg-secondary py-12 md:py-24">
        <div className="container mx-auto text-center">
          <div className="mb-12 text-center">
            <p className="font-headline text-sm font-semibold uppercase tracking-wider text-accent">
              Prova Social
            </p>
            <h2 className="font-headline text-3xl font-bold tracking-tight md:text-4xl">
              Aprovado Por Quem Já Chegou Lá
            </h2>
            <p className="mt-2 text-lg text-muted-foreground">
              Veja o que nossos alunos de elite estão dizendo.
            </p>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3">
            {testimonials.map((testimonial) => {
              const avatar = getTestimonialAvatar(testimonial.id);
              return (
                <Card
                  key={testimonial.id}
                  className="flex flex-col bg-background"
                >
                  <CardContent className="flex-1 p-6">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-4 w-4 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                    <p className="mt-4 text-left text-foreground">"{testimonial.text}"</p>
                  </CardContent>
                  <div className="border-t border-border p-6 text-left">
                    <div className="flex items-center gap-4">
                      <Avatar>
                        {avatar && (
                          <AvatarImage
                            src={avatar.imageUrl}
                            alt={testimonial.name}
                            data-ai-hint={avatar.imageHint}
                          />
                        )}
                        <AvatarFallback>
                          {testimonial.name.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-semibold">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    );
  }
  