import React from 'react'
import { useSelector } from 'react-redux';
import Post from './Post/Post'
import useStyles from './Styles'

function Posts() {
	const posts=useSelector((state) => state.posts);
	// const classes = useStyles();

  return (
	<>
	<h1>Posts</h1>
	<Post/>
	<Post/>
	<Post/>
	<Post/>
	<Post/>
	</>
  )
}

export default Posts;