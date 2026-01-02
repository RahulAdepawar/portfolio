// app/api/contact/save_contact/route.js
import { NextResponse } from 'next/server';
// import thankyou_email from '../../../emails/thanku_email';
import dbConnect from '../../../lib/mongodb';
import Contact from '../../models/Contact';
// import resend_email from '../../../lib/resend';

export async function POST(request) {
	try {
		const { name, email, message, mobile } = await request.json();

		// Basic validation (add more as needed)
		if (!name || !email || !message || !mobile) {
			return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
		}

		await dbConnect();
		const data = { name, email, mobile, message };
		const contactInfo = await Contact.create(data);
		
		// if (contactInfo.email && contactInfo.email != '') {
		// 	const sender_email = contactInfo.email;
		// 	const html_content = thankyou_email({ name, sender_email, message });

		// 	await resend_email.emails.send({
		// 		from: 'onboarding@resend.dev',
		// 		to: sender_email,
		// 		subject: `Thanks for Connecting, ${name} – Let's Build Something Amazing!`,
		// 		html: html_content
		// 	});
		// }

		return NextResponse.json({
			status: 200,
			success: true,
			message: "MongoDB connection OK",
			// data: contactInfo
		});

	} catch (error) {
		console.error('Error processing request:', error);
		return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
	}
}

export async function GET(request) {
	try {
		console.log("Get api call");

		await dbConnect();
		const contactInfo = await Contact.find();

		return NextResponse.json({
			status: 200,
			success: true,
			message: "OK",
			data: contactInfo
		});

	} catch (error) {
		console.error('Error processing request:', error);
		return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
	}
}