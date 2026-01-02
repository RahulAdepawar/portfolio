const sections = [
  {
    title: "Frontend Development",
    skills: ["HTML", "CSS", "JavaScript", "TypeScript", "React.js", "Next.js"],
  },
  {
    title: "Backend Development",
    skills: ["Node.js", "Express.js", "PHP", "WebSocket (Socket.IO)"],
  },
  {
    title: "Databases",
    skills: ["MySQL", "PostgreSQL", "MongoDB", "Redis"],
  },
  {
    title: "Tools & Technologies",
    skills: ["Git", "Postman", "REST APIs", "Docker"],
  },
  {
    title: "Other Skills",
    skills: [
      "Analytical Thinking",
      "Problem Solving",
      "Clean Code Practices",
      "Performance Optimization",
      "Debugging & Troubleshooting",
      "Team Collaboration",
    ],
  },
];

export default function Skills() {
	return (
		<section id="skills">
			<div className="max-w-6xl mx-auto px-6">
				<h2 className="text-3xl font-bold text-center mb-12">Skills</h2>

				<div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 p-6">
					{sections.map((section, index) => (
						<div
							key={index}
							className="p-6 rounded-xl shadow-md bg-gray-50 border border-gray-200 hover:shadow-lg transition-shadow duration-300"
						>
							<h3 className="text-xl font-semibold mb-4 text-gray-900">{section.title}</h3>
							<ul className="flex flex-wrap gap-2">
								{section.skills.map((skill, i) => (
									<li
										key={i}
										className="underline decoration-pink-500/30 text-red-800 px-3 py-1 rounded-lg text-sm"
									>
										{skill}
									</li>
								))}
							</ul>
						</div>
					))}
				</div>

			</div>
		</section>
	);
}