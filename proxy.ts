// proxy.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import Jwt from "jsonwebtoken";

export function proxy(req: NextRequest) {
	const token = req.cookies.get("token")?.value;

	if (!token) {
		return NextResponse.redirect(new URL("/admin/login/", req.url));
	}

	try {
		// Verify JWT (sync)
		Jwt.verify(token, process.env.JWT_SECRET!);
		return NextResponse.next();
	} catch (err) {
		// Token invalid or expired
		return NextResponse.redirect(new URL("/admin/login/", req.url));
	}
}

export const config = {
	matcher: [
		"/admin/dashboard:path*",    // Protect admin dashboard
	]
};
