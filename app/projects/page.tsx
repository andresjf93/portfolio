import Link from "next/link";
import React from "react";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";

export const revalidate = 60;
export default async function ProjectsPage() {
    const bootcampProjects = [
        {
            title: "Pi Henry Dogs",
            description: "Aplicación web interactiva que utiliza datos de una API externa para mostrar información detallada sobre razas de perros. Proyecto enfocado en la integración de APIs, manejo de estado global y creación de interfaces dinámicas con React.",
            image: "https://raw.githubusercontent.com/andresjf93/portfolio/main/util/PI.png",
            link: "/projects/pi",
            technologies: ["React.js","Redux.js", "CSS", "API REST","Node.js "],
        },
        {
            title: "Hyper Events",
            description: "Plataforma de compra y venta de tickets para eventos en tiempo real. Desarrollada con un enfoque en la experiencia de usuario, presenta una interfaz moderna y fluida que permite explorar eventos fácilmente. Ideal para quienes buscan vivir nuevas experiencias.",
            image: "https://raw.githubusercontent.com/andresjf93/portfolio/main/util/Hyper%20Event.png",
            link: "/projects/hyper",
            technologies: ["Next.js", "Tailwind CSS", "Node.js", "JavaScript","PostgreSQL"],
        },
    ];

    const personalProjects = [
        {
            title: "Coinvert",
            description: "Un proyecto innovador del equipo, enfocado en el mundo de blockchain y criptomonedas, donde fusionamos tecnología con un estilo visual retrowave que me apasiona. Esta plataforma no solo proporciona herramientas para el manejo de criptomonedas, sino que también crea una experiencia de usuario única, evocando la estética nostálgica de los años 80. Utilizando React.js y Node.js, he contribuido al desarrollo del frontend, asegurando una interfaz fluida y atractiva que resalta las capacidades de nuestro producto.",
            image: "https://raw.githubusercontent.com/andresjf93/portfolio/main/util/Coinvert.png",
            link: "/projects/coinvert",
            technologies: ["TypeScript", "JavaScript", "Tailwind CSS", "React.js", "Node.js"],
        },
        {
            title: "Consistent Labs",
            description: "Desarrollé una página web interactiva y atractiva destinada a exhibir el talento de nuestro equipo de diseño. Utilizando React.js para una interfaz de usuario dinámica y responsiva, combiné Node.js en el backend para gestionar eficientemente las solicitudes del servidor. Implementé TypeScript y JavaScript para garantizar un código más robusto y fácil de mantener. Esta plataforma no solo resalta nuestro portafolio de proyectos de diseño, sino que también mejora la experiencia del cliente al navegar por nuestras ofertas de manera fluida y atractiva.",
            image: "https://raw.githubusercontent.com/andresjf93/portfolio/main/util/Consistent.png",
            link: "/projects/consistent-labs",
            technologies: ["React.js", "Tailwind CSS", "Desarrollo front end", "TypeScript", "JavaScript", "Node.js"],
        },
        // Agrega más proyectos personales aquí
    ];

    return (
        <div className="relative pb-16">
            <Navigation />
            <div className="px-6 pt-16 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
                <div className="max-w-2xl mx-auto lg:mx-0">
                    <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
                        Mis Proyectos
                    </h2>
                </div>

                <div className="w-full h-px bg-zinc-800" />

                {/* Sección para proyectos personales */}
                <div className="mt-12">
                    <h3 className="text-2xl font-bold text-zinc-100">Proyectos Personales y de Trabajo</h3>
                    <p className="my-4 text-zinc-400">
                        Estos proyectos reflejan mi iniciativa personal y mis habilidades en desarrollo web, donde he explorado diversas tecnologías y estilos de diseño.
                    </p>
                    <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2">
                        {personalProjects.map((project, index) => (
                            <Card key={index}>
                                <Link href={project.link}>
                                    <article className="relative w-full h-full p-4 md:p-8">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-48 object-cover"
                                        />
                                        <h2 className="mt-4 text-2xl font-bold text-zinc-100 sm:text-3xl font-display">
                                            {project.title}
                                        </h2>
                                        <p className="mt-2 text-zinc-400">
                                            {project.description}
                                        </p>
                                        <div className="mt-4 flex flex-wrap gap-2">
                                            {project.technologies.map((tech, idx) => (
                                                <span key={idx} className="inline-flex items-center justify-center px-2 py-1 text-xs font-medium text-white bg-zinc-600 rounded">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </article>
                                </Link>
                            </Card>
                        ))}
                    </div>
                </div>

                <div className="w-full h-px bg-zinc-800 mt-12" />
                
                {/* Sección para proyectos del Bootcamp */}
                <div className="mt-12">
                    <h3 className="text-2xl font-bold text-zinc-100">Proyectos del SoyHenry Bootcamp</h3>
                    <p className="my-4 text-zinc-400">
                        Estos proyectos fueron desarrollados durante mi formación en SoyHenry Bootcamp, donde aprendí a integrar diversas tecnologías y crear aplicaciones web efectivas.
                    </p>
                    <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2">
                        {bootcampProjects.map((project, index) => (
                            <Card key={index}>
                                <Link href={project.link}>
                                    <article className="relative w-full h-full p-4 md:p-8">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-48 object-cover"
                                        />
                                        <h2 className="mt-4 text-2xl font-bold text-zinc-100 sm:text-3xl font-display">
                                            {project.title}
                                        </h2>
                                        <p className="mt-2 text-zinc-400">
                                            {project.description}
                                        </p>
                                        <div className="mt-4 flex flex-wrap gap-2">
                                            {project.technologies.map((tech, idx) => (
                                                <span key={idx} className="inline-flex items-center justify-center px-2 py-1 text-xs font-medium text-white bg-zinc-600 rounded">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </article>
                                </Link>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}