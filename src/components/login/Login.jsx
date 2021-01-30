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
            <Grid align='center' >
               <Avatar className={classes.avatarStyle}><PersonOutlineIcon /></Avatar>
               <h2>Login</h2>
            </Grid>
            
            <Grid fullWidth>
               <TextField
                  type='text'
                  id="input-with-icon-grid"
                  label="Username"
                  style={{ width: '96%' }}
               />
            </Grid>
            <Grid fullWidth>
               <TextField
                  type='password'
                  id="input-with-icon-grid"
                  label="Password"
                  style={{ width: '96%' }}
               />
            </Grid>
         </Paper>
      </Grid>
   );
};
