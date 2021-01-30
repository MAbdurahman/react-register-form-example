import React, { Component } from 'react';
import useStyles from './styles';

export default class SignUp extends Component {
   constructor(props) {
      super(props); 
      
   }
   classes = useStyles();
   render() {
      return (
         <div>
            <h1>SignUp</h1>
         </div>
      );
   };
};
