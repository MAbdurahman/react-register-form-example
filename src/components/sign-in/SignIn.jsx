import React from 'react';
import useStyles from './styles';

export default function SignIn() {
   const classes = useStyles();
   return (
      <div className={classes.signin}>
         <h1>Sign In</h1>
      </div>
   );
};
