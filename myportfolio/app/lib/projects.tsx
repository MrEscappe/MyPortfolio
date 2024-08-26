export interface Project {
	slug: string;
	title: string;
	description: string;
	image: string;
	details: string;
	repository?: string;
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
			"r4 Keyboard, Um teclado mecânico customizado. Voltado para aqueles que buscam um teclado mecânico de alta qualidade e personalizado.",
		image: "/img/keyboard.png",
		video: "/videos/r4.webm",
		details:
			"Inspirado no Creator Board da Work Louder, o R4 é um teclado mecânico customizado. Com um design minimalista e elegante, o R4 é um teclado que se destaca pela sua qualidade e personalização. Feito no Blender e renderizado no Cycles. Foi bem divertido fazer esse projeto, e o resultado final ficou incrível.",
		tools: [
			{ name: "Blender", logo: "/img/blender.svg" },
			{ name: "Photoshop", logo: "/img/photoshop.svg" },
			{ name: "Davinci Resolve", logo: "/img/davinci.svg" },
			{ name: "Figma", logo: "/img/figma.svg" },
		],
		additionalImages: ["/img/keyboard_01.png", "/img/keyboard_02.png", "/img/keyboard_03.png"],
		additionalDescription: ["Image 1", "Image 2", "Image 3"],
	},
	{
		slug: "portfolio",
		title: "Portfólio Pessoal",
		description: "Esse site que você está vendo agora foi feito por mim. Utilizando Next.JS, React, TailwindCSS.",
		image: "/img/portfolio1.png",
		details:
			"Uma otima forma de mostrar meus projetos e habilidades para o mundo foi o desenvolvimento desse site. Aqui você pode ver um pouco do que eu sou capaz de fazer, e das tecnologias que eu domino.",
		repository: "https://github.com/MrEscappe/MyPortfolio",
		tools: [
			{ name: "Vscode", logo: "/img/vscode.svg" },
			{ name: "Next.JS", logo: "/img/nextjs.svg" },
			{ name: "React", logo: "/img/react.svg" },
			{ name: "TailwindCSS", logo: "/img/tailwind.svg" },
		],
		additionalImages: ["/img/portfolio4.png", "/img/portfolio2.png", "/img/portfolio3.png"],
		additionalDescription: ["Image 1", "Image 2", "Image 3"],
	},
	{
		slug: "op1",
		title: "Op-1 Teclado Sintetizador",
		description: "Op-1 Teclado Sintetizador, para qualquer ocasição, pequeno e portátil.",
		image: "/img/op_3.png",
		video: "/videos/op1.mp4",
		details:
			"Projeto feito no Blender, inspirado no Teclado Sintetizador OP-1 da Teenage Engineering. O OP-1 é um sintetizador portátil, com um design minimalista e elegante.  ",
		tools: [
			{ name: "Blender", logo: "/img/blender.svg" },
			{ name: "Photoshop", logo: "/img/photoshop.svg" },
			{ name: "Davinci Resolve", logo: "/img/davinci.svg" },
			{ name: "Figma", logo: "/img/figma.svg" },
		],
		additionalImages: ["/img/op_1.png", "/img/op_2.png", "/img/op_3.png"],
		additionalDescription: ["Image 1", "Image 2", "Image 3"],
	},
	{
		slug: "forum-java",
		title: "Back-end Forum - Java",
		description:
			"Backend de um forum de discussão feito em Java. O projeto foi desenvolvido com Spring Boot, Spring Data JPA, Loombok e Spring Security e dentre outras ferramentas.",
		image: "/img/forum_01.png",
		video: "/videos/forum.webm",
		details: "O projeto foi feito para praticar os conceitos de desenvolvimento de API RESTful. E aperfeiçoar o conhecimento em Java.",
		repository: "https://github.com/MrEscappe/PROJETO-ForumHub",
		tools: [
			{ name: "intellij", logo: "/img/intellijidea.svg" },
			{ name: "Java", logo: "/img/java.svg" },
			{ name: "Spring Boot", logo: "/img/springframework.svg" },
		],
		additionalImages: ["/img/forum_02.png", "/img/forum_03.png", "/img/forum_01.png"],
		additionalDescription: ["Image 1", "Image 2", "Image 3"],
	},
	{
		slug: "jogo-da-velha",
		title: "Jogo da Velha",
		description:
			"Um projeto de jogo da velha feito em HTML, CSS e JS. O projeto foi feito para praticar os conceitos de manipulação do DOM e lógica de programação.",
		image: "/img/tic_tac01.png",
		details:
			"Projeto da trilha de estudos do Odin Project. Colocar em pratica os conceitos de manipulação do DOM e lógica de programação, e aprimorar o conhecimento em HTML, CSS e JS.",
		tools: [{ name: "Vscode", logo: "/img/vscode.svg" }],
		repository: "https://github.com/MrEscappe/PROJECT-js-tic-tac-toe",
		additionalImages: ["/img/tic_tac02.png", "/img/tic_tac03.png", "/img/tic_tac04.png"],
		additionalDescription: ["jogo da velha", "jogo da velha"],
	},
	{
		slug: "chess-ruby",
		title: "Chess Game - Ruby",
		description:
			"Um projeto de jogo de xadrez feito na linguagem Ruby. Toda a lógica do jogo foi implementada e feita sem o uso de bibliotecas externas.",
		image: "/img/chess_01.png",
		video: "/videos/chess.webm",
		details:
			"O projeto faz parte do curso de Ruby do The Odin Project. E foi feito para praticar os conceitos de programação orientada a objetos.",
		tools: [
			{ name: "Ruby", logo: "/img/ruby.svg" },
			{ name: "vscode", logo: "/img/vscode.svg" },
		],
		repository: "https://github.com/MrEscappe/PROJECT-Chess",
		additionalImages: ["/img/chess_02.png", "/img/chess_03.png", "/img/chess_01.png"],
		additionalDescription: ["Image 1", "Image 2", "Image 3"],
	},
];

export function getProject(slug: string): Project | undefined {
	return projects.find((project) => project.slug === slug);
}
