'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {
  Target,
  ListChecks,
  BrainCircuit,
  Crown,
  PlayCircle,
  Star,
  Clock,
  XCircle,
  CheckCircle2,
  ShieldCheck,
  MessageCircle,
} from 'lucide-react';
import React, { useState, useEffect, Suspense } from 'react';
import { cn } from '@/lib/utils';
import { Hero } from '@/components/ui/hero';
import dynamic from 'next/dynamic';

const PainPointSection = dynamic(() => import('@/components/landing/PainPointSection'));
const SolutionSection = dynamic(() => import('@/components/landing/SolutionSection'));
const AuthoritySection = dynamic(() => import('@/components/landing/AuthoritySection'));
const PricingSection = dynamic(() => import('@/components/landing/PricingSection'));
const ChecklistSection = dynamic(() => import('@/components/landing/ChecklistSection'));
const ObjectionHandlingSection = dynamic(() => import('@/components/landing/ObjectionHandlingSection'));
const GuaranteeSection = dynamic(() => import('@/components/landing/GuaranteeSection'));
const FAQSection = dynamic(() => import('@/components/landing/FAQSection'));
const Footer = dynamic(() => import('@/components/landing/Footer'));
const WhatsAppButton = dynamic(() => import('@/components/landing/WhatsAppButton'));
const SocialProofPopup = dynamic(() => import('@/components/landing/SocialProofPopup'));


function Countdown() {
  const [daysLeft, setDaysLeft] = useState<number | null>(null);
  const [targetYear, setTargetYear] = useState(new Date().getFullYear());

  useEffect(() => {
    const calculateDaysLeft = () => {
      const today = new Date();
      const currentYear = today.getFullYear();
      let targetDate = new Date(currentYear, 10, 9); // November 9th

      // If today is after Nov 9th, target next year's ENEM
      if (today.getTime() > targetDate.getTime()) {
        const nextYear = currentYear + 1;
        targetDate = new Date(nextYear, 10, 9);
        setTargetYear(nextYear);
      } else {
        setTargetYear(currentYear);
      }

      const diffTime = targetDate.getTime() - today.getTime();
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      
      setDaysLeft(diffDays >= 0 ? diffDays : 0);
    };

    calculateDaysLeft();
  }, []);

  return (
    <div className="bg-primary py-3 text-primary-foreground">
      <div className="container mx-auto flex items-center justify-between text-center">
        <div className="flex w-1/3 items-center gap-2">
          <Target className="h-6 w-6" />
          <span className="font-headline text-lg font-bold">
            Protocolo Elite ENEM
          </span>
        </div>
        <div className="flex w-1/3 flex-col items-center text-center">
          <div className="flex items-center gap-2">
            <Clock className="h-5 w-5" />
            <p className="font-headline text-base font-bold tracking-tight">
              {daysLeft !== null ? (
                `FALTAM ${daysLeft} DIAS PARA O ENEM ${targetYear}`
              ) : (
                'CARREGANDO...'
              )}
            </p>
          </div>
          <p className="hidden text-xs text-primary-foreground/80 md:block">
            Cada dia perdido é uma oportunidade a menos.
          </p>
        </div>
        <div className="hidden w-1/3 md:block"></div> {/* Spacer for centering */}
      </div>
    </div>
  );
}

function HeroSection() {
  return (
    <Hero
      title={<>PARE DE PERDER 150 PONTOS NA TRI: <span className="text-accent">Seu Esforço Merece a Nota Máxima!</span></>}
      subtitle="Descubra como a nossa metodologia inovadora pode transformar seu desempenho e garantir a pontuação que você realmente merece no ENEM."
      actions={[
        {
          label: 'QUERO SALVAR MEUS PONTOS AGORA!',
          href: '#oferta',
          variant: 'default',
        },
      ]}
      titleClassName="font-headline text-4xl md:text-6xl font-extrabold"
      subtitleClassName="max-w-xl text-lg"
      actionsClassName="mt-8"
      className="text-center"
    />
  );
}

export default function LandingPage() {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <header className="sticky top-0 z-50">
        {isClient && <Countdown />}
      </header>
      <main className="flex-1">
        {isClient && <SocialProofPopup />}
        <HeroSection />
        <PainPointSection />
        <SolutionSection />
        <AuthoritySection />
        <PricingSection />
        <ChecklistSection />
        <ObjectionHandlingSection />
        <GuaranteeSection />
        <FAQSection />
      </main>
      <Footer />
      {isClient && <WhatsAppButton />}
    </div>
  );
}