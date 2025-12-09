"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

type Contact = {
	name: string;
	email: string;
	mobile: number;
	message: string;
};

export default function AdminHome() {
	const [data, setData] = useState<Contact[]>([]);
	const [loading, setLoading] = useState(true);
	const router = useRouter();

	useEffect(() => {
		async function loadData() {
			try {
				// STEP 1: Verify token via backend (HttpOnly cookie)
				const detail = await fetch("/api/admin/checkCookies", {
					method: "GET",
				});

				const json = await detail.json();

				if (!json.token || json.token.value === "") {
					router.push("/admin/login/");
					return;
				}

				// STEP 2: Fetch admin contact data
				const contactRes = await fetch("/api/contact", {
					method: "GET",
				});

				const contactJson = await contactRes.json();
				setData(contactJson.data || []);

			} catch (error) {
				console.error("Error loading data:", error);
				router.push("/admin/login/");
			}

			setLoading(false);
		}

		loadData();
	}, [router]);

	// Loader UI while checking & fetching data
	if (loading) {
		return (
			<div className="flex justify-center items-center h-screen text-xl font-semibold">
				Loading...
			</div>
		);
	}

	return (
		<>
			<div>
				<h2 className="text-2xl font-bold">Welcome Admin 👋</h2>
				<p className="text-black-500">Manage your dashboard here.</p>
			</div>

			<div className="mt-5">
				<h1 className="text-3xl font-bold">Portfolio Contacts Data</h1>

				<div className="overflow-x-auto rounded-lg shadow-md mt-6">
					<table className="min-w-full border-b">
						<thead className="bg-black-200 border-b">
							<tr>
								<th className="py-3 px-4 text-left">Name</th>
								<th className="py-3 px-4 text-left">Email</th>
								<th className="py-3 px-4 text-left">Mobile</th>
								<th className="py-3 px-4 text-left">Message</th>
							</tr>
						</thead>

						<tbody>
							{data.map((item, index) => (
								<tr
									key={index}
									className="border-b hover:bg-blue-100 transition-all"
								>
									<td className="py-3 px-4">{item.name}</td>
									<td className="py-3 px-4">{item.email}</td>
									<td className="py-3 px-4">{item.mobile}</td>
									<td className="py-3 px-4">{item.message}</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</>
	);
}
