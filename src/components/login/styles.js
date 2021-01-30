import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
	avatarStyle: {
      marginBottom: '.5em',
		backgroundColor: '#1bbd7e',
	},
	buttonStyle: {
		margin: '8px 0',
   },
   heading: {
      marginBottom: '2em'
   },
	margin: {
      margin: theme.spacing(1),
      width: '100%'
	},
	paperStyle: {
		height: '70vh',
		maxWidth: '420px',
		margin: '20px auto',
		padding: '20px',
   },
   textFieldStyle: {
      width: '100%',
      marginBottom: '1em'
   }
}));