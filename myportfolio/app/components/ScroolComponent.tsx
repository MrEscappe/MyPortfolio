"use client";

import { useEffect } from "react";

export default function ScrollManager() {
	useEffect(() => {
		document.body.style.overflow = "auto";
		return () => {
			document.body.style.overflow = "hidden";
		};
	}, []);

	return null;
}
