"use client";
import { Github, LinkedinIcon, Mail, Twitter } from "lucide-react";
import Link from "next/link";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";

const socials = [
	{
		icon: <LinkedinIcon size={24} />,
		href: "https://www.linkedin.com/in/andjf93/",
		label: "Linkedin",
		handle: "Andrés J. Farías",
	},
	{
		icon: <Mail size={24} />,
		href: "mailto:andresjf93@gmail.com",
		label: "Email",
		handle: "Andresjf93",
	},
	{
		icon: <Github size={24} />,
		href: "https://github.com/andresjf93",
		label: "Github",
		handle: "Andresjf93",
	},
];

const SocialCard = ({ href, Icon, handle, label }: { href: string; Icon: any; handle: string; label: string }) => (
	<Card>
		<Link
			href={href}
			target="_blank"
			className="relative flex flex-col items-center gap-4 duration-700 group p-4 md:py-16 lg:py-24"
		>
			<span className="absolute w-px h-2/3 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent" aria-hidden="true" />
			<span className="relative z-10 flex items-center justify-center w-14 h-14 duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-md">
				<Icon size={24} />
			</span>
			<div className="z-10 flex flex-col items-center">
				<span className="text-xl font-medium duration-150 lg:text-2xl text-zinc-200 group-hover:text-white font-display">
					{handle}
				</span>
				<span className="mt-2 text-sm text-center text-zinc-400 group-hover:text-zinc-200">
					{label}
				</span>
			</div>
		</Link>
	</Card>
);

export default function Socials() {
	return (
		<div className="bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
			<Navigation />
			<div className="container flex items-center justify-center min-h-screen px-6 mx-auto">
				<div className="grid w-full grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-16 mt-16 sm:mt-0">
					{socials.map((s, index) => (
						<SocialCard key={index} href={s.href} Icon={s.icon} handle={s.handle} label={s.label} />
					))}
				</div>
			</div>
		</div>
	);
}