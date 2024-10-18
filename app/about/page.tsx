"use client";

import { Github, LinkedinIcon, Mail } from "lucide-react";
import { AiOutlineCode, AiOutlineDatabase, AiOutlineApi } from "react-icons/ai";
import { FaReact } from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTailwindcss } from "react-icons/si";

import Link from 'next/link';
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import Particles from "../components/particles";
import Footer from "../components/Footer";

export default function About() {
	return (
		<div className="flex flex-col min-h-screen">
			<div className="py-16 overflow-hidden bg-gradient-to-tl from-black via-blue-800/20 to-black">
				<Particles
					className="absolute inset-0 -z-10 animate-fade-in"
					quantity={100}
				/>
				{/* Navigation bar */}
				<Navigation />
				<div className="max-w-6xl text-zinc-200 mx-auto grid space-y-8 grid-cols-1 md:grid-cols-2 px-6 pt-16 gap-12">
					<div className="flex flex-col space-y-8 ">
						{/* User Info */}
						<div className="flex items-center mx-10 space-x-4">
							<div>
								<h1 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl text-transparent bg-clip-text bg-white duration-1000 font-display whitespace-nowrap cursor-default">
									Andrés Farías
								</h1>
								<p className="text-sm sm:text-base md:text-lg text-zinc-300 leading-relaxed">
									Full Stack Developer
								</p>
								{/* Internal Menu */}
								<div className="flex mt-4 text-2xl space-x-4">
									<BiLogoTypescript className="text-blue-400" />
									<IoLogoJavascript className="text-blue-400" />
									<FaReact className="text-blue-400" />
									<SiTailwindcss className="text-blue-400" />
								</div>
							</div>
						</div>
						{/* Social Links */}
						<div className="flex mr-2 mx-10 space-x-4">
							<Link href="https://github.com/andresjf93" target="_blank">
								<Github size={24} className="hover:text-blue-400 transition-all duration-300" />
							</Link>
							<Link href="https://www.linkedin.com/in/andjf93/" target="_blank">
								<LinkedinIcon size={24} className="hover:text-blue-400 transition-all duration-300" />
							</Link>
							<Link href="mailto:andresjf93@gmail.com">
								<Mail size={24} className="hover:text-blue-400 transition-all duration-300" />
							</Link>
						</div>
						{/* CV Download Button */}
						<div className="mt-8 mx-10 ">
							<Link
								href="https://github.com/andresjf93/portfolio/blob/main/public/cv/Andrés%20J.%20Farias.pdf"
								target="_blank"
								className="px-8 py-3 text-lg font-semibold text-white bg-gradient-to-r from-zinc-600 via-zinc-500 to-zinc-400 rounded-full hover:opacity-90 transition-all"
							>
								Descargar CV
							</Link>
						</div>
						<Card>
							<section id="skills" className="p-8 ">
								<h2 className="text-3xl font-bold text-white border-b-2 z-10  border-blue-400 pb-2">Habilidades Blandas </h2>
								<ul className="mt-4 list-disc text-zinc-400 list-inside space-y-4">
									<li>
										Organización del Trabajo
									</li>
									<li >
										Habilidad de Análisis.
									</li>
									<li >
										Pro- Actividad.
									</li>
									<li >
										Adaptabilidad.
									</li>
									<li >
										Disciplina.
									</li>
									<li >
										Concentración.
									</li>
								</ul>
							</section>
						</Card>
					</div>

					{/* Main Content */}
					<div className="space-y-10 -mx-10">
						{/* Introduction */}
						<Card>
							<section id="introduction" className="p-8">
								<h2 className="text-3xl font-bold text-white">
									Acerca de Mí
								</h2>
								<p className="mt-4 text-zinc-400">
									Frontend Developer con experiencia en la creación de
									interfaces dinámicas y responsivas utilizando React, Next.js, y
									Tailwind CSS. Especializado en el desarrollo de experiencias de
									usuario optimizadas, interfaces intuitivas y con un fuerte
									enfoque en la accesibilidad. Capaz de trabajar en equipo y
									adaptar soluciones visuales a las necesidades del cliente.
								</p>
							</section>
						</Card>

						{/* Work Experience */}
						<Card>
							<section id="work" className="p-8">
								<h2 className="text-3xl font-bold text-white border-b-2 border-blue-400 pb-2">Experiencia Laboral</h2>
								<div className="mt-4 space-y-4">
									<div>
										<h3 className="text-xl font-semibold text-zinc-100">Frontend Developer</h3>
										<p className="text-zinc-400">Consistent Labs - 2023 - Presente</p>
										<ul className="list-disc list-inside text-zinc-400">
											<li>Desarrollo de proyectos personalizados para clientes en React, Next.js y Tailwind CSS.</li>
											<li>Implementación de soluciones escalables para aplicaciones empresariales utilizando Node.js.</li>
											<li>Integración de sistemas de terceros y API RESTful en proyectos web.</li>
										</ul>
									</div>
									<div>
										<h3 className="text-xl font-semibold text-zinc-100">Operador de Monitoreo GPS</h3>
										<p className="text-zinc-400">Bitacora Tecnology - 2020 - 2022</p>
										<ul className="list-disc list-inside text-zinc-400">
											<li>Operador de monitoreo GPS in house para la empresa Hipermercados Tottus</li>
											<li>Realizar informes de viajes</li>
											<li>Manejo de bitácoras de viajes en Excel</li>
										</ul>
									</div>
								</div>
							</section>
						</Card>

						{/* Studies */}
						<Card>
							<section id="studies" className="p-8">
								<h2 className="text-3xl font-bold text-white border-b-2 border-blue-400 pb-2">Estudios</h2>
								<div className="mt-4 space-y-4">
									<div>
										<h3 className="text-xl font-semibold text-zinc-100">Universidad José Gregorio Hernández</h3>
										<p className="text-zinc-400">Ingeniero en Computación - Feb. 2009 - Inconcluso. 6to Semestre</p>
									</div>
									<div>
										<h3 className="text-xl font-semibold text-zinc-100">SoyHenry Bootcamp</h3>
										<p className="text-zinc-400">Desarrollo Full Stack - 2023</p>
									</div>
								</div>
							</section>
						</Card>

						{/* Technical Skills */}
						<Card>
							<section id="skills" className="p-8">
								<h2 className="text-3xl font-bold text-white border-b-2 border-blue-400 pb-2">Habilidades Técnicas</h2>
								<div className="mt-4 space-y-4">
									<div className="flex items-center space-x-2">
										<AiOutlineDatabase size={24} className="text-blue-400" />
										<p className="text-zinc-400">JavaScript, TypeScript, HTML5, CSS3</p>
									</div>
									<div className="flex items-center space-x-2">
										<FaReact size={24} className="text-blue-400" />
										<p className="text-zinc-400">React.js, Redux, Next.js</p>
									</div>
									<div className="flex items-center space-x-2">
										<AiOutlineCode size={24} className="text-blue-400" />
										<p className="text-zinc-400">Tailwind CSS, CSS Modules</p>
									</div>
									<div className="flex items-center space-x-2">
										<AiOutlineApi size={24} className="text-blue-400" />
										<p className="text-zinc-400">Git, GitHub, Figma</p>
									</div>
								</div>
							</section>
						</Card>
					</div>
				</div>
			</div>
			{/* Footer */}
			<Footer />
		</div>
	);
}
