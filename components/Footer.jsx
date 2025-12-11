"use client";
import Image from "next/image";

export default function Footer() {
	return (
		<section className="p-2" style={{background: "#ececec", position: "fixed", width: "100%", bottom: 0}}>
			<div className="max-w-3xl mx-auto text-center">
				{/* Social Icons */}
				<div className="flex justify-center gap-6 mt-2">
					<a href="tel:+919168558143" target="_blank" className="text-xl hover:text-blue-600">
						<Image
							src="/phone.png"
							width={20}
							height={20}
							alt="git-hub"
						/>
					</a>
					<a href="mailto:rahuladepawar123@gmail.com" className="text-xl hover:text-blue-600">
						<Image
							src="/gmail.png"
							width={20}
							height={20}
							alt="Gmail"
						/>
					</a>
					<a href="https://github.com/RahulAdepawar" style={{background: "white"}} target="_blank" className="text-xl hover:text-blue-600">
						<Image
							src="/github-sign.png"
							width={20}
							height={20}
							alt="git-hub"
						/>
					</a>
					<a href="https://linkedin.com/in/rahul-adepawar-2a2089237" target="_blank" className="text-xl hover:text-blue-600">
						<Image
							src="/linkedin.png"
							width={20}
							height={20}
							alt="git-hub"
						/>
					</a>
				</div>
			</div>
		</section>
	);
}
