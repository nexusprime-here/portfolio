'use client';

import { useEffect, useState } from "react";
import { BsChevronCompactDown } from "react-icons/bs";

function Icon() {
	const [chevronDownOpacity, setChevronDownOpacity] = useState(1); // Iniciar com a opacidade máxima (1)

	useEffect(() => {
		const handleScroll = () => {
			const scrollPosition = window.scrollY;
			const opacityDecrement = 0.1; // Decréscimo de opacidade a cada 10 pixels de rolagem
			const opacity = 1 - scrollPosition / 10 * opacityDecrement; // Inverter o cálculo da opacidade
			setChevronDownOpacity(opacity < 0 ? 0 : opacity); // Certificar-se de que a opacidade nunca seja negativa
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<BsChevronCompactDown
			size={60}
			className="fixed bottom-10 animate-bounce"
			style={{ opacity: chevronDownOpacity.toFixed(1) }} // Arredondar a opacidade para uma casa decimal
		/>
	);
}


export default Icon;