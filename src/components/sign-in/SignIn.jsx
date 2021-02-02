import { Avatar, Button, Grid, Paper, TextField, Typography, Link } from '@material-ui/core';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import { AccountCircle, LockRounded } from '@material-ui/icons';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import React from 'react';
import useStyles from './styles';


export default function SignIn() {
   const classes = useStyles();
   return (
      <Grid className={classes.signin}>
         <Paper className={classes.signin__paperStyle} elevation={10}>
            <Grid className={classes.signin__heading} align='center' >
               <Avatar className={classes.signin__avatarStyle}><PersonOutlineIcon /></Avatar>
               <h2 className={classes.signin__headingTitle}>Sign In</h2>
            </Grid>
            <Grid className={classes.signin__textFieldContainer}>
               <AccountCircle className={classes.signin__textFieldIcon} />
               <TextField
                  className={classes.signin__textFieldStyle}
                  type='email'
                  placeholder='email address'
                  // id="input-with-icon-grid"
                  label="Username"
               />
            </Grid>
            <Grid className={classes.signin__textFieldContainer}>
               <LockRounded className={classes.signin__textFieldIcon} />
               <TextField
                  className={classes.signin__textFieldStyle}
                  type='password'
                  // id="input-with-icon-grid"
                  label="Password"
               />
            </Grid>
            <Grid className={classes.signin__textFieldContainer}>
               <FormControlLabel
                  className={classes.signin__formControlStyle}
                  control={
                     <Checkbox
                        name="checkedB"
                        color="primary"
                     />
                  }
                  label="Remember me"
               />
            </Grid>
            <Button
               className={classes.signin__buttonStyle}
               type='submit'
               fullWidth
               variant='contained'
            >
               Sign In
            </Button>
            <Grid className={classes.signin__linkStyleContainer}>
               <Typography >
                  <Link className={classes.signin__linkStyle} href="#" >
                     Forgot password
                  </Link>
                  ?
               </Typography>
               <Typography>
                  Do you have an account?&nbsp;&nbsp;
                  <Link className={classes.signin__linkStyle} href="#" >
                     Sign Up
                  </Link>
                  !
               </Typography>
            </Grid>
         </Paper>
      </Grid>
   );
};
