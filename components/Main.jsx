"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Main() {

	let text = "Hi, I'm Rahul";
	let speed = 120;
	const [displayText, setDisplayText] = useState("");

	useEffect(() => {
		let i = 0;

		const interval = setInterval(() => {
			setDisplayText(text.slice(0, i));
			i++;

			if (i > text.length) {
				clearInterval(interval);
			}
		}, speed);

		return () => clearInterval(interval);
	}, [text, speed]);

	return (
		<div>
			<section className="flex flex-col-reverse md:flex-row justify-between items-center gap-10 md:gap-0 px-6 md:px-12 py-10 text-center md:text-left">

				{/* Left Content */}
				<div className="w-full md:w-1/2">
					<h2 className="text-3xl md:text-5xl font-bold leading-tight">
						{displayText}
						<span className="border-r-2 border-white ml-1 animate-pulse"></span>
						{/* <Typed
								strings={["Hi, I'm Rahul"]}
								typeSpeed={70}
								backSpeed={40}
								loop={false}
							/> */}
					</h2>
					<a
						href="/RAHUL_ADEPAWAR_9168558143.pdf"
						download="Rahul_Adepawar_Resume.pdf"
						className="mt-5 bg-gray-800 text-white px-5 py-2 rounded-md hover:bg-gray-900 transition inline-block text-center"
					>
						My Resume
					</a>

				</div>

				{/* Right Image */}
				<div className="w-full md:w-1/2 flex justify-center">
					<Image
						src="/photo.jpg"
						width={400}
						height={400}
						alt="Picture of the author"
						className="rounded-xl object-cover w-64 h-64 md:w-[400px] md:h-[400px]"
					/>
				</div>
			</section>
		</div>
	);
};
