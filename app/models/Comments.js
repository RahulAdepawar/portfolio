import mongoose from "mongoose";

const CommentsSchema = new mongoose.Schema({
	name: String,
	email: String,
	text: String,
});

export default mongoose.models.Comment || mongoose.model("Comment", CommentsSchema, "comments");