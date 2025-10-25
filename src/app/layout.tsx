import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import Script from 'next/script'; // <--- 1. IMPORTAÇÃO ADICIONADA

export const metadata: Metadata = {
  title: 'Protocolo Elite',
  description: 'Pare de perder pontos na TRI e alcance a nota máxima.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        {/* Preconnect links estão corretos e podem ficar */}
        <link rel="preconnect" href="https://connect.facebook.net" />
        <link rel="preconnect" href="https://www.clarity.ms" />
        <link rel="preconnect" href="https://www.youtube.com" />
        <link rel="preconnect" href="https://i.ytimg.com" />
        <link rel="preconnect" href="https://cdn.utmify.com.br" />

        {/* DELETAMOS OS SCRIPTS DAQUI. 
          O <head> deve ser leve e rápido.
        */}
      </head>
      <body className="font-body antialiased">
        {children}
        <Toaster />

        {/* --- 2. SCRIPTS ADICIONADOS AQUI (FORA DO <HEAD>) --- */}
        
        {/* Utmify Script (Otimizado) */}
        <Script id="utmify-pixel-script" strategy="afterInteractive">
          {`
            window.pixelId = "68fcdc1665f358fe7883a55c";
            var a = document.createElement("script");
            a.setAttribute("async", "");
            a.setAttribute("defer", "");
            a.setAttribute("src", "https://cdn.utmify.com.br/scripts/pixel/pixel.js");
            document.head.appendChild(a);
          `}
        </Script>

        {/* Microsoft Clarity Script (Otimizado) */}
        <Script id="microsoft-clarity-script" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "tnmo2bj7xo");
          `}
        </Script>
      </body>
    </html>
  );
}