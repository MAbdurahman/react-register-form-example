import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
	signin: {
		// marginTop: '1.125em',
		fontSize: '.5rem',
	},
	signin__avatarStyle: {
		marginBottom: '.5em',
		marginTop: '.5em',
		backgroundColor: '#423E37',
	},
	signin__buttonStyle: {
		margin: '8px 0',
		marginBottom: '1em',
		fontSize: '1.3rem',
		fontWeight: 500,
		letterSpacing: '2px',
		textTransform: 'capitalize',
		backgroundColor: '#423E37',
		color: '#EDEBD7',
		transition: 'all .333s cubic-bezier(0.25, 0.45, 0.45, 0.95)',
		'&:hover': {
			backgroundColor: '#3F51B5',
			color: '#FDEBD3',
			textTransform: 'uppercase',
		},
	},
	signin__formControlStyle: {
		margin: '0 auto',
		marginLeft: '1.2em',
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'flex-start',
		// [theme.breakpoints.down('xs')]: {
		// 	marginLeft: '.9em',
		// },
	},
	signin__heading: {
		marginBottom: '.7em',
	},
	signin__headingTitle: {
		fontSize: '2rem',
		fontWeight: 800,
	},
	signin__linkStyle: {
		textDecoration: 'none',
		textTransform: 'capitalize',
		color: '#423E37',
		transition: 'all .333s cubic-bezier(0.25, 0.45, 0.45, 0.95)',
		'&:hover': {
			color: '#3F51B5',
			textDecoration: 'none',
			fontWeight: '900',
			letterSpacing: '1px',
		},
   },
   signin__linkStyleContainer: {
      marginTop: '-1em',
      marginBottom: '1em',
   },
	signin__margin: {
		margin: theme.spacing(1),
		width: '100%',
	},
	signin__paperStyle: {
		maxWidth: '420px',
		// maxHeight: '550px',
		maxHeight: '630px',
		margin: '0 auto',
		padding: '20px',
		// [theme.breakpoints.between('md', 'lg')]: {
		//    height: '55px',
		// }
	},
	signin__textFieldContainer: {
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'nowrap',
		alignItems: 'center',
		justifyContent: 'center',
	},
	signin__textFieldIcon: {
		marginRight: '5px',
	},
	signin__textFieldStyle: {
		width: '80%',
		marginBottom: '1em',
	},
}));