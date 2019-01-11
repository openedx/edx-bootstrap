import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';

import Overview from './pages/Overview';
import Grid from './pages/Grid';
import LayoutUtils from './pages/LayoutUtils';


import Typography from './pages/Typography';
import Tables from './pages/Tables';



import Badge from './pages/Badge';
import Breadcrumb from './pages/Breadcrumb';
import Buttons from './pages/Buttons';
import Card from './pages/Card';
import Collapse from './pages/Collapse';
import Dropdowns from './pages/Dropdowns';
import Forms from './pages/Forms';
import InputGroup from './pages/InputGroup';
import Jumbotron from './pages/Jumbotron';
import ListGroup from './pages/ListGroup';
import MediaObject from './pages/MediaObject';
import Modal from './pages/Modal';
import Navs from './pages/Navs';
import Navbar from './pages/Navbar';
import Pagination from './pages/Pagination';
import Popovers from './pages/Popovers';
import Progress from './pages/Progress';
import Scrollspy from './pages/Scrollspy';
import Spinners from './pages/Spinners';
import Toasts from './pages/Toasts';
import Tooltips from './pages/Tooltips';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Overview/>
      </div>
    );
  }
}

export default App;
