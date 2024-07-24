import Image from "next/image";

export default function Main() {
	const articleSectionStyle = () => {
		return "h-full border-solid border-2 border-white relative";
	};
	const articleStyle = () => {
		return "grid grid-cols-[2fr_.91fr]  grid-rows-[4.5fr_1fr]";
	};

	return (
		<div className="grow">
			<article className={`${articleStyle()} `}>
				<div className={`${articleSectionStyle()} !border-t-0 !border-b-0 !border-l-0 `}>
					<a href="/" className="block w-full h-full">
						<Image src="/img/keyboard.png" layout="fill" objectFit="cover" alt="Keyboard Image" />
					</a>
				</div>
				<div className={`${articleSectionStyle()} !border-0 `}>
					<p className="text-2xl align-middle place-content-between p-28">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt error nihil fuga quae debitis id, eveniet dolore ratione
						praesentium facere molestias quia, facilis dolor perferendis beatae ea, tempore itaque cum.
					</p>
				</div>
				<div className={`${articleSectionStyle()} !border-l-0 p-10`}>
					<h2 className="text-5xl">R4 - Custom Keyboard</h2>
				</div>
				<div className={`${articleSectionStyle()} !border-l-0 !border-r-0 pl-10 flex-grow`}>
					<div className="flex justify-center items-center w-full h-full">
						<button className="w-full h-full flex justify-center items-center border-r-2 hover:bg-primary_hover">
							<Image src="/img/arrow.svg" width={145} height={145} alt="" />
						</button>
						<button className="w-full h-full flex justify-center items-center hover:bg-primary_hover">
							<Image src="/img/arrow.svg" width={145} height={145} alt="" className="rotate-180" />
						</button>
					</div>
				</div>
			</article>
			<article className={articleStyle()}></article>
			<article className={articleStyle()}></article>
			<article className={articleStyle()}></article>
		</div>
	);
}
