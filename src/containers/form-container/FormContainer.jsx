import React, { useState } from 'react';
import useStyles from './styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import SignIn from '../../components/sign-in/SignIn';
import SignUp from '../../components/sign-up/SignUp';


export default function FormContainer() {
   const classes = useStyles();
   const [value, setValue] = useState(0);

   const handleChange = (event, newValue) => {
      setValue(newValue);
   };

   /* =========TabPanel Function========= */
   function TabPanel(props) {
      const { children, value, index, ...other } = props;

      return (
         <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
         >
            {value === index && (
               <Box p={3}>
                  <Typography>{children}</Typography>
               </Box>
            )}
         </div>
      );
   }

   return (
      <Paper square>
         <Tabs
            value={value}
            indicatorColor="primary"
            textColor="primary"
            onChange={handleChange}
            aria-label="disabled tabs example"
         >
            <Tab label='Sign In' />
            <Tab label='Sign Up' />
         </Tabs>
         <TabPanel value={value} index={0}>
            <SignIn />
         </TabPanel>
         <TabPanel value={value} index={1}>
            <SignUp />
         </TabPanel>
      </Paper>
   );
};

