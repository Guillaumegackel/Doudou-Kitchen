import React, { useState } from "react";
import FileBase from "react-file-base64";
import useStyles from "./Styles";
import { TextField, Button, Typography, Paper } from "@material-ui/core";

function Form() {
  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  });

  const classes = useStyles();

  const handleSubmit = () => {};

  const clear =()=>{
	  
  }

  return (
    <Paper className={classes.paper}>
      <form
        autoComplete="off"
        noValidate
        className={classes.form}
        onSubmit={handleSubmit}
      >
        <Typography variant="h6">Noter une recette</Typography>
        <TextField
          name="creator"
          variant="outlined"
          label="Creator"
          fullWidthvalue={postData.creator}
          onChange={(e) =>
            setPostData({ ...postData, creator: e.target.value })
          }
        ></TextField>
        <TextField
          name="title"
          variant="outlined"
          label="title"
          fullWidthvalue={postData.title}
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
        ></TextField>
        <TextField
          name="recipe"
          variant="outlined"
          label="recipe"
          fullWidthvalue={postData.recipe}
          onChange={(e) => setPostData({ ...postData, recipe: e.target.value })}
        ></TextField>
        <TextField
          name="tags"
          variant="outlined"
          label="tags"
          fullWidthvalue={postData.tags}
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
		<button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidthvalue>Sauvegarder</button>

		<button className={classes.buttonSubmit} variant="contained" color="secondary" size="small" onClick={clear} fullWidthvalue>Vider</button>

      </form>
    </Paper>
  );
}

export default Form;
