import React,  {useState, useEffect} from 'react'
import{ useDispatch } from 'react-redux';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { AppBar, Button, Toolbar, Typography, Avatar } from '@material-ui/core';
import doudou from "../../images/doudou.jpg";


import useStyles from './styles';

const Navbar = () => {
	// Pour recuperer en local le token
	const classes =useStyles();
	const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
const dispatch = useDispatch();
const navigate = useNavigate();
const location = useLocation();

	const logout =() => {
		dispatch({type:'LOGOUT'});
		navigate('/');
		setUser(null);
	};

	// Pour eviter le refresh de log (inutile avec logout)
	useEffect(()=>{
		const token = user?.token;

		setUser(JSON.parse(localStorage.getItem('profile')));
	}, [location])

  return (
	<AppBar className={classes.appBar} position="static" color="inherit">
		<div className={classes.brandContainer}>
			<Typography component={Link} to="/" className={classes.heading} variant="h2" align="center">DOUDOU KITCHEN</Typography>
			<img className={classes.image} src={doudou} alt="doudou kitchen" height="60" />
		</div>
		<Toolbar className={classes.toolbar}>
			{user ? (
				<div className={classes.profile}>
					<Avatar className={classes.purple} alt={user.result.name} src={user.result.imageURL}>{user.result.name.charAt(0)}</Avatar>
					<Typography className={classes.userName} variant="h6">{user.result.name}</Typography>
					<Button variant="contained" className={classes.logout} color="secondary" onClick={logout}>Logout</Button>
				</div>
			):(
				<Button component={Link} to="/auth" variant='contained' color='primary'>Sign In</Button>
			)}
		</Toolbar>
  </AppBar>  
  )
}

export default Navbar;