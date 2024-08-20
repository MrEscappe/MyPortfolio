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
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum omnis voluptatem sapiente molestiae maxime! Veniam sequi quae
							culpa doloribus cum cumque dolorem illum, deleniti, deserunt impedit autem rem atque alias.
						</p>
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
