import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
	return (
		<div className="min-h-[80vh] flex items-center justify-center z-10">
			<div className="max-w-4xl">
				<div className="flex flex-col md:flex-row items-center gap-8">
					<div className="md:w-1/3">
						<Image src="/img/jsergio.jpg" alt="José Sérgio" width={300} height={300} className="rounded-full" />
					</div>
					<div className="md:w-2/3">
						<p className="text-lg mb-4 px-10 md:px-0">
							Olá! Sou um desenvolvedor web e artista 3D, apaixonado por criar experiências digitais únicas e imersivas. Minha jornada na
							tecnologia me levou a dominar tanto o desenvolvimento web quanto a arte 3D, permitindo-me oferecer soluções criativas. Se você
							está procurando um desenvolvedor que possa transformar suas ideias em realidade, não hesite em me contatar.
						</p>
						<p className="text-lg mb-4 px-10 md:px-0">E então, vamos criar algo incrível juntos?</p>
						<div className="text-center pt-10">
							<Link href="/contact" className="bg-white text-primary px-6 py-3 text-xl  hover:text-primary_hover transition-colors">
								Contato
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
