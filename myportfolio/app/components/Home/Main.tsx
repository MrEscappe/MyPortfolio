"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Main() {
	const articleSectionStyle = "h-full";
	const articleStyle = "grid h-full grid-cols-[2fr_1fr] grid-rows-[4fr_1fr] absolute transition-all duration-400 ease";

	const [currentIndex, setCurrentIndex] = useState(0);

	useEffect(() => {
		const articles = document.querySelectorAll("article");
		articles.forEach((article, index) => {
			if (index === currentIndex) {
				article.classList.remove("translate-x-full", "hidden");
				article.classList.add("translate-x-0");
			} else if (index === currentIndex - 1 || (currentIndex === 0 && index === articles.length - 1)) {
				article.classList.remove("translate-x-[-100%]", "hidden");
				article.classList.add("translate-x-[100%]");
			} else {
				article.classList.add("hidden");
			}
		});
	}, [currentIndex]);

	const handleLeftClick = () => {
		const articles = document.querySelectorAll("article");
		setCurrentIndex((prevIndex) => (prevIndex - 1 + articles.length) % articles.length);
	};

	const handleRightClick = () => {
		const articles = document.querySelectorAll("article");
		setCurrentIndex((prevIndex) => (prevIndex + 1) % articles.length);
	};

	return (
		<div className="flex-grow relative overflow-hidden">
			<article
				data-index="0"
				className={`${articleStyle} ${currentIndex === 0 ? "translate-x-0" : "translate-x-full"} ${
					currentIndex === 1 ? "translate-x-full" : ""
				}`}>
				<div className={`${articleSectionStyle} relative border-solid border-r-2 border-b-2 border-white`}>
					<a href="/" className="block w-full h-full">
						<Image src="/img/keyboard.png" layout="fill" objectFit="cover" alt="Keyboard Image" />
					</a>
				</div>
				<div className={`${articleSectionStyle} border-solid border-b-2 border-white flex items-end`}>
					<p className="text-2xl align-middle place-content-between p-28">
						Vizualização de um teclado customizado feito com o software Blender 3D e renderizado com o Cycles.
					</p>
				</div>
				<div className={`${articleSectionStyle} pl-10 border-solid border-r-2 flex justify-start items-center`}>
					<h2 className="text-5xl">R4 - Custom Keyboard</h2>
				</div>
				<div className={`${articleSectionStyle} flex flex-grow`}>
					<button onClick={handleLeftClick} className="w-full h-full flex justify-center items-center border-r-2 hover:bg-primary_hover">
						<Image src="/img/arrow.svg" width={145} height={145} alt="" />
					</button>
					<button onClick={handleRightClick} className="w-full h-full flex justify-center items-center hover:bg-primary_hover">
						<Image src="/img/arrow.svg" width={145} height={145} alt="" className="rotate-180" />
					</button>
				</div>
			</article>
			<article
				data-index="1"
				className={`${articleStyle} ${currentIndex === 1 ? "translate-x-0" : "translate-x-full"} ${
					currentIndex === 2 ? "translate-x-full" : ""
				}`}>
				<div className={`${articleSectionStyle} relative border-solid border-r-2 border-b-2 border-white`}>
					<a href="/" className="block w-full h-full">
						<Image src="/img/03.png" layout="fill" objectFit="cover" alt="room Image" />
					</a>
				</div>
				<div className={`${articleSectionStyle} border-solid border-b-2 border-white flex items-end`}>
					<p className="text-2xl align-middle place-content-between p-28">
						Projeto de interiores de uma sala de estar e jantar em estilo classico. Feito com o software Blender 3D e renderizado com o
						Cycles.
					</p>
				</div>
				<div className={`${articleSectionStyle} pl-10 border-solid border-r-2 flex justify-start items-center`}>
					<h2 className="text-5xl">Visualização Sala e Sala de Jantar</h2>
				</div>
				<div className={`${articleSectionStyle} flex flex-grow`}>
					<button onClick={handleLeftClick} className="w-full h-full flex justify-center items-center border-r-2 hover:bg-primary_hover">
						<Image src="/img/arrow.svg" width={145} height={145} alt="" />
					</button>
					<button onClick={handleRightClick} className="w-full h-full flex justify-center items-center hover:bg-primary_hover">
						<Image src="/img/arrow.svg" width={145} height={145} alt="" className="rotate-180" />
					</button>
				</div>
			</article>
			<article
				data-index="2"
				className={`${articleStyle} ${currentIndex === 2 ? "translate-x-0" : "translate-x-full"} ${
					currentIndex === 3 ? "translate-x-full" : ""
				}`}>
				<div className={`${articleSectionStyle} relative border-solid border-r-2 border-b-2 border-white`}>
					<a href="/" className="block w-full h-full">
						<Image src="/img/keyboard.png" layout="fill" objectFit="cover" alt="Keyboard Image" />
					</a>
				</div>
				<div className={`${articleSectionStyle} border-solid border-b-2 border-white flex items-end`}>
					<p className="text-2xl align-middle place-content-between p-28 ">
						AOOOO ipsum dolor sit amet consectetur adipisicing elit. Deserunt error nihil fuga quae debitis id, eveniet dolore ratione
						praesentium facere molestias quia, facilis dolor perferendis beatae ea, tempore itaque cum.
					</p>
				</div>
				<div className={`${articleSectionStyle} pl-10 border-solid border-r-2 flex justify-start items-center`}>
					<h2 className="text-5xl">R4 - Custom Keyboard</h2>
				</div>
				<div className={`${articleSectionStyle} flex flex-grow`}>
					<button onClick={handleLeftClick} className="w-full h-full flex justify-center items-center border-r-2 hover:bg-primary_hover">
						<Image src="/img/arrow.svg" width={145} height={145} alt="" />
					</button>
					<button onClick={handleRightClick} className="w-full h-full flex justify-center items-center hover:bg-primary_hover">
						<Image src="/img/arrow.svg" width={145} height={145} alt="" className="rotate-180" />
					</button>
				</div>
			</article>
			<article
				data-index="3"
				className={`${articleStyle} ${currentIndex === 3 ? "translate-x-0" : "translate-x-full"} ${
					currentIndex === 0 ? "translate-x-full" : ""
				}`}>
				<div className={`${articleSectionStyle} relative border-solid border-r-2 border-b-2 border-white`}>
					<a href="/" className="block w-full h-full">
						<Image src="/img/keyboard.png" layout="fill" objectFit="cover" alt="Keyboard Image" />
					</a>
				</div>
				<div className={`${articleSectionStyle} border-solid border-b-2 border-white flex items-end`}>
					<p className="text-2xl align-middle place-content-between p-28">
						PEDROOOOOO ipsum dolor sit amet consectetur adipisicing elit. Deserunt error nihil fuga quae debitis id, eveniet dolore ratione
						praesentium facere molestias quia, facilis dolor perferendis beatae ea, tempore itaque cum.
					</p>
				</div>
				<div className={`${articleSectionStyle} pl-10 border-solid border-r-2 flex justify-start items-center`}>
					<h2 className="text-5xl">R4 - Custom Keyboard</h2>
				</div>
				<div className={`${articleSectionStyle} flex flex-grow`}>
					<button onClick={handleLeftClick} className="w-full h-full flex justify-center items-center border-r-2 hover:bg-primary_hover">
						<Image src="/img/arrow.svg" width={145} height={145} alt="" />
					</button>
					<button onClick={handleRightClick} className="w-full h-full flex justify-center items-center hover:bg-primary_hover">
						<Image src="/img/arrow.svg" width={145} height={145} alt="" className="rotate-180" />
					</button>
				</div>
			</article>
		</div>
	);
}
