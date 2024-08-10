"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
	const [menuOpen, setMenuOpen] = useState(false);

	const toggleMenu = () => {
		setMenuOpen(!menuOpen);
	};

	function navSectionStyle() {
		return "p-5 flex gap-10 border-solid md:border-r-2 border-white items-center justify-center md:pt-8 md:pb-8 md:pl-8 md:pr-8";
	}

	return (
		<nav className="flex flex-row w-full border-solid border-b-2 border-white z-20 relative">
			<div id="nav-logo-section" className={`${navSectionStyle()} basis-[30%] md:basis-[10%]`}>
				<Link href="/">
					<Image src="/img/logo.svg" width={80} height={80} alt="Logo" />
				</Link>
			</div>
			<div className="flex-1 flex justify-end items-center md:hidden">
				<button onClick={toggleMenu} className="text-white z-40 pr-3">
					<Image src="/img/burger.svg" width={36} height={36} alt={menuOpen ? "Close Menu" : "Open Menu"} />
				</button>
			</div>
			<div id="nav-links-section" className={`${navSectionStyle()} basis-[56.65%] text-2xl hidden md:flex`}>
				<Link href="/about" className="hover:text-slate-300">
					SOBRE
				</Link>
				<Image src="/img/circle.svg" width={12} height={12} alt="Circle" />
				<Link href="/projects" className="hover:text-slate-300">
					PROJETOS
				</Link>
				<Image src="/img/circle.svg" width={12} height={12} alt="Circle" />
				<Link href="/contact" className="hover:text-slate-300">
					CONTATO
				</Link>
			</div>
			<div id="nav-social-section" className={`${navSectionStyle()} !border-r-0 basis-[33.35%] hidden md:flex`}>
				<a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
					<Image src="/img/linkedin.svg" width={36} height={36} alt="Linkedin" />
				</a>
				<Image src="/img/circle.svg" width={12} height={12} alt="Circle" />
				<a href="https://github.com" target="_blank" rel="noopener noreferrer">
					<Image src="/img/github.svg" width={36} height={36} alt="Github" />
				</a>
			</div>
			<div
				className={`fixed top-0 left-0 w-full h-full bg-primary bg-opacity-99 flex flex-col items-center justify-center gap-10 transform ${
					menuOpen ? "translate-x-0" : "translate-x-full"
				} transition-transform duration-300 ease-in-out z-30 md:hidden`}>
				<Link href="/about" className="text-2xl text-white hover:text-slate-300" onClick={toggleMenu}>
					SOBRE
				</Link>
				<Image src="/img/circle.svg" width={12} height={12} alt="Circle" />
				<Link href="/projects" className="text-2xl text-white hover:text-slate-300" onClick={toggleMenu}>
					PROJETOS
				</Link>
				<Image src="/img/circle.svg" width={12} height={12} alt="Circle" />
				<Link href="/contact" className="text-2xl text-white hover:text-slate-300" onClick={toggleMenu}>
					CONTATO
				</Link>
			</div>
		</nav>
	);
}
