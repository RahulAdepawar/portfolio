

const project_details = [
	{
		"title": "Real-Time Chat Application",
		"description": [
			"Developed a full-stack real-time chat application using React.js, Node.js, Express.js, Socket.IO, PostgreSQL, and TypeScript.",
			"Built a responsive and interactive frontend with React.js and TypeScript for better maintainability and type safety.",
			"Implemented RESTful APIs with Node.js and Express.js for user authentication, message handling, and chat management.",
			"Designed and managed PostgreSQL database schemas for users, conversations, and message history.",
			"Enabled real-time message synchronization across multiple clients without page refresh using WebSocket (Socket.IO).",
			"Applied modular architecture, reusable components, and clean code practices for scalability and maintainability.",
			"Hosted frontend on Netlify and backend on Render for seamless deployment."
		],
		"links": {
			"github": "https://github.com/RahulAdepawar/chatapp.git",
			"live": "https://leafy-stroopwafel-579473.netlify.app/"
		}
	},
	{
		"title": "Drag-and-Drop ID Card Designer",
		"description": [
			"Built a fully customizable ID card designer using Konva.js, allowing users to drag, drop, resize, and position text, images, and shapes on a live canvas",
			"Implemented layer management, dynamic alignment, and real-time preview for enhanced design control",
			"Designed an intuitive and responsive UI using HTML, CSS, and JavaScript.",
			"Added export functionality to save final card designs easily",
		]
	},
]

export default function projects() {

	return (
		<>
			<section className="w-full py-16 px-6" id="projects">
				<div className="max-w-5xl mx-auto text-center">
					<h2 className="text-4xl font-bold mb-10">Projects</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						{project_details.map((project, index) => (
							<div
								key={index}
								className="bg-white rounded-2xl shadow p-6 border hover:shadow-lg transition"
							>
								<h3 className="text-2xl font-semibold mb-4 text-gray-800">
									{project.title}
								</h3>
								<ul className="space-y-2">
									{project.description.map((desc, i) => (
										<li
											key={i}
											className="py-2 px-3 rounded-lg bg-gray-100 text-red-800 font-medium text-sm"
										>
											{desc}
										</li>
									))}
								</ul>
								{project.links && (
									<p className="mt-2 text-sm text-indigo-600 font-medium">
										<a href={project.links.github} target="_blank" rel="noopener noreferrer">GitHub</a> |
										<a href={project.links.live} target="_blank" rel="noopener noreferrer">Live Demo</a>
									</p>
								)}
							</div>
						))}
					</div>
				</div>
			</section >
		</>
	);
}; 