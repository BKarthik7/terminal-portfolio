import React from "react";
import BackgroundImage from "./components/BackgroundImage";
import TerminalBox from "./components/TerminalBox";

export default function App() {
	return (
		<>
			<div className="h-screen w-full flex justify-center items-center  font-josefin">
				<div className="w-full">
					<div className="block sm:hidden mb-10 bg-yellow-200 py-3  text-center text-xl text-gray-700">
						<p>For better experience please try this with pc!</p>
						<p>This is not design for mobile view.</p>
					</div>
					<TerminalBox />
				</div>
			</div>
			<BackgroundImage />
		</>
	);
}
