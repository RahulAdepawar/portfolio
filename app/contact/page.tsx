"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
export default function Contact() {
	const [status, setStatus] = useState("");
	const [disabledButton, setDisabledButton] = useState(false);

	const [name, setName] = useState("");
	const [mobile, setMobile] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");

	const handeSubmit = async () => {
		console.log("check")
		setDisabledButton(true);

		if (name == '' || email == '' || message == '' || mobile == '') {
			setStatus("Fields cannot be blank");
			setDisabledButton(false);
			return;
		}

		setStatus("Please wait your data is saving");

		try {
			const res = await fetch("/api/contact", {
				method: "POST",
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify({ "name": name, "email": email, "mobile": mobile, "message": message })
			})

			const data = await res.json();

			if (data.success) {
				setTimeout(() => {
					setDisabledButton(false);
				}, 1000);

				setStatus("Thank you for contacting us.");
				setName("");
				setMobile("");
				setEmail("");
				setMessage("");
			}
			else {
				alert("Error on data save." + data.error);
			}
		}
		catch (Error) {
			console.error("Failed to save data " + Error);
			setStatus("Failed to save data.");
		}
	};


	return (
		<>
			<Navbar />
			{/* Form Section */}
			<div className="max-w-xl mx-auto p-6 sm:p-8" style={{paddingTop: "5rem"}}>
				<h1 className="text-2xl sm:text-3xl font-bold mb-6 text-center">
					Contact Me
				</h1>

				<input
					name="name"
					type="text"
					placeholder="Your Name"
					className="w-full border p-3 rounded mt-4 sm:mt-5 focus:outline-none focus:ring-2 focus:ring-blue-500"
					value={name}
					onChange={(e) => setName(e.target.value)}
					required
				/>

				<input
					name="email"
					type="email"
					placeholder="Your Email"
					className="w-full border p-3 rounded mt-4 sm:mt-5 focus:outline-none focus:ring-2 focus:ring-blue-500"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					required
				/>

				<input
					name="mobile"
					type="tel"
					placeholder="Your Mobile"
					className="w-full border p-3 rounded mt-4 sm:mt-5 focus:outline-none focus:ring-2 focus:ring-blue-500"
					value={mobile}
					onChange={(e) => setMobile(e.target.value)}
					required
				/>

				<textarea
					name="message"
					placeholder="Your Message"
					className="w-full border p-3 rounded h-32 mt-4 sm:mt-5 focus:outline-none focus:ring-2 focus:ring-blue-500"
					value={message}
					onChange={(e) => setMessage(e.target.value)}
					required
				></textarea>

				<button
					onClick={handeSubmit}
					id="send_button"
					className="w-full bg-blue-600 text-white py-3 rounded mt-4 sm:mt-5 hover:bg-blue-700 transition disabled:opacity-50"
					disabled={disabledButton}
				>
					Send Message
				</button>

				{status && <p className="text-center mt-4">{status}</p>}
			</div>
		</>
	);
}
