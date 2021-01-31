import { makeStyles } from '@material-ui/core/styles';
// import { Autorenew } from '@material-ui/icons';

export default makeStyles(theme => ({
	// root: {
	// 	'.MuiTypography-body1': {
	// 		fontFamily: 'Montserrat, sans-serif',
	// 		fontSize: '1.25rem',
	// 		letterSpacing: '1px',
	// 	},
	// 	'& .MuiFormControlLabel-label': {
	// 		fontFamily: 'Montserrat, sans-serif',
	// 		fontSize: '1.25rem',
	// 		letterSpacing: '1px',
	// 	},
	// },
	avatarStyle: {
		marginBottom: '.5em',
		marginTop: '.5em',
		backgroundColor: '#423E37',
	},
	buttonStyle: {
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
	formControlStyle: {
		margin: '0 auto',
		marginLeft: '1.2em',
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'flex-start',
		[theme.breakpoints.down('xs')]: {
			marginLeft: '.9em',
		},
	},
	heading: {
		marginBottom: '2em',
	},
	headingTitle: {
		fontSize: '2rem',
		fontWeight: 800,
	},
	linkStyle: {
		textDecoration: 'underline',
		'&:hover': {
			color: '#423E37',
		},
	},
	margin: {
		margin: theme.spacing(1),
		width: '100%',
	},

	paperStyle: {
		maxWidth: '420px',
		margin: '30px auto',
		padding: '20px',
		maxHeight: '75vh',
		height: '500px',
		// [theme.breakpoints.between('md', 'lg')]: {
		//    height: '55px',
		// }
	},
	textFieldContainer: {
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'nowrap',
		alignItems: 'center',
		justifyContent: 'center',
	},
	textFieldIcon: {
		marginRight: '5px',
	},
	textFieldStyle: {
		width: '80%',
		marginBottom: '1em',
	},
}));