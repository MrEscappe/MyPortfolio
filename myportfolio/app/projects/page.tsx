"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { projects } from "@/app/lib/projects";

export default function ProjectsPage() {
	const [currentIndex, setCurrentIndex] = useState(0);

	const handlePrevClick = () => {
		setCurrentIndex((prevIndex) => (prevIndex === 0 ? projects.length - 3 : prevIndex - 1));
	};

	const handleNextClick = () => {
		setCurrentIndex((prevIndex) => (prevIndex === projects.length - 3 ? 0 : prevIndex + 1));
	};

	useEffect(() => {
		document.body.style.overflow = "auto";
		return () => {
			document.body.style.overflow = "hidden";
		};
	}, []);

	return (
		<div className="relative flex flex-col md:flex-row items-center justify-between p-4 md:p-8 m-4 md:m-16">
			<button onClick={handlePrevClick} className="hidden md:flex items-center justify-center text-white z-10">
				<Image src="/img/arrow.svg" width={145} height={145} alt="Previous" className="w-16 h-16 md:w-24 md:h-24" />
			</button>

			<div className="w-full md:h-[600px] mx-4 overflow-visible md:overflow-hidden">
				<div
					className="flex flex-col md:flex-row md:transition-transform md:duration-500 md:ease-in-out"
					style={{ transform: `translateX(-${(currentIndex * 100) / 3}%)` }}>
					{projects.map((project, index) => (
						<Link href={`/projects/${project.slug}`} key={project.slug} className="w-full md:w-1/3 flex-shrink-0 p-2 mb-8 md:mb-0">
							<div
								className={`border-2 border-white overflow-hidden transition-transform
                                ${index % 2 === 0 ? "md:translate-y-1" : "md:translate-y-16"}`}>
								<div className="relative h-60">
									<Image src={project.image} alt={project.title} layout="fill" objectFit="cover" />
								</div>
								<div className="p-4 border-b-2 border-t-2">
									<h2 className="text-2xl md:text-3xl font-bold mb-2">{project.title}</h2>
								</div>
								<div className="p-4">
									<p className="text-sm">{project.description}</p>
								</div>
							</div>
						</Link>
					))}
				</div>
			</div>

			<button onClick={handleNextClick} className="hidden md:flex items-center justify-center text-white z-10">
				<Image src="/img/arrow.svg" width={145} height={145} alt="Next" className="w-16 h-16 md:w-24 md:h-24 rotate-180" />
			</button>
		</div>
	);
}
