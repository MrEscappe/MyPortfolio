import Image from "next/image";
import Header from "./components/Header";
import { Offside } from "next/font/google";

const offside = Offside({
	weight: ["400"],
	style: ["normal"],
	subsets: ["latin"],
	display: "swap",
});

export default function Home() {
	return (
		<main className={`${offside.className} bg-primary flex-col h-lvh m-0 overflow-hidden box-border`}>
			<div>
				<Header />
			</div>
		</main>
	);
}
