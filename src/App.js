import React from 'react';
import Header from './components/Header';
import Functions from './components/Functions';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';

//insert home page background here
const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    backgroundImage: `url(${process.env.PUBLIC_URL + ''})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
}));

export default function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header />
      <Functions />
    </div>
  );
}