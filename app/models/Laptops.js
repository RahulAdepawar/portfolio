import mongoose from "mongoose";

const LaptopSchema = new mongoose.Schema({
	name: String,
	ram: String,
	processor: String,
});

export default mongoose.model.Laptops || mongoose.model("Laptops", LaptopSchema, 'laptops');