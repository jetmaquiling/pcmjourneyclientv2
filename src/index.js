import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AuthContextProvider from './Provider/context';
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import MomentUtils from '@date-io/moment';

ReactDOM.render(
  <MuiPickersUtilsProvider utils={MomentUtils}>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </MuiPickersUtilsProvider>   ,
  document.getElementById('root')
);