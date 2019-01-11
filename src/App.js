import React, { Component } from 'react';
import { HashRouter as Router, Route, Link, NavLink } from "react-router-dom";
import ScrollToTop from './ScrollToTop';
import './App.scss';

import Header from './Header';
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
import Spinners from './pages/Spinners';
import Toasts from './pages/Toasts';
import Tooltips from './pages/Tooltips';

class App extends Component {
  render() {
    return (
      <Router>
      <ScrollToTop>
      <div>
        <Header />
        <div className="container-fluid">
        <div className="row flex-xl-no-wrap">
          <div className="col-12 col-md-3 col-xl-2 bd-sidebar">
            <h5 className="bd-toc-link mt-5">Layout</h5>
            <ul className="nav flex-column">
              <li><NavLink exact to="/">Overview</NavLink></li>
              <li><NavLink to="/Grid">Grid</NavLink></li>
              <li><NavLink to="/LayoutUtils">LayoutUtils</NavLink></li>
            </ul>

            <h5 className="bd-toc-link mt-5">Content</h5>
            <ul className="nav flex-column">
              <li><NavLink to="/Typography">Typography</NavLink></li>
              <li><NavLink to="/Tables">Tables</NavLink></li>
            </ul>

            <h5 className="bd-toc-link mt-5">Components</h5>
            <ul className="nav flex-column">
              <li><NavLink to="/Alerts">Alerts</NavLink></li>
              <li><NavLink to="/Badge">Badge</NavLink></li>
              <li><NavLink to="/Breadcrumb">Breadcrumb</NavLink></li>
              <li><NavLink to="/Buttons">Buttons</NavLink></li>
              <li><NavLink to="/Card">Card</NavLink></li>
              <li><NavLink to="/Collapse">Collapse</NavLink></li>
              <li><NavLink to="/Dropdowns">Dropdowns</NavLink></li>
              <li><NavLink to="/Forms">Forms</NavLink></li>
              <li><NavLink to="/InputGroup">InputGroup</NavLink></li>
              <li><NavLink to="/Jumbotron">Jumbotron</NavLink></li>
              <li><NavLink to="/ListGroup">ListGroup</NavLink></li>
              <li><NavLink to="/MediaObject">MediaObject</NavLink></li>
              <li><NavLink to="/Modal">Modal</NavLink></li>
              <li><NavLink to="/Navs">Navs</NavLink></li>
              <li><NavLink to="/Navbar">Navbar</NavLink></li>
              <li><NavLink to="/Pagination">Pagination</NavLink></li>
              <li><NavLink to="/Popovers">Popovers</NavLink></li>
              <li><NavLink to="/Progress">Progress</NavLink></li>
              <li><NavLink to="/Spinners">Spinners</NavLink></li>
              <li><NavLink to="/Toasts">Toasts</NavLink></li>
              <li><NavLink to="/Tooltips">Tooltips</NavLink></li>
            </ul>
          </div>

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
          <Route path="/Spinners" component={Spinners} />
          <Route path="/Toasts" component={Toasts} />
          <Route path="/Tooltips" component={Tooltips} />
          </div>
        </div>
      </div>
      </ScrollToTop>
      </Router>
    );
  }
}

export default App;
