import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import App from "./component/App";

ReactDOM.render(<BrowserRouter basename='/E-Commerce'><App /></BrowserRouter>,document.getElementById("root"));