import React from 'react';
import { Avatar, Button, Grid, Paper, TextField, Typography, Link } from '@material-ui/core';

import useStyles from './styles';
import { AccountCircle, LockRounded } from '@material-ui/icons';

import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';



export default function Login() {
   const classes = useStyles();

   return (
      <Grid>
         <Paper elevation={10} className={classes.paperStyle} >
            <Grid className={classes.heading} align='center' >
               <Avatar className={classes.avatarStyle}><PersonOutlineIcon /></Avatar>
               <h2 className={classes.headingTitle}>Sign In</h2>
            </Grid>
            <Grid className={classes.textFieldContainer}>
               <AccountCircle className={classes.textFieldIcon} />
               <TextField
                  className={classes.textFieldStyle}
                  type='text'
                  id="input-with-icon-grid"
                  label="Email"

               />
            </Grid>
            <Grid className={classes.textFieldContainer}>
               <LockRounded className={classes.textFieldIcon} />
               <TextField
                  className={classes.textFieldStyle}
                  type='password'
                  id="input-with-icon-grid"
                  label="Password"

               />
            </Grid>
            <Grid className={classes.textFieldContainer}>
               <FormControlLabel
                  className={classes.formControlStyle}
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
               className={classes.buttonStyle}
               type='submit'
               fullWidth
               variant='contained'
            >
               Sign In
            </Button>
            <Grid>
               <Typography >
                  <Link className={classes.linkStyle} href="#" >
                     Forgot password?
                  </Link>
               </Typography>
               <Typography>
                  Do you have an account?&nbsp;&nbsp;
                  <Link className={classes.linkStyle} href="#" >
                     Sign Up
                  </Link>
               </Typography>
            </Grid>
         </Paper>
      </Grid>
   );
};
