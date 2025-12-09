import Navbar from "@/components/Navbar";
import Main from "@/components/Main";
import Skills from "@/components/Skills";
import About from "@/components/About";
import Projects from "@/components/Projects";

export default function Home() {
	return (
		<>
			<Navbar />
			<Main />
			<About />
			<Skills />
			<Projects />
		</>
	);
}
