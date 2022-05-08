import mongoose from "mongoose";

const { Schema } = mongoose;


const postSchema = new Schema({
title: String,
recipe: String,
name: String,
creator: String,
tags: [String],
selectedFile: String,
likes: {
	type: [String],
	default: [],
},
createdAt: {
	type:Date,
	default:new Date()
},
});

const PostRecipe = mongoose.model('PostRecipe', postSchema);

export default PostRecipe;