import { Section } from "../../ui/section";
import Icon from "./Icon";

function Apresentation() {
	return (
		<Section className="flex items-center justify-center">
			<div className="flex flex-col items-center">
				<h1 className="text-5xl select-none font-['Poiret_One',cursive]">
					Nexus Prime
				</h1>
				<p className="select-none">
					Programador Fullstack
				</p>

			</div>

			<Icon />
		</Section>
	)
}

export default Apresentation