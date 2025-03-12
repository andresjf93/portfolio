"use client";

import { motion, useMotionTemplate, useSpring } from "framer-motion";
import { MouseEvent, PropsWithChildren, useMemo } from "react";

export const Card: React.FC<PropsWithChildren> = ({ children }) => {
	const mouseX = useSpring(0, { stiffness: 500, damping: 100 });
	const mouseY = useSpring(0, { stiffness: 500, damping: 100 });

	const onMouseMove = (event: MouseEvent<HTMLDivElement>) => {
		const { left, top } = event.currentTarget.getBoundingClientRect();
		mouseX.set(event.clientX - left);
		mouseY.set(event.clientY - top);
	};

	const maskImage = useMotionTemplate`radial-gradient(240px at ${mouseX}px ${mouseY}px, white, transparent)`;
	const style = useMemo(() => ({ maskImage, WebkitMaskImage: maskImage }), [maskImage]);

	return (
		<div
			onMouseMove={onMouseMove}
			className="relative overflow-hidden rounded-xl border border-zinc-600 hover:border-zinc-400/50 duration-700 hover:bg-zinc-800/10 group mx-10"
		>
			{/* Capas de efectos visuales */}
			<div className="pointer-events-none">
				{/* Gradiente de máscara */}
				<div
					className="absolute inset-0 z-0 transition duration-1000 [mask-image:linear-gradient(black,transparent)]"
					aria-hidden="true"
				/>
				<motion.div
					className="absolute inset-0 z-10 bg-gradient-to-br via-zinc-100/10 opacity-100 transition duration-1000 group-hover:opacity-50"
					style={style}
					aria-hidden="true"
				/>
				<motion.div
					className="absolute inset-0 z-10 opacity-0 mix-blend-overlay transition duration-1000 group-hover:opacity-100"
					style={style}
					aria-hidden="true"
				/>
			</div>

			{/* Contenido */}
			{children}
		</div>
	);
};
