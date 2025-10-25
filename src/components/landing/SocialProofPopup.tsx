'use client';
import { useState, useEffect } from 'react';

const names = [
    'Ana',
    'Lucas',
    'Gabriela',
    'João',
    'Maria',
    'Pedro',
    'Mariana',
    'Rafael',
    'Juliana',
    'Fernando',
    'Camila',
    'Matheus',
  ];

export default function SocialProofPopup() {
    const [isVisible, setIsVisible] = useState(false);
    const [currentName, setCurrentName] = useState(names[0]);
  
    useEffect(() => {
      const showInterval = 12 * 1000; // 12 seconds
      const visibleDuration = 5 * 1000; // 5 seconds
  
      const cycleNames = () => {
        const randomIndex = Math.floor(Math.random() * names.length);
        setCurrentName(names[randomIndex]);
        setIsVisible(true);
  
        setTimeout(() => {
          setIsVisible(false);
        }, visibleDuration);
      };
  
      // Initial popup
      const initialTimeout = setTimeout(cycleNames, 3000); // Show first popup after 3 seconds
  
      const mainInterval = setInterval(cycleNames, showInterval);
  
      return () => {
        clearTimeout(initialTimeout);
        clearInterval(mainInterval);
      };
    }, []);
  
    return (
      <div
        className={`fixed top-4 right-4 z-[100] w-auto max-w-sm rounded-lg bg-green-500 px-4 py-3 text-white shadow-lg transition-all duration-500 ease-in-out
                    ${
                      isVisible
                        ? 'translate-x-0 opacity-100'
                        : 'translate-x-full opacity-0'
                    }`}
      >
        <p className="text-sm font-medium">
          ✅ <strong>{currentName}</strong> acabou de garantir o acesso ao
          Protocolo Elite!
        </p>
      </div>
    );
  }
  