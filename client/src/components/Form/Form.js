import React, { useState, useEffect } from "react";
import FileBase from "react-file-base64";
import useStyles from "./Styles";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import {createPost, updatePost} from '../../actions/posts';




const Form = ({ currentId, setCurrentId }) => {
  const [postData, setPostData] = useState({creator: "", title: "", recipe: "", tags: "",selectedFile: ""});
	const post = useSelector((state) => (currentId ? state.posts.find((p)=> p._id === currentId) : null));
  const dispatch = useDispatch();
  const classes = useStyles();

useEffect(() => {
    if(post) setPostData(post);
}, [post])

  const handleSubmit = (e) => {
	  e.preventDefault();
    
    if(currentId) {
      dispatch(updatePost(currentId, postData));
    } else {
      dispatch(createPost(postData));
    }
  };

  const clear =()=>{

  }

  return (
    <Paper className={classes.paper}>
      <form
        autoComplete="off"
        noValidate
        className={`${classes.root} ${classes.form}`}
        onSubmit={handleSubmit}
      >
        <Typography variant="h6">Noter une recette</Typography>
        <TextField
          name="creator"
          variant="outlined"
          label="creator"
          fullWidth value={postData.creator}
          onChange={(e) =>
            setPostData({ ...postData, creator: e.target.value })
          }
        ></TextField>
        <TextField
          name="title"
          variant="outlined"
          label="title"
          fullWidth value={postData.title}
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
        ></TextField>
        <TextField
          name="recipe"
          variant="outlined"
          label="recipe"
          fullWidth value={postData.recipe}
          onChange={(e) => setPostData({ ...postData, recipe: e.target.value })}
        ></TextField>
        <TextField
          name="tags"
          variant="outlined"
          label="tags"
          fullWidth value={postData.tags}
          onChange={(e) => setPostData({ ...postData, tags: e.target.value })}
        ></TextField>

        {/* File Select */}
        <div className={classes.fileInput}>
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setPostData({ ...postData, selectedFile: base64 })
            }
          ></FileBase>
        </div>
		{/* Bouton de sauvegarde */}
		<Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Sauvegarder</Button>
		<Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Vider</Button>
      </form>
    </Paper>
  );
}

export default Form;
