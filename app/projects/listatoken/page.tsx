import React from 'react';
import { Card } from '../../components/card';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Particles from '@/app/components/particles';
import { NavProject } from '@/app/components/navproject';

export default function Dashboard() {
    const images = [
        "https://raw.githubusercontent.com/andresjf93/portfolio/main/util/listatoken.png", // Asegúrate de actualizar esta URL con la imagen correcta
    ];

    return (
        <div className="relative overflow-hidden bg-gradient-to-tl from-black via-blue-800/20 to-black pb-16">
            <Particles className="absolute inset-0 -z-10 animate-fade-in" quantity={100} />
            <NavProject />

            <div className="px-6 pt-16 mx-auto max-w-7xl lg:px-8 md:pt-24 lg:pt-32">
                <div className="md:flex">
                    <div className="max-w-2xl mx-auto lg:mx-0">
                        <h1 className="text-4xl font-bold tracking-tight text-zinc-100 sm:text-5xl">
                            Lista de Tokens y Proyectos
                        </h1>
                        <p className="mt-4 text-zinc-400">
                            Es una plataforma diseñada para explorar y listar tokens en el ecosistema Web3. Ofrece una interfaz moderna e intuitiva que permite a los usuarios descubrir nuevos proyectos, verificar detalles clave de cada token y mantenerse actualizados sobre el mercado cripto.     </p>
                    </div>

                    <div className="mt-16 text-center">
                        <Card>
                            <Link
                                href="https://listweb3token.com" // Cambia esta URL si tienes un despliegue
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
                                alt="Dashboard principal"
                                className="w-full h-auto object-cover rounded-lg shadow-lg"
                            />
                        </div>
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
                            Funcionalidades Principales
                        </h2>
                        <ul className="mt-4 space-y-4 text-zinc-400">
                            <li>Listado de tokens con información detallada.</li>
                            <li>Búsqueda y filtrado avanzado por red blockchain.</li>
                            <li>Interfaz intuitiva con una experiencia optimizada para usuarios Web3.</li>
                            <li>Seguridad y transparencia en la visualización de datos.</li>
                        </ul>

                        <h2 className="mt-8 text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
                            Tecnologías Utilizadas
                        </h2>
                        <ul className="mt-4 space-y-4 text-zinc-400">
                            <li>React + TypeScript → Para una UI dinámica, tipada y escalable.</li>
                            <li>Tailwind CSS para un diseño moderno y adaptable.</li>
                            <li>Vite → Para un desarrollo rápido y optimizado.</li>
                            <li>Lucide React → Para iconografía moderna y minimalista</li>
                        </ul>
                    </div>
                </div>

                {/* Galería de imágenes debajo */}
                <div className="grid md:grid-cols-2 gap-4 mt-8">
                    {images.slice(1).map((image, index) => (
                        <Card key={index}>
                            <img
                                src={image}
                                alt={`Dashboard Vista ${index + 2}`}
                                className="w-full h-auto object-cover rounded-lg shadow-lg"
                            />
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
}
