"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import React from "react";

export default function LoginPage() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");

	const router = useRouter();
	const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		
		// TODO: Call your API / authenticate user
		const res = await fetch("/api/admin/login", {
			method: "POST",
			body: JSON.stringify({email, password})
		});
		setError("");

		const data = await res.json();
		if (data.status == 200) {
			setError(data.message);
			router.push("/admin/dashboard/"); // absolute path from root
		}
		else {
			setError(data.message);
		}
	};

	return (
		<div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
			<div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-8">
				<h2 className="text-3xl font-bold text-center mb-6 text-black">
					Login
				</h2>

				<form onSubmit={handleLogin} className="space-y-5">

					{/* Email */}
					<div>
						<label className="block mb-1 font-semibold text-black">Email</label>
						<input
							type="email"
							className="w-full border px-4 py-2 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
							placeholder="Enter your email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							required
						/>
					</div>

					{/* Password */}
					<div>
						<label className="block mb-1 font-semibold text-black">Password</label>
						<input
							type="password"
							className="w-full border px-4 py-2 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
							placeholder="Enter your password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							required
						/>
					</div>

					{/* Button */}
					<button
						type="submit"
						className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition text-black"
					>
						Login
					</button>

					<p className="text-center text-sm text-black">
						Don’t have an account?{" "}
						<a href="/register" className="text-blue-600 font-semibold">
							Register
						</a>
					</p>
					{error && <p className="text-red-700 font-semibold text-center">{error}</p>}
				</form>
			</div>
		</div>
	);
}
