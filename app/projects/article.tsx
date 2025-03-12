import Link from "next/link";
import { Eye } from "lucide-react";

type Props = {
	project: string; // Definirlo correctamente como string
	title: string;
	description: string;
	views: number;
};

export const Article: React.FC<Props> = ({ project, title, description, views }) => {
		return (
		<Link href={`/projects/`} className="group block">
			<article className="p-4 md:p-8 border border-zinc-700 rounded-lg hover:border-zinc-400 transition duration-300">
				<div className="flex justify-between gap-2 items-center">
					<span className="text-xs text-zinc-400 group-hover:text-white transition">
						{project}
					</span>
					<span className="text-zinc-500 text-xs flex items-center gap-1">
						<Eye size={16} />
						{views} vistas
					</span>
				</div>
				<h2 className="text-xl font-medium lg:text-2xl text-zinc-200 group-hover:text-white transition">
					{title}
				</h2>
				<p className="mt-2 text-sm text-zinc-400 group-hover:text-zinc-200 transition">
					{description}
				</p>
			</article>
		</Link>
	);
};
