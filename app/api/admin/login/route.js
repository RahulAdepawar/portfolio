import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";
import cookie from "cookie";
import jwt from "jsonwebtoken";

const user_detail = {
	username: process.env.ADMIN_USERNAME,
	password: "$2a$12$1uM7VvUnCa1Vf3SugCEChOxknIF.jHBwOrygbuj58CcuP96busfN."
};

export async function POST(req) {
	try {
		const body = await req.json();
		const { email, password } = body;

		if (email !== user_detail.username) {
			return NextResponse.json({ message: "Email doesn't match.", status: 401 });
		}

		const match_password = await bcrypt.compare(password, user_detail.password);

		if (!match_password) {
			return NextResponse.json({ message: "Password doesn't match.", status: 401 });
		}

		const token = jwt.sign({ email: email }, process.env.JWT_SECRET, { expiresIn: "1d" });

		const response = NextResponse.json(
			{ message: "Login successful", status: 200 }
		);

		response.headers.append(
			"Set-Cookie",
			cookie.serialize("token", token, {
				httpOnly: true,
				secure: process.env.NODE_ENV === "production",
				sameSite: "lax",   // 🔥 important
				path: "/",
				maxAge: 60 * 60 * 24,
			})
		);


		return response;
	}
	catch (error) {
		return NextResponse.json({ message: "Server error", error }, { status: 500 });
	}
};