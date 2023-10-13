'use client';

import { useEffect, useState } from "react";
import { BsChevronCompactDown } from "react-icons/bs";

function Icon() {
	const [chevronDownOpacity, setChevronDownOpacity] = useState(1);

	useEffect(() => {
		const handleScroll = () => {
			const scrollPosition = window.scrollY;
			const opacityDecrement = 0.1;
			const opacity = 1 - scrollPosition / 10 * opacityDecrement;
			setChevronDownOpacity(opacity < 0 ? 0 : opacity);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<BsChevronCompactDown
			size={60}
			className="fixed bottom-10 animate-bounce"
			style={{ opacity: chevronDownOpacity.toFixed(1) }}
		/>
	);
}


export default Icon;