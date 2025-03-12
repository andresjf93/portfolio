"use client";
import Link from "next/link";
import React from "react";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import Particles from "../components/particles";
import Footer from "../components/Footer";

export const revalidate = 60;
export default function ProjectsPage() {
    const bootcampProjects = [
        {
            title: "Pi Henry Dogs",
            description: "Aplicación web interactiva que utiliza una API para mostrar información sobre razas de perros, enfocada en manejo de estado global y APIs.",
            image: "https://raw.githubusercontent.com/andresjf93/portfolio/main/util/PI.png",
            link: "/projects/pi",
            technologies: ["React.js", "Redux.js", "CSS", "API REST", "Node.js "],
        },
        {
            title: "Hyper Events",
            description: "Plataforma para comprar y vender tickets de eventos, con una interfaz moderna y fluida.",
            image: "https://raw.githubusercontent.com/andresjf93/portfolio/main/util/Hyper%20Event.png",
            link: "/projects/hyper",
            technologies: ["Next.js", "Tailwind CSS", "Node.js", "JavaScript", "PostgreSQL"],
        },
    ];

    const personalProjects = [
        {
            title: "Consistent Labs",
            description: "Página web para mostrar el talento del equipo de diseño, con un enfoque en la interfaz de usuario dinámica y el backend eficiente",
            image: "https://raw.githubusercontent.com/andresjf93/portfolio/main/util/Consistent.png",
            link: "/projects/consistent",
            technologies: ["React.js", "Tailwind CSS", "Desarrollo front end", "TypeScript", "JavaScript", "Node.js"],
        },
        {
            title: "Coinvert",
            description: "Plataforma enfocada en blockchain y criptomonedas con un estilo visual retrowave.",
            image: "https://raw.githubusercontent.com/andresjf93/portfolio/main/util/Coinvert.png",
            link: "/projects/coinvert",
            technologies: ["TypeScript", "JavaScript", "Tailwind CSS", "React.js", "Node.js"],
        },
        {
            title: "Proyectos Internacionales bajo NDA",
            description: "He trabajado como frontend en varios proyectos internacionales relacionados con blockchain y criptomonedas bajo acuerdos de confidencialidad (NDA). Aunque no puedo compartir detalles específicos, estas experiencias me permitieron desarrollar habilidades avanzadas en React.js, Tailwind CSS y tecnologías modernas, siendo clave para mi crecimiento profesional.",
            link: "", // Sin link para este proyecto
            technologies: ["React.js", "Tailwind CSS", "TypeScript", "Blockchain"],
        },
        {
            title: "Dashboard Interactivo de Ventas",
            description: "He trabajado en Un panel de control moderno que visualiza estadísticas de ventas en tiempo real. Con gráficos interactivos, seguimiento de tendencias y una interfaz optimizada para facilitar la toma de decisiones comerciales.",
            link: "https://raw.githubusercontent.com/andresjf93/portfolio/main/util/Dashboard.png", // Asegúrate de actualizar esta URL con la imagen correcta, // Sin link para este proyecto
            technologies: ["React.js", "Tailwind CSS", "TypeScript", "Recharts", ]
        },
    ];

    return (
        <div className="flex flex-col min-h-screen">
            <div className="relative pb-16 overflow-hidden bg-gradient-to-tl from-black via-blue-800/20 to-black">
                <Navigation />
                <Particles
                    className="absolute inset-0 -z-10 animate-fade-in"
                    quantity={100}
                />
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
                                    {project.link ? (
                                        <Link href={project.link}>
                                            <article className="relative w-full h-full p-4 md:p-8">
                                                {/* Renderiza la imagen solo si está definida */}
                                                {project.image && (
                                                    <img
                                                        src={project.image}
                                                        alt={project.title}
                                                        className="w-full h-48 object-cover"
                                                    />
                                                )}
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
                                    ) : (
                                        <article className="relative w-full h-full p-4 md:p-8">
                                            {/* Renderiza la imagen solo si está definida */}
                                            {project.image && (
                                                <img
                                                    src={project.image}
                                                    alt={project.title}
                                                    className="w-full h-48 object-cover"
                                                />
                                            )}
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
                                    )}
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
            {/* Footer */}
            <Footer />
        </div>
    );
}
