'use client';
import Link from 'next/link';
import { Target } from 'lucide-react';

export default function Footer() {
    return (
      <footer className="bg-primary text-primary-foreground">
        <div className="container mx-auto grid grid-cols-1 gap-8 py-12 text-center md:grid-cols-3">
          <div className="flex flex-col items-center justify-center">
            <div className="flex items-center gap-2">
              <Target className="h-6 w-6" />
              <span className="font-headline text-xl font-bold">
                Protocolo Elite
              </span>
            </div>
            <p className="mt-2 text-sm text-primary-foreground/70">
              © {new Date().getFullYear()} Protocolo Elite. <br />
              Todos os direitos reservados.
            </p>
          </div>
          <div className="hidden md:block"></div>
          <div className="flex flex-col items-center justify-center">
            <h3 className="font-headline text-lg font-semibold">
              Links Importantes
            </h3>
            <ul className="mt-2 space-y-1">
              <li>
                <Link
                  href="#"
                  className="text-sm text-primary-foreground/70 hover:text-primary-foreground hover:underline"
                >
                  Termos de Uso
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-primary-foreground/70 hover:text-primary-foreground hover:underline"
                >
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-primary-foreground/70 hover:text-primary-foreground hover:underline"
                >
                  Suporte
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    );
  }
  