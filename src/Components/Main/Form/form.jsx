import React, { useState, useContext, useEffect } from 'react';
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
import { ExpenseTrackerContext } from '../../../context/context';
import { v4 as uuidv4 } from 'uuid';
import { useSpeechContext } from '@speechly/react-client';
import formatDate from '../../../utils/formatDate';
import useStyles from './styles';
import {
  incomeCategories,
  expenseCategories,
} from '../../../constants/categories';

const initialState = {
  amount: '',
  category: '',
  type: 'Income',
  date: formatDate(new Date()),
};
const Form = () => {
  const classes = useStyles();
  const [formData, setFormData] = useState(initialState);
  const { addTransaction } = useContext(ExpenseTrackerContext);
  const { segment } = useSpeechContext();

  const createTransaction = () => {
    if (Number.isNaN(Number(formData)) || formData.date.includes('-')) return;

    const transaction = {
      ...formData,
      amount: Number(formData.amount),
      id: uuidv4(),
    };
    // console.log(transaction);

    addTransaction(transaction);
    setFormData(initialState);
  };

  const selectedCategory =
    formData.type === 'Income' ? incomeCategories : expenseCategories;
  // console.log(selectedCategory);

  useEffect(() => {
    if (segment) {
      if (segment.intent.intent === 'add_expense') {
        setFormData({ ...FormData, type: 'Expense' });
      } else if (segment.intent.intent === 'add_income') {
        setFormData({ ...FormData, type: 'Income' });
      } else if (
        segment.isFinal &&
        segment.intent.intent === 'create_transaction'
      ) {
        return createTransaction();
      } else if (
        segment.isFinal &&
        segment.intent.intent === 'cancel_transaction'
      ) {
        return setFormData(initialState);
      }

      segment.entities.forEach((e) => {
        const category = `${e.value.charAt(0)}${e.value
          .slice(1)
          .toLowerCase()}}`;
        switch (e.type) {
          case 'amount':
            setFormData({ ...FormData, amount: e.value });
            break;
          case 'category':
            if (incomeCategories.map((iC) => iC.type.includes(category))) {
              setFormData({ ...FormData, type: 'Income', category });
            } else if (expenseCategories.map((eC) => eC.includes(category))) {
              setFormData({ ...FormData, type: 'Expense', category });
            }
            break;
          case 'date':
            setFormData({ ...FormData, date: e.value });
            break;
          default:
            break;
        }
      });

      if (
        segment.isFinal &&
        formData.amount &&
        formData.category &&
        formData.type &&
        formData.date
      ) {
        createTransaction();
      }
    }
  }, [segment]);

  return (
    <form onSubmit={createTransaction}>
      <Grid container spacing={2}>
        {/* <Snackbar open={open} setOpen={setOpen} /> */}
        <Grid item xs={12}>
          <Typography align='center' variant='subtitle2' gutterBottom>
            {segment && (
              <div className='segment'>
                {segment.words.map((w) => w.value).join(' ')}
              </div>
            )}
            {/* {isSpeaking ? <BigTranscript /> : 'Start adding transactions'}  */}
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <FormControl fullWidth>
            <InputLabel>Type</InputLabel>
            <Select
              value={formData.type}
              onChange={(e) =>
                setFormData({ ...formData, type: e.target.value })
              }
            >
              <MenuItem value='Income'>Income</MenuItem>
              <MenuItem value='Expense'>Expense</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <FormControl fullWidth>
            <InputLabel>Category</InputLabel>
            <Select
              value={formData.category}
              onChange={(e) =>
                setFormData({ ...formData, category: e.target.value })
              }
            >
              {selectedCategory.map((c) => (
                <MenuItem value={c.type} key={c.type}>
                  {c.type}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <TextField
            type='number'
            label='Amount'
            fullWidth
            value={formData.amount}
            onChange={(e) =>
              setFormData({ ...formData, amount: e.target.value })
            }
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            label='Date'
            type='date'
            value={formData.date}
            onChange={(e) =>
              setFormData({ ...formData, date: formatDate(e.target.value) })
            }
          />
        </Grid>
        <Button
          className={classes.button}
          variant='outlined'
          color='primary'
          fullWidth
          onClick={createTransaction}
        >
          Create
        </Button>
      </Grid>
    </form>
  );
};

export default Form;
