import React from 'react';
import { Card } from '../../components/card';
import Particles from '@/app/components/particles';
import { NavProject } from '@/app/components/navproject';

export default async function PiHenryDogs() {
    return (
        <div className="relative overflow-hidden bg-gradient-to-tl from-black via-blue-800/20 to-black pb-16">
        <Particles
                className="absolute inset-0 -z-10 animate-fade-in"
                quantity={100}
            />            <NavProject />
            <div className="px-6 pt-16 mx-auto max-w-7xl lg:px-8 md:pt-24 lg:pt-32">
                <div className='md:flex'>
                    <div className="max-w-2xl mx-auto lg:mx-0">
                        <h1 className="text-4xl font-bold tracking-tight text-zinc-100 sm:text-5xl">
                            Pi Henry Dogs
                        </h1>
                        <div className="mt-4 text-zinc-400">
                            <p className="mb-2">
                                Es un proyecto individual desarrollado como parte del Bootcamp de SoyHenry, 
                                que se centra en la integración de datos de una API sobre razas de perros y sus estadísticas. 
                                Este proyecto marcó el inicio de mi camino en el desarrollo web y fue una experiencia enriquecedora 
                                que me permitió aplicar los conocimientos adquiridos en el Bootcamp.
                            </p>
                            <p>
                                Aunque en su fase inicial presenta un diseño básico, tengo la intención de seguir mejorándolo, 
                                lo que representa una oportunidad valiosa para profundizar en mis habilidades. 
                                La aplicación está diseñada para interactuar con una API externa, lo que me permitió enfrentar desafíos técnicos significativos, 
                                apoyado por la colaboración de mis compañeros y la orientación de los instructores de SoyHenry.
                            </p>
                        </div>
                    </div>
                    <div className="md:my-auto my-5 justify-center text-center">
                        <Card>
                            <div className="inline-flex items-center px-6 py-3 text-lg font-semibold text-white bg-transparent rounded-lg border-b-2 border-transparent transition-all duration-300 hover:border-b-2 hover:border-zinc-400">
                                <span className="underline">Link del deploy: En proceso.</span>
                            </div>
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
                                src="https://raw.githubusercontent.com/andresjf93/portfolio/main/util/PI.png"
                                alt="Pi Henry Dogs"
                                className="w-full h-auto object-cover rounded-lg shadow-lg"
                            />
                        </div>
                    </div>

                    {/* Descripción y funcionalidades */}
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
                            Funcionalidades Principales
                        </h2>
                        <ul className="mt-4 space-y-4 text-zinc-400">
                            <li>Integración con la API de perros.</li>
                            <li>Búsqueda por razas de perro y filtrado por características.</li>
                            <li>Visualización de detalles individuales de cada raza, incluyendo fotos y estadísticas.</li>
                            <li>Diseño responsive para una experiencia optimizada en todos los dispositivos.</li>
                        </ul>

                        <h2 className="mt-8 text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
                            Tecnologías Utilizadas
                        </h2>
                        <ul className="mt-4 space-y-4 text-zinc-400">
                            <li>React.js para la construcción de la interfaz de usuario.</li>
                            <li>Redux para el manejo del estado global.</li>
                            <li>Tailwind CSS para el diseño responsivo y moderno.</li>
                            <li>API externa para los datos sobre las razas de perros.</li>
                        </ul>
                    </div>
                </div>

                {/* Imagen adicional */}
                <div className="mt-8">
                    <Card>
                        <img
                            src="https://raw.githubusercontent.com/andresjf93/portfolio/main/util/Landin%20pi.png"
                            alt="Pi Henry Dogs"
                            className="w-full h-auto object-cover rounded-lg shadow-lg"
                        />
                    </Card>
                </div>
            </div>
        </div>
    );
}
