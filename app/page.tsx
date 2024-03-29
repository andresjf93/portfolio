"use client"
import Link from "next/link";
import React from "react";
import Particles from "./components/particles";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

const navigation = [
	{ name: "Projects", href: "/projects" },
	{ name: "Contact", href: "/contact" },
	{ name: "Pictures", href: "/contact" },
];
const fadeInAnimationVariants = {
	initial: {
		opacity: 0,
		y: 100,
	},
	animate: (index: number) => ({
		opacity: 1,
		y: 0,
		transition: {
			delay: 0.05 * index,
		},
	}),
};
const skillsData = [
	"HTML",
	"CSS",
	"JavaScript",
	"TypeScript",
	"React",
	"Next.js",
	"Node.js",
	"Git",
	"Tailwind",
	"Prisma",
	"MongoDB",
	"Redux",
	"GraphQL",
	"Express",
	"PostgreSQL",
	"Python",
	"Framer Motion",
]

export default function Home() {
	const { ref } = useSectionInView("Skills");
	return (
		<div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
			<nav className="my-16 animate-fade-in">
				<ul className="flex items-center justify-center gap-4">
					{navigation.map((item) => (
						<Link
							key={item.href}
							href={item.href}
							className="text-sm duration-500 text-zinc-500 hover:text-zinc-300"
						>
							{item.name}
						</Link>
					))}
				</ul>
			</nav>
			<div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
			<Particles
				className="absolute inset-0 -z-10 animate-fade-in"
				quantity={100}
			/>
			<h1 className="z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
				Andrés Farías
			</h1>

			<div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
			<div className="my-16 text-center animate-fade-in">
				<h2 className=" text-base text-zinc-200 ">
					Hola, mi nombre es Andrés y soy Full Stack Developer con experiencia en React, Redux, Javascript y Tailwind.
					{/* <p>Preparado y con capacidad para el puesto solicitado, formado en Backend y Frontend, cuento con capacidades como responsabilidad, proactividad, 					</p>
					<p>capacidad de resolución de problemas, muchas ganas de trabajar en equipo y aptitudes suficientes para el liderazgo,</p>
					<p>trabajo bajo presión, constancia en el trabajo, de aprendizaje y adaptación rápida.</p> */}
				</h2>
				<section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <h1>My skills</h1>
				<p className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
					{skillsData.map((skill, index) => (
						<motion.li
							className="bg-slate-300 border border-black rounded-lg px-5 py-3 dark:bg-white/10 dark:text-white/80 hover:bg-slate-400 transition duration-300 ease-in-out transform hover:scale-105"
							key={index}
							variants={fadeInAnimationVariants}
							initial="initial"
							whileInView="animate"
							viewport={{
								once: true,
							}}
							custom={index}
						>
							{skill}
						</motion.li>
					))}
				</p>
				</section>
			</div>
		</div>
	);
}
