"use client";

import { X } from "lucide-react";
import Link from "next/link";

export default function AdminSidebar({ isOpen, onClose }) {
	return (
		<>
			{/* Overlay only for mobile */}
			{isOpen && (
				<div
					className="fixed inset-0 bg-black/40 z-30 md:hidden"
					onClick={onClose}
				></div>
			)}

			{/* Sidebar - slides for both desktop & mobile */}
			<div
				className={`
					fixed top-0 left-0 h-full w-64 bg-white shadow-xl z-40
					transform transition-transform duration-300
					${isOpen ? "translate-x-0" : "-translate-x-full"}
				`}
			>
				{/* Close button (mobile only) */}
				<button
					className="md:hidden absolute top-4 right-4"
					onClick={onClose}
				>
					<X size={22} />
				</button>

				{/* Sidebar Content */}
				<div className="p-6">
					<h2 className="text-2xl font-bold mb-6">Menu</h2>

					<ul className="space-y-4 text-lg">
						<li><Link href="/admin" className="hover:text-blue-600">Dashboard</Link></li>
						<li><Link href="/admin/users" className="hover:text-blue-600">Users</Link></li>
						<li><Link href="/admin/orders" className="hover:text-blue-600">Orders</Link></li>
						<li><Link href="/admin/products" className="hover:text-blue-600">Products</Link></li>
						<li><Link href="/admin/settings" className="hover:text-blue-600">Settings</Link></li>
					</ul>
				</div>
			</div>
		</>
	);
}
