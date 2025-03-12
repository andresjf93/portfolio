import "../global.css";
import { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";

// 🔹 Configuración de fuentes
const inter = Inter({
	subsets: ["latin"],
	variable: "--font-inter",
	display: "swap",
});

const calSans = localFont({
	src: "../public/fonts/CalSans-SemiBold.ttf",
	variable: "--font-calsans",
	display: "swap",
});

export const metadata: Metadata = {
	metadataBase: new URL("https://andresjf93.vercel.app"),
	title: {
		default: "Andresjf93",
		template: "%s | Andresjf93",
	},
	description: "Desarrollador Frontend especializado en TypeScript, React y Tailwind CSS",
	openGraph: {
		title: "Andrés",
		description: "Desarrollador Frontend especializado en TypeScript, React y Tailwind CSS",
		url: "https://andresjf93.vercel.app",
		siteName: "andresjf93.vercel.app",
		images: [
			{
				url: "https://raw.githubusercontent.com/andresjf93/portfolio/main/public/og.png",  // Asegúrate de que esta imagen exista
				width: 1200,  // Dimensiones recomendadas para Open Graph
				height: 630,
				alt: "Andrés - Desarrollador Frontend",  // Texto alternativo de la imagen
			},
		],
		locale: "es-ES",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Andrés",
		description: "Desarrollador Frontend especializado en TypeScript, React y Tailwind CSS",
		images: [
			{
				url: "https://raw.githubusercontent.com/andresjf93/portfolio/main/public/og.png",  // Usa la misma imagen que Open Graph
				width: 1200,
				height: 630,
				alt: "Andrés - Desarrollador Frontend",
			},
		],
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	icons: {
		shortcut: "/favicon.png",  // Asegúrate de que favicon.png esté en public
	},
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="es" className={`${inter.variable} ${calSans.variable}`}>
			<body className="bg-black text-white">
				{children}
			</body>
		</html>
	);
}