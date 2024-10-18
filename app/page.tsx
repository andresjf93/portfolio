import Link from "next/link";
import React from "react";
import Particles from "./components/particles";
import Footer from "./components/Footer";
import { Card } from "./components/card";

const navigation = [
	{ name: "Projects", href: "/projects" },
	{ name: "About", href: "/about" },
];

export default function Home() {
	const latestProjects = [
		{
			title: "Consistent Labs",
			description:
				"Página web para mostrar el talento del equipo de diseño, con un enfoque en la interfaz de usuario dinámica y el backend eficiente.",
			image:
				"https://raw.githubusercontent.com/andresjf93/portfolio/main/util/Consistent.png",
			link: "/projects/consistent",
			technologies: ["React.js", "Tailwind CSS", "Desarrollo front end", "TypeScript", "JavaScript", "Node.js"],
		},
		{
			title: "Coinvert",
			description:
				"Plataforma enfocada en blockchain y criptomonedas con un estilo visual retrowave.",
			image:
				"https://raw.githubusercontent.com/andresjf93/portfolio/main/util/Coinvert.png",
			link: "/projects/coinvert",
			technologies: ["TypeScript", "JavaScript", "Tailwind CSS", "React.js", "Node.js"],
		},
	];
	return (
		<div className="flex flex-col min-h-screen">
			{/* Contenido Principal */}
			<div className="flex flex-col items-center flex-grow w-full h-full overflow-hidden bg-gradient-to-tl from-black via-blue-800/20 to-black">
				{/* Navigation */}
				<nav className="my-4 md:my-8 animate-fade-in">
					<ul className="flex items-center justify-center gap-2 sm:gap-4">
						{navigation.map((item) => (
							<Link
								key={item.href}
								href={item.href}
								className="text-xs sm:text-sm md:text-base text-zinc-500 hover:text-zinc-300 duration-500"
							>
								{item.name}
							</Link>
						))}
					</ul>
				</nav>
				{/* Divider Line */}
				<div className="hidden w-full h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
				{/* Particles */}
				<Particles
					className="absolute inset-0 -z-10 animate-fade-in"
					quantity={100}
				/>
				{/* Main Title */}
				<h1 className="z-10 text-3xl sm:text-4xl md:text-6xl lg:text-8xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display whitespace-nowrap bg-clip-text">
					Andrés Farías
				</h1>

				{/* Divider Line */}
				<div className="hidden w-full h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />

				{/* Introduction Section */}
				<div className="mt-6 sm:mt-4 md:mt-6 text-center animate-fade-in max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-5xl">
					<h2 className="text-xs sm:text-sm mb-3 sm:mb-5 md:text-lg text-zinc-200 leading-snug md:leading-relaxed">
						Frontend Developer con experiencia en crear interfaces dinámicas y accesibles.
					</h2>
				</div>

				{/* Últimos Proyectos */}
				<div className="px-4 sm:px-6 mb-6 sm:mb-8 mx-auto space-y-6 md:space-y-8 max-w-6xl lg:px-8 lg:space-y-12">
					<div className="mx-auto lg:mx-0 leading-relaxed animate-fade-in">
						<h2 className="text-xl sm:text-2xl font-bold text-zinc-100">
							Últimos Proyectos
						</h2>
						<p className="my-2 sm:my-4 text-zinc-400">
							Aquí puedes ver algunos de mis últimos proyectos más destacados, desarrollados con diversas tecnologías y estilos de diseño.
						</p>
						<div className="grid md:-ml-10 md:mr-20 grid-cols-1 gap-4 sm:gap-6 lg:gap-8 lg:grid-cols-2">
							{latestProjects.map((project, index) => (
								<Card key={index}>
									{project.link ? (
										<Link href={project.link}>
											<article className="relative w-full h-full p-4 md:p-6">
												{/* Renderiza la imagen solo si está definida */}
												{project.image && (
													<img
														src={project.image}
														alt={project.title}
														className="w-full h-36 sm:h-48 object-cover"
													/>
												)}
												<h2 className="mt-3 sm:mt-4 text-lg sm:text-xl font-bold text-zinc-100 font-display">
													{project.title}
												</h2>
												<p className="mt-1 sm:mt-2 text-zinc-400 text-xs sm:text-sm">
													{project.description}
												</p>
												<div className="mt-2 sm:mt-4 flex flex-wrap gap-1 sm:gap-2">
													{project.technologies.map((tech, idx) => (
														<span key={idx} className="inline-flex items-center justify-center px-2 py-1 text-xs font-medium text-white bg-zinc-600 rounded">
															{tech}
														</span>
													))}
												</div>
											</article>
										</Link>
									) : (
										<article className="relative w-full h-full p-4 md:p-6">
											{/* Renderiza la imagen solo si está definida */}
											{project.image && (
												<img
													src={project.image}
													alt={project.title}
													className="w-full h-36 sm:h-48 object-cover"
												/>
											)}
											<h2 className="mt-3 sm:mt-4 text-lg sm:text-xl font-bold text-zinc-100 font-display">
												{project.title}
											</h2>
											<p className="mt-1 sm:mt-2 text-zinc-400 text-xs sm:text-sm">
												{project.description}
											</p>
											<div className="mt-2 sm:mt-4 flex flex-wrap gap-1 sm:gap-2">
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
				</div>
			</div>
			{/* Footer */}
			<Footer />
		</div>
	);
}
