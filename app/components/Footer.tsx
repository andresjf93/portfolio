import { MailIcon } from "lucide-react";
import React from "react";
import { SVGProps } from "react";

// GitHub Icon
export const GithubIcon = (props: SVGProps<SVGSVGElement>) => (
	<svg
		{...props}
		viewBox="0 0 24 24"
		fill="currentColor"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M12 0.297C5.373 0.297 0 5.67 0 12.297C0 17.6 3.438 22.055 8.207 23.539C8.805 23.656 9.026 23.297 9.026 22.984C9.026 22.71 9.015 22.066 9.008 21.203C5.672 21.906 4.968 19.562 4.968 19.562C4.422 18.221 3.633 17.905 3.633 17.905C2.545 17.282 3.71 17.299 3.71 17.299C4.909 17.376 5.505 18.572 5.505 18.572C6.582 20.398 8.445 19.84 9.137 19.553C9.244 18.777 9.546 18.299 9.882 18.044C7.197 17.794 4.415 16.75 4.415 11.939C4.415 10.559 4.931 9.436 5.778 8.553C5.647 8.291 5.237 6.994 5.879 5.298C5.879 5.298 6.929 5.014 9.009 6.573C9.87 6.309 10.825 6.178 11.782 6.173C12.738 6.178 13.694 6.309 14.555 6.573C16.635 5.014 17.685 5.298 17.685 5.298C18.327 6.994 17.917 8.291 17.785 8.553C18.632 9.436 19.148 10.559 19.148 11.939C19.148 16.764 16.354 17.788 13.656 18.037C14.073 18.347 14.471 19.027 14.471 20.045C14.471 21.497 14.457 22.603 14.457 22.984C14.457 23.297 14.676 23.66 15.285 23.539C20.061 22.055 23.5 17.6 23.5 12.297C23.5 5.67 18.127 0.297 12 0.297Z"
		/>
	</svg>
);

// LinkedIn Icon
export const LinkedInIcon = (props: SVGProps<SVGSVGElement>) => (
	<svg
		{...props}
		viewBox="0 0 24 24"
		fill="currentColor"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M22.225 0H1.771C0.792 0 0 0.771 0 1.73V22.27C0 23.23 0.792 24 1.771 24H22.222C23.203 24 24 23.23 24 22.27V1.73C24 0.771 23.203 0 22.225 0ZM7.12 20.452H3.557V9.014H7.12V20.452ZM5.339 7.59C4.233 7.59 3.4 6.754 3.4 5.648C3.4 4.542 4.233 3.707 5.339 3.707C6.444 3.707 7.278 4.542 7.278 5.648C7.278 6.754 6.444 7.59 5.339 7.59ZM20.453 20.452H16.891V14.902C16.891 13.683 16.865 11.961 15.198 11.961C13.508 11.961 13.257 13.42 13.257 14.813V20.452H9.694V9.014H13.113V10.367H13.166C13.629 9.472 14.786 8.547 16.503 8.547C19.654 8.547 20.455 10.557 20.455 13.288V20.452H20.453Z"
		/>
	</svg>
);

export default function Footer() {
	return (
		<footer className="w-full bg-black text-zinc-400 py-4">
			<div className="container mx-auto flex justify-between items-center">
				{/* Derechos Reservados */}
				<p className="text-xs text-center w-full lg:w-auto lg:text-left">
					&copy; {new Date().getFullYear()} Andrés Farías. Todos los derechos reservados.
				</p>
				{/* Redes Sociales */}
				<div className="flex gap-6">
					<a
					aria-label="git"
						href="https://github.com/andresfarias"
						target="_blank"
						rel="noopener noreferrer"
						className="hover:text-zinc-100"
					>
						<GithubIcon className="w-6 h-6" />
					</a>
					<a
					aria-label="linkedin"
						href="https://linkedin.com/in/andresfarias"
						target="_blank"
						rel="noopener noreferrer"
						className="hover:text-zinc-100"
					>
						<LinkedInIcon className="w-6 h-6" />
					</a>
					<a
					aria-label="mail"
						href="mailto:andresfarias@gmail.com"
						className="hover:text-zinc-100"
					>
						<MailIcon className="w-6 h-6" />
					</a>
				</div>
			</div>
		</footer>
	);
}
