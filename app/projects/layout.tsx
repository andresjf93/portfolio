export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
	return (
		<div className="relative min-h-screen bg-gradient-to-tl from-zinc-900 via-zinc-400/10 to-zinc-900 flex justify-center items-center">
			<main className="w-full max-w-7xl p-4">{children}</main>
		</div>
	);
}
