"use client";

import Image from "next/image";
import Link from "next/link";
import { getProject } from "@/app/lib/projects";
import { notFound } from "next/navigation";
import { useEffect } from "react";

export default function ProjectPage({ params }: { params: { slug: string } }) {
	const project = getProject(params.slug);

	useEffect(() => {
		document.body.style.overflow = "auto";
		return () => {
			document.body.style.overflow = "hidden";
		};
	}, []);

	if (!project) {
		notFound();
	}

	return (
		<div className="w-full  pt-20 pb-8 px-4 max-h-[calc(100vh-80px)] z-10">
			<div className="max-w-6xl mx-auto">
				<h1 className="text-4xl font-bold mb-20 text-center">{project.title}</h1>

				<div className="mb-12">
					{project.video ? (
						<video className="w-full h-auto" controls>
							<source src={project.video} type="video/mp4" />
						</video>
					) : (
						<Image src={project.image} alt={project.title} width={1200} height={675} className="w-full h-auto object-cover" />
					)}
				</div>

				<div className="flex flex-col md:flex-row mb-12">
					<div className="md:w-1/2 pr-4">
						<h2 className="text-2xl font-semibold mb-4">Descrição</h2>
						<p className="text-lg">{project.description}</p>
					</div>
					<div className="md:w-1/2 pl-4 mt-8 md:mt-0">
						<h2 className="text-2xl font-semibold mb-4">Ferramentas</h2>
						<div className="grid grid-cols-2 gap-2">
							{project.tools.map((tool, index) => (
								<div key={index} className="flex items-center text-white px-3 py-1 rounded-full">
									<Image src={tool.logo} alt={`${tool.name} logo`} width={60} height={60} className="mr-2" />
									<p>{tool.name}</p>
								</div>
							))}
						</div>
					</div>
				</div>

				<div className="flex flex-col md:flex-row mb-12">
					<div className="w-full md:w-1/2 md:pr-4 mb-4 md:mb-0">
						<Image
							src={project.additionalImages[0]}
							alt={project.additionalDescription[0]}
							width={600}
							height={400}
							className="w-full h-auto object-cover"
						/>
					</div>
					<div className="w-full md:w-1/2 md:pl-4 md:mt-16">
						<Image
							src={project.additionalImages[1]}
							alt={project.additionalDescription[1]}
							width={600}
							height={400}
							className="w-full h-auto object-cover"
						/>
					</div>
				</div>

				<div className="mb-12 p-4 md:py-10 md:w-1/2">
					<p className="text-lg">{project.details}</p>
				</div>

				<div className="mb-12">
					<Image src={project.image} alt={project.title} width={1200} height={675} className="w-full h-auto object-cover" />
				</div>

				<div className="flex flex-col text-center py-14 gap-10 border-t-2">
					<h2 className="text-2xl">Vamos trabalhar juntos?</h2>
					<div className="">
						<Link href="/contact" className="bg-white text-primary px-12 py-6 text-2xl  hover:text-primary_hover transition-colors">
							Contato
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
