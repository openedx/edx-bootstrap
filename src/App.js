import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from "react-router-dom";
import './App.scss';

import Overview from './pages/Overview';
import Grid from './pages/Grid';
import LayoutUtils from './pages/LayoutUtils';
import Typography from './pages/Typography';
import Tables from './pages/Tables';
import Alerts from './pages/Alerts';
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
       <Router>
        <div>
          <Link to="/">Overview</Link>
          <Link to="/Grid">Grid</Link>
          <Link to="/LayoutUtils">LayoutUtils</Link>
          <Link to="/Typography">Typography</Link>
          <Link to="/Tables">Tables</Link>
          <Link to="/Alerts">Alerts</Link>
          <Link to="/Badge">Badge</Link>
          <Link to="/Breadcrumb">Breadcrumb</Link>
          <Link to="/Buttons">Buttons</Link>
          <Link to="/Card">Card</Link>
          <Link to="/Collapse">Collapse</Link>
          <Link to="/Dropdowns">Dropdowns</Link>
          <Link to="/Forms">Forms</Link>
          <Link to="/InputGroup">InputGroup</Link>
          <Link to="/Jumbotron">Jumbotron</Link>
          <Link to="/ListGroup">ListGroup</Link>
          <Link to="/MediaObject">MediaObject</Link>
          <Link to="/Modal">Modal</Link>
          <Link to="/Navs">Navs</Link>
          <Link to="/Navbar">Navbar</Link>
          <Link to="/Pagination">Pagination</Link>
          <Link to="/Popovers">Popovers</Link>
          <Link to="/Progress">Progress</Link>
          <Link to="/Scrollspy">Scrollspy</Link>
          <Link to="/Spinners">Spinners</Link>
          <Link to="/Toasts">Toasts</Link>
          <Link to="/Tooltips">Tooltips</Link>

          <Route exact path="/" component={Overview} />
          <Route path="/grid" component={Grid} />
          <Route path="/LayoutUtils" component={LayoutUtils} />
          <Route path="/Typography" component={Typography} />
          <Route path="/Tables" component={Tables} />
          <Route path="/Alerts" component={Alerts} />
          <Route path="/Badge" component={Badge} />
          <Route path="/Breadcrumb" component={Breadcrumb} />
          <Route path="/Buttons" component={Buttons} />
          <Route path="/Card" component={Card} />
          <Route path="/Collapse" component={Collapse} />
          <Route path="/Dropdowns" component={Dropdowns} />
          <Route path="/Forms" component={Forms} />
          <Route path="/InputGroup" component={InputGroup} />
          <Route path="/Jumbotron" component={Jumbotron} />
          <Route path="/ListGroup" component={ListGroup} />
          <Route path="/MediaObject" component={MediaObject} />
          <Route path="/Modal" component={Modal} />
          <Route path="/Navs" component={Navs} />
          <Route path="/Navbar" component={Navbar} />
          <Route path="/Pagination" component={Pagination} />
          <Route path="/Popovers" component={Popovers} />
          <Route path="/Progress" component={Progress} />
          <Route path="/Scrollspy" component={Scrollspy} />
          <Route path="/Spinners" component={Spinners} />
          <Route path="/Toasts" component={Toasts} />
          <Route path="/Tooltips" component={Tooltips} />
        </div>
      </Router>
    );
  }
}

export default App;
