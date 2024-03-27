import ProgressBar from "../ProgressBar";
import {
	SiCplusplus,
	SiHtml5,
	SiCss3,
	SiJavascript,
	SiReact,
	SiTailwindcss,
	SiC,
} from "react-icons/si";

export default function Skills() {
	const listOfSkills = [
		{
			Icon: SiCplusplus,
			barWidth: "w-90%",
			percentageValue: "90%",
			text: "C++",
		},
		{
			Icon: SiC,
			barWidth: "w-90%",
			percentageValue: "90%",
			text: "C",
		},
		{
			Icon: SiHtml5,
			barWidth: "w-90%",
			percentageValue: "90%",
			text: "HTML",
		},
		{
			Icon: SiCss3,
			barWidth: "w-90%",
			percentageValue: "90%",
			text: "CSS",
		},
		{
			Icon: SiJavascript,
			barWidth: "w-90%",
			percentageValue: "90%",
			text: "Javascript",
		},
		{
			Icon: SiReact,
			barWidth: "w-90%",
			percentageValue: "90%",
			text: "React",
		},
		{
			Icon: SiTailwindcss,
			barWidth: "w-85%",
			percentageValue: "85%",
			text: "Tailwindcss",
		},
	];

	return (
		<div>
			{listOfSkills.map(({ Icon, barWidth, percentageValue, text }, index) => {
				return (
					<ProgressBar
						Icon={Icon}
						barWidth={barWidth}
						percentageValue={percentageValue}
						key={index}
						text={text}
					/>
				);
			})}
		</div>
	);
}
