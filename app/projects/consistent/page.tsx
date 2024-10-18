import React from 'react';
import { Navigation } from '../../components/nav';
import { Card } from '../../components/card';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Particles from '@/app/components/particles';

export default function ConsistentLabs() {
    const images = [
        "https://raw.githubusercontent.com/andresjf93/portfolio/main/util/Consistent.png",
        "https://raw.githubusercontent.com/andresjf93/portfolio/main/util/Consistent1.png",
        "https://raw.githubusercontent.com/andresjf93/portfolio/main/util/Consistent2.png",
        "https://raw.githubusercontent.com/andresjf93/portfolio/main/util/Consistent3.png",
    ];

    return (
        <div className="relative overflow-hidden bg-gradient-to-tl from-black via-blue-800/20 to-black pb-16">
        <Particles
                className="absolute inset-0 -z-10 animate-fade-in"
                quantity={100}
            />
            <Navigation />
            <div className="px-6 pt-16 mx-auto max-w-7xl lg:px-8 md:pt-24 lg:pt-32">
                <div className='flex'>
                    <div className="max-w-2xl mx-auto lg:mx-0">
                        <h1 className="text-4xl font-bold tracking-tight text-zinc-100 sm:text-5xl">
                            Consistent Labs
                        </h1>
                        <p className="mt-4 text-zinc-400">
                            Consistent Labs es una página web que muestra el talento del equipo de diseño, con un enfoque en interfaces de usuario dinámicas y un backend eficiente. El sitio está optimizado para ofrecer una experiencia visual atractiva y funcional.
                        </p>
                    </div>

                    <div className="mt-16 text-center">
                        <Card>
                            <Link
                                href="https://consistentlabs.dev" // Actualiza esta URL si tienes un deploy
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center px-6 py-3 text-lg font-semibold text-white bg-transparent rounded-lg border-b-2 border-transparent transition-all duration-300 hover:border-b-2 hover:border-zinc-400"
                            >
                                <span className="underline">Visitar Página Web</span>
                                <ArrowRight className="ml-2" />
                            </Link>
                        </Card>
                    </div>
                </div>

                <div className="w-full h-px bg-zinc-800 my-8" />

                 {/* Sección de imágenes y contenido */}
                 <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                    {/* Imagen principal */}
                    <div className="p-0 pointer-events-none">
                    <div className="mx-10 overflow-hidden relative duration-700 border rounded-xl hover:bg-zinc-800/10 group md:gap-8 hover:border-zinc-400/50 border-zinc-600">
                        <img
                            src={images[0]}
                            alt="Coinvert principal"
                            className="w-full h-auto object-cover rounded-lg shadow-lg"
                        />
                    </div>
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
                            Funcionalidades Principales
                        </h2>
                        <ul className="mt-4 space-y-4 text-zinc-400">
                            <li>Presentación visual del talento en diseño.</li>
                            <li>Interfaz de usuario dinámica.</li>
                            <li>Backend optimizado y eficiente.</li>
                            <li>Responsive design para móviles y tablets.</li>
                        </ul>

                        <h2 className="mt-8 text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
                            Tecnologías Utilizadas
                        </h2>
                        <ul className="mt-4 space-y-4 text-zinc-400">
                            <li>React y TypeScript para la interfaz y lógica de la aplicación.</li>
                            <li>Tailwind CSS para el diseño y responsividad.</li>
                            <li>Node.js y Express para el backend.</li>
                        </ul>
                    </div>
                </div>

                {/* Galería de imágenes debajo */}
                <div className="grid grid-cols-2 gap-4 mt-8">
                    {images.slice(1).map((image, index) => (
                        <Card key={index}>
                            <img
                                src={image}
                                alt={`Consistent Labs ${index + 2}`}
                                className="w-full h-auto object-cover rounded-lg shadow-lg"
                            />
                        </Card>
                    ))}
                </div>

            </div>
        </div>
    );
}
