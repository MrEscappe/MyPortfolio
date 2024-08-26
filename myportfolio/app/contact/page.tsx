import React from "react";
import Image from "next/image";

export default function ContactPage() {
	const formStyle =
		"mt-1 block w-full px-3 py-2 text-black border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm";

	return (
		<div className="min-h-[80vh] flex items-center justify-center z-10 ">
			<div className="container px-4 flex flex-col md:flex-row md:gap-28">
				<form action="https://submit-form.com/SseRNJLWq" className="w-full md:w-1/2 mb-8 md:mb-0 md:-order-last">
					<div className="mb-4">
						<label htmlFor="name" className="block text-sm font-medium">
							Nome
						</label>
						<input type="text" name="name" id="name" className={formStyle} />
					</div>
					<div className="mb-4">
						<label htmlFor="email" className="block text-sm font-medium">
							Email
						</label>
						<input type="email" name="email" id="email" className={formStyle} />
					</div>
					<div className="mb-4">
						<label htmlFor="subject" className="block text-sm font-medium">
							Título
						</label>
						<input type="text" name="subject" id="subject" className={formStyle} />
					</div>
					<div className="mb-4">
						<label htmlFor="message" className="block text-sm font-medium">
							Assunto
						</label>
						<textarea name="message" id="message" rows={4} className={`${formStyle} resize-none`}></textarea>
					</div>
					<button type="submit" className="bg-white text-primary px-6 py-2 text-sm hover:text-primary_hover transition-colors">
						Enviar
					</button>
				</form>
				<div className="w-full md:w-1/2 md:pl-8">
					<p className="text-lg">
						Gostou do que viu? Gostaria de trabalhar comigo? Ótimo! Me mande uma mensagem e vamos conversar sobre o seu projeto.
					</p>
				</div>
			</div>
		</div>
	);
}
