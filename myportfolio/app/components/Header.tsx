import Image from "next/image";

export default function header() {
	function navSectionStyle() {
		return "pt-8 pb-8 pl-8 pr-8 flex gap-10 border-solid border-r-2 border-white items-center justify-center";
	}

	return (
		<nav className="flex flex-row w-full border-solid border-b-2 border-white  ">
			<div id="nav-logo-section" className={`${navSectionStyle()} basis-[9.53%]`}>
				<a href="/">
					<Image src="/img/logo.svg" width={80} height={80} alt="Logo" />
				</a>
			</div>
			<div id="nav-links-section" className={`${navSectionStyle()} basis-[59.22%] text-2xl `}>
				<a href="">SOBRE</a>
				<Image src="/img/circle.svg" width={12} height={12} alt="Circle" />
				<a href="">PROJETOS</a>
				<Image src="/img/circle.svg" width={12} height={12} alt="Circle" />
				<a href="">CONTATO</a>
			</div>
			<div id="nav-social-section" className={`${navSectionStyle()} !border-r-0  basis-[31.25%]`}>
				<a href="">
					<Image src="/img/linkedin.svg" width={36} height={36} alt="Linkedin" />
				</a>
				<Image src="/img/circle.svg" width={12} height={12} alt="Circle" />
				<a href="">
					<Image src="/img/github.svg" width={36} height={36} alt="Github" />
				</a>
			</div>
		</nav>
	);
}
