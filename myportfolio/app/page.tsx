import Header from "./components/Header";
import { Offside } from "next/font/google";
import Main from "./components/Home/Main";

const offside = Offside({
	weight: ["400"],
	style: ["normal"],
	subsets: ["latin"],
	display: "swap",
});

export default function Home() {
	return (
		<main className={`${offside.className} flex bg-primary flex-col h-screen m-0 overflow-hidden box-border relative`}>
			<video autoPlay muted loop className="absolute z-0 w-full h-full object-cover opacity-[.03]">
				<source src="/videos/bg.mp4" type="video/mp4" />
			</video>
			<Header />
			<Main />
		</main>
	);
}
