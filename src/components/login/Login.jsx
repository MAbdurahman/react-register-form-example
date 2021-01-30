import React from 'react';
import { Avatar, Grid, Paper, TextField } from '@material-ui/core';

import useStyles from './styles';
import { AccountCircle, LockRounded } from '@material-ui/icons';

import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';



export default function Login() {
   const classes = useStyles();

   return (
      <Grid>
         <Paper elevation={10} className={classes.paperStyle} >
            <Grid className={classes.heading} align='center' >
               <Avatar className={classes.avatarStyle}><PersonOutlineIcon /></Avatar>
               <h2>Login</h2>
            </Grid>

            <Grid>
               <TextField
                  className={classes.textFieldStyle}
                  type='text'
                  id="input-with-icon-grid"
                  label="Username"

               />
            </Grid>
            <Grid>
               <TextField
                  className={classes.textFieldStyle}
                  type='password'
                  id="input-with-icon-grid"
                  label="Password"

               />
            </Grid>
         </Paper>
      </Grid>
   );
};
