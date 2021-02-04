import React from 'react';
import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  Grid,
  Divider,
} from '@material-ui/core';
import Form from './Form/Form';
import List from './List/List';
import useStyle from '../Details/styles';

const Main = () => {
  const classes = useStyle();
  return (
    <Card className={classes.root}>
      <CardHeader title='Expense Tracker' subheader='Powered by Speechly' />
      <CardContent>
        <Typography align='center' variant='h5'>
          Total Balance{' '}
        </Typography>
        <Typography
          variant='subtitle1'
          style={{ lineHeight: '1.5em', marginTop: '20px' }}
        >
          MANUAL Cde
          {/* <InfoCard /> */}
        </Typography>
        <Divider className={classes.divider} />
        <Form />
      </CardContent>
      <CardContent className={classes.cartContent}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <List />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Main;
