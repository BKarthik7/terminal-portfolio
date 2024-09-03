import React from "react";
import { GoVerified } from "react-icons/go";
import { SiGithub, SiLinkedin, SiLeetcode, SiCodeforces } from "react-icons/si";

export default function Bio() {
	const links = [
		{
			title: "Github",
			Icon: SiGithub,
			href: "https://github.com/BKarthik7",
			text: "@BKarthik7",
		},
		{
			title: "LeetCode",
			Icon: SiLeetcode,
			href: "https://leetcode.com/BKarthik7/",
			text: "@BKarthik7",
		},
		{
			title: "LinkedIn",
			Icon: SiLinkedin,
			href: "https://www.linkedin.com/in/BKarthik7",
			text: "@BKarthik7",
		},
		{
			title: "Codeforces",
			Icon: SiCodeforces,
			href: "https://codeforces.com/profile/BKarthik7",
			text: "@BKarthik7",
		},
	];
	return (
		<div className="mt-2 mb-2 w-11/12 mx-auto">
			<div className="flex items-center gap-3 mb-3 ">
				<img
					src="https://media.licdn.com/dms/image/v2/D5603AQGgPX5iFUE1GQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1705855542353?e=1730937600&v=beta&t=UNvkWsX5y_3uRCZX76gU293bvo2F6iCXNZmi4_NFkZs"
					alt="BKarthik7"
					className="w-40 h-40 rounded-full border-2 border-yellow-200"
				/>
				<div>
					<div className="flex items-center gap-1">
						<h1 className="text-2xl">B Karthik</h1>
						<GoVerified className="text-blue-500 text-2xl" />
					</div>
					<p className="text-lg text-gray-400">Join the world 20 years ago.</p>
				</div>
			</div>
			<p>
			Hi there!
Myself B Karthik and I am persuing my Bachelors of Engineering in the field of Computer Science and Engineering from Ramaiah Institute of Technology.I am passionate about New Technologies and innovations.I am a coding enthusiast.
I will always be ready and looking forward to learning anything I am interested in.
			</p>
			<div className="grid grid-cols-2">
				{links.map(({ Icon, text, href, title }, index) => {
					return (
						<div className="flex items-center gap-1 mt-3" key={index}>
							<div className="text-lg flex items-center gap-1 text-yellow-200">
								<Icon />
								<h1>{title}</h1>
							</div>
							<a
								href={href}
								target="_blank"
								rel="noreferrer"
								className="flex-1 underline text-blue-300 "
							>
								{text}
							</a>
						</div>
					);
				})}
			</div>
		</div>
	);
}
