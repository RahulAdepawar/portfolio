import Highlight from './Highlight';

export default function Skills() {
	return (
		<section id="skills" className="py-20">
			<div className="max-w-6xl mx-auto px-6">
				<h2 className="text-3xl font-bold text-center mb-12">About me</h2>
				<p className="font-bold text-center mb-12">
					Hi, I’m Rahul Adepawar — a Software Developer with <Highlight text="3 years of experience" textcolor="#78b978" /> building fast, reliable, and user-focused web applications. I specialize in <Highlight text="full-stack development" textcolor="#78b978" /> and enjoy turning ideas into scalable digital products.

					I work across both frontend and backend technologies, with strong skills in <Highlight text="HTML, CSS, JavaScript, PHP, Node.js, Express.js, Next.js, MySQL, and Redis" textcolor="#78b978" />. I focus on writing clean, maintainable code and building solutions that are <Highlight text="efficient, secure, and easy to use" textcolor="#78b978" />.

					I’m passionate about solving real-world problems using technology, improving performance, and creating smooth user experiences. I continuously explore new tools and best practices to improve the quality of my work.

					I’m always  <Highlight text="open to collaborating on exciting projects, contributing to innovative ideas, and growing as a developer" textcolor="#78b978" />.
				</p>
			</div>
		</section>
	);
}