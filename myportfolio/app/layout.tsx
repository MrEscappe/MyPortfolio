import type { Metadata } from "next";
import { Inter, Offside } from "next/font/google";
import Header from "./components/Header";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const offside = Offside({
	weight: ["400"],
	style: ["normal"],
	subsets: ["latin"],
	display: "swap",
});

export const metadata: Metadata = {
	title: "José Sérgio",
	description: "Construindo sua solução",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="pt">
			<body className={`${offside.className} flex bg-primary flex-col min-h-screen m-0 box-border relative`}>
				<div className="fixed inset-0 z-0">
					<video autoPlay muted loop className="absolute top-0 left-0 w-full h-full object-cover opacity-[.03]">
						<source src="/videos/bg.mp4" type="video/mp4" />
					</video>
				</div>
				<Header />
				{children}
			</body>
		</html>
	);
}
