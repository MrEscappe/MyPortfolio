export interface Project {
	slug: string;
	title: string;
	description: string;
	image: string;
	details: string;
	video?: string;
	tools: { name: string; logo: string }[];
	additionalImages: string[];
	additionalDescription: string[];
}

export const projects: Project[] = [
	{
		slug: "r4-custom-keyboard",
		title: "R4 - Custom Keyboard",
		description:
			"lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt error nihil fuga quae debitis id, eveniet dolore ratione praesentium facere molestias quia, facilis dolor perferendis beatae ea, tempore itaque cum.",
		image: "/img/keyboard.png",
		video: "/videos/r4.webm",
		details:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt error nihil fuga quae debitis id, eveniet dolore ratione praesentium facere molestias quia, facilis dolor perferendis beatae ea, tempore itaque cum.",
		tools: [
			{ name: "Blender", logo: "/img/blender.svg" },
			{ name: "Photoshop", logo: "/img/photoshop.svg" },
			{ name: "Figma", logo: "/img/figma.svg" },
		],
		additionalImages: ["/img/keyboard.png", "/img/keyboard.png"],
		additionalDescription: ["Image 1", "Image 2"],
	},
	{
		slug: "sala-de-estar-e-jantar-render",
		title: "Sala de estar e jantar - Render",
		description:
			"lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt error nihil fuga quae debitis id, eveniet dolore ratione praesentium facere molestias quia, facilis dolor perferendis beatae ea, tempore itaque cum.",
		image: "/img/03.png",
		details: "This is the second",
		tools: [
			{ name: "Blender", logo: "/img/blender.svg" },
			{ name: "Photoshop", logo: "/img/photoshop.svg" },
			{ name: "Figma", logo: "/img/figma.svg" },
		],
		additionalImages: ["/img/03.png", "/img/03.png"],
		additionalDescription: ["Image 1", "Image 2"],
	},
	{
		slug: "sala-de-estar-e-jantar-render",
		title: "Sala de estar e jantar - Render",
		description:
			"lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt error nihil fuga quae debitis id, eveniet dolore ratione praesentium facere molestias quia, facilis dolor perferendis beatae ea, tempore itaque cum.",
		image: "/img/03.png",
		details: "This is the second",
		tools: [
			{ name: "Blender", logo: "/img/blender.svg" },
			{ name: "Photoshop", logo: "/img/photoshop.svg" },
			{ name: "Figma", logo: "/img/figma.svg" },
		],
		additionalImages: ["/img/03.png", "/img/03.png"],
		additionalDescription: ["Image 1", "Image 2"],
	},
	{
		slug: "sala-de-estar-e-jantar-render",
		title: "Sala de estar e jantar - Render",
		description:
			"lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt error nihil fuga quae debitis id, eveniet dolore ratione praesentium facere molestias quia, facilis dolor perferendis beatae ea, tempore itaque cum.",
		image: "/img/03.png",
		details: "This is the second",
		tools: [
			{ name: "Blender", logo: "/img/blender.svg" },
			{ name: "Photoshop", logo: "/img/photoshop.svg" },
			{ name: "Figma", logo: "/img/figma.svg" },
		],
		additionalImages: ["/img/03.png", "/img/03.png"],
		additionalDescription: ["Image 1", "Image 2"],
	},
];

export function getProject(slug: string): Project | undefined {
	return projects.find((project) => project.slug === slug);
}
