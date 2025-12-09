"use client";

import { useState, useEffect } from "react";
import AdminNavbar from "@/components/admin/Navbar";
import AdminSidebar from "@/components/admin/Sidebar";
import { useRouter } from "next/navigation";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
	const [sidebarOpen, setSidebarOpen] = useState(false);
	const router = useRouter();

	useEffect(() => {
		async function checkCookies() {
			try {
				const detail = await fetch("/api/admin/checkCookies");
				const json = await detail.json();

				if (!json.token || json.token.value === "") {
					router.push("/admin/login/");
				}
			} catch (error) {
				console.error("Server error:", error);
				router.push("/admin/login/");
			}
		}

		checkCookies();
	}, [router]);

	return (
		<div className="h-screen flex">

			<AdminSidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

			<div
				className={`flex flex-col flex-1 transition-all duration-300
				${sidebarOpen ? "md:ml-64" : "md:ml-0"}`}
			>
				<AdminNavbar onMenuClick={() => setSidebarOpen(true)} />

				<div className="p-6 overflow-auto">
					{children}
				</div>
			</div>
		</div>
	);
}
