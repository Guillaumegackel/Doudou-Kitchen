import express from 'express';
import mongoose from 'mongoose';

import PostRecipe from "../models/postRecipe.js";

export const getPosts = async (req, res) => {
  try {
    const postRecipes = await PostRecipe.find();

    res.status(200).json(postRecipes);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createPost = async (req, res) => {
const post = req.body;

const newPost = new PostRecipe({ ...post, creator: req.userId, createdAt: new Date().toISOString() })

try{
await newPost.save();

res.status(201).json(newPost);
}catch(error){
res.status(409).json({message: error.message})
}

};


export const updatePost = async (req, res) => {
  const { id: _id } = req.params;
  const post = req.body;
  
  if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send(`No post with id: ${id}`);

  const updatedPost = await PostRecipe.findByIdAndUpdate(_id, {...post,_id}, { new: true });

  res.json(updatedPost);
};

export const deletePost = async (req, res) => {
  const { id: _id } = req.params;
  
  if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send(`No post with id`);

 await PostRecipe.findByIdAndRemove(_id);

 console.log('delete');

  res.json({ message:'Recette supprimée avec succès'});
};

export const likePost = async (req, res) => {
  const { id: _id } = req.params;

if(!req.userId) return res.json({message: 'tu n\'es pas authentifié'})

  if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send(`No post with id:`);

  const Post = await PostRecipe.findById(_id);
  
  const index= Post.likes.findIndex((id)=> id === String(req.userId));

  if(index === -1){
    Post.likes.push(req.userId)
  }else{
    Post.likes=Post.likes.filter((id)=> id!=String(req.userId));

  }

  const updatedPost = await PostRecipe.findByIdAndUpdate(_id, {likeCount: Post.likeCount +1 }, { new: true });

  res.json(updatedPost);
};



