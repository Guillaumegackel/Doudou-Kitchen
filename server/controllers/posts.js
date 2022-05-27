import express from 'express';
import mongoose from 'mongoose';

import PostRecipe from "../models/postRecipe.js";

export const getPost = async (req, res) => {
  const { id } = req.params;

  try {
      const post = await PostRecipe.findById(id);
      
      res.status(200).json(post);
  } catch (error) {
      res.status(404).json({ message: error.message });
  }
}

export const getPosts = async (req, res) => {
  const {page} = req.query;
  try {
    const LIMIT = 8;
    const startIndex = (Number(page) - 1) * LIMIT; // get the starting index of every page

    const total = await PostRecipe.countDocuments({});

    const postRecipes = await PostRecipe.find().sort({ _id: -1 }).limit(LIMIT).skip(startIndex);

        res.status(200).json({ data: postRecipes, currentPage: Number(page), numberOfPages: Math.ceil(total / LIMIT)});
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getPostsBySearch = async (req, res) => {
  // rajouter Tags pour completer le champ de recherche
  const {searchQuery} = req.query
  try {
    const title = new RegExp(searchQuery, 'i');

    const posts = await PostRecipe.find({title});

    res.json({data: posts});
  } catch (error) {
    res.status(404).json({message: error.message})
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
  
  if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send(`No post with id: ${_id}`);

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



