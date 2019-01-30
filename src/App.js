import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

import ScrollToTop from './ScrollToTop';
import './App.scss';

import Header from './Header';
import Basics from './pages/Basics';
import Navigation from './pages/Navigation';
import Content from './pages/Content';
import Miscellaneous from './pages/Miscellaneous';
import Overview from './pages/Overview';

import Alerts from './pages/bootstrap/Alerts';
import Badge from './pages/bootstrap/Badge';
import Breadcrumb from './pages/bootstrap/Breadcrumb';
import Card from './pages/bootstrap/Card';
import Collapse from './pages/bootstrap/Collapse';
import Dropdowns from './pages/bootstrap/Dropdowns';
import Grid from './pages/bootstrap/Grid';
import InputGroup from './pages/bootstrap/InputGroup';
import Jumbotron from './pages/bootstrap/Jumbotron';
import LayoutUtils from './pages/bootstrap/LayoutUtils';
import ListGroup from './pages/bootstrap/ListGroup';
import MediaObject from './pages/bootstrap/MediaObject';
import Modal from './pages/bootstrap/Modal';
import Navs from './pages/bootstrap/Navs';
import Pagination from './pages/bootstrap/Pagination';
import Popovers from './pages/bootstrap/Popovers';
import Progress from './pages/bootstrap/Progress';
import Spinners from './pages/bootstrap/Spinners';
import Tables from './pages/bootstrap/Tables';


class App extends Component {
  render() {
    return (
      <Router basename="edx-bootstrap/">
      {/* <ScrollToTop>  - this was interfering with anchor tags, unfortunately.  Commenting out for now so nav works decently.  */}
      <div>
        <div className="container-fluid">
        <div className="row flex-xl-no-wrap">
          <div className="col-12 col-md-3 col-xl-2 bd-sidebar">
            <h3 className="bd-toc-link mt-0 pt-0"><NavLink to="/">edX Bootstrap</NavLink></h3>
            <h5 className="bd-toc-link mt-5"><NavLink to="/Basics#top">Basics</NavLink></h5>
            <ul className="nav flex-column">
              <li><HashLink to="/Basics#colors">Colors</HashLink></li>
              <li><HashLink to="/Basics#typography">Typography</HashLink></li>
              <li><HashLink to="/Basics#buttons">Buttons</HashLink></li>
              <li><HashLink to="/Basics#icons">Icons</HashLink></li>
              <li><HashLink to="/Basics#themes">Themes</HashLink></li>
            </ul>
            <h5 className="bd-toc-link mt-4"><NavLink to="/Navigation">Navigation</NavLink></h5>
            <ul className="nav flex-column">
              <li><HashLink to="/Navigation#links">Links</HashLink></li>
              <li><HashLink to="/Navigation#breadcrumbs">Breadcrumbs</HashLink></li>
              <li><HashLink to="/Navigation#tabs">Tabs</HashLink></li>
              <li><HashLink to="/Navigation#search">Search</HashLink></li>
            </ul>
            <h5 className="bd-toc-link mt-4"><NavLink to="/Content">Content</NavLink></h5>
            <ul className="nav flex-column">
              <li><HashLink to="/Content#forms">Forms</HashLink></li>
              <li><HashLink to="/Content#cards">Cards</HashLink></li>
              <li><HashLink to="/Content#heroes">Heroes</HashLink></li>
              <li><HashLink to="/Content#tables">Tables</HashLink></li>
              <li><HashLink to="/Content#dialogs">Dialogs</HashLink></li>
              <li><HashLink to="/Content#factSheet">Fact Sheet</HashLink></li>
              <li><HashLink to="/Content#quizzes">Quizzes</HashLink></li>
              <li><HashLink to="/Content#accordions">Accordions</HashLink></li>
            </ul>
            <h5 className="bd-toc-link mt-4"><NavLink to="/Miscellaneous">Miscellaneous</NavLink></h5>
            <ul className="nav flex-column">
              <li><HashLink to="/Miscellaneous#loaders">Spinners / Loaders</HashLink></li>
            </ul>

            <h5 className="bd-toc-link mt-4">Styled Bootstrap Components</h5>
            <ul className="nav flex-column">
              <li><NavLink to="/Bootstrap/Alerts">Alerts</NavLink></li>
              <li><NavLink to="/Bootstrap/Badge">Badge</NavLink></li>
              <li><NavLink to="/Bootstrap/Breadcrumb">Breadcrumb</NavLink></li>
              <li><NavLink to="/Bootstrap/Card">Card</NavLink></li>
              <li><NavLink to="/Bootstrap/Collapse">Collapse</NavLink></li>
              <li><NavLink to="/Bootstrap/Dropdowns">Dropdowns</NavLink></li>
              <li><NavLink to="/Bootstrap/Grid">Grid</NavLink></li>
              <li><NavLink to="/Bootstrap/Modal">Modal</NavLink></li>
              <li><NavLink to="/Bootstrap/Navs">Navs</NavLink></li>
              <li><NavLink to="/Bootstrap/Pagination">Pagination</NavLink></li>
              <li><NavLink to="/Bootstrap/Popovers">Popovers</NavLink></li>
              <li><NavLink to="/Bootstrap/Progress">Progress</NavLink></li>
              <li><NavLink to="/Bootstrap/Spinners">Spinners</NavLink></li>
              <li><NavLink to="/Bootstrap/Tables">Tables</NavLink></li>
            </ul>

            <h5 className="bd-toc-link mt-4">External Links</h5>
            <ul className="nav flex-column">
              <li><a href="https://getbootstrap.com/docs/4.2/getting-started/introduction/">Bootstrap Docs</a></li>
              <li><a className="nav-link " href="https://github.com/edx/edx-bootstrap/tree/update-with-documentation-site">This project on Github</a></li>
            </ul>
          </div>

          <Route exact path="/" component={Overview} />
          <Route exact path="/Basics" component={Basics} />
          <Route path="/Basics#colors" component={Basics} />
          <Route path="/Basics#typography" component={Basics} />
          <Route path="/Basics#buttons" component={Basics} />
          <Route path="/Basics#icons" component={Basics} />
          <Route path="/Basics#themes" component={Basics} />
          <Route exact path="/Navigation" component={Navigation} />
          <Route path="/Navigation#links" component={Navigation} />
          <Route path="/Navigation#breadcrumbs" component={Navigation} />
          <Route path="/Navigation#tabs" component={Navigation} />
          <Route path="/Navigation#search" component={Navigation} />
          <Route exact path="/Content" component={Content} />
          <Route path="/Content#forms" component={Content} />
          <Route path="/Content#cards" component={Content} />
          <Route path="/Content#heroes" component={Content} />
          <Route path="/Content#tables" component={Content} />
          <Route path="/Content#dialogs" component={Content} />
          <Route path="/Content#factSheets" component={Content} />
          <Route path="/Content#quizzes" component={Content} />
          <Route path="/Content#accordions" component={Content} />
          <Route exact path="/Miscellaneous" component={Miscellaneous} />
          <Route path="/Miscellaneous#loaders" component={Miscellaneous} />

          {/* Bootstrap documentation pages */}
          <Route path="/Bootstrap/Alerts" component={Alerts} />
          <Route path="/Bootstrap/Badge" component={Badge} />
          <Route path="/Bootstrap/Breadcrumb" component={Breadcrumb} />
          <Route path="/Bootstrap/Card" component={Card} />
          <Route path="/Bootstrap/Collapse" component={Collapse} />
          <Route path="/Bootstrap/Dropdowns" component={Dropdowns} />
          <Route path="/Bootstrap/Grid" component={Grid} />
          <Route path="/Bootstrap/Modal" component={Modal} />
          <Route path="/Bootstrap/Navs" component={Navs} />
          <Route path="/Bootstrap/Pagination" component={Pagination} />
          <Route path="/Bootstrap/Popovers" component={Popovers} />
          <Route path="/Bootstrap/Progress" component={Progress} />
          <Route path="/Bootstrap/Spinners" component={Spinners} />
          <Route path="/Bootstrap/Tables" component={Tables} />

          </div>
        </div>
      </div>
      {/* </ScrollToTop> */}
      </Router>
    );
  }
}

export default App;
