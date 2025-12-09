// models/Contact.js
import mongoose from 'mongoose';

const ContactSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, 'Full Name cannot be blank.']
	},
	email: {
		type: String,
		required: [true, 'Email cannot be blank.']
	},
	mobile: {
		type: Number,
		required: [true, 'Mobile cannot be blank.']
	},
	message: {
		type: String,
		required: [true, 'Message cannot be blank.']
	},
});

export default mongoose.models.Contact || mongoose.model('contact', ContactSchema, 'contact');