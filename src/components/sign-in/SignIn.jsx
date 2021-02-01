import { Avatar, Button, Grid, Paper, TextField, Typography, Link } from '@material-ui/core';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import React from 'react';
import useStyles from './styles';

export default function SignIn() {
   const classes = useStyles();
   return (
      <Grid>
         <Paper className={classes.signin__paperStyle} elevation={10}>
            <Grid className={classes.signin__heading} align='center' >
               <Avatar className={classes.signin__avatarStyle}><PersonOutlineIcon /></Avatar>
               <h2 className={classes.signin__headingTitle}>Sign In</h2>
            </Grid>
         </Paper>
      </Grid>
   );
};
