import React from 'react'
import Image from 'next/image';
import perfil from './perfil.jpg';
import SplitText from '@/components/ui/SplitText';

export const Hero = ({ name = "", jobTitle = ""}) => {
  return (
    <div className="relative h-dvh w-screen-1/2 overflow-x-hidden">
        {/* Hero Section */}
        <div className="relative h-dvh w-screen-1/2 overflow-hidden">
            <header className="text-center mb-16 md:mb-20 justify-center items-center flex flex-col">
            {perfil && (
                <Image 
                src={perfil} 
                alt={name}
                width={300} 
                height={300} 
                className="rounded-full mx-auto mb-8 shadow-xl border-4 border-primary/20" 
                data-ai-hint="profile person" 
                priority
                />
            )}

            {/* Animated Name */}
            <SplitText
                text={name}
                className="text-5xl md:text-7xl font-bold text-primary mb-3"
                delay={150}
                duration={0.6}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                rootMargin="-100px"
                textAlign="center"
            />

            {/* Animated Job Title */}
            <SplitText
                text={jobTitle}
                className="text-2xl md:text-3xl text-muted-foreground tracking-tight"
                delay={150}
                duration={0.6}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                rootMargin="-100px"
                textAlign="center"
            />
            </header>
        </div>
    </div>
)}