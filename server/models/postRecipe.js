import mongoose from "mongoose";

const { Schema } = mongoose;


const postSchema = new Schema({
title: String,
recipe: String,
creator: String,
tags: [String],
selectedFile: String,
likeCount: {
	type: Number,
	default: 0
},
createdAt: {
	type:Date,
	default:new Date()
},
});

const PostRecipe = mongoose.model('PostRecipe', postSchema);

export default PostRecipe;