import React from 'react';
import { Navigation } from '../../components/nav';
import { Card } from '../../components/card';
import Link from 'next/link'; // Importar Link de Next.js
import { ArrowRight } from 'lucide-react';

export default function HyperEvents() {
    return (
        <div className="relative pb-16">
            <Navigation />
            <div className="px-6 pt-16 mx-auto max-w-7xl lg:px-8 md:pt-24 lg:pt-32">
                <div className='flex'>
                    <div className="max-w-2xl mx-auto lg:mx-0">
                        <h1 className="text-4xl font-bold tracking-tight text-zinc-100 sm:text-5xl">
                            Hyper Events
                        </h1>
                        <p className="mt-4 text-zinc-400">
                            Es una página de compra y venta de tickets para eventos, donde puedes buscar nuevas experiencias para vivir o salir a divertirte con amigos. Por ahora, sigue en desarrollo y podría cambiar la idea principal para adaptarse a algún cliente.
                        </p>
                    </div>

                    {/* Botón o enlace al deploy, ahora debajo del texto */}
                    <div className="mt-16 text-center">
                        <Card>
                            <Link
                                href="https://hyperevent-fe.vercel.app/"
                                target="_blank" // Abre en una nueva pestaña
                                rel="noopener noreferrer" // Mejora de seguridad
                                className="inline-flex items-center px-6 py-3 text-lg font-semibold text-white bg-transparent rounded-lg border-b-2 border-transparent transition-all duration-300 hover:border-b-2 hover:border-zinc-400"
                            >
                                <span className="underline">Ir al Deploy</span>
                                <ArrowRight className="ml-2" /> {/* Agregar la flecha a la derecha */}
                            </Link>
                        </Card>
                    </div>
                </div>

                <div className="w-full h-px bg-zinc-800 my-8" />

                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                    <Card>
                        <img
                            src="https://raw.githubusercontent.com/andresjf93/portfolio/main/util/Hyper%20Event.png"
                            alt="Hyper Events"
                            className="w-full h-auto object-cover rounded-lg shadow-lg"
                        />
                    </Card>

                    <div>
                        <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
                            Funcionalidades Principales
                        </h2>
                        <ul className="mt-4 space-y-4 text-zinc-400">
                            <li>Sistema de compra y venta de tickets.</li>
                            <li>Filtrado por tipo de evento y ubicación.</li>
                            <li>Interfaz moderna y fácil de navegar.</li>
                            <li>Responsive design para dispositivos móviles.</li>
                        </ul>

                        <h2 className="mt-8 text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
                            Tecnologías Utilizadas
                        </h2>
                        <ul className="mt-4 space-y-4 text-zinc-400">
                            <li>Next.js y React para la estructura del proyecto.</li>
                            <li>Tailwind CSS para el diseño y la responsividad.</li>
                            <li>Backend con Node.js y Express.</li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    );
}
