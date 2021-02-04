import React from 'react';
import {
  TextField,
  Typography,
  Grid,
  Button,
  FormControl,
  Select,
  InputLabel,
  MenuItem,
} from '@material-ui/core';
import useStyles from './styles';
const Form = () => {
  const classes = useStyles();

  return (
    <Grid container spacing={2}>
      {/* <Snackbar open={open} setOpen={setOpen} /> */}
      <Grid item xs={12}>
        <Typography align='center' variant='subtitle2' gutterBottom>
          {/* {segment ? (
            <div className='segment'>
              {segment.words.map((w) => w.value).join(' ')}
            </div>
          ) : null}
          {isSpeaking ? <BigTranscript /> : 'Start adding transactions'}  */}
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <FormControl fullWidth>
          <InputLabel>Type</InputLabel>
          <Select>
            <MenuItem value='Income'>Income</MenuItem>
            <MenuItem value='Expense'>Expense</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={6}>
        <FormControl fullWidth>
          <InputLabel>Category</InputLabel>
          <Select>
            <MenuItem value='Income'>Income</MenuItem>
            <MenuItem value='Expense'>Expense</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={6}>
        <TextField type='number' label='Amount' fullWidth />
      </Grid>
      <Grid item xs={6}>
        <TextField fullWidth label='Date' type='date' />
      </Grid>
      <Button
        className={classes.button}
        variant='outlined'
        color='primary'
        fullWidth
      >
        Create
      </Button>
    </Grid>
  );
};

export default Form;
