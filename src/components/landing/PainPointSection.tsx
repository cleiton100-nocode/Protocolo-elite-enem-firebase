'use client';

import Image from 'next/image';
import { useState } from 'react';
import { PlayCircle } from 'lucide-react';

function YouTubeFacade({ videoId, title }: { videoId: string, title: string }) {
  const [loadVideo, setLoadVideo] = useState(false);
  const thumbnailUrl = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;

  if (loadVideo) {
    return (
      <div style={{ paddingBottom: '177.78%', position: 'relative', width: '100%', height: 0 }}>
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&loop=1&autopause=0&muted=0&controls=1&playlist=${videoId}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title={title}
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
        ></iframe>
      </div>
    );
  }

  return (
    <div
      onClick={() => setLoadVideo(true)}
      className="relative cursor-pointer"
      style={{ paddingBottom: '177.78%', width: '100%', height: 0 }}
    >
      <Image
        src={thumbnailUrl}
        alt={title}
        layout="fill"
        objectFit="cover"
        className="rounded-xl"
      />
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
        <PlayCircle className="h-20 w-20 text-white" />
      </div>
    </div>
  );
}


export default function PainPointSection() {
    return (
      <section className="bg-secondary py-12 md:py-24">
        <div className="container mx-auto flex max-w-3xl flex-col items-center gap-8 text-center">
          <h2 className="mb-4 font-headline text-3xl font-bold tracking-tight md:text-4xl">
            Entenda mais do aplicativo:
          </h2>
          <div className="relative w-full max-w-md overflow-hidden rounded-xl shadow-2xl shadow-primary/10">
            <YouTubeFacade videoId="DjXkwhyekfU" title="Apresentação Protocolo Elite" />
          </div>
          <div className="flex flex-col items-center text-center">
            <h2 className="font-headline text-3xl font-bold tracking-tight md:text-4xl">
              O que é o <span className="text-accent">"Roubo da TRI"?</span>
            </h2>
            <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
              Você sabia que seu número de acertos não garante uma boa nota? A
              Teoria de Resposta ao Item (TRI) pode{' '}
              <strong>penalizar em até 150 pontos</strong> quem não tem uma
              estratégia de prova coerente. Isso acontece quando você acerta
              questões difíceis, mas erra as fáceis, o que o sistema interpreta
              como "chute". O Protocolo Elite impede que isso aconteça.
            </p>
          </div>
        </div>
      </section>
    );
  }
  