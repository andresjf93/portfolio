import Link from "next/link";
import React from "react";
import Particles from "./components/particles";

const navigation = [
	{ name: "Projects", href: "/projects" },
	{ name: "Contact", href: "/contact" },
];

export default function Home() {
	return (
		<div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
			{/* Navigation */}
			<nav className="my-8 md:my-16 animate-fade-in">
				<ul className="flex items-center justify-center gap-4">
					{navigation.map((item) => (
						<Link
							key={item.href}
							href={item.href}
							className="text-sm sm:text-base md:text-lg text-zinc-500 hover:text-zinc-300 duration-500"
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
			<h1 className="z-10 text-4xl sm:text-5xl md:text-7xl lg:text-9xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display whitespace-nowrap bg-clip-text">
				Andrés Farías
			</h1>

			{/* Divider Line */}
			<div className="hidden w-full h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />

			{/* Introduction Section */}
			<div className="my-8 sm:my-12 md:my-16 text-center animate-fade-in max-w-lg md:max-w-2xl lg:max-w-6xl">
				<h2 className="text-sm sm:text-base md:text-lg text-zinc-200 leading-relaxed">
					Hola, mi nombre es Andrés y soy Full Stack Developer especializado en construir <span className="font-extrabold">experiencias digitales únicas</span>. 
					Mi pasión no solo está en escribir código, sino en <span className="font-extrabold">crear soluciones innovadoras</span> 
					que realmente hagan la diferencia. Tengo experiencia en React, Redux, Javascript, Typescript y Tailwind, y <span className="font-extrabold">mi enfoque está en brindar un impacto tangible</span> en cada proyecto que desarrollo.
				</h2>
			</div>
		</div>
	);
}
