import { Avatar, Button, Grid, Paper, TextField, Typography } from '@material-ui/core';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import LockIcon from '@material-ui/icons/Lock';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import { AccountCircle, LockRounded } from '@material-ui/icons';
import React from 'react';

import useStyles from './styles';

export default function SignUp() {
   const classes = useStyles();
   return (
      <Grid>
         <Paper className={classes.signup__paperStyle} elevation={10} >
            <Grid className={classes.signup__heading} align='center'>
               <Avatar className={classes.signup__avatarStyle}>
                  <PersonOutlineIcon />
               </Avatar>
               <h2 className={classes.signup__headingTitle}>Sign Up</h2>
               <Typography className={classes.signup__caption} variant='caption'>
                  To create an account, complete this form!
               </Typography>
            </Grid>
            <Grid className={classes.signup__textFieldContainer}>
               <AccountCircle className={classes.signup__textFieldIcon} />
               <TextField
                  className={classes.signup__textFieldStyle}
                  type='text'
                  // id='input-with-icon-grid'
                  label='First and last name'

               />
            </Grid>
            <Grid className={classes.signup__textFieldContainer}>
               <PhoneIcon className={classes.signup__textFieldIcon} />
               <TextField
                  className={classes.signup__textFieldStyle}
                  type='text'
                  // id="input-with-icon-grid"
                  label='Phone'
               />
            </Grid>
            <Grid className={classes.signup__textFieldContainer}>
               <EmailIcon className={classes.signup__textFieldIcon} />
               <TextField
                  className={classes.signup__textFieldStyle}
                  type='email'
                  // id="input-with-icon-grid"
                  label='Email'
               />
            </Grid>
            <Grid className={classes.signup__textFieldContainer}>
               <LockIcon className={classes.signup__textFieldIcon} />
               <TextField
                  className={classes.signup__textFieldStyle}
                  type='password'
                  // id="input-with-icon-grid"
                  label='Password'
               />
            </Grid>
            <Grid className={classes.signup__textFieldContainer}>
               <LockOpenIcon className={classes.signup__textFieldIcon} />
               <TextField
                  className={classes.signup__textFieldStyle}
                  type='password'
                  // id="input-with-icon-grid"
                  label='Confirmed Password'
               />
            </Grid>
            <Button
               className={classes.signup__buttonStyle}
               type='submit'
               fullWidth
               variant='contained'
            >
               Sign Up
            </Button>
         </Paper>
      </Grid>
   );
};
