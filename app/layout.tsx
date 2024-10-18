import "../global.css";
import { Inter } from "@next/font/google";
import LocalFont from "@next/font/local";
import { Metadata } from "next";
import { Analytics } from "./components/analytics";

export const metadata: Metadata = {
	title: {
		default: "Andresjf93",
		template: "%s | Andresjf93",
	},
	description: "Software engineer at upstash.com and founder of planetfall.io",
	openGraph: {
		title: "Andresjf93",
		description: "Software engineer at upstash.com and founder of planetfall.io",
		url: "https://andresjf93.vercel.app",
		siteName: "Andresjf.com",
		images: [
			{
				url: "https://raw.githubusercontent.com/andresjf93/portfolio/main/util/og.png",  // Asegúrate de que esta imagen exista
				width: 1200,  // Dimensiones recomendadas para Open Graph
				height: 630,
				alt: "Andresjf93 - Software Engineer",  // Texto alternativo de la imagen
			},
		],
		locale: "en-US",
		type: "website",
	},
	twitter: {
		title: "Andresjf93",
		card: "summary_large_image",  // Tipo de tarjeta para Twitter
		description: "Software engineer at upstash.com and founder of planetfall.io",
		images: [
			{
				url: "https://raw.githubusercontent.com/andresjf93/portfolio/main/util/og.png",  // Usa la misma imagen que Open Graph
				width: 1200,
				height: 630,
				alt: "Andresjf93 - Software Engineer",
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

const inter = Inter({
	subsets: ["latin"],
	variable: "--font-inter",
});

const calSans = LocalFont({
	src: "../public/fonts/CalSans-SemiBold.ttf",
	variable: "--font-calsans",
});

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className={[inter.variable, calSans.variable].join(" ")}>
			<head>
				<Analytics />
			</head>
			<body
				className={`bg-black ${
					process.env.NODE_ENV === "development" ? "debug-screens" : undefined
				}`}
			>
				{children}
			</body>
		</html>
	);
}
