import React from 'react';
import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  Grid,
  Divider,
} from '@material-ui/core';

import useStyles from './styles';

const Main = () => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardHeader title='Expense Tracker' subheader='Powered by Speechly' />
      <Typography align='center' variont='h5'>
        Total Balance $100
      </Typography>
      <Typography
        variant='subtitle1'
        style={{ lineHeight: '1.5em', marginTop: '20px' }}
      >
        Try Saying something
      </Typography>
      <Divider />
      <CardContent className={classes.CardContent}>
        <Grid item xs={12}>
          {/* List */}
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Main;
