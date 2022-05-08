import React, { useState, useEffect } from "react";
import FileBase from "react-file-base64";
import useStyles from "./Styles";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import {createPost, updatePost} from '../../actions/posts';




const Form = ({ currentId, setCurrentId }) => {
  const [postData, setPostData] = useState({title: "", recipe: "", tags: "",selectedFile: ""});
	const poste = useSelector((state) => (currentId ? state.posts.find((p) => p._id === currentId) : null));
  const dispatch = useDispatch();
  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem('profile'));


useEffect(() => {
    if(poste) setPostData(poste);
}, [poste])

  // To clear Form fields after Submit
  const clear =()=>{
    setCurrentId(null);
    setPostData({title: "", recipe: "", tags: "",selectedFile: ""});
  }

  const handleSubmit = (e) => {
	  e.preventDefault();
    
    if (currentId === 0) {
      dispatch(createPost({ ...postData, name: user?.result?.name }));
      clear();
    } else {
      dispatch(updatePost(currentId, { ...postData, name: user?.result?.name }));
      clear();
    }
  };

  if (!user?.result?.name) {
    return (
      <Paper className={classes.paper}>
        <Typography variant="h6" align="center">
          Connectez-vous pour enregistrer votre recette !
        </Typography>
      </Paper>
    );
  }



  return (
    <Paper className={classes.paper}>
      <form
        autoComplete="off"
        noValidate
        className={`${classes.root} ${classes.form}`}
        onSubmit={handleSubmit}
      >
        <Typography variant="h6">{currentId ? 'Modifier une recette' : 'Créer une fiche Recette'}</Typography>
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
          onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })}
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
