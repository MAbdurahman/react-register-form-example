import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
	signup: {
		textAlign: 'center',
	},
	signup__avatarStyle: {
		marginBottom: '.5em',
		marginTop: '.5em',
		backgroundColor: '#423E37',
   },
   signup__buttonStyle: {
		margin: '8px 0',
		marginBottom: '1em',
		fontSize: '1.3rem',
		fontWeight: 500,
		letterSpacing: '2px',
		textTransform: 'capitalize',
		backgroundColor: '#423E37',
		color: '#EDEBD7',
		'&:hover': {
			backgroundColor: '#3F51B5',
			color: '#FDEBD3',
		},
	},
   signup__caption: {
      fontSize: '.8rem',
   },
	signup__heading: {
		marginBottom: '.7em',
	},
	signup__headingTitle: {
		fontSize: '1.5rem',
		fontWeight: 800,
	},
	signup__paperStyle: {
		maxHeight: '630px',
		maxWidth: '420px',
		height: '80vh',
		margin: '30px auto',
		padding: '20px',
	},
	signup__textFieldContainer: {
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'nowrap',
		alignItems: 'center',
		justifyContent: 'center',
	},
	signup__textFieldIcon: {
		marginRight: '5px',
	},
	signup__textFieldStyle: {
		width: '80%',
		marginBottom: '1em',
	},
}));
