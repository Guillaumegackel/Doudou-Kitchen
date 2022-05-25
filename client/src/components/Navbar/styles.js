import { makeStyles } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: '20px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '5px 30px',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
  },
},
  heading: {
    fontFamily: "Permanent Marker",
    fontSize: "3.5rem",
    color: 'rgba(0,183,255, 1)',
    textDecoration: 'none',
  },
  image: {
    margin: '0px 5px',
        [theme.breakpoints.down('sm')]: {
      display: 'none',
  },

  },
  toolbar: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '400px',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
  },
},
  profile: {
    display: 'flex',
    justifyContent: 'space-evenly',
    width: '400px',
  },
  userName: {
    display: 'flex',
    alignItems: 'center',
        [theme.breakpoints.down('sm')]: {
      display: 'none'
  },
  },
  brandContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
}));