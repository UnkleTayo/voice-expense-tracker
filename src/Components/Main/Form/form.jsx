import React from 'react';
import {
  TextField,
  Typography,
  Grid,
  Button,
  FormControl,
  TextLabel,
  Select,
  InputLabel,
  MenuItem,
} from '@material-ui/core';
import useStyles from './styles';
const form = () => {
  const classes = useStyles();
  return (
    <Grid container spcaing={2}>
      <Grid item xs={12}>
        <Typography align='center' variant='subtitle2' gutterBottom>
          ...
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <FormControl fullWidth>
          <InputLabel>Type</InputLabel>
          
        
        </FormControl>
      </Grid>
    </Grid>
  );
};

export default form;
