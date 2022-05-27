import React, { useState } from 'react'
import { Rating } from 'react-simple-star-rating'
import {MdFavorite} from 'react-icons/md'
import useStyles from './styles';
import { Box } from '@material-ui/core';


const LikeStars=() =>{
  const [ratingValue, setRatingValue] = useState(0)
  
  const handleRating = (rate) => {
    setRatingValue(rate)
	console.log(rate);
  }

  const classes = useStyles();


  return (
	  <Box 
	  className={classes.stars}> 
		  <h1>Votre note</h1>
			  <Rating
			   onClick={handleRating} 
			   ratingValue={ratingValue}
			//    allowHalfIcon
			   transition
			   showTooltip
			   tooltipArray={['Mauvais', 'Pas bon', 'Moyen', 'Délicieux', 'encore!']}
			   fillColorArray={['#006d99', '#0080b2', '#0092cc', '#00a4e5', '#00b7ff']} 
			   fullIcon={<MdFavorite size={50} />}
			   emptyIcon={<MdFavorite size={50} />} 
			   alignItems="center"
			  />
	  </Box>
  )}

  export default LikeStars