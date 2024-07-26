"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

const images = ["/img/keyboard.png", "/img/03.png", "/img/03.png", "/img/03.png"];

const titles = ["R4 - Custom Keyboard", "Sala de estar e jantar - Render", "Yet Another Keyboard", "The Final Keyboard"];

const descriptions = [
	"Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt error nihil fuga quae debitis id, eveniet dolore ratione praesentium facere molestias quia, facilis dolor perferendis beatae ea, tempore itaque cum.",
	"Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt error nihil fuga quae debitis id, eveniet dolore ratione praesentium facere molestias quia, facilis dolor perferendis beatae ea, tempore itaque cum.",
	"Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt error nihil fuga quae debitis id, eveniet dolore ratione praesentium facere molestias quia, facilis dolor perferendis beatae ea, tempore itaque cum.",
	"Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt error nihil fuga quae debitis id, eveniet dolore ratione praesentium facere molestias quia, facilis dolor perferendis beatae ea, tempore itaque cum.",
];

export default function Main() {
	const [currentIndex, setCurrentIndex] = useState(0);

	const articleSectionStyle = "h-full";
	const articleStyle =
		"grid h-full grid-cols-[1fr] grid-rows-[4fr_1fr] lg:grid-cols-[2fr_1fr] lg:grid-rows-[4fr_1fr] absolute transition-all duration-500 ease-in-out";

	useEffect(() => {
		const articles = document.querySelectorAll("article");
		articles.forEach((article, index) => {
			article.classList.add("transform", "transition-transform", "duration-500", "ease-in-out");
			if (index === currentIndex) {
				article.style.transform = "translateX(0)";
			} else if (index < currentIndex) {
				article.style.transform = "translateX(-100%)";
			} else {
				article.style.transform = "translateX(100%)";
			}
		});
	}, [currentIndex]);

	const handleLeftClick = () => {
		setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
	};

	const handleRightClick = () => {
		setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
	};

	return (
		<div className="flex-grow relative overflow-hidden z-10">
			{images.map((image, index) => (
				<article
					key={index}
					data-index={index}
					className={`${articleStyle} ${currentIndex === index ? "translate-x-0" : ""}`}
					style={{
						transform: currentIndex === index ? "translateX(0)" : index < currentIndex ? "translateX(-100%)" : "translateX(100%)",
					}}>
					<div className={`${articleSectionStyle} relative border-solid lg:border-r-2 border-b-2 border-white order-1 lg:order-1`}>
						<a href="/" className="block w-full h-full">
							<Image src={image} layout="fill" objectFit="cover" alt={`Image ${index + 1}`} />
						</a>
					</div>
					<div className={`${articleSectionStyle} border-solid border-b-2 border-white flex items-end lg:p-28 p-8 order-3 lg:order-2`}>
						<p className="text-2xl align-middle place-content-between ">{descriptions[index]}</p>
					</div>
					<div
						className={`${articleSectionStyle} pl-10 border-solid lg:border-r-2 lg:border-b-0 border-b-2 flex justify-start items-center p-8 order-2 lg:oder-3`}>
						<h2 className="text-5xl">{titles[index]}</h2>
					</div>
					<div className={`${articleSectionStyle} flex flex-grow h-28 lg:h-full order-4`}>
						<button
							onClick={handleLeftClick}
							className="w-full lg:h-full flex justify-center items-center border-r-2 hover:bg-primary_hover">
							<Image src="/img/arrow.svg" width={145} height={145} alt="" />
						</button>
						<button onClick={handleRightClick} className="w-full h-full flex justify-center items-center hover:bg-primary_hover">
							<Image src="/img/arrow.svg" width={145} height={145} alt="" className="rotate-180" />
						</button>
					</div>
				</article>
			))}
		</div>
	);
}
