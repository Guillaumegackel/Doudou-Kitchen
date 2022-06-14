import React from 'react'
import {  Grid, CircularProgress, Typography, Box, Paper } from '@material-ui/core';
import { useSelector } from 'react-redux';
import Post from './Post/Post'
import useStyles from './Styles'

const Posts= ({ setCurrentId }) => {
	const {posts, isLoading} = useSelector((state) => state.posts);
	const classes = useStyles();

	if(!posts.length && !isLoading) return (
		<Paper elevation={6} variant="outlined" style={{ padding: '20px', backgroundColor:'rgb(245, 0, 87) ', color:'white' }}>
			<Typography align='center' variant="h4">
			"Aucune recette disponible"
			</Typography>
		</Paper>
	)


  return (
	 isLoading ? <Box textAlign='center'><CircularProgress color='primary'/></Box> : (
	  <Grid className={classes.container} container alignItems="stretch" spacing={3}>
		  {posts.map((post)=> (
          <Grid key={post._id} item xs={12} sm={12} md={6} xl={3}>
		  <Post post={post} setCurrentId={setCurrentId} />
			</Grid>
		))}
	  </Grid>
	  )
  )}

export default Posts;